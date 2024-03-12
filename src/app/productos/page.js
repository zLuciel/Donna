
import FilterProducto from "@/components/filterProduct/FilterProducto";
import Estructura from "./Estructura";
const page =  () => {
 
  
  return (
    <div className="container px-8 mx-auto gap-3 py-10 grid lg:grid-cols-[220px_1fr]">
      <FilterProducto />
      {/* grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3 */}
      <Estructura/>
    </div>
  );
};

export default page;
