import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function CarteZoneLivraison() {
    useEffect(() => {
        const mapElement = document.getElementById("map-carte");

        if (!window.__mapAlreadyLoaded && mapElement) {
            window.__mapAlreadyLoaded = true;

            const map = L.map(mapElement).setView([47.5101, 6.7983], 12);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; OpenStreetMap',
            }).addTo(map);

            L.marker([47.5101, 6.7983])
                .addTo(map)
                .bindPopup("Le Four Ambulant<br>Belfort / Montbéliard")
                .openPopup();

            L.circle([47.5101, 6.7983], {
                radius: 10000,
                color: "#f59e0b",
                fillColor: "#fbbf24",
                fillOpacity: 0.3,
            }).addTo(map);
        }
    }, []);

    return (
        <div
            id="map-carte"
            style={{
                width: "100%",
                height: "400px",
                maxWidth: "1024px",
                margin: "0 auto",
                borderRadius: "1rem",
                boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
            }}
        ></div>
    );
}
