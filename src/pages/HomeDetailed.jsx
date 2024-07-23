import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent7 from "../components/FrameComponent7";
import UserPostHeader from "../components/UserPostHeader";
import CommentContent from "../components/CommentContent";

const HomeDetailed = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  const onLogoutRoundedIconClick = useCallback(() => {
    navigate("/choose");
  }, [navigate]);

  return (
    <div className="w-full h-100% relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start gap-[0.125rem] leading-[normal] tracking-[normal]">
      <FrameComponent3 onDashboardTextClick={onDashboardTextClick} />
      <div className="w-[0.875rem] h-[0.875rem] relative overflow-hidden shrink-0 hidden" />
      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.625rem] pl-[0rem] box-border relative max-w-full">
        <div className="h-[1.875rem] w-[1.875rem] !m-[0] absolute right-[1.625rem] bottom-[14.5rem] rounded-8xs bg-dimgray-200 flex flex-row items-start justify-start">
          <div className="h-[1.875rem] w-[1.875rem] relative rounded-8xs bg-dimgray-200 hidden z-[0]" />
          <img
            className="h-[1.25rem] w-[1.25rem] absolute !m-[0] top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="./calendar@2x.png"
          />
        </div>
        <section className="flex-1 flex flex-row flex-wrap items-start justify-center [row-gap:20px] max-w-full text-left text-[1.375rem] text-white font-arial">
          <FrameComponent7 />
          <div className="w-[31.375rem] border-lightsteelblue-200 border-solid border-[2px] flex flex-col items-start justify-start pt-[1.375rem] px-[0rem] pb-[0rem] box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.812rem] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.875rem] pl-[1.437rem] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem]">
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.688rem] mq450:text-[1.125rem]">
                    Home
                  </a>
                  <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="./new.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.312rem] max-w-full text-[0.813rem] text-lightsteelblue-100">
                <UserPostHeader
                  anaHathway="@ana_hathway"
                  image8="/image-8@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.187rem] box-border max-w-full">
                  <div className="flex-1 bg-black box-border flex flex-row items-start justify-start pt-[1.187rem] px-[1.437rem] pb-[0.5rem] gap-[1.187rem] max-w-full z-[1] border-t-[0.5px] border-solid border-lightsteelblue-100 border-b-[0.5px] mq450:flex-wrap">
                    <div className="h-[5.938rem] w-[31.375rem] relative bg-black box-border hidden max-w-full border-t-[0.5px] border-solid border-lightsteelblue-100 border-b-[0.5px]" />
                    <div className="h-[2.881rem] w-[2.5rem] relative rounded-8xs bg-cover bg-no-repeat bg-[top] z-[2]">
                      <img
                        className="absolute top-[0rem] left-[0rem] rounded-8xs w-full h-full object-cover hidden"
                        alt=""
                        src="./image-8@2x.png"
                      />
                      <img
                        className="absolute top-[0rem] left-[0rem] rounded-8xs w-full h-full object-cover z-[3]"
                        loading="lazy"
                        alt=""
                        src="./image-3@2x.png"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border min-w-[15.813rem] max-w-full">
                      <div className="self-stretch flex flex-col items-end justify-start gap-[1.187rem]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.312rem]">
                          <div className="relative inline-block min-w-[5.313rem] z-[2]">
                            @ishika_mittal
                          </div>
                          <div className="self-stretch relative text-[0.625rem] leading-[0.75rem] font-light font-epilogue text-white z-[2]">
                            Lorem ipsum dolor sit amet.
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
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-8xs bg-dimgray-200 box-border flex flex-col items-start justify-start pt-[0.625rem] px-[1.437rem] pb-[0.812rem] gap-[0.093rem] max-w-full z-[1] border-t-[0.5px] border-solid border-lightsteelblue-100 border-b-[0.5px]">
                  <div className="w-[31.375rem] h-[9.625rem] relative rounded-8xs bg-dimgray-200 box-border hidden max-w-full border-t-[0.5px] border-solid border-lightsteelblue-100 border-b-[0.5px]" />
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[3.687rem]">
                    <div className="relative inline-block min-w-[4rem] z-[2]">
                      @joealwyn
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[1.187rem] max-w-full text-[0.625rem] text-white font-epilogue mq450:flex-wrap">
                    <img
                      className="h-[2.875rem] w-[2.5rem] relative rounded-8xs object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="./image-10@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border min-w-[15.813rem] max-w-full">
                      <div className="self-stretch relative leading-[0.75rem] font-light z-[2]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum enim gravida dignissim imperdiet. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum enim gravida dignissim imperdiet. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum enim gravida dignissim imperdiet. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum enim gravida dignissim imperdiet. Lorem ipsum dolor sit amet, `}</div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.437rem]">
                    <div className="flex flex-row items-start justify-start gap-[1.125rem]">
                      <img
                        className="h-[0.75rem] w-[0.875rem] relative min-h-[0.75rem] z-[2]"
                        loading="lazy"
                        alt=""
                        src="./vector-1.svg"
                      />
                      <img
                        className="h-[0.75rem] w-[0.75rem] relative min-h-[0.75rem] z-[2]"
                        loading="lazy"
                        alt=""
                        src="./vector-2.svg"
                      />
                      <img
                        className="h-[0.75rem] w-[0.75rem] relative min-h-[0.75rem] z-[2]"
                        loading="lazy"
                        alt=""
                        src="./vector-3.svg"
                      />
                    </div>
                  </div>
                </div>
                <UserPostHeader
                  anaHathway="@ali_zafar"
                  image8="/image-11@2x.png"
                />
                <UserPostHeader
                  anaHathway="@taylor_alison swift"
                  image8="/image-12@2x.png"
                />
              </div>
            </div>
          </div>



          {/* joe alwyn comment elaboration*/}
          <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[1.75rem] pl-[0rem] box-border min-w-[25.688rem] max-w-full text-[0.813rem] text-lightsteelblue-100 mq675:min-w-full">
            <div className="self-stretch bg-black box-border flex flex-row items-start justify-start pt-[0rem] px-[0.062rem] pb-[1.187rem] max-w-full z-[2] ">
              <div className="h-[46.563rem] w-[37.813rem] relative bg-black box-border hidden max-w-full " />
              <div className="flex-1 bg-gray-100 box-border flex flex-col items-end justify-start pt-[1.375rem] px-[1.062rem] pb-[1.062rem] gap-[1.875rem] max-w-full z-[3]  ">
                <div className="w-[37.563rem] h-[45.375rem] relative bg-gray-100 box-border hidden max-w-full  " />
                <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.75rem] pl-[0.562rem] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.125rem] max-w-full">
                    <div className="w-[13.625rem] flex flex-row items-start justify-start py-[0rem] px-[4.375rem] box-border">
                      <div className="flex-1 relative z-[4]">@joealwyn</div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[1.375rem] max-w-full text-mediumslateblue mq675:flex-wrap">
                      <img
                        className="h-[2.875rem] w-[3rem] relative rounded-8xs object-cover z-[4]"
                        loading="lazy"
                        alt=""
                        src="./image-14@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border min-w-[19.313rem] max-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.687rem] max-w-full">
                          <div className="w-[4.875rem] relative inline-block z-[4]">
                            Joe Alwyn
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.312rem] box-border max-w-full text-[0.938rem] text-white font-epilogue">
                            <div className="flex-1 relative tracking-[0.03em] leading-[1.063rem] font-light inline-block max-w-full z-[4]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum enim gravida dignissim imperdiet. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum enim gravida dignissim imperdiet. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum enim gravida dignissim imperdiet. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum enim gravida dignissim imperdiet.`}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-[100%] flex flex-col items-end justify-start py-[0rem] pr-[0rem] pl-[1.25rem] box-border gap-[0.437rem] max-w-full text-[0.938rem] text-white">
                  <div className="self-stretch flex flex-col items-end justify-between pt-[0rem] px-[0rem] pb-[0.343rem] box-border gap-[0.562rem] max-w-full text-mediumslateblue font-epilogue">
                    <div className="w-[97%] flex flex-row items-start justify-end py-[0rem] px-[0.75rem] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                          <div className="relative leading-[1.063rem] font-light inline-block min-w-[7.25rem] z-[4]">
                            2:00am ~ 23 Sep
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[0.906rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
                            <img
                              className="w-[1.063rem] h-[0.75rem] relative z-[4]"
                              loading="lazy"
                              alt=""
                              src="./vector-161.svg"
                            />
                          </div>
                          <div className="h-[1.5rem] w-[1.75rem] relative rounded-8xs bg-dimgray-200 z-[4]">
                            <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-dimgray-200 w-full h-full hidden" />
                            <img
                              className="absolute top-[0.375rem] left-[0.438rem] w-[0.875rem] h-[0.75rem] z-[5]"
                              alt=""
                              src="./vector-171.svg"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
                            <img
                              className="w-[0.938rem] h-[0.75rem] relative z-[4]"
                              alt=""
                              src="./vector-181.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[0.031rem] relative box-border z-[4] border-t-[0.5px] border-solid border-white" />
                  </div>

                  
                  <div className="self-stretch flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[0.562rem] gap-[1.25rem] mq450:flex-wrap">
                    <a className="[text-decoration:none] relative leading-[1.063rem] text-[inherit] inline-block min-w-[4.563rem] z-[4]">
                      Comments
                    </a>
                    <div className="self-stretch flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[0.75rem] font-epilogue">
                      <div className="relative tracking-[0.03em] leading-[1.063rem] font-light inline-block min-w-[5.5rem] z-[4]">
                        777 comments
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.187rem] max-w-full text-[0.813rem] text-lightsteelblue-100">
                    <div className="self-stretch h-[0.75rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.718rem] box-border max-w-full">
                      <div className="self-stretch flex-1 relative box-border max-w-full z-[4] border-t-[0.5px] border-solid border-white" />
                    </div>
                    <div className="flex flex-row items-start justify-start pt-[0rem] px-[0.312rem] pb-[0.25rem]">
                      <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                        <img
                          className="h-[1.25rem] w-[1.25rem] relative rounded-8xs object-cover min-h-[1.25rem] z-[4]"
                          loading="lazy"
                          alt=""
                          src="./image-16@2x.png"
                        />
                        <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                          <b className="relative inline-block min-w-[7.5rem] z-[4]">
                            @natasha_williams
                          </b>
                        </div>
                      </div>
                    </div>
                    <CommentContent loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum enim gravida Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum enim gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  " />
                    <div className="w-[7.5rem] flex flex-row items-start justify-start py-[0rem] px-[0.312rem] box-border">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[0.75rem]">
                        <img
                          className="h-[1.25rem] w-[1.25rem] relative rounded-8xs object-cover min-h-[1.25rem] z-[4]"
                          loading="lazy"
                          alt=""
                          src="./image-17@2x.png"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                          <b className="self-stretch relative z-[4]">
                            @dr.pri
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CommentContent
                    loremIpsumDolorSitAmetCon="Good work! I’ll love to connect with you on video call. I’ve some suggestions to increase profit in your model. "
                    propAlignSelf="unset"
                    propPadding="0rem 0.75rem 0.625rem"
                    propWidth="95%"
                  />
                  <div className="flex flex-row items-start justify-end py-[0rem] px-[0.75rem] text-[0.813rem]">
                    <div className="rounded-8xs bg-mediumslateblue flex flex-row items-start justify-start pt-[0.312rem] px-[0.5rem] pb-[0.375rem] whitespace-nowrap z-[4]">
                      <div className="h-[1.625rem] w-[6.875rem] relative rounded-8xs bg-mediumslateblue hidden" />
                      <div className="relative inline-block min-w-[5.875rem] z-[5]">{`More comments `}</div>
                    </div>
                  </div>
                </div>
                <div className="w-[100%] flex flex-row items-start justify-end py-[0rem] px-[0.75rem] box-border max-w-full">
                  <div className="flex-1 rounded-3xs bg-dimgray-100 flex flex-row items-start justify-between pt-[0.312rem] pb-[0.375rem] pr-[0.5rem] pl-[0.75rem] box-border max-w-full gap-[1.25rem] z-[4]">
                    <div className="h-[1.625rem] w-[90%] relative rounded-3xs bg-dimgray-100 hidden max-w-full" />
                    <input
                      className="w-[7.188rem] [border:none] [outline:none] font-arial text-[0.813rem] bg-[transparent] h-[0.938rem] relative text-dimgray-200 text-left inline-block p-0 z-[5]"
                      placeholder="Post your Comment"
                      type="text"
                    />
                    <img
                      className="h-[0.938rem] w-[0.938rem] relative object-contain min-h-[0.938rem] z-[5]"
                      alt=""
                      src="./sent1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-col items-start justify-start pt-[4.812rem] px-[0rem] pb-[0rem]">
            <div className="flex flex-col items-start justify-start gap-[0.531rem]">
              <div className="w-[1.875rem] h-[4.156rem] relative">
                <img
                  className="absolute top-[0rem] left-[0.313rem] w-[1.25rem] h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="./vector-25.svg"
                />
                <img
                  className="absolute top-[2.438rem] left-[0.313rem] w-[1.25rem] h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="./vector-26.svg"
                />
                <div className="absolute top-[1.894rem] left-[0rem] box-border w-[1.906rem] h-[0.031rem] border-t-[0.5px] border-solid border-white" />
              </div>
              <div className="flex flex-row items-start justify-start pt-[0rem] px-[0.312rem] pb-[0.531rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative"
                  loading="lazy"
                  alt=""
                  src="./vector-27.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.531rem]">
                <div className="flex flex-row items-start justify-start py-[0rem] px-[0.312rem]">
                  <img
                    className="h-[1.25rem] w-[1.25rem] relative"
                    loading="lazy"
                    alt=""
                    src="./-x37-7-essential-icons.svg"
                  />
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.187rem] pl-[0.125rem]">
                  <img
                    className="h-[1.563rem] w-[1.563rem] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="./terms-and-conditions@2x.png"
                  />
                </div>
                <div className="w-[1.906rem] h-[0.031rem] relative box-border border-t-[0.5px] border-solid border-white" />
              </div>
              <div className="flex flex-row items-start justify-start pt-[0rem] pb-[0.218rem] pr-[0.375rem] pl-[0.25rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="./alarm@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start pt-[0rem] px-[0.312rem] pb-[0.218rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="./help@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0.312rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative object-cover cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="./logout-rounded@2x.png"
                  onClick={onLogoutRoundedIconClick}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeDetailed;
