import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const UserTop = ({ className = "", anaHathway, image8 }) => {
  const navigate = useNavigate();

  const onUserProfileImageClick = useCallback(() => {
    navigate("/home-detailed-1");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start pt-[1.437rem] pb-[0.875rem] pr-[1.875rem] pl-[1.437rem] box-border relative gap-[0.562rem] max-w-full text-left text-[0.813rem] text-lightsteelblue-100 font-arial ${className}`}
    >
      <div
        className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-black cursor-pointer"
        onClick={onUserProfileImageClick}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.125rem] max-w-full">
        <div className="flex flex-row items-start justify-start py-[0rem] px-[3.687rem]">
          <div
            className="relative inline-block min-w-[5.688rem] cursor-pointer z-[1]"
            onClick={onUserProfileImageClick}
          >
            {anaHathway}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.187rem] max-w-full text-[0.625rem] text-white font-epilogue mq450:flex-wrap">
          <img
            className="h-[2.875rem] w-[2.5rem] relative rounded-8xs object-cover z-[1]"
            loading="lazy"
            alt=""
            src={image8}
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border min-w-[15.813rem] max-w-full">
            <div className="self-stretch relative leading-[0.75rem] font-light z-[1]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum enim gravida dignissim imperdiet. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum enim gravida dignissim imperdiet. Lorem ipsum dolor sit amet, `}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[1.125rem]">
        <img
          className="h-[0.75rem] w-[0.875rem] relative min-h-[0.75rem] z-[1]"
          alt=""
          src="./vector-1.svg"
        />
        <img
          className="h-[0.75rem] w-[0.75rem] relative min-h-[0.75rem] z-[1]"
          alt=""
          src="./vector-2.svg"
        />
        <img
          className="h-[0.75rem] w-[0.75rem] relative min-h-[0.75rem] z-[1]"
          alt=""
          src="./vector-3.svg"
        />
      </div>
    </div>
  );
};

UserTop.propTypes = {
  className: PropTypes.string,
  anaHathway: PropTypes.string,
  image8: PropTypes.string,
};

export default UserTop;
