import Image from "next/image";
import Link from "next/link";

export default async function Project() {

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured projects I&apos;ve built over the years
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of.
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
          <Link
            href=""
            key=""
            className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
          >
            <Image
              src="/python.png"
              width={60}
              height={60}
              alt=""
              className="bg-zinc-800 rounded-md p-2"
            />
            <div>
              <h2 className="font-semibold mb-1">Python/Django</h2>
              <div className="text-sm text-zinc-400">Tagline</div>
            </div>
          </Link>
          <Link
            href=""
            key=""
            className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
          >
            <Image
              src="/html.png"
              width={60}
              height={60}
              alt=""
              className="bg-zinc-800 rounded-md p-2"
            />
            <div>
              <h2 className="font-semibold mb-1">HTML</h2>
              <div className="text-sm text-zinc-400">Tagline</div>
            </div>
          </Link>
          <Link
            href=""
            key=""
            className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
          >
            <Image
              src="/js.png"
              width={60}
              height={60}
              alt=""
              className="bg-zinc-800 rounded-md p-2"
            />
            <div>
              <h2 className="font-semibold mb-1">Javascript</h2>
              <div className="text-sm text-zinc-400">Tagline</div>
            </div>
          </Link>
          <Link
            href=""
            key=""
            className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
          >
            <Image
              src="/typescript.png"
              width={60}
              height={60}
              alt=""
              className="bg-zinc-800 rounded-md p-2"
            />
            <div>
              <h2 className="font-semibold mb-1">Typescript</h2>
              <div className="text-sm text-zinc-400">Tagline</div>
            </div>
          </Link>
          <Link
            href=""
            key=""
            className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
          >
            <Image
              src="/react.png"
              width={60}
              height={60}
              alt=""
              className="bg-zinc-800 rounded-md p-2"
            />
            <div>
              <h2 className="font-semibold mb-1">React JS</h2>
              <div className="text-sm text-zinc-400">Tagline</div>
            </div>
          </Link>
      </section>
    </main>
  );
}