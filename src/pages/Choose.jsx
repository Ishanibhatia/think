import FrameComponent from "../components/FrameComponent";

const Choose = () => {
  return (
    <div className="w-full h-screen relative bg-black flex flex-col items-center justify-center">
      <img
        className="absolute top-0 left-0 w-[10.063rem] object-cover"
        loading="lazy"
        alt=""
        src="/image-19@2x.png"
      />
      <FrameComponent />
    </div>
  );
};

export default Choose;
