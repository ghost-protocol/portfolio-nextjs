import Image from "next/image";

const experiences = [
  {
    id: "1",
    name: "Schneider Electric",
    location: "Doha, Qatar",
    jobTitle: "Senior OT SOC Analyst",
    duration: "August 2023 - Present",
    description:
      "Worked on various front-end and back-end projects, improving the functionality and performance of web applications, and collaborating with senior developers to implement new features.",
  },
  {
    id: "2",
    name: "Fidelity Bank Ghana Ltd.",
    location: "Accra, Ghana",
    jobTitle: "Manager, Information Security Operations",
    duration: "Jan 2023 - Aug 2023",
    description:
      "Worked on various front-end and back-end projects, improving the functionality and performance of web applications, and collaborating with senior developers to implement new features.",
  },
  {
    id: "3",
    name: "GCB Bank PLC",
    location: "Accra, Ghana",
    jobTitle: "Lead, Cyber Security Engineer",
    duration: "Aug 2021 - Dec 2022",
    description:
      "Worked on various front-end and back-end projects, improving the functionality and performance of web applications, and collaborating with senior developers to implement new features.",
  },
  {
    id: "4",
    name: "Ecobank/Eprocess",
    location: "Accra, Ghana",
    jobTitle: "Threat Response & Forensic Specialist",
    duration: "Jul 2019 - Jul 2021",
    description:
      "Worked on various front-end and back-end projects, improving the functionality and performance of web applications, and collaborating with senior developers to implement new features.",
  },
  {
    id: "5",
    name: "Ecobank/Eprocess",
    location: "Accra, Ghana",
    jobTitle: "Cyber Security Analyst",
    duration: "Jan 2017 - Jul 2019",
    description:
      "Worked on various front-end and back-end projects, improving the functionality and performance of web applications, and collaborating with senior developers to implement new features.",
  },
  {
    id: "6",
    name: "Ecobank/Eprocess",
    location: "Accra, Ghana",
    jobTitle: "Technical Support Engineer",
    duration: "Jan 2011 - Jan 2017",
    description:
      "Worked on various front-end and back-end projects, improving the functionality and performance of web applications, and collaborating with senior developers to implement new features.",
  },
  {
    id: "7",
    name: "Freelance/Contract",
    location: "Remote",
    jobTitle: "Web Developer",
    duration: "Jan 2011 - Present",
    description:
      "Worked on various front-end and back-end projects, improving the functionality and performance of web applications, and collaborating with senior developers to implement new features.",
  },
];

export default async function Profile() {

  return (
    <section id="about" className="mt-10">
      
      <h2 className="font-semibold text-4xl mb-4">Experience</h2>

      <div className="flex flex-col gap-y-12">
        {experiences.map((data) => (
          <div
            key={data.id}
            // className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
            className="flex items-start lg:gap-x-6 gap-x-4 relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-4 before:w-[1px] before:h-[calc(100%-70px)] before:bg-zinc-800"
          >
            <a
              href=""
              rel="noreferrer noopener"
              className="min-h-[30px] min-w-[30px] rounded-md overflow-clip relative"
            >
              <Image
                src="/icon-1.png"
                className="object-cover"
                alt=""
                fill
              />
            </a>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">{data.jobTitle} <span style={{color: '#FF916B'}}>@{data.name}</span></h3>
              <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
              {data.location} | {data.duration}
              </small>
              <p className="text-base text-zinc-400 my-4">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <br />
      <br />
      
      <h2 className="font-semibold text-4xl mb-4">Education</h2>

      <div className="flex flex-col gap-y-12">
          <div
            className="flex items-start lg:gap-x-6 gap-x-4"
          > 
           <a
              rel="noreferrer noopener"
              className="min-h-[30px] min-w-[30px] rounded-md overflow-clip relative"
            >
              <Image
                src="/icon-1.png"
                className="object-cover"
                alt=""
                fill
              />
            </a>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">Bachelor of Science in Information Technology</h3>
              <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
              Bluecrest College. Accra, Ghana | 2016-2020
              </small>
              
              <p className="text-base text-zinc-400 my-4">Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.</p>
            </div>
          </div>
      </div>     
      <br />
      <br />
      <h2 className="font-semibold text-4xl mb-4">Certifications</h2>

      <ul className="flex flex-wrap items-center gap-3 mt-8">
        <li className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Certified Information Systems Security Professional (CISSP)</li>
        <li className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">GIAC/SANS Certified Forensic Analyst (GCFA)</li>
        <li className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">ISO/IEC Lead Incident Manager</li>
        <li className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Certified Ethical Hacker (CEH)</li>
        <li className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Nozomi Networks Certified Technical Sales Professional</li>
        <li className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">API Penetration Testing</li>
        <li className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Info. Technology Infrastructure Library (ITIL)</li>
        <li className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Python Programming</li>
        <li className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Unix Tools: Data, Software & Production Engineering</li>
        <li className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">PRINCE2 Project Management</li>
      </ul>
    </section>
   
  );

}