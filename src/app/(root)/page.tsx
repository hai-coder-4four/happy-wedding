import Calendar from "./_container/calendar";
import Gift from "./_container/gift";
import Video from "./_container/video";
import Heading from "./_container/heading";
import Banner from "./_container/banner";
import Album from "./_container/album";
import Preface from "./_container/preface";
import Story from "./_container/story";
import Info from "./_container/info";
import Map from "./_container/map";

export default function Home() {
  return (
    <div className="min-h-screen px-2 py-4">
      <Banner />
      <Heading />
      <Story />
      <Info />
      <Calendar />
      <Preface />
      <Album />
      <Video />
      <Gift />
      <Map />
    </div>
  );
}
