"use client";
import { useEffect, useState } from "react";
import InputCart from "./InputCart";
import { Switch, Textarea } from "@mantine/core";
const tiendas = [
  {
    nombre: "Capital Golf",
    latitud: -12.082342420676776,
    longitud: -76.96816157655229,
  },
];

const FormPayment = ({ handleChange, formData, errors }) => {
  const [tiendasw, setTiendas] = useState([]);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const initMap = () => {
      const mapOptions = {
        center: { lat: 25.762288110966693, lng: -80.1941010670353 },
        zoom: 8,
      };

      const map = new google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );

      const input = document.querySelector(".search-input-map");
      const autocomplete = new google.maps.places.Autocomplete(input);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        console.log(place, 4);

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
            const distancia =
              google.maps.geometry.spherical.computeDistanceBetween(
                new google.maps.LatLng(userLat, userLon),
                new google.maps.LatLng(tienda.latitud, tienda.longitud)
              );

            if (distancia < 500000) {
              setTiendas(tienda);
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
          console.error(
            "No se pudo obtener la ubicación del lugar seleccionado."
          );
        }
      });
    };

    const script = document.createElement("script");
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
      <div
        className="hidden"
        id="map"
        style={{ width: "400px", height: "400px" }}
      ></div>
      <h3 className="mb-4">
        <b>1. Información de Entrega</b>
      </h3>
      <div className="flex flex-col gap-3 border-form">
        <span className="flex gap-3">
          <div className="w-full">
            <div className="relative">
              <InputCart
                errors={errors}
                label={"Nombre"}
                name={"nombre"}
                handleChange={handleChange}
                value={formData.nombre}
              />
            </div>
            <p style={{ color: "red" }} className="text-xs mt-3">
              {errors.nombre}
            </p>
          </div>
          <div className="w-full">
            <div className="relative">
              <InputCart
                errors={errors}
                label={"Apellido"}
                name={"apellido"}
                handleChange={handleChange}
                value={formData.apellido}
              />
            </div>
            <p style={{ color: "red" }} className="text-xs mt-3">
              {errors.apellido}
            </p>
          </div>
        </span>
        <div className="relative">
          <InputCart
            errors={errors}
            addClass={"search-input-map"}
            label={"Dirección"}
            name={"direction"}
            handleChange={handleChange}
            value={formData.direction}
          />
        </div>
        <div>
          <div className="relative">
            <InputCart
              errors={errors}
              label={"Referencia"}
              name={"referencia"}
              handleChange={handleChange}
              value={formData.referencia}
            />
          </div>
          <p style={{ color: "red" }} className="text-xs mt-3">
            {errors.referencia}
          </p>
        </div>
        <span className="flex gap-3">
          <div className=" w-full">
            <div className="relative">
              <InputCart
                errors={errors}
                label={"Celular"}
                name={"celular"}
                handleChange={handleChange}
                value={formData.celular}
              />
            </div>
            <p style={{ color: "red" }} className="text-xs mt-3">
              {errors.celular}
            </p>
          </div>
          <div className="w-full">
            <div className="relative">
              <InputCart
                errors={errors}
                label={"Correo"}
                name={"email"}
                handleChange={handleChange}
                value={formData.email}
              />
            </div>
            <p style={{ color: "red" }} className="text-xs mt-3">
              {errors.email}
            </p>
          </div>
        </span>

        <Switch
          checked={checked}
          onChange={(event) => setChecked(event.currentTarget.checked)}
          color="#f80000"
          label="Añade más informacion para tu pedido"
          size="xs"
        />

        {checked && (
          <Textarea
            radius="md"
            size="lg"
            withAsterisk
            placeholder="Escriba aqui"
          />
        )}
      </div>
    </>
  );
};

export default FormPayment;
