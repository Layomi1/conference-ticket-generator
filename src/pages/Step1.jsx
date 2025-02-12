import React from "react";
import Divider from "../components/Divider";
import Button from "../components/Button";
import Heading from "../components/Heading";

const Step1 = () => {
  return (
    <>
      <header className="flex justify-between items-center pb-3  md:flex-row ">
        <Heading title="Ticket Selection" />
      </header>
      <Divider isProgressbar={true} progressWidth={"232px"} />
      <main className=" w-full mt-8 flex flex-col gap-8 rounded-4xl border-[1px] border-[#0E464F] p-6 rounded-[32px]">
        <article className="bg-gradient-to-b from-[#07373F] to-[#0A0C11] px-6 pt-4 md:pt-6 pb-7 flex  flex-col items-center justify-center rounded-3xl mb-8">
          <h2 className="text-5xl mdz;text-[3.875rem] text-nowrap font-roadRage ">
            Techember Fest ”25
          </h2>
          <p className="mb-10 md:mb-0 text-center text-lg">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <p className="flex flex-col items-center md:flex-row">
            📍 [Event Location]{" "}
            <span className=" hidden md:flex md:mx-4">||</span>
            <span className="text-center mt-1 md:mt-0">
              March 15, 2025 | 7:00 PM
            </span>
          </p>
        </article>
        <Divider isProgressbar={false} progressWidth="0" />

        <article className="mt-8 ">
          <p className="mb-2">Select Ticket Type:</p>
          <article className=" p-4 grid md:grid-cols-2 gap-6 items-center  rounded-3xl mb-8  border-light-teal border-[1px]">
            <Button
              variant="outlined"
              type="button"
              justify="between"
              style={{
                paddingLeft: "8px",
                paddingRight: "8px",
                paddingTop: "8px",
                paddingBottom: "8px",
              }}
            >
              <p className="uppercase mb-2 text-nowrap  text-left  mr-2">
                Regular Access
                <span className="block lowercase text-sm">20 left! </span>
              </p>
              <p className="bg-light-teal pl-8  pr-2 py-2 font-semibold rounded-[8px]">
                Free
              </p>
            </Button>

            <Button
              variant="outlined"
              justify="between"
              type="button"
              style={{
                paddingLeft: "8px",
                paddingRight: "8px",
                paddingTop: "8px",
                paddingBottom: "8px",
              }}
            >
              <p className="uppercase mb-2 text-nowrap text-left  mr-2">
                VIP Access
                <span className="block lowercase text-sm">20 left! </span>
              </p>
              <p className="bg-light-teal pl-8  pr-2 py-2 font-semibold rounded-[8px]">
                $50
              </p>
            </Button>

            <Button
              variant="outlined"
              justify="between"
              type="button"
              style={{
                paddingLeft: "8px",
                paddingRight: "8px",
                paddingTop: "8px",
                paddingBottom: "8px",
              }}
            >
              <p className="uppercase mb-2 text-nowrap text-left  mr-2">
                VVIP Access
                <span className="block lowercase text-sm">20 left! </span>
              </p>
              <p className="bg-light-teal pl-8  pr-2 py-2 font-semibold rounded-[8px]">
                $150
              </p>
            </Button>
          </article>
          <article article className="mt-8 ">
            <p className="mb-2">Number of Tickets</p>

            <select
              name="number"
              id=""
              className="w-full  grid p-3 bg-transparent grid-cols-2 gap-6 items-center rounded-[8px] mb-8  border-light-teal border-[1px]"
            >
              <option value="">1</option>
            </select>
          </article>

          <article className="w-full flex  mt-8 flex-col-reverse md:flex-row items-center justify-center gap-6 md:border-light-teal md:border-[1px] md:gap-8  md:rounded-3xl md:px-12 ">
            <Button
              variant="outlined"
              justify="center"
              style={{
                paddingTop: "12px",
                paddingBottom: "12px",
                paddingRight: "84px",
                paddingLeft: "84px",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              justify="center"
              className="btn"
              style={{
                // width: "100%",
                paddingTop: "12px",
                paddingBottom: "12px",
                paddingRight: "90px",
                paddingLeft: "90px",
              }}
            >
              Next
            </Button>
          </article>
        </article>
      </main>
    </>
  );
};

export default Step1;
