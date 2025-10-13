"use client";

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
import Footer from "./footer";

const HomeContainer = () => {
  return (
    <div className="min-h-screen w-full">
      <OpenWedding />
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
      <Footer />
    </div>
  );
};

export default HomeContainer;
