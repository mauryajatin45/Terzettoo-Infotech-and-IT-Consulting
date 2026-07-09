"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const excludedPages = [
    "/company/portfolio",
    "/career",
    "/company/faq",
    "/contact",
    "/blog/Empowering-Startups-with-Scalable-Web-Development",
    "/blog/Innovative-UI-UX-Design-for-Impactful-User-Experiences",
    "/blog/seo-digital-marketing-strategies",
    "/blog/trusted-tech-partner",
    "/services",
  ];

  const isSpecialPage = !excludedPages.includes(pathname);
  const SCROLL_THRESHOLD = 100;

  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(!isSpecialPage);
  const [activeService, setActiveService] = useState("Mobile Development");
  const servicesRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const [mobileServiceOpen, setMobileServiceOpen] = useState<Record<string, boolean>>({});

  const serviceCategories = {
    "Mobile Development": [
      { label: "Mobile App Development", href: "/mobile-app-development", icon: "/image/icons/mobile.png" },
      { label: "Android App Development", href: "/android-app-development", icon: "/image/icons/android.png" },
      { label: "iOS App Development", href: "/ios-app-development", icon: "/image/icons/ios.png" },
      { label: "iPad App Development", href: "/ipad-app-development", icon: "/image/icons/ipad.png" },
      { label: "React Native Development", href: "/react-app-development", icon: "/image/icons/react.png" },
      { label: "Flutter Development", href: "/flutter-development", icon: "/image/icons/flutter.png" },
    ],
    "Web Development": [
      { label: "Web Development", href: "/web-development", icon: "/image/icons/web.png" },
      { label: "Frontend Development", href: "/frontend-development", icon: "/image/icons/frontend.png" },
      { label: "React.js Development", href: "/react-js-development", icon: "/image/icons/react.png" },
      { label: "E-commerce Development", href: "/ecommerce-portal-development", icon: "/image/icons/ecommerce.png" },
      { label: "Shopify Development", href: "/shopify-development", icon: "/image/icons/shopify.png" },
      { label: "WordPress Development", href: "/wordpress-development", icon: "/image/icons/wordpress.png" },
    ],
    "Backend & Technologies": [
      { label: "Java Development", href: "/java-development", icon: "/image/icons/java.png" },
      { label: "PHP Development", href: "/php-development", icon: "/image/icons/php.png" },
      { label: ".NET Development", href: "/dotnet-web-development", icon: "/image/icons/dotnet.png" },
      { label: "Python Development", href: "/python-web-development", icon: "/image/icons/python.png" },
      { label: "AWS Development", href: "/amazon-web-services-aws-development", icon: "/image/icons/aws.png" },
    ],
    "AI & Advanced Tech": [
      { label: "AI/ML Solutions", href: "/ai-ml", icon: "/image/icons/ai.png" },
      { label: "Data Analytics", href: "/data-analytics", icon: "/image/icons/analytics.png" },
      { label: "Computer Vision", href: "/computer-vision", icon: "/image/icons/vision.png" },
      { label: "Chatbot Development", href: "/chatbot-development", icon: "/image/icons/chatbot.png" },
    ],
    "Design & Marketing": [
      { label: "UI/UX Development", href: "/ui-ux-development", icon: "/image/icons/design.png" },
      { label: "Digital Marketing", href: "/digital-marketing", icon: "/image/icons/marketing.png" },
      { label: "SEO Services", href: "/seo-services", icon: "/image/icons/seo.png" },
      { label: "PPC Advertising", href: "/ppc-advertising", icon: "/image/icons/ads.png" },
      { label: "Social Media Marketing", href: "/social-media-marketing", icon: "/image/icons/social.png" },
      { label: "Content Marketing", href: "/content-marketing-and-strategy", icon: "/image/icons/content.png" },
      { label: "Graphic Design", href: "/graphic-design-services", icon: "/image/icons/graphic.png" },
    ],
    "Enterprise Solutions": [
      { label: "ERP Implementation", href: "/erp-implementation-and-customization", icon: "/image/icons/erp.png" },
      { label: "Shopping Cart Development", href: "/shopping-cart-development", icon: "/image/icons/cart.png" },
    ],
    "IT Consulting": [
      { label: "Technical Product Roadmaps", href: "/technical-product-roadmaps", icon: "/image/icons/roadmap.png" },
      { label: "MVP Planning", href: "/mvp-planning", icon: "/image/icons/mvp.png" },
      { label: "SaaS Strategy", href: "/saas-strategy-and-advisory", icon: "/image/icons/saas.png" },
      { label: "Tech Stack Recommendations", href: "/tech-stack-recommendations", icon: "/image/icons/tech.png" },
      { label: "Client-Vendor Matching", href: "/client-vendor-matching", icon: "/image/icons/vendor.png" },
      { label: "Project oversight and quality monitoring", href: "/project-oversight-and-quality-monitoring", icon: "/image/icons/oversight.png" },
    ],
  };

  useEffect(() => {
    if (!isSpecialPage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSpecialPage, pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setIsProductsOpen(false);
      }
      if (companyRef.current && !companyRef.current.contains(e.target as Node)) {
        setIsCompanyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileCategory = (category: string) => {
    setMobileServiceOpen((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const navbarBackground = isSpecialPage
    ? isScrolled
      ? "bg-white text-[#2b2d42] shadow-md"
      : "bg-[#d90429] text-white"
    : "bg-white text-[#2b2d42] shadow-md";

  const logoStyles = isSpecialPage
    ? {
      width: isScrolled ? 0 : 32,
      opacity: isScrolled ? 0 : 1,
      marginRight: isScrolled ? 0 : 8,
    }
    : {
      width: 32,
      opacity: 1,
      marginRight: 8,
    };

  const textStyles = isSpecialPage
    ? {
      marginLeft: isScrolled ? -1 : 0,
      color: isScrolled ? "text-[#d90429]" : "text-white",
    }
    : {
      marginLeft: 0,
      color: "text-[#d90429]",
    };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBackground}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 overflow-hidden"
          >
            <motion.div
              initial={false}
              animate={logoStyles}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-8 flex items-center justify-center"
            >
              <Image
                src="/Terzettoo_logo_remove_BG.png"
                alt="Logo of Terzettoo"
                width={25}
                height={25}
                className="object-contain"
              />
            </motion.div>
            <motion.span
              className={`text-xl font-bold ${textStyles.color}`}
              initial={false}
              animate={{
                marginLeft: textStyles.marginLeft,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Terzettoo
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${isSpecialPage
                ? isScrolled
                  ? "text-[#6b7280] hover:text-[#2b2d42]"
                  : "!text-white hover:opacity-80"
                : "text-[#6b7280] hover:text-[#2b2d42]"
                }`}
            >
              Home
            </Link>

            {/* Enhanced Services Mega Menu */}
            <div
              className="relative"
              ref={servicesRef}
              onMouseEnter={() => {
                setIsServicesOpen(true);
                setActiveService("Mobile Development");
              }}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center transition-colors ${isSpecialPage
                  ? isScrolled
                    ? "text-[#6b7280] hover:text-[#2b2d42]"
                    : "text-white hover:opacity-80"
                  : "text-[#6b7280] hover:text-[#2b2d42]"
                  }`}
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    key="services-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-3 top-full left-1/2 transform -translate-x-1/2 w-[800px] bg-white border border-[#8d99ae]/30 rounded-lg shadow-xl overflow-hidden"
                  >
                    <div className="flex">
                      {/* Left Side - Main Services */}
                      <div className="w-1/3 bg-gray-50 p-4 border-r border-gray-200">
                        <h3 className="font-bold text-lg text-[#d90429] mb-4 px-2">
                          Our Services
                        </h3>
                        <ul className="space-y-1">
                          {Object.keys(serviceCategories).map((category) => (
                            <li key={category}>
                              <button
                                className={`cursor-pointer w-full text-left px-3 py-2 rounded-md flex items-center justify-between transition-all ${activeService === category
                                  ? "bg-[#d90429] text-white"
                                  : "text-gray-700 hover:bg-gray-100"
                                  }`}
                                onMouseEnter={() => setActiveService(category)}
                              >
                                <span>{category}</span>
                                {activeService === category && (
                                  <ChevronRight className="h-4 w-4" />
                                )}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Side - Sub Services */}
                      <div className="w-2/3 p-6">
                        <h3 className="font-bold text-lg text-[#d90429] mb-4">
                          {activeService}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {serviceCategories[activeService as keyof typeof serviceCategories].map(
                            (service, idx) => (
                              <Link
                                key={idx}
                                href={service.href}
                                className="group flex items-start p-3 rounded-lg hover:bg-[#d90429]/10 transition-colors"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                <div className="rounded-md mr-3 transition-colors flex items-center justify-center">
                                  {service.icon ? (
                                    <Image
                                      src={service.icon}
                                      alt={service.label}
                                      width={24}
                                      height={24}
                                      className="w-10 h-10 object-contain"
                                    />
                                  ) : (
                                    <div className="w-6 h-6 bg-[#d90429] rounded-sm opacity-80 group-hover:opacity-100 transition-opacity" />
                                  )}
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 group-hover:text-[#d90429] transition-colors">
                                    {service.label}
                                  </h4>
                                  <p className="text-xs text-gray-500 mt-1">
                                    Expert solutions tailored to your needs
                                  </p>
                                </div>
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              ref={productsRef}
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`flex items-center transition-colors ${isSpecialPage
                  ? isScrolled
                    ? "text-[#6b7280] hover:text-[#2b2d42]"
                    : "text-white hover:opacity-80"
                  : "text-[#6b7280] hover:text-[#2b2d42]"
                  }`}
              >
                Products
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${isProductsOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    key="products-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white border border-[#8d99ae]/30 rounded-lg shadow-xl overflow-hidden"
                  >
                    <Link
                      href="/products/scrubb"
                      className="flex items-center px-4 py-3 text-[#2b2d42] hover:bg-[#ef233c]/10 hover:text-[#d90429] transition rounded-lg group"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      <div className="w-8 h-8 relative mr-3 flex-shrink-0">
                        <Image 
                          src="/image/Scrubb/Scrubb_Logo_Transparent.png" 
                          alt="Scrubb Logo" 
                          fill 
                          className="object-contain"
                        />
                      </div>
                      <span className="font-medium group-hover:text-[#d90429] transition-colors">Delete Account (Apple 5.1.1 Delete)</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              ref={companyRef}
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <button
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                className={`flex items-center transition-colors ${isSpecialPage
                  ? isScrolled
                    ? "text-[#6b7280] hover:text-[#2b2d42]"
                    : "text-white hover:opacity-80"
                  : "text-[#6b7280] hover:text-[#2b2d42]"
                  }`}
              >
                Company
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${isCompanyOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              <AnimatePresence>
                {isCompanyOpen && (
                  <motion.div
                    key="company-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-[#8d99ae]/30 rounded-lg shadow-xl"
                  >
                    {[
                      { label: "About Us", href: "/company/about" },
                      { label: "Portfolio", href: "/company/portfolio" },
                      { label: "Career", href: "/career" },
                      { label: "FAQ", href: "/company/faq" },
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className={`block px-4 py-2 text-[#2b2d42] hover:bg-[#ef233c]/10 hover:text-[#d90429] transition ${idx === 0
                          ? "rounded-t-lg"
                          : idx === 3
                            ? "rounded-b-lg"
                            : ""
                          }`}
                        onClick={() => setIsCompanyOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/blog"
              className={`transition-colors ${isSpecialPage
                ? isScrolled
                  ? "text-[#6b7280] hover:text-[#2b2d42]"
                  : "!text-white hover:opacity-80"
                : "text-[#6b7280] hover:text-[#2b2d42]"
                }`}
            >
              Blog
            </Link>

            {/* Enhanced CTA Button */}
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${isSpecialPage
                ? isScrolled
                  ? "bg-[#d90429] !text-white hover:bg-[#ef233c] shadow-lg hover:shadow-[#d90429]/40"
                  : "bg-white text-[#d90429] hover:bg-gray-100 shadow-lg hover:shadow-white/40"
                : "bg-[#d90429] !text-white hover:bg-[#ef233c] shadow-lg hover:shadow-[#d90429]/40"
                }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition ${isSpecialPage
              ? isScrolled
                ? "text-[#2b2d42]"
                : "text-white"
              : "text-[#2b2d42]"
              }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden ${isSpecialPage
              ? isScrolled
                ? "bg-white"
                : "bg-[#d90429]"
              : "bg-white"
              } border-t ${isSpecialPage
                ? isScrolled
                  ? "border-[#8d99ae]/30"
                  : "border-white/20"
                : "border-[#8d99ae]/30"
              } shadow-xl`}
          >
            <div className="px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
              <Link
                href="/"
                className={`block px-4 py-2 rounded-lg transition ${isSpecialPage
                  ? isScrolled
                    ? "!text-[#6b7280] hover:text-[#2b2d42] hover:bg-[#d90429]/10"
                    : "!text-white hover:bg-white/10"
                  : "text-[#6b7280] hover:text-[#2b2d42] hover:bg-[#d90429]/10"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services */}
              {/* Mobile Services */}
              <div className="space-y-1">
                <div
                  className={`px-4 py-2 font-semibold text-sm ${isSpecialPage
                    ? isScrolled
                      ? "text-[#d90429]"
                      : "!text-white"
                    : "text-[#d90429]"
                    }`}
                >
                  SERVICES
                </div>
                {Object.entries(serviceCategories).map(
                  ([category, services]) => (
                    <div
                      key={category}
                      className={`border-b ${isSpecialPage
                        ? isScrolled
                          ? "border-[#8d99ae]/20"
                          : "border-white/20"
                        : "border-[#8d99ae]/20"
                        } last:border-0`}
                    >
                      <button
                        className={`flex items-center justify-between w-full px-4 py-2 text-left transition rounded ${isSpecialPage
                          ? isScrolled
                            ? "text-[#2b2d42] hover:bg-[#d90429]/10"
                            : "text-white hover:bg-white/20"
                          : "text-[#2b2d42] hover:bg-[#d90429]/10"
                          }`}
                        onClick={() => toggleMobileCategory(category)}
                      >
                        <span className="text-sm font-medium">{category}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${mobileServiceOpen[category] ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      {mobileServiceOpen[category] && (
                        <div className="ml-4 py-1">
                          {services.map((service, idx) => (
                            <Link
                              key={idx}
                              href={service.href}
                              className={`block px-4 py-1 text-sm transition rounded ${isSpecialPage
                                ? isScrolled
                                  ? "text-[#2b2d42] hover:bg-[#d90429]/10"
                                  : "!text-white/90 hover:bg-white/20 hover:text-white"
                                : "text-[#2b2d42] hover:bg-[#d90429]/10"
                                }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
              <Link
                href="/products/scrubb"
                className={`block px-4 py-2 rounded-lg transition ${isSpecialPage
                  ? isScrolled
                    ? "text-[#6b7280] hover:text-[#2b2d42] hover:bg-[#d90429]/10"
                    : "!text-white hover:bg-white/10"
                  : "text-[#6b7280] hover:text-[#2b2d42] hover:bg-[#d90429]/10"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                Products: Delete Account
              </Link>
              <Link
                href="/company/about"
                className={`block px-4 py-2 rounded-lg transition ${isSpecialPage
                  ? isScrolled
                    ? "text-[#6b7280] hover:text-[#2b2d42] hover:bg-[#d90429]/10"
                    : "!text-white hover:bg-white/10"
                  : "text-[#6b7280] hover:text-[#2b2d42] hover:bg-[#d90429]/10"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/company/portfolio"
                className={`block px-4 py-2 rounded-lg transition ${isSpecialPage
                  ? isScrolled
                    ? "text-[#6b7280] hover:text-[#2b2d42] hover:bg-[#d90429]/10"
                    : "!text-white hover:bg-white/10"
                  : "text-[#6b7280] hover:text-[#2b2d42] hover:bg-[#d90429]/10"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/career"
                className={`block px-4 py-2 rounded-lg transition ${isSpecialPage
                  ? isScrolled
                    ? "text-[#6b7280] hover:text-[#2b2d42] hover:bg-[#d90429]/10"
                    : "!text-white hover:bg-white/10"
                  : "text-[#6b7280] hover:text-[#2b2d42] hover:bg-[#d90429]/10"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                Career
              </Link>
              <Link
                href="/blog"
                className={`block px-4 py-2 rounded-lg transition ${isSpecialPage
                  ? isScrolled
                    ? "text-[#6b7280] hover:text-[#2b2d42] hover:bg-[#d90429]/10"
                    : "!text-white hover:bg-white/10"
                  : "text-[#6b7280] hover:text-[#2b2d42] hover:bg-[#d90429]/10"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/company/faq"
                className={`block px-4 py-2 rounded-lg transition ${isSpecialPage
                  ? isScrolled
                    ? "text-[#6b7280] hover:text-[#2b2d42] hover:bg-[#d90429]/10"
                    : "!text-white hover:bg-white/10"
                  : "text-[#6b7280] hover:text-[#2b2d42] hover:bg-[#d90429]/10"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                className={`block px-4 py-2 text-center font-medium rounded-lg transition ${isSpecialPage
                  ? isScrolled
                    ? "bg-[#d90429] !text-white hover:bg-[#ef233c]"
                    : "!bg-white text-[#d90429] hover:bg-gray-100"
                  : "bg-[#d90429] text-white hover:bg-[#ef233c]"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;