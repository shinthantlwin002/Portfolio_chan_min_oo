import { User2, CalendarDays, CircleCheckBig } from "lucide-react";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <div className="bg-[#050922]">
      <div className="flex flex-col-reverse md:flex-row items-center gap-20 container mx-auto py-20">
        {/* left content */}
        <div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 1 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="bg-[#D9D9D9] w-1 h-6 md:h-10 shadow-[0px_0px_20px_4px_rgba(200,221,235,1)] shadow-white rounded-full"></div>
            <h1 className="text-white text-lg md:text-xl lg:text-3xl font-semibold uppercase">
              About me
            </h1>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex flex-wrap gap-4 md:gap-6 lg:gap-10 mb-8 md:mb-12"
          >
            <div className="flex items-center gap-2">
              <User2 color="#329EEB" size={24} />
              <div>
                <p className="text-white text-sm md:text-md font-medium uppercase">
                  Age
                </p>
                <p className="text-white text-xs md:text-sm">23 Years</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays color="#E95CFF" size={24} />
              <div>
                <p className="text-white text-sm md:text-md font-medium uppercase">
                  Experience
                </p>
                <p className="text-white text-xs md:text-sm">5 Years</p>
              </div>
            </div>
          </m.div>

          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xs md:text-sm font-light text-white mb-2 md:mb-4"
          >
            I'm Chan Min Oo, a dedicated and detail-oriented professional with a
            diverse background in assistant management, UI/UX design, freelance
            photography, and data entry.
          </m.p>
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xs md:text-sm font-light text-white mb-2 md:mb-4"
          >
            Over the years, I’ve developed strong organizational, creative, and
            technical skills by working across different industries. I began my
            career in operations as an Assistant Manager at King Throne Car
            Rental, where I gained hands-on experience in team coordination and
            customer service. Later, I transitioned into the digital space as a
            UI/UX designer and freelance photographer, combining creativity with
            user-focused design.
          </m.p>
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xs md:text-sm font-light text-white mb-6 md:mb-8"
          >
            Currently, I work in data entry and document review, where precision
            and consistency are key. I'm passionate about learning new things
            and constantly improving myself through practical experience.
          </m.p>

          <m.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="bg-[#01B2F6] text-[#050922] uppercase text-sm md:text-base font-medium px-3 py-2 rounded-md"
          >
            <a href="#contact">Hire me</a>
          </m.button>
        </div>
        {/* left content end */}

        {/* right content */}
        <m.div
          initial={{ y: 10 }}
          animate={{ y: [10, 0, 10] }} // Cycling between two values
          transition={{
            duration: 2, // Adjust speed of bounce
            repeat: Infinity, // Infinite bounce
            repeatType: "reverse", // Reverses the motion smoothly
            ease: "easeInOut", // Makes it smoother
          }}
        >
          <img
            src="/icons/data-entry.svg"
            alt="check-circle"
            width={1000}
            height={1000}
          />
        </m.div>
        {/* right content end */}
      </div>
    </div>
  );
};

export default About;
