import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import avatarBaoNghi from "@/assets/khách hàng Bảo Nghi.jpg";
import avatarQuynhNhu from "@/assets/khách hàng Quỳnh Như.jpg";
import avatarThuNgan from "@/assets/khách hàng Thu Ngân.jpg";
import avatarThuNguyen from "@/assets/khách hàng Thu Nguyên.jpg";


const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        defaults: { ease: "power2.out", duration: 0.6 },
      });
      tl.fromTo(".testi-title", { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
        .fromTo(".testi-avatars", { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, "<0.15")
        .fromTo(".testi-card", { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.12 }, "<0.2");
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  const testimonials = [
    {
      name: "Thu Nguyên",
      role: "Customer",
      avatar: avatarThuNguyen,
      content: "Cửa hàng này rất đáng ủng hộ! Vừa giảm rác thải, vừa nâng cao nhận thức cộng đồng.Nếu có thêm workshop hướng dẫn tận dụng thực phẩm ở nhà thì mình đăng ký liền!",
      rating: 5
    },
    {
      name: "Thu Ngân",
      role: "Customer",
      avatar: avatarThuNgan,
      content: "Đi làm mỗi ngày mà không biết ăn gì,giờ có chỗ này là ghé liền.Đồ ăn thay đổi theo ngày,ăn hoài không ngán.Cảm giác ngon,nhẹ bụng mà lại thấy mình sông có ích hơn",
      rating: 5
    },
    {
      name: "Bảo Nghi",
      role: "Customer",
      avatar: avatarBaoNghi,
      content: "Đi làm bận rộn,trưa toàn ăn vội ngoài đường,mà từ khi biết quán này thì đổi hẳn.Đồ ăn sạch,không dầu mỡ,ăn xong thấy khỏe hẳn ra,mỗi món đều có câu chuyện nhỏ về nguồn gốc nguyên liệu.",
      rating: 5
    },
    {
      name: "Quỳnh Như",
      role: "Customer",
      avatar: avatarQuynhNhu,
      content: "Đồ ăn ở đây vị vừa miệng,giá lại hợp lý.Mình thích quán vì ấn tượng mô hình kinh doanh ý nghĩa,thân thiện môi trường.Ăn xong cảm giác nhẹ nhàng cả về sức khỏe lẫn tinh thần",
      rating: 5
    }
  ];

  return (
    <section className="py-24 gradient-section">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="testi-title text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Khách Hàng Nói Gì
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những trải nghiệm chân thật từ khách hàng của chúng tôi
          </p>
        </div>

        {/* Avatar strip */}
        <div className="testi-avatars flex items-center justify-center -space-x-3 mb-10">
          {[avatarBaoNghi, avatarQuynhNhu, avatarThuNgan, avatarThuNguyen].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="avatar"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full ring-2 ring-background object-cover"
            />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`${index === 3 ? "md:col-start-2" : ""} testi-card p-8 hover:shadow-medium transition-smooth bg-card`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-background"
                  />
                )}
                <div>
                  <p className="font-bold text-foreground leading-tight">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
