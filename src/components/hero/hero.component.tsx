import React from "react";

export const Hero = () => {
  return (
    <div
      className="w-full h-[250px] bg-cover bg-bottom"
      style={{
        backgroundImage: "url('image/background.jpg')",
      }}
    >
      <div className="flex flex-col md:items-center">
        <h1 className="pt-20 text-5xl text-[#592F16]">Isabelly Vitorino</h1>
        <p className="text-2xl sm:ml-32px text-[#592F16]">Jornalista</p>
      </div>
    </div>
  );
};
