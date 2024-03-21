import { urlFor } from "../../utils/sanity/imageUrlBuilder";
import ImageWithPlaceholder from "./ImageWithPlaceholder";

export default function Transformations({ content }) {
  const { text, assets } = content;

  return (
    <section className="w-full bg-black py-10" id="transformations">
      <div className="container flex flex-col items-center justify-center gap-4 lg:gap-8">
        {/* title and subtitle */}
        <div className="flex flex-col items-center justify-center gap-2 text-center text-xl font-thin text-white lg:gap-4 lg:text-3xl">
          <h1 className="text-2xl font-normal text-primary lg:text-4xl">
            {text[0].title}
          </h1>
          <h2>{text[0].subtitle}</h2>
        </div>

        {/* gallery */}
        <div className=" grid place-items-center gap-2 lg:grid-cols-2 lg:gap-4">
          {assets.map((assetObj) => (
            <div
              key={assetObj?._id}
              className="flex items-center justify-center gap-1 lg:gap-2"
            >
              {/* after transformation image */}
              <ImageWithPlaceholder
                src={urlFor(assetObj?.afterImage).url()}
                width={450}
                height={500}
                alt={`After Image ${assetObj?.title}`}
                sizes="(min-width: 1024px) 20vw, 40vw"
                className="aspect-[1/1.15] rounded-lg border-[.5px] border-primary object-cover object-center drop-shadow-md"
                loading="lazy"
              />
              {/* before transformation image */}
              <ImageWithPlaceholder
                src={urlFor(assetObj?.beforeImage).url()}
                width={450}
                height={500}
                alt={`Before Image ${assetObj?.title}`}
                sizes="(min-width: 1024px) 20vw, 40vw"
                className="aspect-[1/1.15] rounded-lg border-[.5px] border-primary object-cover object-center drop-shadow-md"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
