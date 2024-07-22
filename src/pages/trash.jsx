import { useCallback } from "react";
import DescriptionField from "./DescriptionField";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonShapesClick = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[35%] h-[60%] rounded-11xl bg-darkslategray-100 flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[1.625rem] box-border gap-[2.812rem] max-w-full z-[999] text-center text-[1.563rem] text-white font-arial mq600:gap-[1.375rem] mq600:pb-[1.25rem] mq600:box-border ${className}`}
    >
      {/* Rest of your component content remains the same */}
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;