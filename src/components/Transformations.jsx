import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../../utils/sanity/imageUrlBuilder";

const transformationVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
      delay: 0.25,
    },
  },
};

export default function Transformations({ content }) {
  const { text, assets } = content;

  return (
    <section className="w-full bg-black py-10" id="before-and-after">
      <div className="container flex flex-col items-center justify-center gap-4 lg:gap-8">
        {/* title and subtitle */}
        <div className="flex flex-col items-center justify-center gap-2 text-center text-xl font-thin text-white lg:gap-4 lg:text-3xl">
          <h1 className="text-2xl font-normal text-primary lg:text-4xl">
            {text[0].title}
          </h1>
          <h2>{text[0].subtitle}</h2>
        </div>

        {/* gallery */}
        <div className="flex h-full w-full flex-wrap items-center justify-center">
          {assets.map((assetObj) => (
            <div
              className="flex h-full w-full items-center justify-center lg:w-1/2"
              key={assetObj?._id}
            >
              {/* after transformation image */}
              <motion.div
                variants={transformationVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="aspect-[1/1.15] h-full w-full px-0.5 py-1 lg:p-1"
              >
                <Image
                  src={urlFor(assetObj?.afterImage).url()}
                  width={500}
                  height={500}
                  alt={`After Image ${assetObj?.title}`}
                  className="h-full w-full rounded-lg border-[.5px] border-primary object-cover object-center drop-shadow-md"
                  loading="lazy"
                />
              </motion.div>

              {/* before transformation image */}
              <motion.div
                variants={transformationVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="aspect-[1/1.15] h-full w-full px-0.5 py-1 lg:p-1"
                key={assetObj?.id}
              >
                <Image
                  src={urlFor(assetObj?.beforeImage).url()}
                  width={500}
                  height={500}
                  alt={`Before Image ${assetObj?.title}`}
                  className="h-full w-full rounded-lg border-[.5px] border-primary object-cover object-center drop-shadow-md"
                  loading="lazy"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
