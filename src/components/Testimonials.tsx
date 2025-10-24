import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import avatarBaoNghi from "@/assets/khách hàng Bảo Nghi.jpg";
import avatarQuynhNhu from "@/assets/khách hàng Quỳnh Như.jpg";
import avatarThuNgan from "@/assets/khách hàng Thu Ngân.jpg";
import avatarThuNguyen from "@/assets/khách hàng Thu Nguyên.jpg";
import avatarBichNgoc from "@/assets/khách hàng Bích Ngọc.jpg";


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
      content: "Mặc dù ăn eat clean nhưng không bị nhàm chán, gia vị rất vừa miệng. Thức ăn để trong cà mên vừa giữ nóng tốt, lại còn bảo vệ môi trường. Sẽ rủ đồng nghiệp cùng đặt hàng cho lần tiếp theo",
      rating: 5
    },
    {
      name: "Thu Ngân",
      role: "Customer",
      avatar: avatarThuNgan,
      content: "Mình theo HEALISM được 2 tuần nay và phải nói là vô cùng ưng ý. Trước đây cứ nghĩ đến đồ healthy là ngán ngẩm vì vừa nhạt vừa ít. Nhưng khẩu phần của HEALISM đầy đặn, ăn no căng. Quan trọng nhất là đồ ăn luôn tươi mới. Ăn được một thời gian thấy người nhẹ nhõm, da dẻ cũng đẹp lên hẳn. Đã ngon mà còn “heal” đúng nghĩa luôn",
      rating: 5
    },
    {
      name: "Bảo Nghi",
      role: "Customer",
      avatar: avatarBaoNghi,
      content: "Trời ơi, cuối cùng cũng tìm được một brand healthy hợp gu! Mình là đứa siêu kén ăn mà phải mê mẩn đồ ăn ở đây. Rất ngon, rất “clean”', không hề có cảm giác công nghiệp như nhiều chỗ khác. Rau củ giòn ngọt, thịt thà tẩm ướp vừa vặn. Sẽ gắn bó lâu dài. Highly recommend cho ai lười như mình mà vẫn muốn ăn uống lành mạnh nhé!",
      rating: 5
    },
    {
      name: "Quỳnh Như",
      role: "Customer",
      avatar: avatarQuynhNhu,
      content: "Thú thật mình là một đứa siêu lười nấu nướng, lại còn làm văn phòng nên bữa trưa bữa tối toàn gọi đồ ngoài. Cũng thử qua đủ các brand eat clean hay healthy rồi nhưng không thể gắn bó lâu dài được, chỗ thì vị nhạt nhẽo khó ăn, chỗ thì đồ ăn không tươi. Cho đến khi mình tìm được HEALISM, phải nói là chân ái cuộc đời luôn, khiến đứa lười viết review như mình cũng phải ngoi lên chia sẻ ngay. Đồ ăn hợp khẩu vị mình cực kỳ, nêm nếm rất vừa vặn, ngon lành dù biết là đồ healthy. Khẩu phần bằng cà mên thì đầy đặn, rau củ lúc nào cũng tươi rói. HEALISM chính là cứu cánh cho những bữa trưa vội vã ở công ty của mình",
      rating: 5
    },
    {
      name: "Bích Ngọc",
      role: "Customer",
      avatar: avatarBichNgoc,
      content: "Là một đứa làm văn phòng, mình rất ngại đặt đồ ăn trong mấy hộp xốp ọp ẹp. Chuyển qua HEALISM ưng nhất là khoản đóng gói bằng cà mên. Vừa sạch sẽ, giữ nhiệt tốt, đồ ăn giao tới vẫn nóng hổi, mà còn góp phần bảo vệ môi trường. Mở cà mên ra, đồ ăn được bày biện đẹp mắt, nhìn thôi đã thấy chỉn chu. Dịch vụ giao hàng cũng luôn đúng giờ. Nói chung là 10/10 cho trải nghiệm.",
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

        <div className="max-w-6xl mx-auto">
          {/* Top row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="testi-card p-8 hover:shadow-medium transition-smooth bg-card"
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

          {/* Bottom row - 2 cards centered */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.slice(3, 5).map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="testi-card p-8 hover:shadow-medium transition-smooth bg-card"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
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
      </div>
    </section>
  );
};

export default Testimonials;
