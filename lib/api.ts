
import axios from "axios"

import type {CampersResponse} from '../types/campers'

axios.defaults.baseURL = "https://campers-api.goit.study";

export const getCampers = async () => {
const res = await axios.get<CampersResponse>('/campers')
return res.data
}