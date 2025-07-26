import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{' '}
          <span className="text-slideGreen dark:text-primaryDark">
            @{company}
          </span>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm mb-2">
          {time} | {address}
        </span>
        <div className="font-medium w-full md:text-sm">
          {work}
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Developer"
            company="Agro Tech"
            time="2025 - Present"
            address="somewhere"
            work={
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Contribute to the development and maintenance of critical mobile and cloud solutions, playing a key role in delivering advanced tools for agricultural operations</li>
                <li>
                  <span className="font-medium">Android App Development (Drone Management):</span> Maintained and significantly extended a core Android application for drone management and control, encompassing functionalities from route planning to flight configurations and real-time operational oversight
                </li>
                <li>
                  <span className="font-medium">Cloud Platform Development:</span> Actively building a new cloud-based Drone Software and Management Platform, contributing to its architecture and implementation to support scalable and robust drone operations data
                </li>
                <li>
                  <span className="font-medium">Logistics Application:</span> Developed a dedicated mobile application for tracking and planning truck routes and schedules for essential agricultural activities, such as animal feeding, optimizing operational efficiency
                </li>
              </ul>
            }
          />

          <Details
            position="IT Specialist"
            company="A.G.E Electronics"
            time="2020 - 2024"
            address="Somewhere"
            work={
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Served as an IT Specialist responsible for maintaining and troubleshooting computer systems and networks</li>
                <li>Ensured smooth operation of IT infrastructure, including servers, printers, and other hardware devices</li>
                <li>Collaborated with cross-functional teams to resolve technical issues and enhance system performance</li>
                <li>Contributed to maintaining the reliability and efficiency of IT systems, boosting organizational productivity</li>
              </ul>
            }
          />
          <Details
            position="Webmaster"
            company="La Vida Chic"
            time="2016 - 2024"
            address="Somewhere"
            work={
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Developed and maintained an e-commerce website.</li>
                <li>Implemented and optimized SEO strategies to improve search engine rankings and drive traffic to the website.</li>
                <li>Analyzed website traffic and user behavior data to identify areas for improvement and to optimize website performance.</li>
              </ul>
            }
          />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>
        <Link
          href="/articles/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Articles
        </Link>
      </div>
    </div>
  );
};

export default Experience;
