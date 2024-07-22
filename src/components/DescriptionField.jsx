import PropTypes from "prop-types";

const DescriptionField = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full text-center text-[0.938rem] text-gray-300 font-arial ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[0.812rem] max-w-full">
        <textarea
          className="[border:none] bg-dimgray-300 h-[4.75rem] w-auto [outline:none] self-stretch rounded-3xs flex flex-row items-start justify-start py-[1.625rem] px-[7.312rem] box-border font-arial text-[0.938rem] text-gray-300 z-[2]"
          placeholder="enter description "
          rows={7}
          cols={1}
        />
        <div className="self-stretch rounded-3xs bg-dimgray-300 flex flex-row items-start justify-between py-[1.187rem] pr-[1.437rem] pl-[8.187rem] box-border whitespace-nowrap max-w-full gap-[1.25rem] z-[2] mq450:pl-[1.25rem] mq450:box-border">
          <div className="h-[3.438rem] w-[21.625rem] relative rounded-3xs bg-dimgray-300 hidden max-w-full" />
          <div className="relative inline-block min-w-[5.063rem] z-[3]">
            choose field
          </div>
          <img
            className="h-[0.875rem] w-[0.875rem] relative rounded-8xs object-contain z-[3]"
            alt=""
            src="/sort-down1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

DescriptionField.propTypes = {
  className: PropTypes.string,
};

export default DescriptionField;
