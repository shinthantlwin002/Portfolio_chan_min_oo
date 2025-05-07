"use client";
import Image from "next/image";
import { motion as m } from "framer-motion";

const Experiences2 = () => {
  return (
    <div className="bg-[#050922] py-10 md:py-20 px-4 md:px-10 lg:px-20">
      <h1 className="uppercase text-2xl md:text-3xl font-medium md:font-semibold text-center mb-10 md:mb-20 text-[#FCFFFF]">
        Experiences
      </h1>

      <div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
          className="flex flex-col-reverse md:flex-row w-full mb-8 md:mb-4"
        >
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-1 text-start md:text-end text-[#FCFFFF]">
              Assistant Manager
            </h1>
            <h1 className="text-lg mb-4 text-start md:text-end text-[#D9D9D9]">
              King Throne Car Rental
            </h1>
            <p className="text-start md:text-end text-[#D9D9D9] text-sm">
              From 2019 to 2021, I worked as an Assistant Manager at King Throne
              Car Rental. My responsibilities included overseeing daily
              operations, managing staff schedules, handling customer service
              issues, and ensuring the smooth coordination of car rental
              services. This role strengthened my leadership, communication, and
              problem-solving skills in a fast-paced, customer-facing
              environment.
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center w-[10%] max-md:hidden">
            <Image
              src="/icons/check-circle-white.svg"
              alt="check-circle"
              width={30}
              height={30}
            />

            <hr className="h-[180px] border border-[#D9D9D9]" />
          </div>
          <div className="w-full">
            <div className="flex items-center">
              <Image
                src="/icons/arrow-fill-white.svg"
                alt="check-circle"
                width={10}
                height={10}
                className="rotate-180 max-md:hidden"
              />
              <div className="bg-[#D9D9D9] hover:bg-white text-[#050922] text-sm font-semibold w-fit px-2 py-1 mb-2 md:mb-0 rounded-md">
                2019 - 2021
              </div>
            </div>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="flex flex-col md:flex-row gap-2 md:gap-0 w-full mb-8 md:mb-4"
        >
          <div className="w-full">
            <div className="flex items-center justify-start md:justify-end">
              <div className="bg-[#D9D9D9] hover:bg-white text-[#050922] text-sm font-semibold w-fit px-2 py-1 mb-2 md:mb-0 rounded-md">
                2022 - 2024
              </div>
              <Image
                src="/icons/arrow-fill-white.svg"
                alt="check-circle"
                width={10}
                height={10}
                className="max-md:hidden"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center w-[10%] max-md:hidden">
            <Image
              src="/icons/check-circle-white.svg"
              alt="check circle white"
              width={30}
              height={30}
            />
            <hr className="h-[180px] border border-[#D9D9D9]" />
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-1 text-start text-[#FCFFFF]">
              Freelance UI/UX Designer
            </h1>
            <h1 className="text-lg mb-4 text-start text-[#D9D9D9]">
              Freelance
            </h1>
            <p className="text-start text-[#D9D9D9] text-sm">
              In 2022, I shifted my focus to UI/UX design, where I specialized
              in creating user-friendly and visually appealing interfaces. I
              collaborated with teams to design web and mobile applications that
              offered intuitive user experiences, blending creativity with
              functionality.
            </p>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex flex-col-reverse md:flex-row gap-2 md:gap-0 w-full mb-8 md:mb-4"
        >
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-1 text-start md:text-end text-[#FCFFFF]">
              Freelance Photographer
            </h1>
            <h1 className="text-lg mb-4 text-start md:text-end text-[#D9D9D9]">
              Freelance
            </h1>
            <p className="text-start md:text-end text-[#D9D9D9] text-sm">
              Alongside my design work, I also pursued freelance photography. I
              worked on various projects and events, capturing meaningful
              moments and honing my visual storytelling and editing skills. This
              creative outlet further supported my eye for design and detail.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center w-[10%] max-md:hidden">
            <Image
              src="/icons/check-circle-white.svg"
              alt="check-circle"
              width={30}
              height={30}
            />
            <hr className="h-[180px] border border-[#D9D9D9]" />
          </div>
          <div className="w-full">
            <div className="flex items-center">
              <Image
                src="/icons/arrow-fill-white.svg"
                alt="arrow fill"
                width={10}
                height={10}
                className="rotate-180 max-md:hidden"
              />
              <div className="bg-[#D9D9D9] hover:bg-white text-[#050922] text-sm font-semibold w-fit px-2 py-1 mb-2 md:mb-0 rounded-md -ml-[1px]">
                2022 - 2024
              </div>
            </div>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="flex flex-col md:flex-row gap-2 md:gap-0 w-full mb-8 md:mb-4"
        >
          <div className="w-full">
            <div className="flex items-center justify-start md:justify-end">
              <div className="bg-[#D9D9D9] hover:bg-white text-[#050922] text-sm font-semibold w-fit px-2 py-1 mb-2 md:mb-0 rounded-md">
                2025 - Current
              </div>
              <Image
                src="/icons/arrow-fill-white.svg"
                alt="check-circle"
                width={10}
                height={10}
                className="max-md:hidden"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center w-[10%] max-md:hidden">
            <Image
              src="/icons/check-circle-white.svg"
              alt="check circle white"
              width={30}
              height={30}
            />
            <hr className="h-[180px] border border-[#D9D9D9]" />
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-1 text-start text-[#FCFFFF]">
              Data Entry/Document Reviewer
            </h1>
            <h1 className="text-lg mb-4 text-start text-[#D9D9D9]">
              Dauntless Discovery Internationals (USA)
            </h1>
            <p className="text-start text-[#D9D9D9] text-sm">
              Currently, I’m working in data entry and document review at
              Dauntless Discovery Internationals (USA). I handle large volumes
              of information, ensuring data accuracy and consistency while
              reviewing documents for completeness and compliance. This position
              has sharpened my attention to detail and organizational abilities.
            </p>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default Experiences2;
