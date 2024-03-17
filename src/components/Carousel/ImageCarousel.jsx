import Image from "next/image";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { cn } from "../../../utils/cn";
import { urlFor } from "../../../utils/sanity/imageUrlBuilder";

/**
 * @component
 * @param {Object} props - The properties that define the ImageCarousel component.
 * @param {Array} props.slides - An array of slide objects. Each object should have an `_key` and `asset` property.
 * @param {Object} props.settings - The settings for the react-slick Slider component.
 * @param {string} props.slideStyle - Additional CSS classes to apply to each slide.
 * @returns {React.Element} The rendered ImageCarousel component.
 */

export default function ImageCarousel(props) {
  const { slides, settings, slideStyle } = props;

  return (
    <>
      <Slider {...settings}>
        {slides.map((slide) => {
          const imageUrl = urlFor(slide).url();

          return (
            <div className="w-full focus:outline-none" key={slide._key}>
              <Image
                src={imageUrl}
                width={500}
                height={750}
                alt={`Image ${slide._key}`}
                className={cn(
                  slideStyle,
                  "w-full rounded-lg object-cover object-center p-1 drop-shadow-md",
                )}
                loading="lazy"
              />
            </div>
          );
        })}
      </Slider>
    </>
  );
}

ImageCarousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  settings: PropTypes.object,
  slideStyle: PropTypes.string,
};
