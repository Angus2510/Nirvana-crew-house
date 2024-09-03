import React from "react";
import RoomRate from "@/components/ui/roomRate";
import RoomRate2 from "@/components/ui/roomRate2";

const Rooms = () => {
  return (
    <div>
      <h1 className="text-5xl text-customColor1 ml-60 mb-20 -mt-24">
        Room types and Rates
      </h1>
      <RoomRate />
      <RoomRate2 />
    </div>
  );
};

export default Rooms;
