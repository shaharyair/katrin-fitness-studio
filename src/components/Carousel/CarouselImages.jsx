import Image from "next/image";
import PropTypes from "prop-types";
import { cn } from "../../../utils/cn";
import { urlFor } from "../../../utils/sanity/imageUrlBuilder";

/**
 * @component
 * @param {object} props The properties that define the CarouselImages component.
 * @param {array} props.images The images to display in the carousel, an array of objects. (Required)
 * @param {string} props.imagesStyle Additional CSS classes to apply to the images. (Optional)
 * @param {number} props.width The width of the images in the carousel. (Required)
 * @param {number} props.height The height of the images in the carousel. (Required)
 * @returns {React.Element} CarouselImages component to use in the Carousel component.
 */

export default function CarouselImages(props) {
  const { images, imagesStyle, width, height } = props;

  return (
    <>
      {images.map((image) => {
        const imageUrl = urlFor(image).url();

        return (
          <div
            className={cn(
              "w-full flex-auto flex-shrink-0 flex-grow-0 p-1 lg:w-1/3",
              imagesStyle,
            )}
            key={image._key}
          >
            <Image
              src={imageUrl}
              width={width}
              height={height}
              alt={`Image ${image._key}`}
              className="h-full w-full rounded-lg object-cover object-center p-1 drop-shadow-md"
              loading="lazy"
            />
          </div>
        );
      })}
    </>
  );
}

CarouselImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  imagesStyle: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
