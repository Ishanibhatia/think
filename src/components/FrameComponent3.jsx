import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "", onDashboardTextClick }) => {
  return (
    <header
      className={`self-stretch shadow-[0px_0.2px_2px_#afc5fb] bg-gray-100 flex flex-row items-end justify-between pt-[1.625rem] pb-[1.687rem] pr-[4.062rem] pl-[2.937rem] box-border z-[99] top-0 sticky max-w-full gap-[1.25rem] text-left text-[1.563rem] text-lightsteelblue-100 font-arial mq750:pl-[1.438rem] mq750:pr-[2rem] mq750:box-border ${className}`}
    >
      <div className="h-[5.313rem] w-[80rem] relative shadow-[0px_0.2px_2px_#afc5fb] bg-gray-100 hidden max-w-full" />
      <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem]">
        <div className="flex flex-row items-start justify-start gap-[1.225rem]">
          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[1.375rem] h-[1.313rem] relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="./list.svg"
            />
          </div>
          <a
            className="[text-decoration:none] relative text-[inherit] inline-block min-w-[7.688rem] whitespace-nowrap z-[1]"
            onClick={onDashboardTextClick}
          >
            Dashboard
          </a>
        </div>
      </div>
      <div className="w-[12.375rem] flex flex-row items-end justify-start gap-[0.437rem] text-[0.938rem] font-epilogue">
        <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.375rem]">
          <img
            className="w-[1.125rem] h-[1.125rem] relative z-[1]"
            loading="lazy"
            alt=""
            src="./vector.svg"
          />
        </div>



        <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] pb-[0.362rem] pr-[0.5rem] pl-[0rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.106rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.187rem]">
              <input
                className="[text-decoration:none] relative font-extralight text-[inherit] inline-block min-w-[3.188rem] z-[1] bg-transparent border-none outline-none placeholder:text-inherit"
                placeholder="Search"
              />
            </div>
            <div className="self-stretch h-[0.031rem] relative box-border z-[1] border-t-[0.5px] border-solid border-lightsteelblue-100" />
          </div>
        </div>
        
        <img
          className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src="./profile.svg"
        />
      </div>
    </header>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onDashboardTextClick: PropTypes.func,
};

export default FrameComponent3;
