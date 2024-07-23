import { useMemo } from "react";
import PropTypes from "prop-types";

const NameInput = ({
  className = "",
  frame9Placeholder,
  enterYourCollegeName,
  propAlignSelf,
  propWidth,
}) => {
  const nameInputStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[3.312rem] max-w-full text-center text-[1.25rem] text-lightsteelblue-200 font-epilogue mq750:gap-[1.625rem] mq1050:flex-wrap ${className}`}
      style={nameInputStyle}
    >
      <input
        className="w-full [border:none] [outline:none] bg-dimgray-300 h-[3.813rem] flex-1 rounded-8xs flex flex-row items-start justify-start pt-[1.187rem] px-[0.687rem] pb-[1.25rem] box-border font-epilogue text-[1.25rem] text-lightsteelblue-200 min-w-[19.563rem] max-w-full z-[1] mq1050:flex-1 placeholder-lightsteelblue-200 placeholder-ml-3"
        placeholder={frame9Placeholder}
        type="text"
      />
      <div className="flex-[0.9022] rounded-8xs bg-dimgray-300 flex flex-row items-start justify-between py-[1.25rem] pr-[2.25rem] pl-[1.937rem] box-border min-w-[19.563rem] max-w-full gap-[1.25rem] z-[1] mq1050:flex-1">
        <div className="h-[3.813rem] w-[30.125rem] relative rounded-8xs bg-dimgray-300 hidden max-w-full " />
        <div className="relative z-[2] mq450:text-[1rem] text-lightsteelblue-200 ">
          {enterYourCollegeName}
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[0.875rem] h-[0.875rem] relative rounded-8xs object-cover z-[2]"
            alt=""
            src="./sort-down@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

NameInput.propTypes = {
  className: PropTypes.string,
  frame9Placeholder: PropTypes.string,
  enterYourCollegeName: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default NameInput;
