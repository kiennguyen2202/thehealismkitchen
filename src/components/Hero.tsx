import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fresh organic food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            THE HEALISM
            <br />
            <span className="text-secondary">KITCHEN</span>
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-8 font-light">
            Less waste, more taste
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl leading-relaxed">
            Biến những gì bị bỏ quên thành điều đáng quý. Mỗi bữa ăn không chỉ tốt cho sức khỏe,
            mà còn góp phần bảo vệ môi trường và lan tỏa lối sống bền vững.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gradient-hero text-lg px-8 shadow-medium">
              <a href="#menu">
                Khám Phá Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-background/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/40">
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
