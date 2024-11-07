import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Image src='/logo.svg' alt="logo footer" width={300} height={300} className="image-white h-6 w-6"/>
            <div className="font-medium">AI Startup Landing Page</div>
          </div>
          <div>
            <nav className="flex flex-col md:flex-row gap-5 lg:gap-7 text-white/70 text-xs md:text-sm">
              <a href="#" className="hover:text-white transition">Features</a>
              <a href="#" className="hover:text-white transition">Developers</a>
              <a href="#" className="hover:text-white transition">Company</a>
              <a href="#" className="hover:text-white transition">Blog</a>
              <a href="#" className="hover:text-white transition">Changelog</a>
            </nav>
          </div>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <div className="hover:bg-white/40 rounded-full p-2">
              <Image src='/social-x.svg' alt="logo social" width={200} height={200} className="image-white h-6 w-6"/>
            </div>
            <div className="hover:bg-white/40 rounded-full p-2">
              <Image src='/social-instagram.svg' alt="logo social" width={200} height={200} className="image-white h-6 w-6"/>
            </div>
            <div className="hover:bg-white/40 rounded-full p-2">
              <Image src='/social-youtube.svg' alt="logo social" width={200} height={200} className="image-white h-6 w-6"/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
