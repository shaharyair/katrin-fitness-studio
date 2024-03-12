import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { cn } from "../../utils/cn";
import { links } from "../../utils/links";
import Button from "./Button";

export default function SocialLinks(props) {
  return (
    <>
      <div className="w-auto">
        <ul
          className={cn(
            "container flex flex-wrap items-center justify-center gap-4 p-0 lg:gap-6",
            props.className,
          )}
        >
          <li>
            <Link
              href={links.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={cn("p-3", props.buttonStyle)} type="button">
                <FaFacebookF
                  className={cn("text-lg lg:text-xl", props.iconStyle)}
                />
              </Button>
            </Link>
          </li>
          <li>
            <Link
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={cn("p-3", props.buttonStyle)} type="button">
                <FaInstagram
                  className={cn("text-lg lg:text-xl", props.iconStyle)}
                />
              </Button>
            </Link>
          </li>
          <li>
            <Link
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={cn("p-3", props.buttonStyle)} type="button">
                <FaWhatsapp
                  className={cn("text-lg lg:text-xl", props.iconStyle)}
                />
              </Button>
            </Link>
          </li>
          <li>
            <Link href={links.phone} target="_blank" rel="noopener noreferrer">
              <Button className={cn("p-3", props.buttonStyle)} type="button">
                <FaPhone
                  className={cn("text-lg lg:text-xl", props.iconStyle)}
                />
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
