import Carousel from "./Carousel/Carousel";
import { carouselOptions } from "./Carousel/CarouselOptions";

export default function Reviews({ content }) {
  return (
    <>
      <section className="w-full bg-black py-10" id="reviews-carousel">
        <div className="container">
          <div className="flex w-full flex-col items-center justify-center gap-4 text-white lg:flex-row lg:justify-between lg:gap-12">
            <div
              style={{ direction: "rtl" }}
              className="flex flex-col items-center justify-center text-center text-2xl font-thin lg:items-start lg:gap-4 lg:text-right lg:text-5xl"
            >
              <h2 className=" font-normal text-primary ">{content?.title}</h2>
              <p className="leading-10 lg:text-4xl">{content?.subtitle}</p>
            </div>

            <div className="w-full lg:w-3/5">
              <Carousel
                options={carouselOptions}
                content={content?.images}
                contentStyle="lg:w-1/2"
                width={500}
                height={705}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
