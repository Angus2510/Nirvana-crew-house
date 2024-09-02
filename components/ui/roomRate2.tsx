import React from "react";
import Image from "next/image";

const RoomRate2 = () => {
  return (
    <div className="flex flex-row gap-5 mb-11">
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
      <Image src="/rooms1.png" alt="rooms" width={453} height={393} />
    </div>
  );
};

export default RoomRate2;
