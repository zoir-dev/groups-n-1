import React, { useState } from "react";
import "./style.scss";
import { locations } from "./index";
import { YMaps, Map as Mapp, Placemark } from "react-yandex-maps";

const Map = () => {
    const [location, setLocation] = useState(locations[0]);
    return (
        <div className="container xarita_div">
            <div className="title-xarita">
                <h2>Наши магазины</h2>
            </div>
            <div className="navigation-xarita">
                {locations.map((l, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`nav-btn-map ${location.location === l.location && "active"
                            }`}
                        onClick={() => {
                            setLocation(l);
                        }}
                    >
                        {l.location}
                    </button>
                ))}
            </div>
            <div className="map-xarita">
                <YMaps>
                    <div style={{ position: 'relative' }}>
                        <Mapp
                            className="mapp"
                            state={{
                                center: location.coordinates,
                                zoom: location.zoom,
                            }}
                            options={{ suppressMapOpenBlock: true, mapTypeId: "map" }}
                            modules={["control.ZoomControl", "control.FullscreenControl"]}
                        >
                            <YMaps>
                                <Placemark geometry={location.coordinates} />
                            </YMaps>
                        </Mapp>
                    </div>
                </YMaps>
            </div>
        </div>
    );
};

export default Map;
