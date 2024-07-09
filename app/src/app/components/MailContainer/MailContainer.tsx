"use client";

import React, { useState } from "react";
import "./mailContainer.css";
import Image from "next/image";

export const MailContainer = () => {
  const [loading, isLoading] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>("confirmar-input");
  const [email, setEmail] = useState<string>("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.length < 1) {
      return;
    }
    isLoading(true);
    setInterval(() => {
      // setInputType("submetido-input")
      setInputType("ja-add-input");
    }, 1500);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
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
        value={email}
        onChange={handleEmailChange}
      />

      {inputType === "confirmar-input" && (
        <button
          type="submit"
          name="confirmar-input"
          id="confirmar-input"
          className="flex items-center justify-center bg-yellow-300 text-violet-900 font-bold text-xl p-3 w-[450px] h-[50px] rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-purple-400 hover:text-gray-50 active:bg-purple-700"
        >
          {loading ? <div className="loader"></div> : "CONFIRMAR"}
        </button>
      )}

      {inputType === "ja-add-input" && (
        <div
          id="ja-add-input"
          className="flex items-center justify-center bg-yellow-300 text-violet-900 text-xl p-8 w-[450px] h-[150px] rounded-md expand-down"
        >
          <p className="font-semibold">
            Email já adicionado à lista de espera. Em breve te avisaremos sobre
            o lançamento!
          </p>
        </div>
      )}

      {inputType === "submetido-input" && (
        <div
          id="submetido-input"
          className="bg-purple-700 text-gray-50 text-xl p-5 w-[450px] h-[150px] rounded-md cursor-pointer confirmationBtn expand-down"
        >
          <span className="flex gap-5 items-center justify-center">
            <Image
              alt="vuvuzela-1"
              src="/vuvuzela.png"
              width={20}
              height={50}
            />
            <Image
              alt="confetti-1"
              src="/confetti.png"
              width={20}
              height={50}
            />
            <p className="font-bold text-yellow-300">PARABÉNS!</p>
            <Image
              alt="vuvuzela-2"
              src="/confetti.png"
              width={20}
              height={50}
            />
            <Image
              alt="confetti-2"
              src="/vuvuzela.png"
              width={20}
              height={50}
            />
          </span>
          <p className="font-semibold w-[395px]">
            Você está a um passo de conhecer talentos incríveis!
          </p>
        </div>
      )}
    </form>
  );
};
