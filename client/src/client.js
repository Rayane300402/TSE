import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: `${process.env.REACT_APP_SANITY_PROJECT_ID}`,
  dataset: 'production',
  useCdn: true,
  token: 'skcZiTxXwvyPVK1peyQy0xzlph1nBOWELHxCh3J8GG3lHRXa8Qj4HAbFK8w5zXcpABCh1I9pZLyRpuVGkxYv7SfApfxA64fzdm3I2Jw0wRSLoFRYRxKEL3ACNOZB5txJxfQGSdo6y0vZWYikyET4fQsO7LZiFZOVqQMIEKATvRBPxTZyP1zJ',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);