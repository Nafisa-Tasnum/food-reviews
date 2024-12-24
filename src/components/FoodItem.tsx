const FoodItem =({src, name, description, rating, location}:{
    src:string;
    name:string;
    description?:string;
    rating:string;
    location?:string;
})=>{
 return <div
 style={{backgroundColor: "#2D2D2D"}}  
 className="w-full rounded-xl p-6 shadow-xl sm:w-2/3 sm:p-9 mb-4"
  >
    <div
      className="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row"
    >
      <div>
        <img src={src}/>
        <h3 className="text-3xl font-bold text-neutral-100 sm:text-5xl">
         {name}
        </h3>
        
      </div>

    </div>

    <div className="mb-4">
      
      <span className="text-lg font-bold text-neutral-100"
        >{description}</span
      >
      <p className="text-xl text-neutral-200">{location}</p>
      
    </div>
  </div>
}

export {FoodItem}
