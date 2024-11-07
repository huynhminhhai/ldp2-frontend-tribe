'use client'
import ButtonCustom from "@/components/Button";
import {motion, useMotionTemplate, useMotionValue, useScroll, useTransform} from 'framer-motion'
import { RefObject, useEffect, useRef } from "react";

const useRelativeMouseposition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return

    const {top, left} = to.current.getBoundingClientRect()

    mouseX.set(event.x - left)
    mouseY.set(event.y - top)
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return [mouseX, mouseY]
}

export const CallToAction = () => {

  const sectionRef = useRef<HTMLElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const bgPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

  const [mouseX, mouseY] = useRelativeMouseposition(divRef)

  const imageMask = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, #000, transparent)`

  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={divRef}
          animate={{
            backgroundPositionX: '100vw'
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: 'linear'
          }}
          className="border border-white/15 py-32 rounded-xl overflow-hidden relative group"
          style={{
            backgroundImage: 'url(/stars.png)',
            backgroundPositionY: bgPositionY
          }}
        >
          <div
            className="absolute inset-0 bg-[#4a208a] bg-blend-overlay mask-gradient-calltoaction group-hover:opacity-0"
            style={{
              backgroundImage: 'url(/grid-lines.png)'
            }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[#4a208a] bg-blend-overlay transition duration-700 opacity-0 group-hover:opacity-100"          
            style={{
              backgroundImage: 'url(/grid-lines.png)',
              maskImage: imageMask
            }}
          ></motion.div>
          <div className="relative">
            <h2 className="section-title">AI-driven SEO for everyone.</h2>
            <p className="section-desc">
              Achieve clear, impactful results without the complexity. 
            </p>
            <div className="flex items-center justify-center mt-8">
              <ButtonCustom>Join waitlist</ButtonCustom>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
