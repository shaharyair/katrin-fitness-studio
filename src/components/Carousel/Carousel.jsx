import useEmblaCarousel from "embla-carousel-react";
import PropTypes from "prop-types";
import { cn } from "../../../utils/cn";
import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselButtons";
import CarouselImages from "./CarouselImages";
import CarouselVideos from "./CarouselVideos";

/**
 * @component
 * @param {object} props - The properties that define the Carousel component.
 * @param {object} props.options - The options for the EmblaCarousel component. (Required)
 * @param {array} props.content - The content to display in the carousel, an array of objects. (Required)
 * @param {string} props.contentType - The type of content to display in the carousel ("video" or "image"), defaults to "image".
 * @param {string} props.containerStyle - Additional CSS classes to apply to the container. (Optional)
 * @param {string} props.contentStyle - Additional CSS classes to apply to the content. (Optional)
 * @param {number} props.width The width of the images in the carousel. Default is 500px (Optional)
 * @param {number} props.height The height of the images in the carousel. Default is 500px (Optional)
 * @returns {React.Element} The Carousel component
 */

export default function Carousel(props) {
  const {
    options,
    contentType = "image",
    content,
    containerStyle,
    contentStyle,
    width = 500,
    height = 500,
  } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={cn("relative w-full px-5 lg:px-6", containerStyle)}>
      <div
        className="z-20 m-auto w-full overflow-hidden rounded-lg"
        ref={emblaRef}
      >
        <div className="flex touch-pan-y backface-hidden">
          {contentType === "video" && (
            <CarouselVideos
              emblaApi={emblaApi}
              videos={content}
              videosStyle={contentStyle}
            />
          )}

          {contentType === "image" && (
            <CarouselImages
              images={content}
              imagesStyle={contentStyle}
              width={width}
              height={height}
            />
          )}
        </div>
      </div>

      <PrevButton
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <NextButton
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />
    </section>
  );
}

Carousel.propTypes = {
  options: PropTypes.object.isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  contentType: PropTypes.string,
  containerStyle: PropTypes.string,
  contentStyle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
