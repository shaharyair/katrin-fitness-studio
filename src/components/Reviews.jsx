import ImageCarousel from "./Carousel/ImageCarousel";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
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

export default function Reviews({ content }) {
  const { text, assets } = content;

  return (
    <>
      <section className="w-full bg-black py-10" id="reviews-carousel">
        <div className="container">
          <div className="flex w-full flex-col items-center justify-center gap-4 text-white lg:flex-row lg:justify-between lg:gap-12">
            <div
              style={{ direction: "rtl" }}
              className="flex flex-col items-center justify-center text-center text-2xl font-thin lg:items-start lg:gap-4 lg:text-right lg:text-5xl"
            >
              <h2 className=" font-normal text-primary ">{text[0].title}</h2>
              <p className="leading-10 lg:text-4xl">{text[0].subtitle}</p>
            </div>

            <div className="w-[90%] lg:w-3/5">
              <ImageCarousel slides={assets[0].images} settings={settings} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
