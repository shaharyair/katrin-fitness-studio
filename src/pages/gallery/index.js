import Carousel from "@/components/Carousel/Carousel";
import { carouselOptions } from "@/components/Carousel/CarouselOptions";
import Head from "next/head";
import PropTypes from "prop-types";
import { GROQqueries } from "../../../utils/sanity/GROQqueries";
import { client } from "../../../utils/sanity/client";

export default function Gallery({
  studioContent,
  pilatesContent,
  strengthTrainingContent,
}) {
  return (
    <>
      <Head>
        <title>הסטודיו של קאתרין - גלריה</title>
      </Head>
      <section className="w-full bg-black pb-10 pt-24 lg:pt-28">
        <div className="container flex flex-col items-center justify-center gap-10">
          <div className="flex w-full flex-col items-center justify-center lg:gap-2">
            <h3 className="text-3xl text-primary lg:text-4xl">
              {studioContent[0].title}
            </h3>

            <Carousel
              options={carouselOptions}
              content={studioContent[0].images}
              contentStyle="h-[75svh] lg:h-auto"
            />
          </div>

          <div className="flex flex-col items-center justify-center lg:gap-2">
            <h3 className="text-3xl text-primary lg:text-4xl">
              {pilatesContent[0].title}
            </h3>
            <Carousel
              options={carouselOptions}
              content={pilatesContent[0].videos}
              contentType="video"
            />
          </div>

          <div className="flex flex-col items-center justify-center lg:gap-2">
            <h3 className="text-3xl text-primary lg:text-4xl">
              {strengthTrainingContent[0].title}
            </h3>
            <Carousel
              options={carouselOptions}
              content={strengthTrainingContent[0].videos}
              contentType="video"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  try {
    const studioContent = await client.fetch(GROQqueries.gallery.studio);
    const pilatesContent = await client.fetch(GROQqueries.gallery.pilates);
    const strengthTrainingContent = await client.fetch(
      GROQqueries.gallery.strengthTraining,
    );

    return {
      props: {
        studioContent,
        pilatesContent,
        strengthTrainingContent,
      },
    };
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return {
      props: {
        studioContent: [],
        pilatesContent: [],
        strengthTrainingContent: [],
      },
    };
  }
}

Gallery.propTypes = {
  studioContent: PropTypes.arrayOf(PropTypes.object).isRequired,
  pilatesContent: PropTypes.arrayOf(PropTypes.object).isRequired,
  strengthTrainingContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};
