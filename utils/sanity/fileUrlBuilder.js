import { buildFileUrl } from "@sanity/asset-utils";

const options = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
};

export const fileUrlFor = (source) => {
  const url = buildFileUrl(source, options);

  return url;
};
