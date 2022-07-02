import React, {useContext, useEffect, useState} from 'react';

import {Loader as GoogleMapsLoader} from '@googlemaps/js-api-loader';
import Authenticated from "@/Layouts/Authenticated";
import {Head} from "@inertiajs/inertia-react";
import Autocomplete from "@/Components/Map/Autocomplete";
import Vehicles from "@/Components/Map/Vehicles";
import {BookingContext} from "@/Context/BookingContext";


export default function Controls() {
    const {google, map} = useContext(BookingContext)
    useEffect(() => {
        const control = document.getElementById("main-control");
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(control)
    }, [])
    return (
        <>
            <div id="main-control" className="border-r-2 bg-white m-5">
                <div className="bg-blue-400 p-2 text-white bold">Select your destinations</div>
                <div className="flex gap-x-2 bg-transparent p-2">
                    <Autocomplete id="start" type="text" className="flex flex-col items-start"
                                  placeholder="From"/>
                    <Autocomplete id="end" type="text" className="flex flex-col items-start"
                                  placeholder="To"/>
                </div>
            </div>
        </>
    );
}
