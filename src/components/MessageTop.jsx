import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ThreadMessages from "./ThreadMessages";

const MessageTop = ({ className = "" }) => {
  const navigate = useNavigate();
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  const onRon37mTextClick = useCallback(() => {
    navigate("/inbox-detailed-1");
  }, [navigate]);

  // Function to check screen width and update state
  const checkScreenWidth = () => {
    setShowAdditionalContent(window.innerWidth > 1280);
  };

  // Effect to run on component mount and resize
  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <div
      className={`h-screen w-[24.25rem] border-white bg-gray-100 flex flex-col items-start justify-start pt-[2.062rem] px-[2rem] box-border gap-[2.062rem] min-w-[24.25rem] max-w-full text-left text-[1.375rem] text-white font-arial mq450:gap-[1rem] mq450:min-w-full mq750:pt-[2.125rem] mq750:box-border mq1100:pt-[3.313rem] mq1100:box-border mq1025:flex-1 ${className}`}
    >
      <div className="w-[24.25rem] h-screen relative shadow-[0px_4px_2px_#afc5fb] bg-gray-100 hidden max-w-full " />
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] ">
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.375rem] z-[1] mq450:text-[1.125rem] ">
          Inbox
        </a>
        <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="./new.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[1.687rem] text-[0.938rem]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.312rem] mq450:gap-[1.125rem]">
            <div className="self-stretch flex flex-row items-end justify-start gap-[1.312rem]">
              <img
                className="self-stretch w-[2.5rem] relative rounded-8xs max-h-full object-cover min-h-[2.875rem] z-[1]"
                loading="lazy"
                alt=""
                src="./image-3@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.812rem]">
                <div
                  className="relative inline-block min-w-[7.625rem] cursor-pointer z-[1]"
                  onClick={onRon37mTextClick}
                >
                  <b className="whitespace-pre-wrap">Ishika Mittal </b>
                  <span className="text-[0.625rem]">28m</span>
                </div>
                <div className="relative text-[0.75rem] font-light font-epilogue z-[1]">
                  Hey There!, I just wanted to check in ...
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-end justify-start gap-[1.312rem]">
              <img
                className="self-stretch w-[2.5rem] relative rounded-8xs max-h-full object-cover min-h-[2.875rem] z-[1]"
                loading="lazy"
                alt=""
                src="./image-3@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.812rem]">
                <div
                  className="relative inline-block min-w-[7.625rem] cursor-pointer z-[1]"
                  onClick={onRon37mTextClick}
                >
                  <b className="whitespace-pre-wrap">Ishika Mittal </b>
                  <span className="text-[0.625rem]">28m</span>
                </div>
                <div className="relative text-[0.75rem] font-light font-epilogue z-[1]">
                  Hey There!, I just wanted to check in ...
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-end justify-start gap-[1.312rem]">
              <img
                className="self-stretch w-[2.5rem] relative rounded-8xs max-h-full object-cover min-h-[2.875rem] z-[1]"
                loading="lazy"
                alt=""
                src="./image-3@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.812rem]">
                <div
                  className="relative inline-block min-w-[7.625rem] cursor-pointer z-[1]"
                  onClick={onRon37mTextClick}
                >
                  <b className="whitespace-pre-wrap">Ishika Mittal </b>
                  <span className="text-[0.625rem]">28m</span>
                </div>
                <div className="relative text-[0.75rem] font-light font-epilogue z-[1]">
                  Hey There!, I just wanted to check in ...
                </div>
              </div>
            </div>
            {/* {showAdditionalContent && (
              <div className="self-stretch flex flex-row items-end justify-start gap-[1.312rem]">
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
                  <img
                    className="w-[2.5rem] h-[2.881rem] relative rounded-8xs object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="./image-3@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[2.562rem]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.812rem]">
                    <div
                      className="relative inline-block min-w-[4.125rem] cursor-pointer z-[1]"
                      onClick={onRon37mTextClick}
                    >
                      <b className="whitespace-pre-wrap">Ron </b>
                      <span className="text-[0.625rem]">37m</span>
                    </div>
                    <div className="relative text-[0.75rem] font-light font-epilogue z-[1]">
                      Lorem ipsum dolor sit amet, consect ...
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.187rem] gap-[0.812rem]">
                    <div
                      className="relative inline-block min-w-[6rem] cursor-pointer z-[1]"
                      onClick={onRon37mTextClick}
                    >
                      <b className="whitespace-pre-wrap">Vladimir </b>
                      <span className="text-[0.625rem]">37m</span>
                    </div>
                    <div className="relative text-[0.75rem] font-light font-epilogue z-[1]">
                      Lorem ipsum dolor sit amet, consect ...
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.375rem] gap-[0.812rem]">
                    <div
                      className="relative inline-block min-w-[5.75rem] cursor-pointer z-[1]"
                      onClick={onRon37mTextClick}
                    >
                      <b className="whitespace-pre-wrap">Rashika </b>
                      <span className="text-[0.75rem]">1hr</span>
                    </div>
                    <div className="relative text-[0.75rem] font-light font-epilogue inline-block min-w-[6.063rem] z-[1]">
                      Liked a message
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[0.812rem]">
                    <div
                      className="relative inline-block min-w-[7.625rem] cursor-pointer z-[1]"
                      onClick={onRon37mTextClick}
                    >
                      <b className="whitespace-pre-wrap">Ishika Mittal </b>
                      <span className="text-[0.625rem]">28m</span>
                    </div>
                    <div className="relative text-[0.75rem] font-light font-epilogue z-[1]">
                      Hey There!, I just wanted to check in ...
                    </div>
                  </div>
                </div>
              </div>
            )} */}
            <ThreadMessages onIshikaMittal28mClick={onRon37mTextClick} />
            <ThreadMessages onIshikaMittal28mClick={onRon37mTextClick} />
            <ThreadMessages onIshikaMittal28mClick={onRon37mTextClick} />
          </div>
        </div>
        <div className="h-[99%] w-[0.5rem] relative">
          <div className="absolute top-[0.25rem] left-[0rem] rounded-8xs bg-lightsteelblue-100 w-full h-full z-[1]" />
          <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-mediumslateblue w-[0.5rem] h-[7.438rem] z-[2]" />
        </div>
      </div>
    </div>
  );
};

MessageTop.propTypes = {
  className: PropTypes.string,
};

export default MessageTop;
