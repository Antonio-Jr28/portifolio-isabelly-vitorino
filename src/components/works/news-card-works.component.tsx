import React from "react";

interface NewsCardProps {
  label: string,
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
    <div className="flex flex-col items-start p-6 bg-[#A66329] border border-[#F2C879]">
      <img src={imageSrc} alt={title} className="w-[500px] h-[150px]" />
      <label>{label}</label>
      <h1 className="text-2xl text-start text-white">{title}</h1>
      <p className="w-auto ">{content}</p>
      <button className="w-52 border ">Ler mais</button>
    </div>
  );
};
