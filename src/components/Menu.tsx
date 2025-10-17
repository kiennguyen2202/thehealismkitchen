import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import food2 from "@/assets/đồ ăn 2.png";
import food3 from "@/assets/đồ ăn 3.png";
import food4 from "@/assets/đồ ăn 4.png";
import food5 from "@/assets/đồ ăn 5.png";
import food6 from "@/assets/đồ ăn 6.png";
import food7 from "@/assets/đồ ăn 7.png";

const Menu = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        defaults: { ease: "power2.out", duration: 0.6 },
      });
      tl.fromTo(".menu-title", { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
        .fromTo(".menu-card-item", { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.12 }, "<0.2");
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  const menu = [
    {
      image: food3,
      title: "Salad gà sốt sữa chua",
      description: "Salad gà tươi với sốt sữa chua nhẹ nhàng, giàu đạm và rau xanh",
      tag: "Healthy"
    },
    {
      image: food2,
      title: "Gà áp chảo & rau củ",
      description: "Bữa ăn cân bằng với thịt gà, khoai bi và salad mùa",
      tag: "Balanced"
    },
    {
      image: food6,
      title: "Gà nướng kiwi & salad mùa",
      description: "Bữa ăn cân bằng với gà nướng, kiwi tươi, măng tây và salad rau xanh tươi mát.",
      tag: "High Protein"
    },
    {
      image: food4,
      title: "Nước ép trái cây",
      description: "Nước ép nhiều lựa chọn: cam, táo, cà rốt, dưa hấu,dâu tây,dưa leo",
      tag: "Drink"
    },
    {
      image: food5,
      title: "Combo bento đầy đủ",
      description: "Ưa thích mỗi ngày: gà áp chảo, măng tây, cà chua bi và sốt",
      tag: "Popular"
    },
    {
      image: food7,
      title: "Sữa đậu xanh",
      description: "Đồ uống thực vật nhẹ nhàng, tốt cho sức khỏe và tiêu hóa",
      tag: "Drink"
    }
  ];

  return (
    <section id="menu" className="py-24 gradient-section">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="menu-title text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Menu Đa Dạng
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thực đơn thay đổi hàng ngày theo mùa vụ và nguồn nguyên liệu tươi nhất
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menu.map((item, index) => (
            <Card
              key={item.title}
              className="menu-card-item overflow-hidden hover:shadow-medium transition-smooth group bg-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {item.tag}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            * Menu thay đổi theo ngày và theo mùa vụ để đảm bảo độ tươi ngon tốt nhất
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
