import { motion } from "framer-motion";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "../../utils/sanity/imageUrlBuilder";

const text = {
  introduction: "קצת עליי",
  title: "קאתרין יאיר",
  part1:
    "לאורך החיים ספורט היה המקום השמח שלי, כשהגעתי לאימון הרגשתי מחוברת וקשובה לעצמי, הרגשתי שאני נותנת לעצמי מקום, מתפתחת וצומחת. הרגשתי שאני מתמלאת בעוצמה ויכולה לעשות הכל. מתחתי את הגבולות שלי.",
  part2:
    "עם הזמן הבנתי שזו התשוקה שלי, לתת בית לכל אותן נשים שמחפשות את העוצמה הזאת, לכן החלטתי להיות מאמנת כושר וליצור לי ולמתאמנות שלי את הבית הזה.",
};

const katrinVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },
};

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
        <motion.div
          variants={katrinVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex h-full w-full items-center justify-center"
        >
          <Image
            src={urlFor(content?.secondImage).url()}
            width={500}
            height={750}
            alt="Katrin Image"
            className="w-1/2 object-cover object-center drop-shadow-md lg:w-3/4"
            loading="lazy"
          />
        </motion.div>

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
