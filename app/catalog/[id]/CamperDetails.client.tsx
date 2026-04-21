'use client'

import { useQuery } from "@tanstack/react-query"
import { getSingleCamper } from "@/lib/api"

type Props = {
    id: string
}
const CamperDetailsClient = ({id}: Props) => {
 const {data: camper, isLoading, error} = useQuery({
    queryKey: ['camper', id],
    queryFn: () => getSingleCamper(id),
    refetchOnMount: false,
 })

 if (isLoading) return <p>Loading...</p>;
 if (error || !camper) return <p>Some error..</p>;

console.log(camper)

return <div>CamperDetailsClient</div>
}

export default CamperDetailsClient