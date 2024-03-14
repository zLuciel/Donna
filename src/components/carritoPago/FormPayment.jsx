"use client";
import { useEffect,useState } from 'react';

const tiendas = [
    {
        nombre: "Capital Golf",
        latitud:  -12.082342420676776,
        longitud: -76.96816157655229,
      },
     
];

const FormPayment = () => {
  const [tiendasw,setTiendas] = useState([])
  useEffect(() => {
    const initMap = () => {
      const mapOptions = {
        center: { lat: 25.762288110966693, lng: -80.1941010670353 },
        zoom: 8,
  };
  
      const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
      const input = document.querySelector(".search-input-map");
      const autocomplete = new google.maps.places.Autocomplete(input);
  
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.geometry) {
          const userLat = place.geometry.location.lat();
          const userLon = place.geometry.location.lng();
  
          const userMarker = new google.maps.Marker({
            position: { lat: userLat, lng: userLon },
            map: map,
            title: "Tu Ubicación",
          });
  
          map.setCenter(new google.maps.LatLng(userLat, userLon));
  
          tiendas.forEach((tienda, i) => {
            const distancia = google.maps.geometry.spherical.computeDistanceBetween(
              new google.maps.LatLng(userLat, userLon),
              new google.maps.LatLng(tienda.latitud, tienda.longitud)
            );
  
            if (distancia < 500000) {
              setTiendas(tienda)
              console.log(tienda);
            
              map.setZoom(15);
              const marker = new google.maps.Marker({
                position: { lat: tienda.latitud, lng: tienda.longitud },
                map: map,
                title: tienda.nombre,
              });
            }
          });
        } else {
          console.error("No se pudo obtener la ubicación del lugar seleccionado.");
        }
      });
    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDAFOyIyu7nBGlbM8V-z6S0KpEoybYqagk&libraries=places,geometry`;
    script.async = true;
    script.defer = true;
    script.onload = initMap; // Llama a la función initMap cuando el script se carga
    document.head.appendChild(script);

    return () => {
      // Limpia el script cuando el componente se desmonta para evitar fugas de memoria
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
     <div className='hidden' id="map" style={{ width: '400px', height: '400px' }}></div>
      <h3 className="mb-4">
        <b>1. Información de Entrega</b>
      </h3>
      <form className="flex flex-col gap-3 border-form">
        <span className="flex gap-3">
          <div className="relative w-full">
            <input
              className="input-cal input-base"
              id="input"
              placeholder=""
              type="text"
            />
            <label id="label-input">Name</label>
          </div>
          <div className="relative w-full">
            <input
              className="input-cal input-base"
              id="input"
              placeholder=""
              type="text"
            />
            <label id="label-input">Apellido</label>
          </div>
        </span>
        <div className="relative">
          <input
            className="input-cal input-base search-input-map"
            id="input"
            placeholder=""
            type="text"
          />
          <label id="label-input">Dirección</label>
        </div>
        <div className="relative">
          <input
            className="input-cal input-base"
            id="input"
            placeholder=""
            type="text"
          />
          <label id="label-input">Referencia</label>
        </div>
        <span className="flex gap-3">
          <div className="relative w-full">
            <input
              className="input-cal input-base"
              id="input"
              placeholder=""
              type="text"
            />
            <label id="label-input">Celular</label>
          </div>
          <div className="relative w-full">
            <input
              className="input-cal input-base"
              id="input"
              placeholder=""
              type="text"
            />
            <label id="label-input">Correo</label>
          </div>
        </span>
        <label className="flex gap-2 items-center">
          <input type="checkbox" />
          <p className="text-sm">Añade mas informacion para tu pedido</p>
        </label>
      </form>
    </>
  );
};

export default FormPayment;
