import ButtonCustom from "@/components/Button";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <Image src='/logo.svg' alt="logo" width={300} height={300} className="h-8 w-8 image-white" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8">
              <a href="" className="text-white/70 hover:text-white transition">Features</a>
              <a href="" className="text-white/70 hover:text-white transition">Developers</a>
              <a href="" className="text-white/70 hover:text-white transition">Pricing</a>
              <a href="" className="text-white/70 hover:text-white transition">Changelog</a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <ButtonCustom>Join waitlist</ButtonCustom>
            <Image src='/icon-menu.svg' width={300} height={300} alt="menu icon" className="w-8 h-8 md:hidden"/>
          </div>
        </div>
      </div>
    </header>
  )
};
