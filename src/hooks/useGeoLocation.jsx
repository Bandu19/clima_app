import React, { useEffect, useState } from "react";

export const useGeoLocation = () => {
   const [location, setLocation] = useState({
      loaded: false,
      coordinates: { lat: "", lng: "" },
   });

   const onSeccess = (location) => {
      setLocation({
         loaded: true,
         coordinates: { lat: location.coords.latitude, lng: location.coords.longitude },
      });
   };

   const onError = (error) => {
      setLocation({
         loaded: true,
         error,
      });
   };

   useEffect(() => {
      if (!("geolocation" in navigator)) {
         onError({
            code: 0,
            message: "Geolocation is not supported",
         });
      }

      navigator.geolocation.getCurrentPosition(onSeccess, onError);
   }, []);

   return location;
};
