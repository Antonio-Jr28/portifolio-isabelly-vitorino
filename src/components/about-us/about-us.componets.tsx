import React from "react";

export const AboutUsSection = () => {
  return (
    <div className="flex flex-col py-6 h-[1000px] justify-around gap-8 w-full bg-[#bf7d2c] md:h-[600px] md:flex-row">
      <div>
        <img
          src="image/isabelly-vitorino.png"
          className="md:w-[300px] md:h-[400px] md:ml-[150px] md:mt-20 items-center"
        />
      </div>
      <div className="flex flex-col md:w-[500px] md:flex-col justify-center items-center">
        <h1 className="text-white text-3xl text-center mt-6">Sobre mim</h1>
        <p className="mt-6 p-5 text-white">
          O que é Lorem Ipsum? Lorem Ipsum é simplesmente uma simulação de texto
          da indústria tipográfica e de impressos, e vem sendo utilizado desde o
        </p>
        <button className="w-[100px] border-2 border-white bg-[#f2c879] hover:bg-[#bf7d2c] py-2 px-2 mt-6 text-white rounded-md">
          Ler mais
        </button>
      </div>
    </div>
  );
};
