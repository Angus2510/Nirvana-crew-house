import Image from "next/image";
import React from "react";

const RoomRate = () => {
  return (
    <div className="flex flex-1 gap-12 mb-16 justify-stretch align-center">
      <Image
        src="/rooms1.png"
        alt="rooms"
        width={453}
        height={393}
        className="ml-10"
      />
      <div className=" flex flex-1 flex-col">
        <h1 className="text-customColor1 text-3xl">Double Bedroom</h1>
        <p className="text-justify text-customColor1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe itaque,
          ut harum quos ab aut dolores officiis quam illum sapiente fugit
          inventore ipsa. Quo perferendis rerum eum quod inventore voluptas!
        </p>
      </div>
      <div className="flex flex-1 flex-col  text-customColor1">
        <h1 className="text-1xl">PRICE</h1>
        <ul>
          <li>R 1000</li>
          <li>R 1000</li>
          <li>R 1000</li>
        </ul>
      </div>
    </div>
  );
};

export default RoomRate;
