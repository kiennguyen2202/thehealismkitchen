import { Card } from "@/components/ui/card";
import { Leaf, Heart, Sprout } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Về Chúng Tôi
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          </div>

          <Card className="p-8 md:p-12 shadow-medium animate-fade-in-up bg-card/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Công ty Cổ phần Healism</h3>
            </div>

            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                Giữa một thế giới tiêu dùng vội vã, mỗi năm có hàng triệu tấn thực phẩm bị bỏ đi 
                chỉ vì chúng không "đẹp chuẩn". Healism tin rằng, mọi thứ thiên nhiên tạo ra đều 
                xứng đáng được trân trọng – dù là củ cà rốt cong, quả cà chua sứt hay bó rau nhỏ.
              </p>
              <p className="text-lg">
                Từ niềm tin ấy, The Healism Kitchen ra đời với sứ mệnh biến điều bị bỏ quên thành 
                điều đáng quý. Chúng tôi tạo nên những bữa ăn xanh, lành mạnh và trọn vẹn – không 
                chỉ tốt cho sức khỏe, mà còn góp phần giảm lãng phí, bảo vệ môi trường và lan tỏa 
                lối sống bền vững.
              </p>
              <div className="bg-accent p-6 rounded-lg border-l-4 border-primary mt-8">
                <p className="text-lg font-medium text-foreground flex items-center gap-3">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0" />
                  Với chúng tôi, ăn xanh không chỉ là thói quen – đó là một lựa chọn sống tử tế, 
                  giản dị và đầy yêu thương.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-8 shadow-soft animate-fade-in-up bg-card/60 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sprout className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Tầm Nhìn</h3>
              <p className="text-foreground/80 leading-relaxed">
                Đến năm 2030, trở thành thương hiệu mà người tiêu dùng có thể tin cậy trong việc 
                gửi gắm những bữa ăn xanh - sạch, được chế biến từ nguyên liệu chưa được sử dụng 
                nhưng vẫn đảm bảo độ tươi ngon.
              </p>
            </Card>

            <Card className="p-8 shadow-soft animate-fade-in-up bg-card/60 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Sứ Mệnh</h3>
              <p className="text-foreground/80 leading-relaxed">
                Cam kết mang đến những bữa ăn lành mạnh, bổ dưỡng, vẫn giữ nguyên hương vị nguyên 
                bản và giá trị dinh dưỡng ban đầu. Bằng cái tâm của những người yêu thiên nhiên, 
                góp phần giảm thiểu lãng phí thực phẩm và bảo vệ môi trường.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
