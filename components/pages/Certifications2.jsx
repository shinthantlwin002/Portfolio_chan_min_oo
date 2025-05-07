"use client";
import Image from "next/image";
import { motion as m } from "framer-motion";

const Certifications = () => {
  return (
    <div className="bg-[#050922]">
      <div className="container mx-auto py-10 md:py-20 px-4 md:px-0">
        <h1 className="uppercase text-2xl md:text-[60px] font-medium md:font-semibold text-center mb-10 md:mb-20 text-[#FCFFFF]">
          Certifications
        </h1>

        <div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 1 }}
            className="flex flex-col-reverse md:flex-row w-full mb-8 md:mb-4"
          >
            <div className="w-full">
              <h1 className="text-2xl font-semibold mb-4 text-start md:text-end text-[#FCFFFF]">
                Grade 10 (G-10) Completion
              </h1>
              <p className="text-start md:text-end text-[#D9D9D9]">
                I completed my Grade 10 education in October 2017, laying the
                foundation for my academic journey. This stage equipped me with
                essential knowledge across key subjects such as mathematics,
                science, English, history, geography, and social studies. It
                also helped me build strong study habits, discipline, and a
                mindset geared toward continued learning and future academic
                success.
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
                <div className="bg-[#D9D9D9] text-[#050922] text-sm font-semibold w-fit px-2 py-1 mb-2 md:mb-0 rounded-md">
                  2017-2018
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
                <div className="bg-[#D9D9D9] text-[#050922] text-sm font-semibold w-fit px-2 py-1 mb-2 md:mb-0 rounded-md">
                  2018-2019
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
              <h1 className="text-2xl font-semibold mb-4 text-start text-[#FCFFFF]">
                Diploma in MBA at WISE Collage University
              </h1>
              <p className="text-start text-[#D9D9D9]">
                I pursued a Diploma in MBA from 2018 to 2019. This program
                introduced me to the world of business and management, covering
                core areas such as organizational behavior, marketing
                strategies, business communication, finance, and leadership. It
                strengthened my understanding of how businesses operate and
                improved my ability to work in structured and goal-oriented
                environments.
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
              <h1 className="text-2xl font-semibold mb-4 text-start md:text-end text-[#FCFFFF]">
                Diploma in Computer Science at British United College
              </h1>
              <p className="text-start md:text-end text-[#D9D9D9]">
                In 2023, I began exploring the tech field by enrolling in a
                Diploma in Computer Science program. This course helped me grasp
                the basics of computer systems, programming languages,
                databases, and networking. It played a key role in developing my
                interest in technology and gave me the confidence to take on
                tech-related roles and projects, especially in UI/UX design and
                data-related tasks.
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
                <div className="bg-[#D9D9D9] text-[#050922] text-sm font-semibold w-fit px-2 py-1 mb-2 md:mb-0 rounded-md -ml-[1px]">
                  2023-2024
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
                <div className="bg-[#D9D9D9] text-[#050922] text-sm font-semibold w-fit px-2 py-1 mb-2 md:mb-0 rounded-md">
                  2024-Current
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
              <h1 className="text-2xl font-semibold mb-4 text-start text-[#FCFFFF]">
                Bachelor’s Degree in Computer Science at British United Collage
              </h1>
              <p className="text-start text-[#D9D9D9]">
                Currently, I am pursuing a Bachelor’s degree in Computer Science
                to deepen my technical knowledge and open up new career
                opportunities. This ongoing program is helping me expand on the
                fundamentals learned during my diploma studies. I’m currently
                learning more advanced topics such as software development, data
                structures, algorithms, and system design, all of which support
                my long-term goal of becoming a well-rounded IT professional.
              </p>
            </div>
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
