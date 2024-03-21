import { cn } from "../../../utils/cn";
import { urlFor } from "../../../utils/sanity/imageUrlBuilder";
import ImageWithPlaceholder from "../ImageWithPlaceholder";

export default function ServiceCard(props) {
  const { content } = props;

  return (
    <div>
      <ImageWithPlaceholder
        src={urlFor(content?.mainImage).url()}
        width={750}
        height={450}
        sizes="100vw"
        alt="Services Image"
        className={cn(
          "mb-2 aspect-[1/1.15] h-full w-full rounded-lg object-cover object-center drop-shadow-md",
          props.className,
        )}
        loading="lazy"
      />
      <h2 className="text-xl text-primary lg:text-2xl">{content?.title}</h2>
      <p className="text-lg font-thin lg:text-xl">{content?.subtitle}</p>
    </div>
  );
}
