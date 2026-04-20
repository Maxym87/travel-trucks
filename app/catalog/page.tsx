
import { getCampers } from "@/lib/api"

const Catalog = async () => {

const catalog = await getCampers();
console.log('catalog', catalog.campers)

    return (
<div>Catalog</div>
)}

export default Catalog