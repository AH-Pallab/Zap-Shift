import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 🟢 Green Icon
const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const BangladeshMap = () => {
  const [locations, setLocations] = useState([]);

  // 🔥 Fetch data from public folder
  useEffect(() => {
    fetch("/warehouse.json")
      .then((res) => res.json())
      .then((data) => setLocations(data))
      .catch((err) => console.error(err));
  }, []);

  const center = [23.685, 90.3563];

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Service Coverage Map</h2>

          <div className="h-[500px] w-full rounded-xl overflow-hidden">
            <MapContainer center={center} zoom={7} className="h-full w-full">
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* 🔥 Dynamic markers from fetched data */}
              {locations.map((loc, index) => (
                <Marker
                  key={index}
                  position={[loc.latitude, loc.longitude]}
                  icon={greenIcon}
                >
                  <Popup>
                    <div>
                      <h3 className="font-bold">
                        {loc.city}, {loc.district}
                      </h3>
                      <p>
                        <b>Region:</b> {loc.region}
                      </p>
                      <p>
                        <b>Areas:</b> {loc.covered_area.join(", ")}
                      </p>
                      <p className="text-green-600 font-semibold">
                        {loc.status}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BangladeshMap;
