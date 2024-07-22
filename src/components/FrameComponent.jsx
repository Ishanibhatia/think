import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/fill-the-forminnovator");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/fill-the-formindustrial-expert");
  }, [navigate]);

  return (
    <section
      className={`flex items-center justify-center py-0 px-[1.25rem] max-w-full text-left text-[2.5rem] text-purpleLavender font-epilogue ${className}`}
    >
      <div className="flex flex-row flex-wrap items-center justify-center gap-[2.937rem] max-w-full mq675:gap-[1.438rem]">
        <div className="h-[8.5rem] flex-1 relative min-w-[12.188rem]">
          <div
            className="absolute top-0 left-0 rounded-xl w-full h-full cursor-pointer z-[1] border-[1px] border-solid border-white"
            onClick={onRectangleClick}
          />
          <div className="absolute top-[3.938rem] left-[2.625rem] font-extralight z-[2] mq450:text-[1.5rem] mq750:text-[2rem] text-5xl">{`Innovator `}</div>
        </div>
        <div className="h-[8.5rem] flex-1 relative min-w-[12.188rem] text-center">
          <div
            className="absolute top-0 left-0 rounded-xl w-full h-full cursor-pointer z-[1] border-[1px] border-solid border-white"
            onClick={onRectangleClick1}
          />
          <div className="absolute top-[2.8rem] left-[2.8rem] font-extralight z-[2] mq450:text-[1.5rem] mq750:text-[2rem] text-5xl">
            <p className="m-0">Industrial</p>
            <p className="m-0">Expert</p>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
