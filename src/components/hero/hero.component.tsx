import React from "react";

export const Hero = () => {
  return (
    <div
      className="w-full h-[250px] md:h-[350px] bg-cover bg-bottom"
      style={{
        backgroundImage: "url('image/background.jpg')",
      }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl pt-20 md:text-5xl text-white">
          Isabelly Vitorino
        </h1>
        <p className="sm:ml-32px text-white md:text-2xl">Jornalista</p>
      </div>
    </div>
  );
};
