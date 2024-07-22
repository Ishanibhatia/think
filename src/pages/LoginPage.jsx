import FrameComponent1 from "../components/FrameComponent1";

const LoginPage = () => {
  return (
    <div className="w-full h-screen relative bg-black flex flex-col items-center justify-center">
      <img
        className="absolute top-0 left-0 w-[10.063rem] object-cover"
        loading="lazy"
        alt=""
        src="/image-19@2x.png"
      />
      <section className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
        <FrameComponent1 />
      </section>
    </div>
  );
};

export default LoginPage;
