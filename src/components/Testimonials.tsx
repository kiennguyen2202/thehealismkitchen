import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nguyễn Minh Anh",
      role: "Khách hàng thân thiết",
      content: "Mình rất thích concept của Healism - vừa ăn ngon lại vừa góp phần bảo vệ môi trường. Đồ ăn luôn tươi ngon và đầy màu sắc!",
      rating: 5
    },
    {
      name: "Trần Hoàng Long",
      role: "Food blogger",
      content: "Chất lượng món ăn xuất sắc! Không ngờ những nguyên liệu 'không hoàn hảo' lại có thể tạo nên những món ăn ngon đến vậy. Đây là lựa chọn tuyệt vời cho ai yêu thích ẩm thực lành mạnh.",
      rating: 5
    },
    {
      name: "Phạm Thu Hà",
      role: "Nhân viên văn phòng",
      content: "Healism đã thay đổi cách mình nhìn nhận về thực phẩm. Mỗi bữa trưa với Healism không chỉ ngon mà còn khiến mình cảm thấy mình đang làm điều tốt đẹp cho môi trường!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Khách Hàng Nói Gì
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những trải nghiệm chân thật từ khách hàng của chúng tôi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="p-8 hover:shadow-medium transition-smooth animate-fade-in-up bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
