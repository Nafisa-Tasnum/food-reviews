import data from "@/data_files/data.json"
import image from "@/images/dishes/1117a963-dd82-4458-bcad-8f4d77a2586e.jpg"
import { FoodItem } from "./FoodItem";

interface ImageModule { default: { src: string; width: number; height: number; format: string; orientation: number; }; }

const images:Record<string, ImageModule> = import.meta.glob('../images/dishes/*', { eager: true });
const FoodList = ()=>{
    return <div>
        {data.dishes.map((values)=>{
            const searchableFileString = `../images/dishes/${values.id}.jpg`
            const src = images[searchableFileString]?.default?.src
            console.log(src)
            return <FoodItem {...values}/>
        })}
        </div>
}

export {FoodList}