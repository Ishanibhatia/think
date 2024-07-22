import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ThreadMessages = ({
  className = "",
  propPadding,
  onIshikaMittal28mClick,
}) => {
  const threadMessagesStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const navigate = useNavigate();

  const onRon37mTextClick = useCallback(() => {
    navigate("/inbox-detailed-1");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[2.368rem] text-left text-[0.938rem] text-white font-arial mq450:gap-[1.188rem] ${className}`}
      style={threadMessagesStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[1.312rem]">
        <img
          className="h-[2.881rem] w-[2.5rem] relative rounded-8xs object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-4@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.812rem]">
          <div
            className="relative inline-block min-w-[4.125rem] cursor-pointer z-[1]"
            onClick={onIshikaMittal28mClick}
          >
            <b className="whitespace-pre-wrap">{`Ron   `}</b>
            <span className="text-[0.625rem]">37m</span>
          </div>
          <div className="relative text-[0.75rem] font-light font-epilogue z-[1]">
            Lorem ipsum dolor sit amet, consect ...
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[1.312rem]">
        <img
          className="self-stretch w-[2.5rem] relative rounded-8xs max-h-full object-cover min-h-[2.875rem] z-[1]"
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[0.812rem]">
          <div
            className="relative inline-block min-w-[5.75rem] cursor-pointer z-[1]"
            onClick={onIshikaMittal28mClick}
          >
            <b className="whitespace-pre-wrap">{`Rashika   `}</b>
            <span className="text-[0.75rem]">1hr</span>
          </div>
          <div className="relative text-[0.75rem] font-light font-epilogue inline-block min-w-[6.063rem] z-[1]">
            Liked a message
          </div>
        </div>
      </div>
    </div>
  );
};

ThreadMessages.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,

  /** Action props */
  onIshikaMittal28mClick: PropTypes.func,
};

export default ThreadMessages;
