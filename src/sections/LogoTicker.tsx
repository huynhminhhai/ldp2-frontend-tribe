'use client'
import Image from "next/image";
import {motion} from 'framer-motion'

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex-1 overflow-hidden mask-gradient-hori-black">
            <motion.div
              initial={{ translateX: '-50%' }}
              animate={{ translateX: '0%' }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: 'linear'
              }}
              className="flex flex-none gap-14 pr-14 translate-x-1/2">
              <Image src='/logo-acme.png' alt="logo acme" width={300} height={300} className="h-6 w-auto" />
              <Image src='/logo-apex.png' alt="logo apex" width={300} height={300} className="h-6 w-auto" />
              <Image src='/logo-celestial.png' alt="logo celestial" width={300} height={300} className="h-6 w-auto" />
              <Image src='/logo-quantum.png' alt="logo quantum" width={300} height={300} className="h-6 w-auto" />
              <Image src='/logo-pulse.png' alt="logo pulse" width={300} height={300} className="h-6 w-auto" />
              <Image src='/logo-echo.png' alt="logo echo" width={300} height={300} className="h-6 w-auto" />

              <Image src='/logo-acme.png' alt="logo acme" width={300} height={300} className="h-6 w-auto" />
              <Image src='/logo-apex.png' alt="logo apex" width={300} height={300} className="h-6 w-auto" />
              <Image src='/logo-celestial.png' alt="logo celestial" width={300} height={300} className="h-6 w-auto" />
              <Image src='/logo-quantum.png' alt="logo quantum" width={300} height={300} className="h-6 w-auto" />
              <Image src='/logo-pulse.png' alt="logo pulse" width={300} height={300} className="h-6 w-auto" />
              <Image src='/logo-echo.png' alt="logo echo" width={300} height={300} className="h-6 w-auto" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
