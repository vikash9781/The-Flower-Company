import React from "react";
import { ImWhatsapp } from "react-icons/im";

const ContactUsBtn = () => {
  return (
    <>
      <button className="fixed top-[90vh] z-50 bg-green-700 text-white h-[2rem] w-[160px] py-1 rounded-[100px] text-sm">
        <span className="flex items-center justify-center gap-2">
          <ImWhatsapp />
          Chat With Us
        </span>
      </button>
    </>
  );
};

export default ContactUsBtn;
