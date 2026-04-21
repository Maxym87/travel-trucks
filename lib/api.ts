
import axios from "axios"

import {CampersResponse, Camper} from '../types/campers'


axios.defaults.baseURL = "https://campers-api.goit.study";

export const getCampers = async () => {
const {data} = await axios.get<CampersResponse>('/campers')
return data
}

export const getSingleCamper = async(id: string) => {
    const {data} = await axios.get<Camper>(`/campers/${id}`)
    return data;
}