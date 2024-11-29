import React from "react";

export const Hero = () => {
  return (
    <div
      className="w-full h-[250px] bg-cover bg-bottom"
      style={{
        backgroundImage: "url('image/background.jpg')",
      }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl pt-20 md:text-5xl text-[#592F16]">Isabelly Vitorino</h1>
        <p className="sm:ml-32px text-[#592F16] md:text-2xl">Jornalista</p>
      </div>
    </div>
  );
};
