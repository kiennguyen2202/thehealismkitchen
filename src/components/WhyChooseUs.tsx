import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Heart, Leaf, Gift } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Ăn lành – Sống khỏe",
      description: "Gieo năng lượng tích cực mỗi ngày với những bữa ăn bổ dưỡng, lành mạnh từ thiên nhiên",
      color: "text-red-500",
      bg: "bg-red-500/10"
    },
    {
      icon: Leaf,
      title: "Giảm lãng phí – Bảo vệ trái đất",
      description: "Bắt đầu từ những điều nhỏ nhất, chúng ta cùng nhau góp phần bảo vệ môi trường và tương lai xanh",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: Gift,
      title: "Mua điều tử tế – Nhận lại giá trị bền vững",
      description: "Mỗi lựa chọn của bạn không chỉ tốt cho bản thân mà còn tạo ra giá trị cho cộng đồng và môi trường",
      color: "text-secondary",
      bg: "bg-secondary/10"
    }
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        defaults: { ease: "power2.out", duration: 0.6 },
      });
      tl.fromTo(".why-title", { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
        .fromTo(".why-card", { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.12 }, "<0.2")
        .fromTo(".why-cta", { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="why-title text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tại sao nên chọn Healism?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những lý do để bạn tin tưởng và đồng hành cùng chúng tôi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={reason.title}
              className="why-card p-8 text-center hover:shadow-medium transition-smooth bg-card hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-20 h-20 rounded-full ${reason.bg} flex items-center justify-center mx-auto mb-6`}>
                <reason.icon className={`w-10 h-10 ${reason.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{reason.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{reason.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto why-cta">
          <Card className="p-8 md:p-12 bg-accent border-none shadow-medium">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Hành trình bền vững bắt đầu từ những lựa chọn hôm nay
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Mỗi bữa ăn bạn chọn từ The Healism Kitchen không chỉ nuôi dưỡng cơ thể, 
                mà còn góp phần tạo nên một tương lai xanh và bền vững hơn cho thế hệ mai sau.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
