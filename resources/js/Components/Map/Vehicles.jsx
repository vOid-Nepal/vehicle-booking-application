import React, {useContext, useEffect, useState} from 'react';

import {Loader as GoogleMapsLoader} from '@googlemaps/js-api-loader';
import Authenticated from "@/Layouts/Authenticated";
import {Head} from "@inertiajs/inertia-react";
import Autocomplete from "@/Components/Map/Autocomplete";
import {BookingContext} from "@/Context/BookingContext";


export default function Vehicles({onSelect, myVehicle}) {
    const {vehicles, direction} = useContext(BookingContext)

    return (
        <>
            <select value={JSON.stringify(myVehicle)} onChange={(e) => onSelect(JSON.parse(e.target.value))}>
                <option key={"vehicle-0"}> ---Select a vehicle ---</option>
                {vehicles.map((vehicle) => {
                    return <option onChange={() => onSelect(vehicle)} key={vehicle.id}

                                   value={JSON.stringify(vehicle)}>{vehicle.name} {vehicle.fare_fleet} $ {calculateFare(vehicle, direction?.routes[0]?.legs[0]?.distance?.value)}</option>
                })}
            </select>
        </>
    );
}

const range = [{top: 5, value: 50, is_fixed: false}, {top: 50, value: 0.80,}, {top: 10000, value: 0.20,}]

const getRate = (range, distance) => {
    const value = range.shift();
    if (value.hasOwnProperty("is_fixed")) {
        if (distance <= value.top) return value.value;
        return value.value + getRate(range, distance - value.top);
    }
    if (range.length === 1) return value.value * distance;
    if (distance <= value.top)
        return value.value * distance;
    return (value.value * distance - value.top) + getRate(range, distance - value.top);
}

export const calculateFare = (vehicle, distance) => {
    // The distance is in meter converting to mile
    const miles = distance / 1609.34;
    return Math.round(vehicle.fare_fleet * getRate([...range], miles) * 100) / 100

}
