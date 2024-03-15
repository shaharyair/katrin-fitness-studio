import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "../../utils/sanity/imageUrlBuilder";

export default function Katrin({ content }) {
  return (
    <section className="relative flex w-full items-center py-10">
      {/* offset for scroll link */}
      <div className="absolute -top-16 left-0 bg-transparent" id="about" />

      <div className="absolute left-0 top-0 -z-50 h-full w-full bg-black">
        <Image
          src={urlFor(content?.mainImage).url()}
          fill
          sizes="100vw"
          alt="Katrin Background Image"
          className="h-full w-full object-cover object-center brightness-[15%] grayscale"
          loading="lazy"
        />
      </div>

      <div className="container z-20 flex flex-col-reverse items-center justify-center gap-8 lg:flex-row-reverse">
        <Image
          src={urlFor(content?.secondImage).url()}
          width={500}
          height={750}
          alt="Katrin Image"
          className="w-1/2 object-cover object-center drop-shadow-md lg:w-3/5"
          loading="lazy"
        />

        <div
          style={{ direction: "rtl" }}
          className="flex flex-col items-center justify-center gap-4 text-center text-lg font-thin text-white drop-shadow-md lg:items-start lg:text-right lg:text-2xl"
        >
          <h2 className="text-xl font-normal lg:text-3xl">
            {content?.subtitle}
          </h2>
          <h1 className="mb-2 text-2xl font-normal text-primary lg:text-4xl">
            {content?.title}
          </h1>
          <div>
            <PortableText value={content?.body} />
          </div>
        </div>
      </div>
    </section>
  );
}
