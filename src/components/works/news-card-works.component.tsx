import React from "react";

interface NewsCardProps {
  imageSrc: string;
  title: string;
  content: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  imageSrc,
  title,
  content,
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-[#A66329] border border-[#F2C879]">
      <img src={imageSrc} alt={title} className="w-[500px] h-[150px]" />
      <h1 className="text-2xl text-center text-white">{title}</h1>
      <p className="w-[420px] text-center p-2">{content}</p>
      <button className="w-52 border text-center">Ler mais</button>
    </div>
  );
};
