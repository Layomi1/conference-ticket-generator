import React, { useState } from "react";
import Divider from "../components/Divider";
import Button from "../components/Button";
import Heading from "../components/Heading";
import RadioButton from "../components/RadioButton";
// import RadioGroup from "../context/GlobalContext";

const Step1 = () => {
  const [selectedValue, setSelectedValue] = useState("regular");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header className="flex justify-between items-center pb-3  md:flex-row ">
        <Heading title="Ticket Selection" />
      </header>
      <Divider isProgressbar={true} progress="54%" />
      <main className=" w-full mt-8 flex flex-col gap-8 rounded-4xl border-[1px] border-[#0E464F] p-6 rounded-[32px]">
        <article className="bg-gradient-to-b from-[#07373F] to-[#0A0C11] px-6 pt-4 md:pt-6 pb-7 flex  border-[1px] border-light-teal flex-col items-center justify-center rounded-3xl mb-8">
          <h2 className="text-5xl md:text-[3.875rem] text-nowrap font-roadRage ">
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

        <form className="mt-8" onSubmit={handleSubmit} method="POST">
          <p className="mb-2">Select Ticket Type:</p>
          {/* <RadioGroup
            name="access"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          > */}
          <article className="w-full p-4 flex flex-col  md:flex-row gap-[25px] items-center  rounded-3xl mb-8  border-light-teal border-[1px]">
            <RadioButton
              title="Free"
              access="Regular Access"
              value="regular"
              id="regular"
              name="access"
              seat="20/50"
            />
            <RadioButton
              value="vip"
              id="vip"
              name="access"
              title="$150"
              access="VIP Access"
              seat="20/50"
            />
            <RadioButton
              value="vvip"
              id="vvip"
              name="access"
              title="$150"
              access="VVIP Access"
              seat="20/50"
            />
          </article>
          {/* </RadioGroup> */}
          <article className="mt-8 ">
            <p className="mb-2">Number of Tickets</p>

            <select
              name="number"
              id=""
              className="w-full  grid p-3 bg-transparent grid-cols-2 gap-6 items-center rounded-[8px] mb-8  border-light-teal border-[1px]"
            >
              <option defaultValue>1</option>
            </select>
          </article>

          <article className="w-full flex  mt-8 flex-col-reverse md:flex-row items-center justify-center gap-6 md:border-light-teal md:border-[1px] md:gap-8  md:rounded-3xl md:px-12 ">
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
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              justify="center"
              style={{
                paddingTop: "12px",
                paddingBottom: "12px",
                paddingRight: "90px",
                paddingLeft: "90px",
              }}
            >
              Next
            </Button>
          </article>
        </form>
        <p>selected: {selectedValue}</p>
      </main>
    </>
  );
};

export default Step1;
