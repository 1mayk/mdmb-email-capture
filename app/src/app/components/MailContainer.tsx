"use client";

import React from "react";

export const MailContainer = () => {
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("oi");
  };

  return (
    <form
      className="font-inter flex flex-col items-center gap-5"
      onSubmit={(e) => sendEmail(e)}
    >
      <input
        type="email"
        className="text-neutral-900 text-xl p-3 w-[450px] h-[50px] rounded-md"
        name="email-input"
        id="email-input"
        placeholder="Email"
      />
      {/* <input
        type="submit"
        value="CONFIRMAR"
        name="ja-add-input"
        id="ja-add-input"
        className="bg-yellow-300 text-violet-900 font-bold text-xl p-3 w-[450px] h-[50px] rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-purple-400 hover:text-gray-50 active:bg-purple-700"
      /> */}
      <input
        type="submit"
        value="CONFIRMAR"
        name="submetido-input"
        id="submetido-input"
        className="bg-yellow-300 text-violet-900 font-bold text-xl p-3 w-[450px] h-[50px] rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-purple-400 hover:text-gray-50 active:bg-purple-700"
      />
      <input
        type="submit"
        value="CONFIRMAR"
        name="confirmar-input"
        id="confirmar-input"
        className="bg-yellow-300 text-violet-900 font-bold text-xl p-3 w-[450px] h-[50px] rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-purple-400 hover:text-gray-50 active:bg-purple-700"
      />
    </form>
  );
};
