import React from "react";

interface NewsCardProps {
  label: string;
  imageSrc: string;
  title: string;
  content: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  label,
  imageSrc,
  title,
  content,
}) => {
  return (
    <div className="p-6 bg-[#A66329] border border-[#F2C879]">
      <div className="flex flex-col items-start">
        <img src={imageSrc} alt={title} className="w-[500px] h-[150px]" />
        <label>{label}</label>
        <h1 className="text-2xl text-white">{title}</h1>
        <p className="w-auto ">{content}</p>
      </div>
      <div className="flex flex-col items-center">
        <button className="w-52 border-2 mt-3 border-white bg-[#f2c879] hover:bg-[#bf7d2c] ">
          Ler mais
        </button>
      </div>
    </div>
  );
};
