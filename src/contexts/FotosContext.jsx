// Exportamos un contexto (sin default) y un provider como componente (por default)

import { createContext, useEffect, useState } from "react";

export const FotosContext = createContext();

export default function PhotoProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    const response = await fetch("/photos.json");
    const { photos: photosdb } = await response.json();
    setPhotos(photosdb);
  };
  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <FotosContext.Provider value={{ photos, setPhotos }}>
      {children}
    </FotosContext.Provider>
  );
}
