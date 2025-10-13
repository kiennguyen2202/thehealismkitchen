import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import menu1 from "@/assets/menu-1.jpg";
import menu2 from "@/assets/menu-2.jpg";
import menu3 from "@/assets/menu-3.jpg";

const Menu = () => {
  const menuItems = [
    {
      image: menu1,
      title: "Bowl & Salad Boxes",
      description: "Các món bowl và salad tươi ngon với nguyên liệu đa dạng, đầy màu sắc và dinh dưỡng",
      tag: "Phổ biến"
    },
    {
      image: menu2,
      title: "Fresh Garden Salads",
      description: "Salad xanh tươi mát với các loại rau củ hữu cơ, hạt dinh dưỡng và sốt tự nhiên",
      tag: "Healthy"
    },
    {
      image: menu3,
      title: "Smoothie & Bowls",
      description: "Sinh tố và smoothie bowl với trái cây tươi ngon, đầy năng lượng cho ngày mới",
      tag: "Breakfast"
    }
  ];

  return (
    <section id="menu" className="py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Menu Đa Dạng
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thực đơn thay đổi hàng ngày theo mùa vụ và nguồn nguyên liệu tươi nhất
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <Card
              key={item.title}
              className="overflow-hidden hover:shadow-medium transition-smooth animate-fade-in-up group bg-card"
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
