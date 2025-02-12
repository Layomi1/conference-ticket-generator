import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <section className="bg-[#02191D] w-full py-[10px] px-[27.5px] min-h-screen md:py-[27px] md:px-[115px] text-white flex flex-col gap-[10px]">
      <Navbar />
      <Main />
    </section>
  );
}

export default App;
