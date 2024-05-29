import fs from "node:fs"
import sql from "better-sqlite3";
import slugify from "slugify"
import xss from "xss"
import { v4 as uuidv4 } from 'uuid';

const db = sql("meals.db");

export async function getMeals() {
   await new Promise((resolve) => setTimeout(resolve, 500))
   return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
   return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}


export async function saveMeal(meal) {
   meal.slug = slugify(meal.title, { lower: true })
   meal.instractions = xss(meal.instaractions);

   const randomId = uuidv4()
   const extension = meal.image.name.split(".").pop();
   const fileName = `${meal.slug}.${randomId}.${extension}`

   const stream = fs.createWriteStream(`public/images/${fileName}`)
   const bufferedImage = await meal.image.arrayBuffer();

   stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
         throw new Error('Saving image failed!')
      }
   });

   meal.image = `/images/${fileName}`

   db.prepare(`
   INSERT INTO meals
   (slug,title,image,summary,instructions,creator,creator_email)
   VALUES (
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
   )
   `).run(meal)

}