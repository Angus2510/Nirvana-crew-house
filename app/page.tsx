import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1">
      <div className=" flex flex-col justify-center items-center flex-1 max-w-[50%] -mt-[210px]">
        <h1 className="text-5xl text-customColor1 justify-center flex">
          The Nirvana
        </h1>
        <h3 className="text-3xl text-customColor1 justify-center flex">
          The place to be
        </h3>
        <h6 className="text-1xl text-customColor1 justify-center flex">
          A place where work and play all work together
        </h6>
        <p className="text-sm text-customColor1 justify-center flex max-w-[55%] mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          culpa incidunt? Quidem, temporibus alias quaerat dolorem,
          reprehenderit qui nesciunt id quo suscipit culpa veritatis magni error
          eos vero corporis provident!
        </p>
      </div>
      <Image
        src="/home-1.png"
        width={772}
        height={509}
        alt="home-1"
        className="-mt-28 -ml-32"
      />
      <Image
        src="/home-2.png"
        width={403}
        height={318}
        alt="home-2"
        className="z-10 -ml-20 mt-[120px] -mb-20"
      />
    </div>
  );
}
