

import { QueryClient,   HydrationBoundary,
  dehydrate,
 } from '@tanstack/react-query';
import {getSingleCamper} from '@/lib/api'
import CamperDetailsClient from './CamperDetails.client'

type TruckDetailsProps = {
    params: Promise<{id: string}>
}

const CamperDeteils =  async({params}: TruckDetailsProps) => {
const {id} = await params;

const queryClient = new QueryClient();

await queryClient.prefetchQuery({
    queryKey: ['camper', id],
    queryFn: () => getSingleCamper(id)
})



return (
    <HydrationBoundary state={dehydrate(queryClient)}>
        <CamperDetailsClient id={id}/>
    </HydrationBoundary>
)
}

export default CamperDeteils;