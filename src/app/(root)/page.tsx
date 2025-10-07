import Calendar from "./_container/calendar";
import HeartImage from "./_container/heart-image";
import Gift from "./_container/gift";
import Video from "./_container/video";
import Heading from "./_container/heading";
import Banner from "./_container/banner";
import Album from "./_container/album";
import Preface from "./_container/preface";
import Story from "./_container/story";

export default function Home() {
  return (
    <div className="min-h-screen px-2 py-4">
      <Banner />
      <Heading />
      <Story />
      <Calendar />
      <Preface />
      <HeartImage />
      <Album />
      <Video />
      <Gift />
    </div>
  );
}
