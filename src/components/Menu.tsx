import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import menuImage from "@/assets/Menu HEALISM.png";
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

  return (
    <section id="menu" className="py-24 gradient-section">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="menu-title text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Menu và một số món ăn nổi bật
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thực đơn thay đổi hàng ngày theo mùa vụ và nguồn nguyên liệu tươi nhất
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="menu-card-item bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={menuImage}
              alt="Menu The Healism Kitchen"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Food Images Gallery */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[food2, food3, food4, food5, food6, food7].map((food, index) => (
              <div
                key={index}
                className="menu-card-item overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={food}
                  alt={`Món ăn ${index + 1}`}
                  className="w-full h-32 md:h-40 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            *Menu thay đổi theo ngày và theo mùa vụ để đảm bảo độ tươi ngon tốt nhất
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
