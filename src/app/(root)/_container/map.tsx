"use client";

import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { env } from "@/configs/env";

gsap.registerPlugin(ScrollTrigger);

const Map = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = env.MAPBOX_ACCESS_TOKEN;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      style: "mapbox://styles/mapbox/standard",
      center: [108.1655061, 16.0471648],
      zoom: 8,
    });

    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            message: "Foo",
            imageId: 1011,
            iconSize: [40, 40],
          },
          geometry: {
            type: "Point",
            coordinates: [108.1655061, 16.0471648],
          },
        },
      ],
    };

    for (const marker of geojson.features) {
      const el = document.createElement("div");
      const width = marker.properties.iconSize[0];
      const height = marker.properties.iconSize[1];
      el.className = "marker";
      el.style.backgroundImage = `url(/assets/images/wedding-4.jpg)`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.backgroundSize = "100%";
      el.style.display = "block";
      el.style.border = "2px solid rgb(178,188,163)";
      el.style.borderRadius = "50%";
      el.style.cursor = "pointer";
      el.style.padding = "0";

      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates as [number, number])
        .addTo(mapRef.current);
    }

    // Setup ScrollTrigger for flyTo animation
    mapRef.current.on("load", () => {
      if (geojson.features.length > 0) {
        ScrollTrigger.create({
          trigger: mapContainerRef.current,
          start: "top 80%",
          onEnter: () => {
            mapRef.current?.flyTo({
              center: geojson.features[0].geometry.coordinates as [
                number,
                number
              ],
              zoom: 13,
              essential: true,
            });
          },
        });
      }
    });
  }, []);

  // Cleanup ScrollTrigger on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full aspect-3/2">
      <div ref={mapContainerRef} id="map" style={{ height: "100%" }} />
    </div>
  );
};

export default Map;
