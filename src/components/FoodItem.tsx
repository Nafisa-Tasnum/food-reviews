const FoodItem =({src, name, description, rating, location}:{
    src:string;
    name:string;
    description?:string;
    rating:string;
    location?:string;
})=>{
 return <div
    className="w-full rounded-xl bg-gradient-to-tr from-[#FF512F] to-[#F09819] p-6 shadow-xl sm:w-1/2 sm:p-8"
  >
    <div
      className="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row"
    >
      <div>
        <img src={src}/>
        <h3 className="text-2xl font-bold text-neutral-100 sm:text-3xl">
         felix is awesome
        </h3>
        <p className="text-orange-200">hello world</p>
      </div>

      <span
        className="order-first inline-block rounded-full bg-orange-200 bg-opacity-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-center text-orange-600 lg:order-none"
        >hello world</span
      >
    </div>

    <div className="mb-4">
      <span className="text-6xl font-bold text-neutral-100"
        >hello world</span
      >
      <span className="text-lg font-bold text-orange-100"
        >hello world</span
      >
      <span className="ms-3 text-orange-200"
        >hello world</span
      >
    </div>
  </div>
}

export {FoodItem}
