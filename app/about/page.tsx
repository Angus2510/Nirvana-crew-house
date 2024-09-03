import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-5xl text-customColor1 ml-60 mb-20 -mt-24">
        About Us
      </h1>
      <div className="flex justify-center -mt-10 mb-16 ">
        <Image
          src="/about-img.png"
          width={1055}
          height={232}
          alt="about image"
        />
      </div>
      <div className="flex gap-10 justify-around">
        <div className="flex flex-col text-center  text-customColor1">
          <h1 className="font-semibold text-2xl mb-4">About The Nirvana</h1>
          <p className=" text-center w-[80%] ml-14 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            impedit ipsam corporis non adipisci deleniti? Ut hic facere ex,
            repellat illum odio debitis officia blanditiis placeat quae cumque
            inventore officiis! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Exercitationem maiores aperiam, quia delectus
            voluptatem voluptatibus ea. Nobis unde tempora doloremque laboriosam
            aliquam dignissimos odio, officiis ea consectetur quis asperiores
            aut.
          </p>
        </div>
        <div className="flex flex-col text-center  text-customColor1 ">
          <h1 className="font-semibold text-2xl mb-4">
            What's in and around the area
          </h1>
          <p className="w-[80%] text-center ml-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            placeat tempora, quos numquam voluptatum expedita iusto cupiditate
            voluptas aliquid provident eligendi nobis ducimus eaque voluptatibus
            fugiat molestiae nisi pariatur animi! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Beatae delectus autem, repellat
            ratione consequatur hic maxime ipsam voluptatem eius, totam deserunt
            dicta obcaecati labore atque. Accusantium quidem sit excepturi
            ullam.
          </p>
        </div>
      </div>

      <div className="flex justify-center  text-customColor1">
        <h1 className="font-semibold text-2xl mt-20">
          Location<span></span>
        </h1>
      </div>
    </div>
  );
};

export default About;
