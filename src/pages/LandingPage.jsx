import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const onAuthButtonBackgroundClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/choose");
  }, [navigate]);

  return (
    <div className="w-full h-screen relative bg-black overflow-hidden flex flex-col items-center justify-center pt-[21.187rem] px-[1.25rem] pb-[3.375rem] box-border gap-[11.75rem] leading-[normal] tracking-[normal] text-left text-[12.5rem] text-white font-josefin-sans mq450:gap-[2.938rem] mq675:gap-[5.875rem]">
      
      <video
        className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover z-[1]"
        autoPlay
        muted
        loop
      >
        <source src="./Screen Recording 2024-07-20 030918.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="m-0 w-[35.75rem] relative text-inherit font-bold font-inherit inline-block [text-shadow:10px_4px_4px_#000] max-w-full z-[2] mq450:text-[3.125rem] mq750:text-[5rem]">
        Think.
      </h1>
      <div className="w-[35.75rem] flex flex-row items-start justify-center max-w-full">
        <div className="w-[17.75rem] flex flex-row items-start justify-start gap-[1.875rem]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[3.125rem] flex-1 relative">
            <div
              className="absolute top-[-5.875rem] left-[0rem] rounded-3xs box-border w-full h-full cursor-pointer z-[2] border-[1px] border-solid border-white "
              onClick={onAuthButtonBackgroundClick}
            />
            <div className="absolute top-[-5rem] left-[2rem] text-[1.25rem] font-arial text-white text-left inline-block min-w-[3.938rem] z-[999] mq450:text-[1rem]">
              LOGIN
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[3.125rem] flex-1 relative whitespace-nowrap">
            <div
              className="absolute top-[-5.875rem] left-[0rem] rounded-3xs box-border w-full h-full cursor-pointer z-[2] border-[1px] border-solid border-white"
              onClick={onRectangleClick}
            />
            <div className="absolute top-[-5rem] left-[1.375rem] text-[1.25rem] font-arial text-white text-left inline-block min-w-[5.188rem] z-[3]">
              SIGN UP
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
