import React, {useContext, useEffect, useState} from 'react';

import {BookingContext} from "@/Context/BookingContext";
import Vehicles, {calculateFare} from "@/Components/Map/Vehicles";
import Button from "@/Components/Button";


export default function DirectionInfo() {
    const [vehicle, setVehicle] = useState(null);
    const [dateTime, setDateTime] = useState("");
    const [directionsService, setDirectionsService] = useState();
    const [directionsRenderer, setDirectionsRenderer] = useState();

    const {google, map, place, direction, setDirection} = useContext(BookingContext)
    useEffect(() => {
        /// For simplicity I am doing api call here only
        if (place.start && place.end) {
            const origin = `${place.start.geometry.location.lat()},${place.start.geometry.location.lng()}`
            const destination = `${place.end.geometry.location.lat()},${place.end.geometry.location.lng()}`
            /// This methods returns CORS Error


            // axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyBvRmmrGeISIf9zZXBtNwcAgJf5-5E1HFU`).then((value) => {
            //     setDirection(value)
            //     console.log(value)
            // }).catch((a) => {
            //     alert("An error has occurred while getting direction data.")
            //     console.error(a)
            // })

            directionsService.route({
                origin: origin,
                destination: destination,
                travelMode: 'DRIVING',
                unitSystem: google.maps.UnitSystem.IMPERIAL
            }, function (response, status) {
                if (status === 'OK') {

                    // Clear old directions route

                    // Pass data to the map
                    directionsRenderer.setDirections(response);

                    // Save for fare and other calculation
                    setDirection(response)
                } else {
                    console.log(response)
                    window.alert('Directions request failed due to ' + status);
                }
            });

        }
    }, [place])
    useEffect(() => {
        const control = document.getElementById("direction-control");
        map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(control);
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer;
        directionsRenderer.setMap(map);
        setDirectionsService(directionsService)
        setDirectionsRenderer(directionsRenderer)

    }, [])

    const book = () => {
        axios.post('/booking', {
            vehicle: vehicle.id,
            pickUpPoint: `${place.start.name},${place.start.formatted_address}`,
            dropPoint: `${place.end.name},${place.end.formatted_address}`,
            date: dateTime,
            fare: calculateFare(vehicle, direction.routes[0].legs[0].distance.value),
            distance: direction.routes[0].legs[0].distance.text,
        }).then((e) => {
            alert("Booked Successfully.");
        }).catch((e) => {
            alert("An error has occurred.")
        })
    }

    return (
        <div id="direction-control" className={`border-r-2 bg-white m-10 ${place.start && place.end ? "" : "hidden"}`}>
            <div className="bg-blue-400 p-2 text-white bold">Book a vehicle</div>
            <div className="flex gap-x-2 bg-transparent p-2">
                <div>Total Distance: {direction.routes[0].legs[0].distance.text}</div>
                <Vehicles onSelect={(e) => setVehicle(e)} myVehicle={vehicle}/>
                <input onChange={(e) => setDateTime(e.target.value)} type="datetime-local"></input>
                <button
                    className="inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 "
                    type="button" onClick={() => book()}>Book a trip
                </button>
            </div>
            <div className="font-italic font-light p-2">Please choose a vehicle, datetime and press book to book your
                vehicle.
            </div>
        </div>
    );
}
