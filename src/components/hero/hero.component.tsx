import React from "react";

export const Hero = () => {
  return (
    <div className="flex items-center justify-around bg-[#592f16]">
      <img
        src="image/isabelly-vitorino.png"
        alt="Descrição da imagem"
        className="w-64 h-64 object-contain"
      />
      <div className="flex flex-col md:items-end">
        <h1 className="text-4xl text-[#d9b29c]">Isabelly Vitorino</h1>
        <p className="text-xl sm:ml-32px text-[#d9b29c]">Jornalista</p>
      </div>
    </div>
  );
};
