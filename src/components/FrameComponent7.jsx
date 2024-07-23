import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div
      className={`w-[5.563rem] h-screen bg-gray-100 flex flex-col items-start justify-start pt-[1.812rem] px-[0.937rem] pb-[4.375rem] box-border gap-[3.562rem] mq750:pt-[1.25rem] mq750:pb-[2.813rem] mq750:box-border ${className}`}
    >
      <div className="w-[5.563rem] h-[46.563rem] relative shadow-[0px_4px_2px_#afc5fb] bg-gray-100 hidden" />
      <div className="flex flex-row items-start justify-start py-[0rem] px-[0.312rem]">
        <img
          className="h-[1.875rem] w-[1.875rem] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="./input@2x.png"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[2.368rem]">
        <img
          className="w-[2.5rem] h-[2.881rem] relative rounded-8xs object-cover z-[1]"
          loading="lazy"
          alt=""
          src="./image-3@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[2.562rem]">
          <img
            className="w-[2.5rem] h-[2.881rem] relative rounded-8xs object-cover z-[1]"
            loading="lazy"
            alt=""
            src="./image-4@2x.png"
          />
          <img
            className="w-[2.5rem] h-[2.875rem] relative rounded-8xs object-cover z-[1]"
            loading="lazy"
            alt=""
            src="./image-1@2x.png"
          />
          <img
            className="w-[2.5rem] h-[2.875rem] relative rounded-8xs object-cover z-[1]"
            loading="lazy"
            alt=""
            src="./image-2@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[2.368rem]">
            <img
              className="w-[2.5rem] h-[2.881rem] relative rounded-8xs object-cover z-[1]"
              loading="lazy"
              alt=""
              src="./image-3@2x.png"
            />
            <img
              className="w-[2.5rem] h-[2.881rem] relative rounded-8xs object-cover z-[1]"
              loading="lazy"
              alt=""
              src="./image-4@2x.png"
            />
            <img
              className="w-[2.5rem] h-[2.875rem] relative rounded-8xs object-cover z-[1]"
              loading="lazy"
              alt=""
              src="./image-2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
