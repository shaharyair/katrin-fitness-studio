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
  reviews: `*[_type == "imageCarousel" && component == "reviews"]`,
  katrin: `*[_type == "section" && component == "katrin"]`,
  recipes: `*[_type == "videoCarousel" && component == "recipes"]`,
  gallery: {
    studio: `*[_type == "imageCarousel" && component == "studio"]`,
    pilates: `*[_type == "videoCarousel" && component == "pilates"]`,
    strengthTraining: `*[_type == "videoCarousel" && component == "strengthTraining"]`,
  },
};
