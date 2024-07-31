import Image from "next/image";
import Hero from './components/Hero';
// import security from ''
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


import Head from 'next/head';
 
export default function Home () {
  return (
      <main className="max-w-7xl mx-auto lg:px-16 px-6">
        <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
            <div className="lg:max-w-2xl max-w-2xl">

              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
              Cybersecurity specialist, software engineer, and technology enthusiast
              </h1>

              <p className="text-base text-zinc-400 leading-relaxed">
              I&apos;m Kwame Davour, a passionate cybersecurity expert, app developer with a knack for problem-solving.
              I love building and maintaining apps, constantly seeking innovative ways to secure business and individuals.
              </p>
              <br />
              <p className="text-base text-zinc-400 leading-relaxed">Over the past decade, I have worked and consulted for firms in the financial and energy sectors across Africa and the Middle East. 
              My roles included monitoring networks and investigating computer fraud. 
              I have protected critical systems and helped clients implement secure measures to guard against advanced persistent threats and respond to security breaches.
              </p>
              <ul className="flex items-center gap-x-6 my-10">
                    <li> 
                      <a
                        href="https://www.linkedin.com/in/kwamedavour/"
                        rel="noreferer noopener"
                        className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300">
                          <FaLinkedin style={{color: 'white', fontSize: '40px'}}/>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        rel="noreferer noopener"
                        className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
                      ><FaGithubSquare style={{color: 'white', fontSize: '40px'}}/>
                      </a>
                    </li>
                    
                    <li>
                    <a
                      href={'mailto:kwamedavou@gmail.com'}
                      className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
                    ><MdOutlineEmail style={{color: 'white', fontSize: '40px'}}/>Email Me
                    </a>
                  </li>
              </ul>
            </div>
            <Image
              src='/security.png'
              width={450}
              height={450}
              alt=""
              // className="bg-zinc-800 rounded-md p-2"
            />
            {/* software_security.png */}
        </section>
        
        <section className="mt-10 max-w-2xl ">
          
              <h2 className="font-semibold text-4xl mb-4">Expertise</h2>
                <h2 className="font-semibold text-2xl mb-4">Cyber Security</h2>
              {/* <p className="text-zinc-400 max-w-lg"></p> */}

              <ul className="flex flex-wrap items-center gap-3 mt-8">
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Incident Response</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Digital Forensics</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Managed Security Provider</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Malware</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Hacking</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Threat Hunting</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Threat Intelligence</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Security Assessment & Testing</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Security Operations</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Vulnerability Management</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Cyber Risk</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Software Security</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">OT/ICS/SCADA Security</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Security Engineering</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Network Security</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Identity Security</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Payment Security</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Social Media Security</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Projects</li>
                  <li key="" className="bg-[#da6d00] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Consulting</li>
              </ul>
              
          </section>
            
            <section className="mt-10 max-w-2xl">
              <h2 className="font-semibold text-2xl mb-4">Software Engineering</h2>
              {/* <p className="text-zinc-400 max-w-lg"></p> */}

              <ul className="flex flex-wrap items-center gap-3 mt-8">
                  <li key="" className="bg-[#b05800] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Web Development</li>
                  <li key="" className="bg-[#b05800] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">HTML</li>
                  <li key="" className="bg-[#b05800] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">CSS</li>
                  <li key="" className="bg-[#b05800] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">JavaScript</li>
                  <li key="" className="bg-[#b05800] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Next.js</li>
                  <li key="" className="bg-[#b05800] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Tailwind CSS</li>
                  <li key="" className="bg-[#b05800] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Python</li>
                  <li key="" className="bg-[#b05800] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Django</li>
                  <li key="" className="bg-[#b05800] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">SQL</li>
                  <li key="" className="bg-[#b05800] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">API</li>
                  <li key="" className="bg-[#b05800] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Agile</li>
                  <li key="" className="bg-[#b05800] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">App Projects</li>
              </ul>
            </section>

            <section className="mt-10 max-w-2xl">
              <h2 className="font-semibold text-2xl mb-4">Others</h2>
              {/* <p className="text-zinc-400 max-w-lg"></p> */}

              <ul className="flex flex-wrap items-center gap-3 mt-8">
                  <li key="" className="bg-[#804000] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Card Payment</li>
                  <li key="" className="bg-[#804000] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">PCIDSS</li>
                  <li key="" className="bg-[#804000] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Linux Administration</li>
                  <li key="" className="bg-[#804000] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Software Support</li>
                  <li key="" className="bg-[#804000] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">Tech Mentoring</li>
              </ul>
            </section>
    </main>
    );
};