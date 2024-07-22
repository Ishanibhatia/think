import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const PostCreation = ({ className = "", onSelectFileIconClick }) => {
  const navigate = useNavigate();

  const onSelectFileIconClick1 = useCallback(() => {
    navigate("/macbook-air-2");
  }, [navigate]);

  return (

    <div className={`w-[400px] rounded-11xl bg-darkslategray-100 flex flex-col items-start justify-start pt-5 px-0 pb-[61px] box-border gap-[52.5px] max-w-full z-[1] text-center text-xl text-gray-400 ${className}`}>

      <div className="self-stretch h-[361px] relative rounded-11xl bg-darkslategray-100 hidden self-stretch h-[361px] relative rounded-11xl bg-darkslategray-100 hidden" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[15px] self-stretch flex flex-col items-start justify-start gap-[15px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.537rem] text-left">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem]">
            <h2 className="m-0 relative text-inherit font-normal font-inherit z-[2] mq450:text-[1rem]">
              Create new post
            </h2>
          </div>
          <div className="self-stretch h-[0.063rem] relative box-border z-[2] border-t-[1px] border-solid border-white" />
        </div>

      </div>
      {/* <div className="self-stretch flex flex-row items-start justify-start py-0 px-7 box-border max-w-full text-center text-xl text-gray-400 self-stretch flex flex-row items-start justify-start py-0 px-7 box-border max-w-full">
        <div className="flex-1 relative inline-block max-w-full z-[2] mq450:text-base flex-1 relative inline-block max-w-full z-[2] mq450:text-base">
          Add all the details of your idea to a .pdf file and submit it. We’ll
          verify it and get back to you
        </div>
      </div> */}

      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[4.875rem] box-border max-w-full text-[1rem] mq600:pl-[2.438rem] mq600:pr-[2.438rem] mq600:box-border">
        <div className="flex-1 relative inline-block max-w-full z-[2] mq450:text-[1rem]">
          Add all the details of your idea to a .pdf file and submit it. We’ll
          verify it and get back to you
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center self-stretch flex flex-row items-start justify-center">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[61px] w-[200px] relative whitespace-nowrap cursor-pointer [border:none] p-0 bg-[transparent] h-[61px] w-[200px] relative whitespace-nowrap">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl bg-mediumslateblue w-full h-full cursor-pointer z-[2] absolute top-[0px] left-[0px] rounded-xl bg-mediumslateblue w-full h-full cursor-pointer z-[2]"
            onClick={onSelectFileIconClick}
          />
          <div className="absolute top-[22px] left-[28px] text-mini font-arial text-white text-center z-[3] absolute top-[22px] left-[28px] text-mini font-arial text-white text-center z-[3]">
            Select from computer
          </div>
        </button>
      </div>
    </div>
  );
};

PostCreation.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onSelectFileIconClick: PropTypes.func,
};

export default PostCreation;
