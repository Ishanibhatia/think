import ThreadMessages from "./ThreadMessages";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div
      className={`h-[46.563rem] w-[24.25rem] shadow-[0px_4px_2px_#afc5fb] bg-gray-100 flex flex-col items-end justify-start pt-[5.062rem] pb-[39.937rem] pr-[2rem] pl-[1.187rem] box-border gap-[2.062rem] max-w-full text-left text-[1.375rem] text-white font-arial mq450:gap-[1rem] mq750:pt-[2.125rem] mq750:pb-[16.875rem] mq750:box-border mq1100:pt-[3.313rem] mq1100:pb-[25.938rem] mq1100:box-border ${className}`}
    >
      <div className="w-[24.25rem] h-[46.563rem] relative shadow-[0px_4px_2px_#afc5fb] bg-gray-100 hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[0.812rem] gap-[1.25rem]">
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.375rem] z-[1] mq450:text-[1.125rem]">
          Inbox
        </a>
        <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/new.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.062rem] pl-[0rem] box-border max-w-full text-[0.938rem]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[1.687rem] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem]">
            <div className="self-stretch flex flex-col items-end justify-start gap-[2.312rem] mq450:gap-[1.125rem]">
              <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.312rem] pl-[0.812rem]">
                <div className="flex-1 flex flex-row items-end justify-start gap-[1.312rem]">
                  <img
                    className="self-stretch w-[2.5rem] relative rounded-8xs max-h-full object-cover min-h-[2.875rem] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-3@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.812rem]">
                    <div className="relative inline-block min-w-[7.625rem] z-[1]">
                      <b className="whitespace-pre-wrap">{`Ishika Mittal   `}</b>
                      <span className="text-[0.625rem]">28m</span>
                    </div>
                    <div className="relative text-[0.75rem] font-light font-epilogue z-[1]">
                      Hey There!, I just wanted to check in ...
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[1.687rem]">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.812rem] gap-[1.312rem]">
                  <div className="flex flex-col items-start justify-start gap-[2.556rem]">
                    <img
                      className="w-[2.5rem] h-[2.881rem] relative rounded-8xs object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/image-4@2x.png"
                    />
                    <img
                      className="w-[2.5rem] h-[2.875rem] relative rounded-8xs object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/image-1@2x.png"
                    />
                    <img
                      className="w-[2.5rem] h-[2.875rem] relative rounded-8xs object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/image-2@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[2.656rem]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.812rem]">
                        <div className="relative inline-block min-w-[4.125rem] z-[1]">
                          <b className="whitespace-pre-wrap">{`Ron   `}</b>
                          <span className="text-[0.625rem]">37m</span>
                        </div>
                        <div className="relative text-[0.75rem] font-light font-epilogue z-[1]">
                          Lorem ipsum dolor sit amet, consect ...
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.812rem]">
                        <div className="relative inline-block min-w-[6rem] z-[1]">
                          <b className="whitespace-pre-wrap">{`Vladimir   `}</b>
                          <span className="text-[0.625rem]">37m</span>
                        </div>
                        <div className="relative text-[0.75rem] font-light font-epilogue z-[1]">
                          Lorem ipsum dolor sit amet, consect ...
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[0.812rem]">
                        <div className="relative inline-block min-w-[5.75rem] z-[1]">
                          <b className="whitespace-pre-wrap">{`Rashika   `}</b>
                          <span className="text-[0.75rem]">1hr</span>
                        </div>
                        <div className="relative text-[0.75rem] font-light font-epilogue inline-block min-w-[6.063rem] z-[1]">
                          Liked a message
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-end justify-start gap-[1.437rem]">
                  <div className="self-stretch rounded-8xs bg-dimgray-200 flex flex-row items-end justify-start py-[0.875rem] pr-[0.312rem] pl-[0.812rem] gap-[1.312rem] z-[1]">
                    <div className="h-[4.688rem] w-[18.813rem] relative rounded-8xs bg-dimgray-200 hidden" />
                    <img
                      className="self-stretch w-[2.5rem] relative rounded-8xs max-h-full object-cover min-h-[2.875rem] z-[2]"
                      loading="lazy"
                      alt=""
                      src="/image-3@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[0.812rem]">
                      <div className="relative inline-block min-w-[7.625rem] z-[2]">
                        <b className="whitespace-pre-wrap">{`Ishika Mittal   `}</b>
                        <span className="text-[0.625rem]">28m</span>
                      </div>
                      <div className="relative text-[0.75rem] font-light font-epilogue z-[2]">
                        Hey There!, I just wanted to check in ...
                      </div>
                    </div>
                  </div>
                  <ThreadMessages propPadding="0rem 0rem 0rem 0.812rem" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[37.938rem] w-[0.5rem] relative">
            <div className="absolute top-[0.25rem] left-[0rem] rounded-8xs bg-lightsteelblue-100 w-full h-full z-[1]" />
            <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-mediumslateblue w-[0.5rem] h-[7.438rem] z-[2]" />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
