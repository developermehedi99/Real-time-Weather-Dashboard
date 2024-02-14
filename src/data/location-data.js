const data = [
  {
    location: "Dhaka",
    latitude: 2.777176,
    longitude: 90.325242,
  },
  {
    location: "London",
    latitude: 1.232525,
    longitude: 103.3245324,
  },
  {
    location: "Singapore",
    latitude: 3.777176,
    longitude: 8.325242,
  },
  {
    location: "New York",
    latitude: 1.232525,
    longitude: 103.3245324,
  },
  {
    location: "Toronto",
    latitude: 4.777176,
    longitude: 4.4523542,
  },
  {
    location: "Kolkata",
    latitude: 22.572645,
    longitude: 88.363892,
  },
];

function getLocation() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const filtered = data.filter((item) => item.location === location);

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}

export { getLocation, getLocationByName };
