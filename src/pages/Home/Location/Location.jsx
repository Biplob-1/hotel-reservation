import { Map, Marker, ZoomControl  } from "pigeon-maps";
import { osm } from 'pigeon-maps/providers'

const Location = () => {
    return(
        <div className="my-5">
            <h3 className="text-3xl font-bold text-center py-10">Find Us</h3>
             <Map 
                provider={osm}
                height={400} 
                defaultCenter={[23.88316313053746, 90.38798985739766]} 
                defaultZoom={11}
             >
                <Marker width={50} anchor={[23.88316313053746, 90.38798985739766]} />
                <ZoomControl></ZoomControl>
            </Map>
        </div>
    )
};
export default Location;