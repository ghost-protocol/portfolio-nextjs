import Image from "next/image";
import Profile from '../components/Profile';
import { BiEnvelope, BiFile } from "react-icons/bi";

export default function About() {
  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
        <div>
            <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
                  I'm Kwame Davour
                </h1>
                <div className="flex flex-col gap-y-3 text-zinc-400 leading-relaxed">
                <p>Over the past several years, I have been working and consulting for firms in the financial and energy sectors across Africa and the Middle East.
                  My responsibilities included managing Security Operations teams, monitoring networks, and investigating computer fraud. 
                  I have handled security incidents of varying severities and categories, including ransomware and webshell attacks. </p>
                  <p>I have safeguarded critical systems and assisted clients in implementing robust security measures to defend against advanced persistent threats and respond effectively to security breaches. 
                  Additionally, I have deployed and successfully integrated projects such as EDR/NDR, email security, and forensic labs for prompt and proactive cyber defense of enterprise networks. </p>
                  <p>I also work as a freelance software engineer, developing web applications for clients using solid technologies.</p>
                </div>
              </div>

              <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <div>
                  <Image
                    className="rounded-2xl mb-4 object-cover max-h-90 min-h-90 bg-top bg-[black]"
                    src="/hero_hacker.png"
                    width={300}
                    height={300}
                    quality={100}
                    alt=""
                  />

                  <a
                    href="https://drive.google.com/file/d/1tlS10m8TzVlnHicOw6aeu7H8FMBah7Hr/view?usp=sharing" target="_blank"
                    className="flex items-center justify-center gap-x-2 bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center font-medium"
                  >
                    <BiFile className="text-base" /> View Resumé
                  </a>
                </div>

                <ul>
                  <li>
                    <a
                      href=""className="flex items-center gap-x-2 hover:text-purple-400 duration-300" >
                      <BiEnvelope className="text-lg" />kwamedavour@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </section>
        </div>
        <Profile />
    </main>
  );
}
