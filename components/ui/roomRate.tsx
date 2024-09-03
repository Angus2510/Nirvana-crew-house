import Image from "next/image";
import React from "react";

const RoomRate = () => {
  return (
    <div className="flex justify-between items-center gap-36 mb-12 ">
      <Image
        src="/rooms1.png"
        alt="rooms"
        width={500}
        height={450}
        className="ml-36"
      />
      <div className=" flex flex-1 flex-col ">
        <h1 className="text-customColor1 text-3xl mb-4">Double Bedroom</h1>
        <p className="text-justify text-customColor1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe itaque,
          ut harum quos ab aut dolores officiis quam illum sapiente fugit
          inventore ipsa. Quo perferendis rerum eum quod inventore voluptas!
        </p>
      </div>
      <div className="flex flex-1 flex-col  text-customColor1 align-middle">
        <h1 className="text-1xl mb-4">PRICE</h1>
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
