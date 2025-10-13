import { Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">THE HEALISM KITCHEN</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Less waste, more taste
            </p>
            <p className="text-background/70 mt-2 text-sm">
              Công ty Cổ phần Healism
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-smooth">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#values" className="text-background/80 hover:text-primary transition-smooth">
                  Giá trị cốt lõi
                </a>
              </li>
              <li>
                <a href="#menu" className="text-background/80 hover:text-primary transition-smooth">
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary transition-smooth">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Liên hệ</h3>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>Hotline & Zalo: 0971 832 910</li>
              <li>Email: thehealismkitchen@gmail.com</li>
              <li>
                <a 
                  href="https://www.facebook.com/thehealismkitchen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-smooth"
                >
                  Facebook: @thehealismkitchen
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70 text-sm">
            © {currentYear} The Healism Kitchen. All rights reserved.
          </p>
          <p className="text-background/60 text-xs mt-2">
            Ăn xanh - Sống lành - Yêu thương trái đất
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
