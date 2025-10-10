import Calendar from "./_container/calendar";
import Gift from "./_container/gift";
import Video from "./_container/video";
import Heading from "./_components/heading";
import Banner from "./_container/banner";
import Album from "./_container/album";
import Preface from "./_container/preface";
import Story from "./_container/story";
import Info from "./_container/info";
import Map from "./_container/map";
import EventLocation from "./_container/event-location";
import BlessingForm from "./_container/blessing-form";
import ThankYou from "./_container/thank-you";

export default function Home() {
  return (
    <div className="min-h-screen pb-4">
      <Banner />
      <Story />
      <Info />
      <Preface />
      <Video />
      <Album />
      <Calendar />
      {/* <EventLocation /> */}
      <Gift />
      <BlessingForm />
      <Map />
      <ThankYou />
    </div>
  );
}
