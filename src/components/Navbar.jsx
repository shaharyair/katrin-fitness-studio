import { Cross as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import Button from "./Button";

const links = {
  home: {
    href: "/",
    label: "דף הבית",
  },
  gallery: {
    href: "/gallery",
    label: "גלריה",
  },
  recipes: {
    href: "/recipes",
    label: "מתכונים",
  },
  about: {
    href: "/#about",
    label: "קצת עליי",
  },
  contact: {
    href: "/#contact",
    label: "הצטרפי עכשיו",
  },
};

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 1 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeNavbarOnResize = () => {
      if (window.innerWidth >= 1024) setIsNavbarOpen(false);
    };

    const handleLinkClick = (event) => {
      const isLinkClicked = event.target.closest("a");
      if (isLinkClicked) setIsNavbarOpen(false);
    };

    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target))
        setIsNavbarOpen(false);
    };

    document.addEventListener("click", handleLinkClick);
    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("resize", closeNavbarOnResize);

    return () => {
      document.removeEventListener("click", handleLinkClick);
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("resize", closeNavbarOnResize);
    };
  }, [isNavbarOpen]);

  return (
    <>
      <section
        id="navbar"
        role="navigation"
        ref={navbarRef}
        className={cn(
          `${!scrolled && "lg:bg-transparent"}`,
          `${scrolled && "drop-shadow-md lg:bg-white"}`,
          "fixed left-0 top-0 z-50 w-full bg-white font-light transition-[background-color] duration-150 ease-linear lg:text-xl",
        )}
      >
        <div
          className={cn(
            `${!scrolled && "lg:py-8"}`,
            "relative m-auto flex flex-row items-center justify-end px-3 py-2.5 transition-[padding] duration-150 ease-linear lg:container lg:flex-row-reverse lg:justify-start lg:gap-16",
          )}
        >
          {/* Navbar Logo */}
          <div
            className={` ${!scrolled && "lg:invert"} absolute left-1/2 top-1/2 w-[85px] -translate-x-1/2 -translate-y-1/2 cursor-pointer lg:static lg:-translate-x-0 lg:-translate-y-0`}
          >
            <Link href={links.home.href}>
              <Image
                src={"/Navbar/logo.webp"}
                alt="Katrin's Logo"
                width={100}
                height={100}
                priority={true}
                className="object-contain object-center"
              />
            </Link>
          </div>

          {/* Navbar Links */}
          <nav
            className={`${isNavbarOpen && "-translate-x-full"}  ${!scrolled ? "drop-shadow-sm" : "lg:text-black"} absolute -right-3/4 top-full flex h-screen w-3/4 flex-col items-center justify-start gap-8 whitespace-nowrap bg-black-navbar px-2 py-4 text-white transition-transform duration-300 ease-in-out will-change-transform lg:static lg:h-full lg:w-auto lg:flex-row lg:justify-between lg:bg-transparent lg:p-0 lg:transition-none `}
          >
            <ul className="grid w-full auto-cols-auto place-items-center divide-y text-center  lg:m-0 lg:flex lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-4 lg:divide-y-0 lg:divide-white">
              {Object.entries(links).map(([key, { href, label }]) => (
                <li
                  key={key}
                  className={`${href === links.contact.href && "lg:hidden"} w-full p-4 transition-colors duration-100 lg:px-2 lg:py-1 lg:hover:text-primary`}
                >
                  <Link href={href} className="w-full lg:w-auto">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <Hamburger
              toggled={isNavbarOpen}
              toggle={() => setIsNavbarOpen(!isNavbarOpen)}
              label="Show mobile menu"
              hideOutline={true}
              duration={0.5}
              direction="right"
              size={28}
              rounded
            />
          </div>

          {/* Contact Button */}
          <div className=" mr-auto hidden items-center justify-center lg:flex">
            <Button
              id="contact-page-button"
              type="button"
              className={`${!scrolled ? "drop-shadow-md" : "hover:bg-black hover:text-white"}`}
            >
              <Link href={links.contact.href}>{links.contact.label}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
