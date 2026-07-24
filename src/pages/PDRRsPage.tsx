import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import heroAboutImg from "../assets/hero-about.jpg";
import samuelImg from "../assets/PDRRS/samuel.png";
import reginaImg from "../assets/PDRRS/regina.png";
import andrewsImg from "../assets/PDRRS/andrews.png";
import fredImg from "../assets/PDRRS/fred.png";
import dennisImg from "../assets/PDRRS/dennis.png";
import jeanneImg from "../assets/PDRRS/jeanne.png";
import oliveImg from "../assets/PDRRS/olive.png";
import cyrilImg from "../assets/PDRRS/cyril.png";


interface PDRRItem {
  name: string;
  year: string;
  district: string;
  email?: string;
  image: string;
}

const pdrrs: PDRRItem[] = [
  {
    name: "Samuel Owusu Darko",
    year: "2013-14 Rotary Year",
    district: "District 9102",
    email: "samuel.owusu.darko@gmail.com",
    image: samuelImg,
  },
  {
    name: "Regina",
    year: "2016/2017 Rotary Year",
    district: "Rotary District 9102",
    image: reginaImg,
  },
  {
    name: "Andrews Ofosuhene",
    year: "2018-19 Rotary Year",
    district: "District 9104",
    image: andrewsImg,
  },
  {
    name: "Cyril Brown",
    year: "2021-22 Rotary Year",
    district: "District 9104",
    image: cyrilImg,
  },
  {
    name: "Fred Asante",
    year: "2022-23 Rotary Year",
    district: "District 9102",
    image: fredImg,
  },
  {
    name: "Dennis Kojo Amakye",
    year: "2023-24 Rotary Year",
    district: "District 9104",
    image: dennisImg,
  },
  {
    name: "Dr. Jeanne Solange Adjo Kegou",
    year: "2024-25 Rotary Year",
    district: "District 9104",
    image: jeanneImg,
  },
  {
    name: "Olive Naa Asheley Addo",
    year: "2025-26 Rotary Year",
    district: "District 9104",
    image: oliveImg,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AnimatedTimelineItem = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const PDRRsPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* <PageHero
      breadcrumb="About"
      title="Council Past District Rotaract Representatives"
      subtitle="A flowing timeline of the leaders who carried the mantle of service before us"
      image={heroAboutImg}
    /> */}

    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Past District Rotaract Representatives"
          subtitle="Honouring the council leaders whose vision and service shaped the district"
        />

        <div className="relative mt-10">
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary via-accent600 to-secondary md:block" />

          <div className="space-y-10 md:space-y-14">
            {pdrrs.map((person, index) => (
              <AnimatedTimelineItem key={person.name}>
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                  <div className={`relative md:w-[calc(50%-1.5rem)] ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                    <div
                      className={`absolute top-8 hidden h-5 w-5 rounded-full border-4 border-white bg-accent600 shadow-lg md:block ${
                        index % 2 === 0 ? "right-0 -translate-x-1/2" : "left-0 translate-x-1/2"
                      }`}
                    />

                    <motion.div
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 220, damping: 18 }}
                      className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70"
                    >
                      <div className="flex flex-col gap-5 md:flex-row md:items-center">
                        <div className="flex-shrink-0 mx-auto md:mx-0">
                          <img
                            src={person.image}
                            alt={person.name}
                            className="h-56 w-40 rounded-2xl object-cover shadow-md ring-4 ring-white"
                          />
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent600">
                            {person.year}
                          </p>
                          <h3 className="mt-2 text-2xl font-bold text-primary">{person.name}</h3>
                          <p className="mt-2 text-base font-semibold uppercase tracking-wide text-slate-800">
                            Past District Rotaract Representative
                          </p>
                          <div className="mt-4 space-y-2 text-sm text-slate-600">
                            <p>
                              <span className="font-semibold text-slate-800">District:</span> {person.district}
                            </p>
                            {person.email && (
                              <p>
                                <span className="font-semibold text-slate-800">Email:</span> {person.email}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </AnimatedTimelineItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  </motion.div>
);

export default PDRRsPage;
