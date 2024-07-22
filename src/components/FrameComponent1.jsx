import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonShapeClick = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  return (
    <div
      className={`w-[30.125rem] flex flex-col items-start justify-start gap-[2.5rem] max-w-full text-center text-[1.25rem] text-lightsteelblue-200 font-epilogue mq625:gap-[1.25rem] ${className}`}
    >
      <div className="self-stretch rounded-8xs bg-dimgray-300 flex flex-row items-start justify-start pt-[1.187rem] px-[3.875rem] pb-[1.312rem] box-border max-w-full z-[1]">
        <div className="h-[3.813rem] w-[30.125rem] relative rounded-8xs bg-dimgray-300 hidden max-w-full" />
        <div className="relative inline-block min-w-[6.25rem] z-[2] mq450:text-[1rem]">
          username
        </div>
      </div>
      <div className="self-stretch rounded-8xs bg-dimgray-300 flex flex-row items-start justify-start pt-[1.187rem] px-[4rem] pb-[1.312rem] box-border max-w-full z-[1]">
        <div className="h-[3.813rem] w-[30.125rem] relative rounded-8xs bg-dimgray-300 hidden max-w-full" />
        <div className="relative inline-block min-w-[6rem] z-[2] mq450:text-[1rem]">
          password
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[3.813rem] w-[13rem] relative">
          <div
            className="absolute top-[0rem] left-[0rem] rounded-mini bg-black box-border w-full h-full cursor-pointer z-[1] border-[2px] border-solid border-purpleLavender"
            onClick={onButtonShapeClick}
          />
          <div className="absolute top-[1.25rem] left-[4.875rem] text-[1.25rem] font-epilogue text-white text-center inline-block min-w-[3.313rem] z-[2] mq450:text-[1rem]">
            Login
          </div>
        </button>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
