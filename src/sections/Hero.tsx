'use client'
import ButtonCustom from "@/components/Button";
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from "react";

export const Hero = () => {

  const sectionRef = useRef(null)
  const {scrollYProgress} =  useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const bgPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <motion.section
      animate={{
        backgroundPositionX: '100vw',
      }}
      transition={{
        repeat: Infinity,
        ease: 'linear',
        duration: 120
      }}
      className="h-[592px] md:h-[800px] lg:h-[120vh] flex items-center overflow-hidden relative mask-gradient-b2"
      style={{
        backgroundImage: `url(/stars.png)`,
        backgroundPositionY: bgPositionY
      }}
    >
        <div className="absolute inset-0 bg-custom-circle-big"></div>
        {/* Star Planet */}
        <div
          className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 bg-custom-circle shadow-circle">
        </div>
        {/* End Planet */}
        {/* Star Ring 1 */}
        <motion.div
          animate={{rotate: '1turn'}}
          style={{
            translateX: '-50%',
            translateY: '-60%'
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] opacity-20 border border-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]"
        >
          <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div
            className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          >
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
        {/* End Ring 1 */}
        {/* Star Ring 2 */}
        <motion.div
          animate={{rotate: '-1turn'}}
          style={{
            translateX: '-50%',
            translateY: '-58%'
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 border-dashed"
        ></motion.div>
        {/* End Ring 2 */}
        {/* Star Ring 3 */}
        <motion.div
          animate={{rotate: '1turn'}}
          style={{
            translateX: '-50%',
            translateY: '-58%'
          }}
          transition={{
            duration: 90,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white/20"
          >
          <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-2 w-2 left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </motion.div>
        {/* End Ring 3 */}
        <div className="container relative">
          <h1 className="text-8xl md:text-[168px] md:leading-none uppercase font-semibold tracking-tighter bg-custom-radial bg-white text-transparent bg-clip-text text-center">ai seo</h1>
          <p className="text-lg md:text-xl md:leading-8 text-white/90 mt-5 text-center max-w-xl mx-auto">
            Elevate your site&#39;s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
          </p>
          <div className="flex items-center justify-center mt-5">
            <ButtonCustom>
              Join waitlist
            </ButtonCustom>
          </div>
        </div>
    </motion.section>
  );
};
