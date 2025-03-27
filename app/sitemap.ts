import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bryanpth.dev',
      lastModified: new Date(),
    },
  ];
}
