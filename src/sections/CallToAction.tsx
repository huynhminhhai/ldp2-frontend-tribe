import ButtonCustom from "@/components/Button";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="border border-white/15 py-32 rounded-xl overflow-hidden relative"
          style={{
            backgroundImage: 'url(/stars.png)'
          }}
        >
          <div
            className="absolute inset-0 bg-[#4a208a] bg-blend-overlay mask-gradient-calltoaction"
            style={{
              backgroundImage: 'url(/grid-lines.png)'
            }}
          ></div>
          <div className="relative">
            <h2 className="section-title">AI-driven SEO for everyone.</h2>
            <p className="section-desc">
              Achieve clear, impactful results without the complexity. 
            </p>
            <div className="flex items-center justify-center mt-8">
              <ButtonCustom>Join waitlist</ButtonCustom>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
