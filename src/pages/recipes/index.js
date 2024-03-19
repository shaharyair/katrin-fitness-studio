import Button from "@/components/Button";
import Carousel from "@/components/Carousel/Carousel";
import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";
import { links } from "../../../utils/links";
import { GROQqueries } from "../../../utils/sanity/GROQqueries";
import { client } from "../../../utils/sanity/client";

const carouselOptions = {
  loop: true,
  align: "start",
};

const bannerText = {
  title: "מעוניינת לראות עוד? הצטרפי לקבוצת המתכונים שלנו!",
  button: "לחצי כאן",
};

export default function Recipes({ recipesContent }) {
  const { title, videos } = recipesContent[0];

  return (
    <>
      <Head>
        <title>הסטודיו של קאתרין - מתכונים</title>
      </Head>
      <section className="w-full bg-black pb-10 pt-24 lg:pt-28">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="container flex flex-col items-center justify-center lg:gap-2">
            <h3 className="text-3xl text-primary lg:text-4xl">{title}</h3>
            <Carousel
              options={carouselOptions}
              content={videos}
              contentType="video"
            />
          </div>

          <div className="w-full bg-primary py-4 lg:py-6">
            <div
              className="container flex w-full flex-col items-center justify-center gap-2 text-center text-2xl font-thin leading-10 lg:flex-row lg:gap-12 lg:text-right lg:text-3xl"
              style={{ direction: "rtl" }}
            >
              <h3>{bannerText.title}</h3>
              <Link href={links.recipesWhatsapp}>
                <Button
                  type="button"
                  className="bg-black text-white hover:bg-white hover:text-black"
                >
                  {bannerText.button}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  try {
    const recipesContent = await client.fetch(GROQqueries.recipes);

    return {
      props: {
        recipesContent,
      },
    };
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return {
      props: {
        recipesContentre,
      },
    };
  }
}

Recipes.propTypes = {
  recipesContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};
