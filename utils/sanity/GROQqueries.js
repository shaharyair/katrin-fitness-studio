export const GROQqueries = {
  hero: `*[_type == "section" && component == "hero"]`,
  services: {
    pilates: `*[_type == "section" && component == "pilates"]`,
    strengthTraining: `*[_type == "section" && component == "strengthTraining"]`,
    functionalTraining: `*[_type == "section" && component == "functionalTraining"]`,
  },
  studio: `*[_type == "section" && component == "studio"]`,
  transformations: {
    text: `*[_type == "section" && component == "transformations"]`,
    assets: `*[_type == "transformation"]`,
  },
  reviews: {
    text: `*[_type == "section" && component == "reviews"]`,
    assets: `*[_type == "imageCarousel" && title == "reviews"]`,
  },
  katrin: `*[_type == "section" && component == "katrin"]`,
  studioGallery: `*[_type == "imageCarousel" && title == "studio"]`,
};
