import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Hotline & Zalo",
      content: "0971 832 910",
      link: "tel:0971832910",
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

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
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
                className="p-6 text-center hover:shadow-medium transition-smooth animate-fade-in-up bg-card hover:scale-105"
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

          <Card className="p-8 md:p-12 bg-accent border-none shadow-medium animate-fade-in-up">
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
