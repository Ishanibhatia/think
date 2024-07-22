import { useMemo } from "react";
import PropTypes from "prop-types";

const UpcomingEventsContainer = ({ className = "", pm2Oct, propPadding }) => {
  const upcomingEventsContainerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <input
      className={`w-full [border:none] [outline:none] bg-[transparent] h-[1.625rem] flex-1 flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border font-epilogue text-[0.75rem] text-white min-w-[6.813rem] ${className}`}
      placeholder="Submit documents to Ishika"
      type="text"
      style={upcomingEventsContainerStyle}
    />
  );
};

UpcomingEventsContainer.propTypes = {
  className: PropTypes.string,
  pm2Oct: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default UpcomingEventsContainer;
