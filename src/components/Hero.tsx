type HeroProps = {
    dict: any;
  };
  
  export default function Hero({ dict }: HeroProps) {
    return (
      <section id="hero" className="hero section flex flex-col items-center text-center">
        <div
          className="w-36 h-36 rounded-full overflow-hidden border shadow-sm mb-6"
          style={{ borderColor: "var(--border)" }}
        >
          <img src="/profile-photo.png" alt={dict.hero.name} className="w-full h-full object-contain" />
        </div>
  
        <h1 className="heading-hero block">{dict.hero.name}</h1>
  
        <p className="text-secondary mt-2">{dict.hero.role}</p>
  
        <p className="text-body text-secondary max-w-xl mt-4">
          {dict.hero.description}
        </p>
  
        <div className="flex gap-4 mt-8">
          <a href="#projects" className="btn btn-primary">
            {dict.hero.ctaProjects}
          </a>
          <a href="#contact" className="btn btn-soft">
            {dict.hero.ctaContact}
          </a>
        </div>
  
        <div className="mt-12 opacity-60">↓</div>
      </section>
    );
  }
  