import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { cn } from "../../../utils/cn";
import { fileUrlFor } from "../../../utils/sanity/fileUrlBuilder";

/**
 * @component
 * @param {object} props The properties that define the CarouselVideos component.
 * @param {object} props.emblaApi The EmblaCarousel API. (Required - for pausing videos on change)
 * @param {array} props.videos The videos to display in the carousel, an array of objects. (Required)
 * @param {string} props.videosStyle Additional CSS classes to apply to the videos. (Optional)
 * @returns {React.Element} CarouselVideos component to use in the Carousel component.
 */
export default function CarouselVideos(props) {
  const { emblaApi, videos, videosStyle } = props;

  const videosRefs = useRef([]);

  //   Pause videos each time the carousel changes
  useEffect(() => {
    if (!emblaApi) return;

    const pausePlayingVideos = () => {
      videosRefs.current.forEach((video) => {
        if (video && !video.paused) {
          video.pause();
        }
      });
    };

    emblaApi.on("select", pausePlayingVideos);
    return () => emblaApi.off("select", pausePlayingVideos);
  }, [emblaApi]);

  return (
    <>
      {videos.map((video, index) => {
        const videoRefSplit = video.asset._ref.split("-");

        const source = {
          assetId: videoRefSplit[1],
          extension: videoRefSplit[2],
        };

        const videoUrl = fileUrlFor(source);

        return (
          <div
            className={cn("w-full flex-none p-0.5 lg:w-1/3", videosStyle)}
            key={video._key}
          >
            <video
              ref={(el) => (videosRefs.current[index] = el)}
              preload="metadata"
              playsInline
              loop
              controls
              className="h-full w-full rounded-lg p-1 drop-shadow-md"
            >
              <source
                // add t=0.001 to the end of the video URL to load first frame as poster in safari
                src={`${videoUrl}#t=0.001`}
                type={`video/${source.extension}`}
              />
            </video>
          </div>
        );
      })}
    </>
  );
}

CarouselVideos.propTypes = {
  emblaApi: PropTypes.object,
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
  videosStyle: PropTypes.string,
};
