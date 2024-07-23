import PropTypes from "prop-types";

const UserPostHeader = ({ className = "", anaHathway, image8 }) => {
  return (
    <div
      className={`self-stretch bg-black box-border flex flex-col items-end justify-start pt-[1.375rem] pb-[0.812rem] pr-[1.875rem] pl-[1.437rem] gap-[0.562rem] max-w-full z-[1] text-left text-[0.813rem] text-lightsteelblue-100 font-arial border-t-[0.5px] border-solid border-lightsteelblue-100 border-b-[0.5px] ${className}`}
    >
      <div className="w-[31.375rem] h-[7.875rem] relative bg-black box-border hidden max-w-full border-t-[0.5px] border-solid border-lightsteelblue-100 border-b-[0.5px]" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.125rem] max-w-full">
        <div className="flex flex-row items-start justify-start py-[0rem] px-[3.687rem]">
          <div className="relative inline-block min-w-[5.688rem] z-[2]">
            {anaHathway}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.187rem] max-w-full text-[0.625rem] text-white font-epilogue mq450:flex-wrap">
          <img
            className="h-[2.875rem] w-[2.5rem] relative rounded-8xs object-cover z-[2]"
            loading="lazy"
            alt=""
            src={image8}
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border min-w-[15.813rem] max-w-full">
            <div className="self-stretch relative leading-[0.75rem] font-light z-[2]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum enim gravida dignissim imperdiet. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum enim gravida dignissim imperdiet. Lorem ipsum dolor sit amet, `}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[1.125rem]">
        <img
          className="h-[0.75rem] w-[0.875rem] relative min-h-[0.75rem] z-[2]"
          alt=""
          src="./vector-1.svg"
        />
        <img
          className="h-[0.75rem] w-[0.75rem] relative min-h-[0.75rem] z-[2]"
          alt=""
          src="./vector-2.svg"
        />
        <img
          className="h-[0.75rem] w-[0.75rem] relative min-h-[0.75rem] z-[2]"
          alt=""
          src="./vector-3.svg"
        />
      </div>
    </div>
  );
};

UserPostHeader.propTypes = {
  className: PropTypes.string,
  anaHathway: PropTypes.string,
  image8: PropTypes.string,
};

export default UserPostHeader;
