import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FiWifi, FiServer, FiShield, FiCpu, FiGlobe, FiMonitor } from "react-icons/fi";
import { Link } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 20.5937, // India center
  lng: 78.9629,
};

const kpis = [
  { title: "Devices", value: "120", status: "Excellent", icon: <FiMonitor /> },
  { title: "Clients", value: "450", status: "Connected", icon: <FiCpu /> },
  { title: "WiFi", value: "98%", status: "Stable", icon: <FiWifi /> },
  { title: "Network", value: "1.2Gbps", status: "Active", icon: <FiGlobe /> },
  { title: "Services", value: "24", status: "Running", icon: <FiServer /> },
  { title: "Applications", value: "56", status: "OK", icon: <FiCpu /> },
  { title: "Security", value: "Safe", status: "No Threats", icon: <FiShield /> },
];

export default function InsightsPage() {
  const [mapType, setMapType] = useState("roadmap");

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <div className="bg-purple-700 text-white px-6 py-3 flex items-center gap-6">
        {["Dashboard", "Monitor", "Configure", "Tools", "Insights", "A3", "Your Cloud"].map(
          (item, idx) => (
            item == "Dashboard" ?  <Link to="/ExtremeCloudDashboard">  <button
              key={idx}
              className={`hover:bg-purple-600 px-3 py-1 rounded `}
            >
              {item}
            </button></Link>:
            <button
              key={idx}
              className={`hover:bg-purple-600 px-3 py-1 rounded ${item=="Insights" ?'bg-purple-600':'' }`}
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {kpis.map((kpi, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-xl p-4 flex items-center gap-4"
          >
            <div className="text-purple-700 text-3xl">{kpi.icon}</div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500">{kpi.title}</h4>
              <p className="text-lg font-bold">{kpi.value}</p>
              <span className="text-xs text-green-600">{kpi.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="p-6 bg-white shadow rounded-xl m-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Locations</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setMapType("roadmap")}
              className={`px-3 py-1 rounded ${mapType === "roadmap" ? "bg-purple-700 text-white" : "bg-gray-200"}`}
            >
              Map
            </button>
            <button
              onClick={() => setMapType("satellite")}
              className={`px-3 py-1 rounded ${mapType === "satellite" ? "bg-purple-700 text-white" : "bg-gray-200"}`}
            >
              Satellite
            </button>
          </div>
        </div>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
            mapTypeId={mapType}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}
