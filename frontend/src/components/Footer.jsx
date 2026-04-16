import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { copy } = useLanguage();
  const footerLinks = copy.footer.links;

  return (
    <footer
      data-testid="footer"
      className="relative overflow-hidden grain-overlay-dark"
      style={{ backgroundColor: "#0E1A14" }}
    >
      <div className="relative z-[2]">
        {/* Main footer */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2">
              <h2
                className="font-heading text-2xl font-semibold tracking-tight mb-4"
                style={{ color: "#F5F0E8" }}
              >
                Prithvi<span style={{ color: "#D4A853" }}>x</span>
              </h2>
              <p
                className="font-body text-sm leading-relaxed max-w-xs mb-6"
                style={{ color: "#9CAEA4" }}
              >
                {copy.footer.description}
              </p>
              {/* Social links */}
              <div className="flex items-center gap-4">
                {copy.footer.social.map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="font-mono text-xs transition-colors duration-200"
                    style={{ color: "#9CAEA4" }}
                    onMouseEnter={(e) => (e.target.style.color = "#D4A853")}
                    onMouseLeave={(e) => (e.target.style.color = "#9CAEA4")}
                    data-testid={`footer-social-${social.toLowerCase()}`}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([title, links], index) => (
              <div key={title}>
                <h4
                  className="font-body text-sm font-semibold mb-4"
                  style={{ color: "#F5F0E8" }}
                >
                  {copy.footer.titles[index] || title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-body text-sm transition-colors duration-200 block"
                        style={{ color: "#9CAEA4" }}
                        onMouseEnter={(e) => (e.target.style.color = "#D4A853")}
                        onMouseLeave={(e) => (e.target.style.color = "#9CAEA4")}
                        data-testid={`footer-link-${link.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Big logo watermark */}
        <div className="relative overflow-hidden py-8">
          <motion.h2
            className="font-heading text-[8rem] sm:text-[12rem] lg:text-[16rem] font-bold tracking-tighter text-center leading-none select-none"
            style={{ color: "rgba(245, 240, 232, 0.03)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            PRITHVIX
          </motion.h2>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t py-6"
          style={{ borderColor: "rgba(245, 240, 232, 0.05)" }}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs" style={{ color: "#9CAEA4" }}>
              {copy.footer.bottomLeft}
            </p>
            <p
              className="font-mono text-xs"
              style={{ color: "rgba(156, 174, 164, 0.5)" }}
            >
              {copy.footer.bottomRight}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
