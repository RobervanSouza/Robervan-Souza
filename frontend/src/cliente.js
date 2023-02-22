import { createClient } from '@sanity/client'
import ImageUrlBuilder  from "@sanity/image-url";

export const cliente = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion:'2023-02-21',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,

});

const build = ImageUrlBuilder(cliente);

export const urlFor = (source) => build.image(source)