import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { Map, TileLayer, icon } from 'leaflet';
import * as leaflet from 'leaflet';
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { CityOffer, OfferLocation } from '../../types/offer';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';


function useMap(
    mapRef: MutableRefObject<HTMLElement | null>,
    city: CityOffer
): Map | null {
    const [map, setMap] = useState<Map | null>(null);
    const isRenderedRef = useRef<boolean>(false);

    useEffect(() => {
        if (mapRef.current !== null && !isRenderedRef.current) {
            const instance = new Map(mapRef.current, {
                center: {
                    lat: city.location.latitude,
                    lng: city.location.longitude
                },
                zoom: city.location.zoom
            });

            const layer = new TileLayer(
                'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                }
            );

            instance.addLayer(layer);

            setMap(instance);
            isRenderedRef.current = true;
        }
    }, [mapRef, city]);

    return map;
}

function MapComp({ city, points }: { city: CityOffer[], points: OfferLocation[] }) {
    const mapRef = useRef(null);
    const map = useMap(mapRef, city[0]);

    const defaultIcon = icon({
        iconUrl: URL_MARKER_DEFAULT,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
    });

    const currentIcon = icon({
        iconUrl: URL_MARKER_CURRENT,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
    });

    console.log("CITY: " + city[0].location.longitude)

    useEffect(() => {
        if (map) {
            setTimeout(() => {
                map.invalidateSize();
            }, 0);
            points.forEach((point) => {
                leaflet.marker({
                    lat: point.latitude,
                    lng: point.longitude
                }, {
                    icon: defaultIcon
                }).addTo(map);
            })
        }
    }, [map, points])


    return (
        <div className="cities__right-section">
            <section
                className="cities__map map"
                ref={mapRef}
            >

            </section>
        </div>
    );
}

export { MapComp };