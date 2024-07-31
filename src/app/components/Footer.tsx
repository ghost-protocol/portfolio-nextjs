export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-44">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
          <p>Designed and Developed by Kwame Davour. {new Date().getFullYear()}</p>
          <p>Built with 
            <span style={{color: '#FF916B'}}> Next.js</span> &
            <span style={{color: '#FF916B'}}> Next UI</span>. Hosted on 
            <span style={{color: '#FF916B'}}> Vercel</span>.
          </p>
      </div>
    </footer>
  );
}