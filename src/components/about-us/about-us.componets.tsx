import React from "react";

export const AboutUsSection = () => {
  return (
    <div className="flex flex-col py-6 h-[1000px] justify-around gap-8 w-full bg-[#8C5230] md:h-[600px] md:flex-row">
      <div className="md:w-[600px] md:bg-[#BF9075]">
        <img
          src="image/isabelly-vitorino.png"
          className="md:w-[300px] md:h-[400px] md:ml-[150px] md:mt-20 items-center"
        />
      </div>
      <div className="flex flex-col md:w-[500px] md:flex-col justify-center items-center">
        <h1 className="text-white text-3xl text-center mt-6">Sobre mim</h1>
        <p className="mt-6 text-white">
          O que é Lorem Ipsum? Lorem Ipsum é simplesmente uma simulação de texto
          da indústria tipográfica e de impressos, e vem sendo utilizado desde o
        </p>
        <button className="w-[100px] border-2 border-[#402921] bg-[#BF9075] py-2 px-2 mt-6 rounded-md">
          Ler mais
        </button>
      </div>
    </div>
  );
};
