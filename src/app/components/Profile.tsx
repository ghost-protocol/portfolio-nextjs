import Image from "next/image";

const experiences = [
  {
    id: "1",
    name: "Schneider Electric",
    location: "Doha, Qatar",
    jobTitle: "Senior OT SOC Analyst",
    duration: "August 2023 - Present",
    description:
      "Monitoring, triaging and response for ICS/OT security events across multiple sites within the country \
      Utilized Security Orchestration, Automation and Response mechanisms for effective incident management \
      Performing threat and vulnerability research across event data collected by systems and communicating risks, and effective \
      escalations with site leads and management."
  },
  {
    id: "2",
    name: "Fidelity Bank Ghana Ltd.",
    location: "Accra, Ghana",
    jobTitle: "Manager, Information Security Operations",
    duration: "Jan 2023 - Aug 2023",
    description:
      "Directed, mentored, trained, and conducted performance reviews for all SOC team members \
      Contributed to security design forums to enforce security-first standards and to harden public-facing systems \
      Improved SOC 3 metrics in the area of MTTR, MTTD, log visibility reach. \
      Provided technical and executive reports covering the operations of the unit and the threat landscape",
  },
  {
    id: "3",
    name: "GCB Bank PLC",
    location: "Accra, Ghana",
    jobTitle: "Lead, Cyber Security Engineer",
    duration: "Aug 2021 - Dec 2022",
    description:
      "Identified potential risks by deploying and managing security tools such as Crowdstrike, M365 Defender, DarkTrace, malware sandbox.\
       Deployed security-centric projects such as forensic and malware analysis lab for effective intrusion defense."
  },
  {
    id: "4",
    name: "Ecobank/Eprocess",
    location: "Accra, Ghana",
    jobTitle: "Threat Response & Forensic Specialist",
    duration: "Jul 2019 - Jul 2021",
    description:
      "Managed and high-impact incidents such as Phishing, Ransomware, crypto mining etc., end-to-end by conducting network, memory, and filesystem forensic analysis.\
      Improved situational awareness of response teams by 95% by conducting threat simulations and building playbooks.\
      Authored IR reports, highlighting intrusions and working towards remediations with SMEs",
  },
  {
    id: "5",
    name: "Ecobank/Eprocess",
    location: "Accra, Ghana",
    jobTitle: "Cyber Security Analyst",
    duration: "Jan 2017 - Jul 2019",
    description:
      "Triaged and analyzed security logs using SIEM, AV, Firewall, IDS/IPS, EDR, and Cloud, consistently achieving all SLA goals.\
      Utilized Security Orchestration, Automation, and Response (SOAR) to improve incident closure by 80%.\
      Enhanced visibility of critical banking assets, logs, and sensor health states on detection systems by 97%.",
  },
  {
    id: "6",
    name: "Ecobank/Eprocess",
    location: "Accra, Ghana",
    jobTitle: "Technical Support Engineer",
    duration: "Jan 2011 - Jan 2017",
    description:
      "Worked on various card payments management projects, such as PCIDSS, 3DSecure, web payment integration, EMV migration, transaction monitoring.\
      Implemented effective fraud logic that minimized card fraud by 95%. Optimized support and monitoring workflow by building effective scripts."
  },
  {
    id: "7",
    name: "Freelance/Contract",
    location: "Remote",
    jobTitle: "Full Stack Engineer",
    duration: "Jan 2015 - Present",
    description:
      "Worked with clients on various web projects, designing, building and implementing new features as well as improving the functionality, security and performance of web applications.",
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
              <h3 className="text-xl font-bold">{data.jobTitle}<span style={{color: '#FF916B'}}>  @{data.name}</span></h3>
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