import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonShapeClick = useCallback(() => {
    navigate("/macbook-air-1");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-center text-[3.125rem] text-white font-epilogue ${className}`}
    >
      <div className="w-[48.625rem] flex flex-col items-end justify-start gap-[3.375rem] max-w-full mq450:gap-[1.688rem]">
        <div className="self-stretch relative z-[1] mq450:text-[1rem]">
          <p className="m-0">
            <span>
              <span className="font-epilogue">Welcome</span>
              <span className="font-extrabold text-purpleLavender">{` innovator, `}</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="font-extrabold">&nbsp;</span>
            </span>
          </p>
          <p className="m-0 text-[1.25rem]">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="m-0 text-[1.875rem]">
            <span>
              <span>So, are your ready to post your first idea out there?</span>
            </span>
          </p>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.437rem] box-border max-w-full text-[1.25rem]">
          <div className="w-[30.063rem] flex flex-row flex-wrap items-start justify-center gap-[4.062rem] max-w-full mq625:gap-[2rem]">
            <div className="h-[3.813rem] flex-1 relative min-w-[8.438rem]">
              <div
                className="absolute top-[0rem] left-[0rem] rounded-mini bg-black box-border w-full h-full cursor-pointer z-[1] border-[2px] border-solid border-purpleLavender"
                onClick={onButtonShapeClick}
              />
              <div className="absolute top-[1.25rem] left-[5.438rem] inline-block min-w-[2.188rem] z-[2] mq450:text-[1rem]">
                Yes
              </div>
            </div>
            <div className="h-[3.813rem] flex-1 relative min-w-[8.438rem]">
              <div
                className="absolute top-[0rem] left-[0rem] rounded-mini bg-black box-border w-full h-full cursor-pointer z-[1] border-[2px] border-solid border-purpleLavender"
                onClick={onRectangleClick}
              />
              <div className="absolute top-[1.25rem] left-[4.875rem] inline-block min-w-[3.25rem] z-[2] mq450:text-[1rem]">
                Later
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
