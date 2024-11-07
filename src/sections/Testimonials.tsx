import Image from "next/image";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: '/avatar-1.png',
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: '/avatar-2.png',
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: '/avatar-3.png',
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: '/avatar-4.png',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="section-title">Beyond Expectations.</h2>
        <p className="section-desc">
          Our revolutionary AI SEO tools have transformed our client&#39;s strategies.
        </p>
        <div className="overflow-hidden mt-10 mask-gradient-hori-black">
          <div className="flex gap-5">
            {
              testimonials.map((item, i) => (
                <div key={i} className="border border-white/15 p-6 md:p-10 rounded-xl bg-linear-card max-w-xs md:max-w-md flex-none">
                  <div className="text-lg tracking-tight md:text-2xl">{item.text}</div>
                  <div className="flex items-center gap-3 mt-5">
                    <div>
                      <Image src={item.avatarImg} alt={item.name} width={300} height={300} className="h-11 w-11 rounded-lg grayscale border border-white/30" />
                    </div>
                    <div>
                      <div>{item.name}</div>
                      <div className="text-white/50 text-sm">{item.title}</div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};
