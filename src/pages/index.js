import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Katrin from "@/components/Katrin";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services/Services";
import Studio from "@/components/Studio";
import Transformations from "@/components/Transformations";
import Head from "next/head";
import fetchCloudinaryResources from "../../utils/cloudinary";
import { GROQqueries } from "../../utils/sanity/GROQqueries";
import { client } from "../../utils/sanity/client";

export default function Home({
  heroContent,
  servicesContent,
  studioContent,
  transformationsContent,
  reviewsAssets,
  katrinContent,
}) {
  return (
    <>
      <Head>
        <title>הסטודיו של קאתרין - דף הבית</title>
      </Head>
      <Hero content={heroContent[0]} />
      <Services content={servicesContent} />
      <Studio content={studioContent[0]} />
      <Transformations content={transformationsContent} />
      <Reviews media={reviewsAssets} />
      <Katrin content={katrinContent[0]} />
      <Faq />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  try {
    const heroContent = await client.fetch(GROQqueries.hero);

    const servicesContent = {
      strengthTraining: await client.fetch(
        GROQqueries.services.strengthTraining,
      ),
      pilates: await client.fetch(GROQqueries.services.pilates),
      functionalTraining: await client.fetch(
        GROQqueries.services.functionalTraining,
      ),
    };

    const studioContent = await client.fetch(GROQqueries.studio);

    const transformationsContent = {
      text: await client.fetch(GROQqueries.transformations.text),
      assets: await client.fetch(GROQqueries.transformations.assets),
    };

    const reviewsAssets = await fetchCloudinaryResources("image", "reviews");

    const katrinContent = await client.fetch(GROQqueries.katrin);

    return {
      props: {
        heroContent,
        servicesContent,
        studioContent,
        transformationsContent,
        reviewsAssets,
        katrinContent,
      },
    };
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return {
      props: {
        heroContent: [],
        servicesContent: [],
        studioContent: [],
        transformationsContent: [],
        reviewsAssets: [],
        katrinContent: [],
      },
    };
  }
}
