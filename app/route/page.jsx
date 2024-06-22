import {Suspense} from "react";

import SharedMap from '@/components/shared/SharedMap'

const RouterPage = () => {
    return ( 
        <Suspense>
            <SharedMap />
        </Suspense>
     );
}
 
export default RouterPage;