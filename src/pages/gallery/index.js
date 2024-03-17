import Carousel from "@/components/Carousel/Carousel";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import Head from "next/head";
import fetchCloudinaryResources from "../../../utils/cloudinary";
import { GROQqueries } from "../../../utils/sanity/GROQqueries";
import { client } from "../../../utils/sanity/client";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const carouselOptions = {
  loop: true,
  align: "center",
  duration: "5",
  breakpoints: {
    "(min-width: 1024px)": {
      align: "start",
    },
  },
};

export default function Gallery({
  studioGalleryContent,
  pilatesAssets,
  strengthTrainingAssets,
}) {
  return (
    <>
      <Head>
        <title>הסטודיו של קאתרין - גלריה</title>
      </Head>
      <section className="w-full bg-black pb-10 pt-24 lg:pt-28">
        <div className="container flex flex-col items-center justify-center gap-10">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <h3 className="text-3xl text-primary lg:text-4xl">גלריה</h3>

            <div className="w-[90%]">
              <ImageCarousel
                slides={studioGalleryContent[0].images}
                settings={settings}
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-3xl text-primary lg:text-4xl">פילאטיס</h3>
            <Carousel
              slideStyle="lg:w-1/3"
              className="lg:w-full"
              mediaType="video"
              slides={pilatesAssets}
              options={carouselOptions}
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-3xl text-primary lg:text-4xl">אימוני כוח</h3>
            <Carousel
              slideStyle="lg:w-1/3"
              className="lg:w-full"
              mediaType="video"
              slides={strengthTrainingAssets}
              options={carouselOptions}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  try {
    const studioGalleryContent = await client.fetch(GROQqueries.studioGallery);

    const pilatesAssets = await fetchCloudinaryResources("video", "pilates");
    const strengthTrainingAssets = await fetchCloudinaryResources(
      "video",
      "strength-training",
    );

    return {
      props: {
        studioGalleryContent,
        pilatesAssets,
        strengthTrainingAssets,
      },
    };
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return {
      props: {
        studioGalleryContent: [],
        pilatesAssets: [],
        strengthTrainingAssets: [],
      },
    };
  }
}
