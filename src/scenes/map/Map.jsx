import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Box, useTheme } from "@mui/material";

// Custom icon using Unicode character
const schoolIcon = L.divIcon({
  html: '<div style="font-size: 24px; color: #3f51b5;">🏫</div>',
  className: 'custom-school-icon',
  iconSize: [24, 24],
  iconAnchor: [12, 24]
});

export default function SchoolsMapBox() {
  const theme = useTheme(); // Access the current theme
  const [schoolsData, setSchoolsData] = useState([]);

  useEffect(() => {
    // Fetch the school data from the JSON file
    fetch('/schools.json')
      .then(response => response.json())
      .then(data => setSchoolsData(data))
      .catch(error => console.error('Error loading schools data:', error));
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <Box p={2} textAlign="center" style={{ height: '500px' }}>
      <MapContainer center={[50.027128, 11.600123]} zoom={2} style={{ height: '200%', width: '100%' }}>
        <TileLayer url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' attribution="© OpenStreetMap contributors" />
        {schoolsData.map((school, index) => (
          <Marker
            key={index}
            position={[school.latitude, school.longitude]}
            icon={schoolIcon}>
            <Popup>
              <b>{school.name}</b><br />
              {school.type}<br />
              {school.year}<br />
              <em>{school.fulladdress}</em><br />
              {school.program && (
                <div>
                  <strong>Программа:</strong> {school.program}
                </div>
              )}
              {school.website && (
                <a href={school.website} target="_blank" rel="noopener noreferrer">
                  {school.website}
                </a>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
}
