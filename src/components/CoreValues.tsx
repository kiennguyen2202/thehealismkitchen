import { Card } from "@/components/ui/card";
import { Heart, Leaf, Smile, Users, Handshake } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Trân trọng",
      description: "Chúng tôi trân trọng từng nguồn thực phẩm và nỗ lực biến những điều bị bỏ quên thành điều có giá trị – không gì bị lãng phí.",
      color: "text-red-500",
      bg: "bg-red-500/10"
    },
    {
      icon: Leaf,
      title: "Xanh",
      description: "Ăn xanh để sống lành – mỗi món ăn là một lựa chọn vì sức khỏe con người và vì trái đất.",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: Smile,
      title: "Giản dị",
      description: "Giữ tinh thần mộc mạc, chân thật trong từng hương vị, không gian và trải nghiệm.",
      color: "text-secondary",
      bg: "bg-secondary/10"
    },
    {
      icon: Users,
      title: "Kết nối",
      description: "Kết nối nông dân, khách hàng và cộng đồng để cùng nhau lan tỏa lối sống bền vững, không lãng phí.",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: Handshake,
      title: "Tử tế",
      description: "Kinh doanh bằng sự minh bạch, trung thực và tình yêu với con người, thiên nhiên và cuộc sống.",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    }
  ];

  return (
    <section id="values" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Giá Trị Cốt Lõi
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những giá trị định hình nên The Healism Kitchen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="p-8 hover:shadow-medium transition-smooth animate-fade-in-up bg-card hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-full ${value.bg} flex items-center justify-center mb-6`}>
                <value.icon className={`w-8 h-8 ${value.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
