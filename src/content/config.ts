
// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';


// 2. Define your collection(s)
const postsCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: ({ image }) => z.object({
      title: z.string(),
    
      cover: image().refine((img) => img.width >= 400, {
        message: "Cover image must be at least 400 pixels wide!",
      }),
      excerpt: z.string(),
     
    }),
  });
  
  
const projectsCollection =  defineCollection({
    type: 'content', // v2.5.0 and later
    schema: ({ image }) => z.object({
      title: z.string(),
   
      cover: image().refine((img) => img.width >= 400, {
        message: "Cover image must be at least 400 pixels wide!",
      }),
      excerpt: z.string(),
      
    }),
  });
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'posts': postsCollection,
  'projects':projectsCollection,
};