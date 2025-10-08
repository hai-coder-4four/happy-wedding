import Spinning from "../_components/spinning";

const Heading = () => {
  return (
    <div className="py-4 relative w-full flex flex-col items-center justify-center">
      <span className="pointer-events-none text-center text-base leading-none uppercase font-lora">
        Welcome To Our Wedding
      </span>
      <Spinning />
    </div>
  );
};

export default Heading;
