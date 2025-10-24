import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, MapPin } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Hotline",
      content: "0905232424",
      link: "tel:09052324240",
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email",
      content: "thehealismkitchen@gmail.com",
      link: "mailto:thehealismkitchen@gmail.com",
      color: "text-secondary"
    },
    {
      icon: Facebook,
      title: "Facebook",
      content: "thehealismkitchen",
      link: "https://www.facebook.com/thehealismkitchen",
      color: "text-blue-500"
    }
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        defaults: { ease: "power2.out", duration: 0.6 },
      });
      tl.fromTo(".contact-title", { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
        .fromTo(".contact-card", { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.12 }, "<0.2")
        .fromTo(".contact-cta", { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="contact-title text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Liên Hệ Với Chúng Tôi
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hãy để chúng tôi mang đến cho bạn những bữa ăn lành mạnh và bền vững
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="contact-card p-6 text-center hover:shadow-medium transition-smooth bg-card hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <info.icon className={`w-7 h-7 ${info.color}`} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-smooth"
                >
                  {info.content}
                </a>
              </Card>
            ))}
          </div>

          <Card className="contact-cta p-8 md:p-12 bg-accent border-none shadow-medium">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Sẵn Sàng Bắt Đầu Hành Trình Ăn Xanh?
              </h3>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                Liên hệ ngay với chúng tôi để đặt hàng hoặc tìm hiểu thêm về menu hàng ngày. 
                Mỗi bữa ăn là một bước nhỏ cho một tương lai xanh hơn!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gradient-hero text-lg px-8">
                  <a href="tel:0971832910">
                    <Phone className="mr-2 h-5 w-5" />
                    Gọi Đặt Hàng Ngay
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <a href="https://www.facebook.com/thehealismkitchen" target="_blank" rel="noopener noreferrer">
                    <Facebook className="mr-2 h-5 w-5" />
                    Nhắn Tin Facebook
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
