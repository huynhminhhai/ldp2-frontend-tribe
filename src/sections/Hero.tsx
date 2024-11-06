import ButtonCustom from "@/components/Button";

export const Hero = () => {
  return (
    <section
      className="h-[592px] md:h-[800px] lg:h-[120vh] flex items-center overflow-hidden relative mask-gradient-b2"
      style={{ backgroundImage: `url(/stars.png)` }}
    >
        <div className="absolute inset-0 bg-custom-circle-big"></div>
        {/* Star Planet */}
        <div
          className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 bg-custom-circle shadow-circle">
        </div>
        {/* End Planet */}
        {/* Star Ring 1 */}
        <div
          className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] opacity-20 border border-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]"
        >
          <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div
            className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          >
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
        </div>
        {/* End Ring 1 */}
        {/* Star Ring 2 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 border-dashed"></div>
        {/* End Ring 2 */}
        {/* Star Eing 3 */}
        <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white/20">
          <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-2 w-2 left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
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
    </section>
  );
};
