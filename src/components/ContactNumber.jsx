import { useMemo } from "react";
import PropTypes from "prop-types";

const ContactNumber = ({
  className = "",
  aboutPlaceholder,
  propAlignSelf,
  propWidth,
  propFlexWrap,
}) => {
  const contactNumberStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      flexWrap: propFlexWrap,
    };
  }, [propAlignSelf, propWidth, propFlexWrap]);

  return (
    <div
      className={`self-stretch flex flex-row items-end justify-center gap-[3.312rem] max-w-full text-center text-[1.25rem] text-lightsteelblue-200 font-epilogue mq750:gap-[1.625rem] mq1050:flex-wrap ${className}`}
      style={contactNumberStyle}
    >
      <div className="flex-1 rounded-8xs bg-dimgray-300 flex flex-row items-start justify-start py-[0rem] px-[1.75rem] box-border gap-[4.5rem] min-w-[19.563rem] max-w-full z-[1] mq750:flex-wrap mq750:gap-[2.25rem] mq1050:flex-1">
        <div className="self-stretch w-[30.125rem] relative rounded-8xs bg-dimgray-300 hidden max-w-full" />
        <div className="flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem]">
          <div className="relative z-[2] mq450:text-[1rem]">
            enter your contact number
          </div>
        </div>
        <div className="h-[3.875rem] flex flex-row items-end justify-start gap-[1.5rem] text-white">
          <div className="self-stretch w-[0.063rem] relative box-border z-[2] border-r-[1px] border-solid border-dimgray-200" />
          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.187rem]">
            <div className="flex flex-row items-start justify-start">
              <div className="relative inline-block min-w-[2rem] whitespace-nowrap z-[2] mq450:text-[1rem]">
                +91
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[0.875rem] h-[0.875rem] relative rounded-8xs object-cover z-[3]"
                  alt=""
                  src="./sort-down@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        className="w-full [border:none] [outline:none] bg-dimgray-300 h-[3.813rem] flex-[0.9859] rounded-8xs flex flex-row items-start justify-start pt-[1.312rem] px-[1.937rem] pb-[1.187rem] box-border font-epilogue text-[1.25rem] text-lightsteelblue-200 min-w-[19.563rem] placeholder-lightsteelblue-200 max-w-full z-[1] mq1050:flex-1"
        placeholder={aboutPlaceholder} 
        type="text"
      />
    </div>
  );
};

ContactNumber.propTypes = {
  className: PropTypes.string,
  aboutPlaceholder: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propFlexWrap: PropTypes.any,
};

export default ContactNumber;
