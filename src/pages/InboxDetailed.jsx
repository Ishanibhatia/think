import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import UpcomingEventsContainer from "../components/UpcomingEventsContainer";
import MessageTop from "../components/MessageTop";

const InboxDetailed = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  const onLogoutRoundedIconClick = useCallback(() => {
    navigate("/choose");
  }, [navigate]);

  return (
    <div className="w-[100%] relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start gap-[0.125rem] leading-[normal] tracking-[normal] ">
      <FrameComponent3 />
      <main className="w-[100%] max-w-screen-xl flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[0.062rem] mx-auto">
        <MessageTop />
        <section className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] mt-[2.5rem] box-border  max-w-full text-left text-[1.375rem] text-white font-arial">
          <div className="self-stretch flex flex-row items-end justify-start gap-[2.062rem] max-w-full">
            <FrameComponent4 />
            <div className="w-[20rem] h-screen flex flex-col items-start justify-start px-[-2rem] box-border min-w-[20rem] text-[1.125rem] text-lightsteelblue-100 sticky">
              <div className="self-stretch flex flex-col items-start justify-start gap-[4.25rem] mq450:gap-[2.125rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.562rem]">
                  <div className="self-stretch flex flex-col items-start justify-start  px-[0rem] pb-[0.375rem] gap-[0.456rem]">
                    <div className="flex flex-row items-start justify-start  px-[0.25rem]">
                      <div className="flex flex-row items-start justify-start gap-[1.437rem]">
                        <img
                          className="h-[1.25rem] w-[1.25rem] relative"
                          loading="lazy"
                          alt=""
                          src="./vector-16.svg"
                        />
                        <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[5.813rem]">
                          Your Profile
                        </h3>
                      </div>
                    </div>
                    <div className="self-stretch h-[0.031rem] relative box-border border-t-[0.5px] border-solid border-white" />
                    <div className="flex flex-row items-start justify-start py-[0rem] px-[0.25rem] text-white">
                      <div className="flex flex-row items-start justify-start gap-[1.437rem]">
                        <img
                          className="h-[1.25rem] w-[1.25rem] relative"
                          loading="lazy"
                          alt=""
                          src="./vector-17.svg"
                        />
                        <a className="[text-decoration:none] relative text-[inherit]">
                          Manage your feed
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-[0rem] px-[0.25rem] pb-[0.375rem]">
                    <div className="flex flex-row items-start justify-start gap-[1.437rem]">
                      <img
                        className="h-[1.25rem] w-[1.25rem] relative"
                        loading="lazy"
                        alt=""
                        src="./vector-18.svg"
                      />
                      <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[5.313rem]">
                        Your posts
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.25rem]">
                    <div className="flex flex-row items-start justify-start gap-[1.5rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                        <img
                          className="w-[1.25rem] h-[1.25rem] relative"
                          loading="lazy"
                          alt=""
                          src="./-x37-7-essential-icons.svg"
                        />
                      </div>
                      <h3 className="m-0 relative text-inherit font-normal font-inherit">
                        View saved recordings
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
                    <div className="flex flex-row items-start justify-start gap-[1.312rem]">
                      <img
                        className="h-[1.563rem] w-[1.563rem] relative object-cover min-h-[1.563rem]"
                        loading="lazy"
                        alt=""
                        src="./terms-and-conditions@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                        <h3 className="m-0 relative text-inherit font-normal font-inherit">
                          View saved documents
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem]">
                    <div className="h-[0.031rem] flex-1 relative box-border border-t-[0.5px] border-solid border-white" />
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.187rem]">
                    <div className="flex flex-row items-start justify-start gap-[1.437rem]">
                      <div className="h-[3.25rem] w-[1.313rem] relative">
                        <img
                          className="absolute top-[0rem] left-[0rem] w-[1.25rem] h-[1.25rem] object-cover"
                          loading="lazy"
                          alt=""
                          src="./alarm@2x.png"
                        />
                        <img
                          className="absolute top-[2rem] left-[0.063rem] w-[1.25rem] h-[1.25rem] object-cover"
                          loading="lazy"
                          alt=""
                          src="./help@2x.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                        <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[6.188rem]">
                          Notifications
                        </h3>
                        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem]">
                          <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[7.688rem]">{`Help & Support`}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[7.313rem] flex flex-row items-start justify-start py-[0rem] px-[0.25rem] box-border">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                        <img
                          className="w-[1.25rem] h-[1.25rem] relative object-cover"
                          loading="lazy"
                          alt=""
                          src="./logout-rounded@2x.png"
                        />
                      </div>
                      <h3
                        className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[4.063rem] cursor-pointer"
                      // onClick={onLogOutTextClick}
                      >
                        Log Out
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.187rem] text-[0.75rem]">
                  <div className="flex-1 flex flex-row items-start justify-start relative">
                    <div className="h-[1.5rem] w-[1.5rem] !m-[0] absolute right-[0rem] bottom-[0rem] rounded-8xs bg-dimgray-200 flex flex-row items-start justify-start">
                      <div className="h-[1.5rem] w-[1.5rem] relative rounded-8xs bg-dimgray-200 hidden z-[0]" />
                      <img
                        className="h-[0.875rem] w-[0.875rem] absolute !m-[0] top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="./bin.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem]">
                      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[4.687rem] text-[1.25rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                        <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1rem]">
                          Upcoming events
                        </h2>
                      </div>
                      <div className="self-stretch rounded-3xs bg-dimgray-200 flex flex-row items-start justify-between py-[0rem] pr-[0.875rem] pl-[1.25rem] gap-[1.25rem] text-white font-epilogue">
                        <div className="h-[2.438rem] w-[19.813rem] relative rounded-3xs bg-dimgray-200 hidden" />
                        <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem]">
                          <div className="relative inline-block min-w-[7rem] z-[1]">
                            Meeting with Ishika
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[0.781rem] text-lightsteelblue-100 font-arial">
                          <div className="h-[2.469rem] w-[0.031rem] relative box-border z-[1] border-r-[0.5px] border-solid border-white" />
                          <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
                            <div className="relative whitespace-pre-wrap inline-block min-w-[4.688rem] z-[1]">
                              3pm 27Sep
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="self-stretch rounded-3xs bg-dimgray-200 flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[1.25rem] gap-[0.781rem]">
                        <div className="h-[2.438rem] w-[19.813rem] relative rounded-3xs bg-dimgray-200 hidden" />
                        
                        <div className="h-[2.469rem] w-[0.031rem] relative box-border z-[1] border-r-[0.5px] border-solid border-white" />
                        <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
                          <div className="relative whitespace-pre-wrap inline-block min-w-[4.688rem] z-[1]">
                            7pm 28Sep
                          </div>
                        </div>
                      </div> */}
                      <div className="self-stretch rounded-3xs bg-dimgray-200 flex flex-row items-start justify-between py-[0rem] pr-[0.875rem] pl-[1.25rem] gap-[1.25rem] text-white font-epilogue">
                        <div className="h-[2.438rem] w-[19.813rem] relative rounded-3xs bg-dimgray-200 hidden" />
                        <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem]">
                          <div className="relative inline-block min-w-[6.375rem] z-[1]">
                            Meeting with Ron
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[0.781rem] text-lightsteelblue-100 font-arial">
                          <div className="h-[2.469rem] w-[0.031rem] relative box-border z-[1] border-r-[0.5px] border-solid border-white" />
                          <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
                            <div className="relative whitespace-pre-wrap inline-block min-w-[4.688rem] z-[1]">
                              5pm 30Sep
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-3xs bg-dimgray-200 flex flex-row items-start justify-between py-[0rem] pr-[0.875rem] pl-[1.25rem] gap-[1.25rem] text-white font-epilogue">
                        <div className="h-[2.438rem] w-[19.813rem] relative rounded-3xs bg-dimgray-200 hidden" />
                        <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem]">
                          <div className="relative inline-block min-w-[6.375rem] z-[1]">
                            Meeting with Ron
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[0.781rem] text-lightsteelblue-100 font-arial">
                          <div className="h-[2.469rem] w-[0.031rem] relative box-border z-[1] border-r-[0.5px] border-solid border-white" />
                          <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
                            <div className="relative whitespace-pre-wrap inline-block min-w-[4.688rem] z-[1]">
                              5pm 30Sep
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-3xs bg-dimgray-200 flex flex-row items-start justify-between py-[0rem] pr-[0.875rem] pl-[1.25rem] gap-[1.25rem] text-white font-epilogue">
                        <div className="h-[2.438rem] w-[19.813rem] relative rounded-3xs bg-dimgray-200 hidden" />
                        <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem]">
                          <div className="relative inline-block min-w-[6.375rem] z-[1]">
                            Meeting with Ron
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[0.781rem] text-lightsteelblue-100 font-arial">
                          <div className="h-[2.469rem] w-[0.031rem] relative box-border z-[1] border-r-[0.5px] border-solid border-white" />
                          <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
                            <div className="relative whitespace-pre-wrap inline-block min-w-[4.688rem] z-[1]">
                              5pm 30Sep
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[2.25rem]">
                        <div className="h-[1.5rem] w-[1.5rem] relative rounded-8xs bg-dimgray-200">
                          <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-dimgray-200 w-full h-full hidden" />
                          <img
                            className="absolute top-[0.456rem] left-[0.456rem] w-[0.581rem] h-[0.581rem] z-[1]"
                            alt=""
                            src="./vector-19.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InboxDetailed;
