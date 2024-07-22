import FrameComponent2 from "../components/FrameComponent2";
import Content from "../components/Content";

const MacBookAir1 = () => {


  return (
    // <div className="w-full relative bg-gray-100 overflow-hidden flex flex-row items-start justify-center pt-[8.25rem] px-[1.25rem] pb-[7.187rem] box-border leading-[normal] tracking-[normal]">
    //   <img
    //     className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
    //     alt=""
    //     src="/image-20@2x.png"
    //   />
    //   <FrameComponent2 />
    // </div>

    <div className="w-full h-screen relative bg-black flex flex-col items-center justify-center">
      <img
        className="absolute top-0 left-0 w-[10.063rem] object-cover"
        loading="lazy"
        alt=""
        src="/image-19@2x.png"
      />
      <Content />
      <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 p-4 z-[999]">
        <FrameComponent2 />
      </div>
    </div>
  );
};

export default MacBookAir1;



