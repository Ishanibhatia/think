import { useCallback } from "react";
import DescriptionField from "./DescriptionField";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonShapesClick = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  return (
    <div
      className={`w-[31.25rem] rounded-11xl bg-darkslategray-100 flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[1.625rem] box-border gap-[2.812rem] max-w-full z-[1] text-center text-[1.563rem] text-white font-arial mq600:gap-[1.375rem] mq600:pb-[1.25rem] mq600:box-border ${className}`}
    >
      <div className="self-stretch h-[36.563rem] relative rounded-11xl bg-darkslategray-100 hidden" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.937rem] text-left">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem]">
          <a className="[text-decoration:none] relative text-[inherit] z-[2] mq450:text-[1.25rem]">
            Create new post
          </a>
        </div>
        <div className="self-stretch h-[0.063rem] relative box-border z-[2] border-t-[1px] border-solid border-white" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[4.875rem] box-border max-w-full text-[1.25rem] mq600:pl-[2.438rem] mq600:pr-[2.438rem] mq600:box-border">
        <div className="flex-1 relative inline-block max-w-full z-[2] mq450:text-[1rem]">
          Now, post your idea to a wide range of experts
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[4.75rem] box-border max-w-full text-[0.938rem] text-gray-300 mq600:pl-[2.375rem] mq600:pr-[2.375rem] mq600:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.187rem] max-w-full">
          <div className="self-stretch rounded-3xs bg-dimgray-300 flex flex-row items-start justify-center py-[1.187rem] px-[1.25rem] box-border whitespace-nowrap max-w-full z-[2]">
            <div className="h-[3.438rem] w-[21.625rem] relative rounded-3xs bg-dimgray-300 hidden max-w-full" />
            <div className="relative z-[3]">enter name of your idea</div>
          </div>
          <DescriptionField />
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.437rem] text-white">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[0.625rem]">
              <div className="h-[3.563rem] flex-1 relative min-w-[5.938rem]">
                <div
                  className="absolute top-[0rem] left-[0rem] rounded-xl bg-mediumslateblue w-full h-full cursor-pointer z-[2]"
                  onClick={onButtonShapesClick}
                />
                <div className="absolute top-[1.313rem] left-[3.563rem] inline-block w-[1.938rem] h-[1.125rem] min-w-[1.938rem] z-[3]">
                  Post
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[3.563rem] flex-1 relative min-w-[5.938rem]">
                <div
                  className="absolute top-[0rem] left-[0rem] rounded-xl bg-mediumslateblue w-full h-full cursor-pointer z-[2]"
                  onClick={onButtonShapesClick}
                />
                <div className="absolute top-[1.313rem] left-[3.563rem] text-[0.938rem] font-arial text-white text-center inline-block w-[1.875rem] h-[1.125rem] min-w-[1.875rem] z-[3]">
                  Skip
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
