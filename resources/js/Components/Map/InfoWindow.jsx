import React, {useEffect, useState} from 'react';

import {Loader as GoogleMapsLoader} from '@googlemaps/js-api-loader';
import Authenticated from "@/Layouts/Authenticated";
import {Head} from "@inertiajs/inertia-react";
import Autocomplete from "@/Components/Map/Autocomplete";


export default function InfoWindow({place, id}) {
    return (
            <div id={id} className="inline">
                {place && <><span className="bold">{place.name}</span><br/></>}
                {place && <span>{place.formatted_address}</span>}
            </div>
    );
}
