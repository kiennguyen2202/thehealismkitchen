import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/e3139f5c-ffad-46cb-aa1a-6710df1504e7.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
        defaults: { ease: "power2.out", duration: 0.7 },
      });
      tl.fromTo(".hero-title", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
        .fromTo(".hero-slogan", { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, "<0.1")
        .fromTo(".hero-actions", { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, "<0.1");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image (no overlay so colors match the image) */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fresh organic food"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32" ref={sectionRef}>
        <div className="max-w-3xl">
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
            THE HEALISM
            <br />
            <span className="text-secondary">KITCHEN</span>
          </h1>
          <div className="hero-slogan inline-flex items-center gap-2 md:gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-6 md:mb-8 font-light drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            <span>Less waste, more taste</span>
            <img
              src="/logo.png"
              alt="The Healism Kitchen logo"
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full ring-2 ring-primary-foreground/40 shadow-soft object-contain bg-white/90 p-1"
            />
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/80 mb-8 md:mb-12 max-w-2xl leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
            Biến những gì bị bỏ quên thành điều đáng quý. Mỗi bữa ăn không chỉ tốt cho sức khỏe,
            mà còn góp phần bảo vệ môi trường và lan tỏa lối sống bền vững.
          </p>
          <div className="hero-actions flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button asChild size="lg" className="gradient-hero text-base md:text-lg px-6 md:px-8 shadow-medium">
              <a href="#menu">
                Khám Phá Menu
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 bg-background/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/40">
              <a href="#about">Về Chúng Tôi</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
