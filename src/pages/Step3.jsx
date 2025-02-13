import React from "react";
import Divider from "../components/Divider";
import Button from "../components/Button";
import user from "../assets/images/user.png";
import barcode from "../assets/images/barcode.png";
import Heading from "../components/Heading";
import barcode_small from "../assets/images/barcode-sm.png";

const Step3 = () => {
  return (
    <section className="max-w-[700px mt-70 md:mt-0 :p-5 md:p-0 md:border-2 md:border-light-teal rounded-[32px]  md:rounded-o   md:px-12 ">
      <header className=" flex justify-between items-center pb-3   md:flex-row">
        <Heading title="Ready" />
      </header>
      <Divider isProgressbar={true} progress="75%" />
      <section className="flex flex-col items-center mt-8 gap-8 px-6 ">
        <article className="flex flex-col gap-3   items-start md:items-center md:gap-4  ">
          <h2 className="text-[32px]  font-alatsi text-nowrap">
            Your Ticket is Booked!
          </h2>
          <p className="font-roboto hidden md:flex ">
            Check your email for a copy or you can{" "}
            <span className="font-bold">download</span> download
          </p>
          <p className="font-roboto md:hidden text-center ">
            You can download or Check your email for a copy
          </p>
        </article>

        <section className="w-full flex flex-col gap-6   items-center border-light-teal border-[1px]  md:boredr-0 mb-6 py-8 px-[17.3px] md:px-0  md:border-0">
          <article className="h-[600px] w-[300px] ">
            <div className="border-2 border-midnight-teal p-5 ">
              <div className="border-2 border-midnight-teal p-4 flex flex-col items-center gap-5 ">
                <div className="text-center">
                  <h5 className="font-roadRage font-bold text-[34px] text-nowrap">
                    Techember Fest ”25
                  </h5>
                  <p className="font-roboto">
                    📍 04 Rumens road, Ikoyi, Lagoss
                    <span>📅 March 15, 2025 | 7:00 PM</span>
                  </p>
                </div>
                <figure className="w-70 h-70 border-[#24A0B5] border-4 rounded-[12px] ">
                  <img src={user} alt="user" />
                </figure>
                <article className="p-1">
                  <div className="grid grid-cols-2 ">
                    <div className="border-r-2 border-b-2 border-light-teal p-2">
                      <p className="text-[#5a787c] text-nowrap text-[10px]">
                        Enter your name
                      </p>
                      <h6 className="text-xs" font-bold>
                        Avi Chukwu
                      </h6>
                    </div>
                    <div className=" border-b-2 border-light-teal p-2">
                      <p className="text-[#5a787c] text-nowrap text-[10px]">
                        Enter your email *
                      </p>
                      <h6 className="text-xs" font-bold>
                        User@email.com
                      </h6>
                    </div>
                    <div className="border-r-2 border-b-2 border-light-teal p-2">
                      <p className="text-[#5a787c] text-nowrap text-[10px]">
                        Ticket Type:
                      </p>
                      <h6 className="text-xs" font-bold>
                        VIP
                      </h6>
                    </div>
                    <div className="border-b-2  border-light-teal p-2">
                      <p className="text-[#5a787c] text-nowrap text-[10px]">
                        Ticket for :
                      </p>
                      <h6 className="text-xs" font-bold>
                        1
                      </h6>
                    </div>
                  </div>
                  <div className="p-2">
                    <p className="text-[#5a787c] font-roboto text-[10px] mb-2">
                      Special request?
                    </p>
                    <p className="font-roboto text-[10px]">
                      Nil ? Or the users sad story they write in there gets this
                      whole space, Max of three rows
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <img src="" alt="" />
            <div className="border-2 border-midnight-teal p-4 flex items-center justify-center">
              <img src={barcode} alt="barcode" className="hidden md:flex" />
              <img src={barcode_small} alt="barcode" className="md:hidden" />
            </div>
          </article>
        </section>
        <article className="w-full flex  flex-col-reverse md:flex-row-reverse items-center justify-center gap-6 md:border-light-teal md:border-[1px] md:gap-8  md:rounded-3xl md:px-12   mt-6">
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
  );
};

export default Step3;
