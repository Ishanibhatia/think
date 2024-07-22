import { useMemo } from "react";
import PropTypes from "prop-types";

const CommentContent = ({
  className = "",
  loremIpsumDolorSitAmetCon,
  propAlignSelf,
  propPadding,
  propWidth,
}) => {
  const commentContentStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.75rem] pl-[2.312rem] box-border max-w-full text-left text-[0.75rem] text-white font-epilogue ${className}`}
      style={commentContentStyle}
    >
      <div className="flex-1 flex flex-col items-end justify-start max-w-full">
        <div className="self-stretch rounded-8xs bg-black box-border flex flex-row items-start justify-start pt-[0.562rem] px-[0.687rem] pb-[0.625rem] max-w-full z-[4] border-[0.5px] border-solid border-lightsteelblue-100">
          <div className="h-[7.75rem] w-[29.75rem] relative rounded-8xs bg-black box-border hidden max-w-full border-[0.5px] border-solid border-lightsteelblue-100" />
          <div className="flex-1 relative font-light inline-block max-w-full z-[5]">
            {loremIpsumDolorSitAmetCon}
          </div>
        </div>
        <div className="w-[7.5rem] flex flex-row items-start justify-end py-[0rem] px-[1.25rem] box-border mt-[-0.438rem]">
          <div className="flex-1 bg-black overflow-x-auto flex flex-row items-start justify-start py-[0.187rem] px-[0.437rem] gap-[1rem] z-[5]">
            <div className="h-[1rem] w-[5rem] relative bg-black shrink-0 hidden" />
            <img
              className="h-[0.625rem] w-[0.75rem] relative shrink-0 min-h-[0.625rem] z-[6]"
              alt=""
              src="/vector-191.svg"
            />
            <img
              className="h-[0.625rem] w-[0.625rem] relative shrink-0 min-h-[0.625rem] z-[6]"
              alt=""
              src="/vector-20.svg"
            />
            <img
              className="h-[0.625rem] w-[0.625rem] relative shrink-0 min-h-[0.625rem] z-[6]"
              alt=""
              src="/vector-21.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CommentContent.propTypes = {
  className: PropTypes.string,
  loremIpsumDolorSitAmetCon: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
};

export default CommentContent;
