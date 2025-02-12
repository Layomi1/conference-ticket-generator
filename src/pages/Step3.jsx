import React from "react";
import Divider from "../components/Divider";
import Button from "../components/Button";
import stamp from "../assets/images/heading-sm.png";
import headline from "../assets/images/Heading.png";
import reg from "../assets/images/reg.png";

const Step3 = () => {
  return (
    <section className="max-w-[700px]  md:px-12">
      <header className=" flex justify-between items-center md:flex-row  ">
        <h1 className="text-2xl md:text-[32px] font-jejuMyeongjo">Ready</h1>
        <p className="">Step 3/3</p>
      </header>
      <Divider isProgressbar={true} progressWidth="100%" />
      <section className="flex flex-col items-center mt-8 gap-8 px-6">
        <article className="flex flex-col gap-3   items-start md:items-center md:gap-4  ">
          <h2 className="text-[32px]  font-alatsi">Your Ticket is Booked!</h2>
          <p className="font-roboto ">
            You can download or Check your email for a copy
          </p>
        </article>

        <section className="w-full flex flex-col gap-6 items-center border-light-teal border-[1px]  md:boredr-0">
          <article className="w-full flex py-8  px-6 md:px-[21px] gap-1 ">
            <div className="w-3/4 border-white border-r-dotted border-2  rounded-l-[24px] bg-light-teal h-[196px]  relative">
              <div className="flex items-center pt-[12.11px] pl-[9.69px] gap-[26.9px  ">
                <figure className="max-w-[146px] max-h-[142px] border-white border-2 ">
                  image
                </figure>

                <article className="relative ">
                  <img
                    src={headline}
                    alt="heading"
                    className="hidden md:flex"
                  />
                  <h2 className="md:hidden text-5xl md:text-[3.875rem] text-nowrap font-roadRage mb-[6.25px] ]">
                    Techember Fest ”25
                  </h2>
                  <p className="grid">
                    📍 04 Rumens road, Ikoyi, Lagos{" "}
                    <span>📅 March 15, 2025 | 7:00 PM</span>
                  </p>
                  <img
                    src={reg}
                    alt="register logo"
                    className="absolute -top-5 -right-2"
                  />
                  <div className=" flex absolute bottom-0 right-0 md:hidden">
                    <img src={stamp} alt="water mark" />
                  </div>
                </article>
              </div>
              <div className="bg-midnight-teal w-full pl- 6 rounded-bl-[24px]">
                <p className="text-[#0E464F] py-[3px] font-roboto text-[14.53px] ">
                  Ticket for 1 entry only
                </p>
              </div>
            </div>

            <div className="w-1/4 h-[196px] border-l-dotted border-white border-2  rounded-r-[24px] bg-light-teal pt-[12.11px] flex relative text-justify ">
              <div className=" flex gap-2  items-center -ml-8 md:max-w-[277px] ">
                <h5 className="text-[10.91px]  md:text-[24.42px]  text-nowrap font-roadRage  mt--8 -rotate-90   ">
                  Techember Fest ”25
                </h5>
                <p className="hidden  md:flex -rotate-90 text-[9. 54px]  md:text-nowrap  font-bold  -mt- -ml-28  border-b-[#052930] border-b-[2px] pb-1 max-w-fit tracking-tight ">
                  User Name: <span>John Doe</span>
                </p>
                <p className="  md:hidden -rotate-90 text-[9. 54px]  md:text-nowrap  font-bold  -mt- -ml-28  border-b-[#052930] border-b-[2px] pb-1 max-w-fit tracking-tight ">
                  User Name: <span>John Doe</span>
                </p>

                <p className="-rotate-90 md:hidden text-nowrap  -mt- -ml-28  border-b-[#052930] border-b-[2px] pb-1 max-w-fit tracking-tight">
                  4 Rumens road, Ikoyi, Lagos
                  <span className="block ">March 15, 2025 | 7:00 PM</span>
                </p>
              </div>

              <div className="border-[#052930]  h-[145px] mr-[1px]"></div>
              <img
                src={reg}
                alt="register logo"
                className="absolute bottom-0  right-10 w-[25%] hidden md:flex  rotate-180"
              />
              <p className=" font-roadRage font-bold text-[29.69px] md:hidden">
                VIP
              </p>
            </div>
          </article>

          <article className="w-full flex  flex-col-reverse md:flex-row-reverse items-center justify-center gap-6 md:border-light-teal md:border-[1px] md:gap-8  md:rounded-3xl md:px-12 ">
            <Button
              type="button"
              variant="outlined"
              justify="center"
              style={{
                paddingTop: "12px",
                paddingBottom: "12px",
                paddingRight: "84px",
                paddingLeft: "84px",
              }}
            >
              Book Another Ticket
            </Button>
            <Button
              type="submit"
              variant="primary"
              justify="center"
              className="btn"
              style={{
                paddingTop: "12px",
                paddingBottom: "12px",
                paddingRight: "90px",
                paddingLeft: "90px",
              }}
            >
              DownLoad Ticket
            </Button>
          </article>
        </section>
      </section>
    </section>
  );
};

export default Step3;
