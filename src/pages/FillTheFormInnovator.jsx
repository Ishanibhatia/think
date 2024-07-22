import { useCallback } from "react";
import NameInput from "../components/NameInput";
import ContactNumber from "../components/ContactNumber";
import { useNavigate } from "react-router-dom";

const FillTheFormInnovator = () => {
  const navigate = useNavigate();

  const onSubmitTextClick = useCallback(() => {
    navigate("/idea-page-innovator");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-row items-start justify-start pt-[3.312rem] px-[2.687rem] pb-[3.687rem] box-border leading-[normal] tracking-[normal] mq750:pl-[1.313rem] mq750:pr-[1.313rem] mq750:box-border">
      <main className="flex-1 rounded-xl bg-gray-100 box-border flex flex-col items-center justify-center pt-[3.687rem] px-[4.812rem] pb-[3.375rem] gap-[2.375rem] max-w-full text-center text-[1.25rem] text-lightsteelblue-200 font-epilogue border-[1px] border-solid border-white lg:pt-[2.375rem] lg:px-[2.375rem] lg:pb-[2.188rem] lg:box-border mq750:gap-[1.188rem] mq750:pt-[1.563rem] mq750:pb-[1.438rem] mq750:box-border">
        <div className="w-[74.625rem] h-[83.375rem] relative rounded-xl bg-gray-100 box-border hidden max-w-full border-[1px] border-solid border-white" />



        {/* columns start from here */}
        <div className="w-[63.563rem] flex flex-row items-start justify-start gap-[3.312rem] max-w-full mq750:gap-[1.625rem] mq1050:flex-wrap">
          <div className="flex-[0.9196] rounded-8xs bg-dimgray-300 flex flex-row items-start justify-between pt-[0.937rem] pb-[1rem] pr-[1.75rem] pl-[1.937rem] box-border min-w-[19.563rem] max-w-full gap-[1.25rem] z-[1] mq450:flex-wrap mq450:justify-center mq1050:flex-1">
            <div className="h-[3.813rem] w-[30.125rem] relative rounded-8xs bg-dimgray-300 hidden max-w-full" />
            <input
              className="w-[10.75rem] [border:none] [outline:none] bg-[transparent] h-[1.625rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border font-epilogue text-[1.25rem] text-lightsteelblue-200 placeholder-lightsteelblue-200"
              placeholder="enter your name"
              type="text"
            />
          </div>
          <div className="flex-[0.9196] rounded-8xs bg-dimgray-300 flex flex-row items-start justify-between pt-[0.937rem] pb-[1rem] pr-[1.75rem] pl-[1.937rem] box-border min-w-[19.563rem] max-w-full gap-[1.25rem] z-[1] mq450:flex-wrap mq450:justify-center mq1050:flex-1">
            <div className="h-[3.813rem] w-[30.125rem] relative rounded-8xs bg-dimgray-300 hidden max-w-full" />
            <input
              className="w-[9.75rem] [border:none] [outline:none] bg-[transparent] h-[1.625rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border font-epilogue text-[1.25rem] text-lightsteelblue-200 placeholder-lightsteelblue-200"
              placeholder="graduation year"
              type="text"
            />
            <img
              className="h-[1.875rem] w-[1.875rem] relative object-cover z-[2]"
              alt=""
              src="/tearoff-calendar@2x.png"
            />
          </div>
        </div>




        <div className="w-[63.563rem] flex flex-row items-start justify-start gap-[3.312rem] max-w-full mq750:gap-[1.625rem] mq1050:flex-wrap">
          <div className="flex-[0.9196] rounded-8xs bg-dimgray-300 flex flex-row items-start justify-between pt-[0.937rem] pb-[1rem] pr-[1.75rem] pl-[1.937rem] box-border min-w-[19.563rem] max-w-full gap-[1.25rem] z-[1] mq450:flex-wrap mq450:justify-center mq1050:flex-1">
            <div className="h-[3.813rem] w-[30.125rem] relative rounded-8xs bg-dimgray-300 hidden max-w-full" />
            <input
              className="w-[10.75rem] [border:none] [outline:none] bg-[transparent] h-[1.625rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border font-epilogue text-[1.25rem] text-lightsteelblue-200 placeholder-lightsteelblue-200"
              placeholder="enter your email"
              type="email"
            />
          </div>
          <div className="flex-[0.9196] rounded-8xs bg-dimgray-300 flex flex-row items-start justify-between pt-[0.937rem] pb-[1rem] pr-[1.75rem] pl-[1.937rem] box-border min-w-[19.563rem] max-w-full gap-[1.25rem] z-[1] mq450:flex-wrap mq450:justify-center mq1050:flex-1">
            <div className="h-[3.813rem] w-[30.125rem] relative rounded-8xs bg-dimgray-300 hidden max-w-full" />
            <select
              className="w-[29.75rem] [border:none] [outline:none] bg-[transparent] h-[1.625rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border font-epilogue text-[1.25rem] text-lightsteelblue-200 placeholder-lightsteelblue-200"
              defaultValue="" // Provide a default value if needed
            >
              <option value="" disabled hidden>enter your college name</option>
              <option value="Tiet">Tiet</option>
              <option value="Vit">Vit</option>
              <option value="Bits">Bits</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>




        <ContactNumber
          aboutPlaceholder="enter your city"
          propAlignSelf="unset"
          propWidth="63.563rem"
          propFlexWrap="wrap"
        />





<div className="w-[63.563rem] flex flex-row items-start justify-start gap-[3.312rem] max-w-full mq750:gap-[1.625rem] mq1050:flex-wrap">
          <div className="flex-[0.9196] rounded-8xs bg-dimgray-300 flex flex-row items-start justify-between pt-[0.937rem] pb-[1rem] pr-[1.75rem] pl-[1.937rem] box-border min-w-[19.563rem] max-w-full gap-[1.25rem] z-[1] mq450:flex-wrap mq450:justify-center mq1050:flex-1">
            <div className="h-[3.813rem] w-[30.125rem] relative rounded-8xs bg-dimgray-300 hidden max-w-full" />
            <input
              className="w-[10.75rem] [border:none] [outline:none] bg-[transparent] h-[1.625rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border font-epilogue text-[1.25rem] text-lightsteelblue-200 placeholder-lightsteelblue-200"
              placeholder="enter your branch"
              type="text"
            />
          </div>
          <div className="flex-[0.9196] rounded-8xs bg-dimgray-300 flex flex-row items-start justify-between pt-[0.937rem] pb-[1rem] pr-[1.75rem] pl-[1.937rem] box-border min-w-[19.563rem] max-w-full gap-[1.25rem] z-[1] mq450:flex-wrap mq450:justify-center mq1050:flex-1">
            <div className="h-[3.813rem] w-[30.125rem] relative rounded-8xs bg-dimgray-300 hidden max-w-full" />
            <input
              className="w-[27.75rem] [border:none] [outline:none] bg-[transparent] h-[1.625rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border font-epilogue text-[1.25rem] text-lightsteelblue-200 placeholder-lightsteelblue-200"
              placeholder="LinkedIn profile"
              type="text"
            />
            
          </div>
        </div>




        
        
        <section className="w-[63.563rem] rounded-8xs bg-dimgray-300 flex flex-col items-end justify-start pt-[1.437rem] px-[0.875rem] pb-[0.687rem] box-border gap-[1.25rem] max-w-full z-[1] text-center text-[1.25rem] text-lightsteelblue-200 font-epilogue">
          <div className="w-[63.563rem] h-[6.5rem] relative rounded-8xs bg-dimgray-300 hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.875rem]">
            <input
              className="w-[43.563rem] relative z-[2] mq450:text-[1rem] bg-transparent text-lightsteelblue-200 placeholder-lightsteelblue-200"
              placeholder="Tell a bit about yourself"
              type="text"
            />
          </div>
          <button className="cursor-pointer [border:none] pt-[0.5rem] px-[1.375rem] pb-[0.437rem] bg-dimgray-200 rounded-8xs flex flex-row items-start justify-start z-[2] hover:bg-gray-500">
            <div className="h-[1.813rem] w-[5.063rem] relative rounded-8xs bg-dimgray-200 hidden" />
            <div className="relative text-[0.875rem] font-epilogue text-white text-center inline-block min-w-[2.25rem] z-[3]">
              0/100
            </div>
          </button>
        </section>
        
        
        <button
          className="cursor-pointer [border:none] p-[0.5rem] bg-dimgray-200 rounded-8xs flex flex-row items-center justify-center hover:bg-gray-500"
          onClick={onSubmitTextClick}
        >
          <div className="text-[0.875rem] font-epilogue text-white text-center inline-block min-w-[5rem]">
            SUBMIT
          </div>
        </button>
      </main>
    </div>
  );
};

export default FillTheFormInnovator;
