import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import forwardArrow from "../assets/images/forward_arrow.png";

const Navbar = () => {
  return (
    <header className="bg-[#05252C] w-full flex justify-between items-center py-3 px-6 rounded-3xl border-[#197686] border-[1px] font-jejuMyeongjo text-lg">
      <Logo />

      <ul className="hidden md:flex gap-4 text-lg">
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#" className="text-[#B3B3B3]">
            My Tickets
          </a>
        </li>
        <li>
          <a href="#" className="text-[#B3B3B3]">
            About Project
          </a>
        </li>
      </ul>

      <article>
        <Button
          type="button"
          variant="ghosted"
          className="upprecase"
          style={{
            paddingTop: "12px",
            paddingBottom: "12px",
            paddingRight: "16px",
            paddingLeft: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          My Tickets
          <span className="">
            <img src={forwardArrow} alt={forwardArrow} />
          </span>
        </Button>
      </article>
    </header>
  );
};

export default Navbar;
