"use client";

import { useWeddingStore } from "@/stores/wedding-store";
import { useShallow } from "zustand/react/shallow";
import OpenWedding from "./open-wedding";
import Banner from "./banner";
import Story from "./story";
import Info from "./info";
import Preface from "./preface";
import Video from "./video";
import Album from "./album";
import Calendar from "./calendar";
import EventLocation from "./event-location";
import BlessingForm from "./blessing-form";
import Gift from "./gift";
import Map from "./map";
import ThankYou from "./thank-you";

const HomeContainer = () => {
  const { isWelcome } = useWeddingStore(
    useShallow((state) => ({
      isWelcome: state.isWelcome,
    }))
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      {!isWelcome ? (
        <OpenWedding />
      ) : (
        <>
          <Banner />
          <Story />
          <Info />
          <Preface />
          <Video />
          <Album />
          <Calendar />
          <EventLocation />
          <BlessingForm />
          <Gift />
          <Map />
          <ThankYou />
        </>
      )}
    </div>
  );
};

export default HomeContainer;
