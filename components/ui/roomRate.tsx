import Image from "next/image";
import React from "react";

const RoomRate = () => {
  return (
    <div className="flex flex-row gap-5">
      <Image src="/rooms1.png" alt="rooms" width={453} height={393} />
      <div className=" flex flex-1 flex-col">
        <h1>Double Bedroom</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe itaque,
          ut harum quos ab aut dolores officiis quam illum sapiente fugit
          inventore ipsa. Quo perferendis rerum eum quod inventore voluptas!
        </p>
      </div>
      <div className="flex flex-1 flex-col">
        <h1>PRICE</h1>
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
