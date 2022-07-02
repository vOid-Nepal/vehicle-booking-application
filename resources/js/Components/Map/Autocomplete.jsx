import React, {useContext, useEffect, useState} from 'react';

import InfoWindow from "@/Components/Map/InfoWindow";
import {BookingContext} from "@/Context/BookingContext";

const options = {
    fields: ["formatted_address", "geometry", "name"],
    strictBounds: false,
    types: ["establishment"],
};

export default function Autocomplete({id, placeholder}) {

    const {place, setPlace, map, google} = useContext(BookingContext)

    useEffect(() => {
        const input = document.getElementById(id)
        const autocomplete = new google.maps.places.Autocomplete(input, options);
        autocomplete.bindTo("bounds", map);

        const infowindow = new google.maps.InfoWindow();
        const infowindowContent = document.getElementById(`${id}-info-window`)
        infowindow.setContent(infowindowContent);

        const marker = new google.maps.Marker({
            map,
            anchorPoint: new google.maps.Point(0, -29),
            title: "Click to view details"
        });

        autocomplete.addListener("place_changed", () => {
            infowindow.close();
            marker.setVisible(false);

            const placeSingle = autocomplete.getPlace();
            const oldPlace = place;
            oldPlace[id] = placeSingle
            setPlace({...oldPlace})

            if (!placeSingle.geometry || !placeSingle.geometry.location) {
                window.alert("No details available for input: '" + placeSingle.name + "'");
                return;
            }

            if (placeSingle.geometry.viewport) {
                map.fitBounds(placeSingle.geometry.viewport);
            } else {
                map.setCenter(placeSingle.geometry.location);
                map.setZoom(17);
            }

            marker.setPosition(placeSingle.geometry.location);
            marker.setVisible(true);

            marker.addListener("click", () => {
                map.setCenter(marker.getPosition());
                infowindow.open(map, marker);

            });
            infowindow.open(map, marker);
        });

    }, [])
    return (
        <>
            <input id={id} type="text" className="flex flex-col items-start"
                   placeholder={placeholder}/>
            <InfoWindow id={`${id}-info-window`} place={place[id]}/>
        </>
    );
}
