import React from "react";

const Footer = () => {
  return (
    <footer className="py-[66px] bg-black min-h-[326px] flex">
      <div className="flex md:flex-row md:gap-0 gap-20 flex-col justify-between flex-1 max-w-screen-1440px mx-auto lg:pl-[106px] lg:pr-[270px] md:px-16 sm:px-12 px-4">
        <div className="flex flex-col justify-between">
          <img src="/footer.gif" alt="" />
          <p className="textwhite text-sm">© 2010 — 2020</p>
        </div>
        <div className="flex-1 flex md:justify-end lg:gap-20 md:gap-12 gap-10">
          <div className="flex flex-col gap-6">
            <h5 className="text-sm text-white font-bold">Navigate</h5>
            <div className="flex flex-col gap-4">
              <span className="text-white text-sm">Loft Buildings</span>
              <span className="text-white text-sm">Neighborhoods</span>
              <span className="text-white text-sm">Articles</span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="text-sm text-white font-bold">Legal</h5>
            <div className="flex flex-col gap-4">
              <span className="text-white text-sm">Terms & Conditions</span>
              <span className="text-white text-sm">Privacy Policy</span>
              <span className="text-white text-sm">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
