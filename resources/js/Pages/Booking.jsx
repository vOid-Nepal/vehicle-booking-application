import React, {useContext, useEffect, useState} from 'react';

import {Loader as GoogleMapsLoader} from '@googlemaps/js-api-loader';
import Authenticated from "@/Layouts/Authenticated";
import {Head} from "@inertiajs/inertia-react";
import Controls from "@/Components/Map/Controls";
import {BookingContext, BookingProvider} from "@/Context/BookingContext";
import DirectionInfo from "@/Components/Map/DirectionInfo";


export default function Booking(props) {
    // console.log(props)
    return <BookingProvider>
        <BookingPage {...props}/>
    </BookingProvider>
}

function BookingPage(props) {

    const [loading, setLoading] = useState(true);

    const {map, setMap, google, setGoogle, vehicles, setVehicles} = useContext(BookingContext);

    useEffect(() => {    // Update the document title using the browser API
        setVehicles(props.vehicles)
        loader
            .load()
            .then((google) => {
                const map = new google.maps.Map(document.getElementById("map"), mapOptions);
                setMap(map)
                setGoogle(google)
            })
            .catch(e => {
                console.log(e)
                // do something
            }).finally(() => {
            setLoading(false)
        });

    }, []);


    const loader = new GoogleMapsLoader({
        apiKey: "AIzaSyBvRmmrGeISIf9zZXBtNwcAgJf5-5E1HFU",
        version: "weekly",
        libraries: ["places"]
    });

    const mapOptions = {
        center: {
            lat: 27.700769,
            lng: 85.300140
        },
        zoom: 13,
        mapTypeControl: false
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Book a vehicle"/>
            <div className="h-screen w-screen">
                {!loading && <Controls/>}
                {!loading && <DirectionInfo/>}
                <div id="map" className={!loading ? "w-full h-full" : ""}></div>
            </div>
        </Authenticated>
    );
}
