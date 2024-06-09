import { useContext } from "react";
import { FotosContext } from "../contexts/FotosContext";

const Favorites = () => {
  const { photos, setPhotos } = useContext(FotosContext);

  const removeFavorite = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: false,
        };
      }

      return photo;
    });
    setPhotos(newPhotos);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {photos
          .filter((foto) => foto.isFavorite)
          .map((foto, i) => (
            <img
              src={foto.src.tiny}
              alt=""
              onClick={() => removeFavorite(foto.id)}
              key={i}
            />
          ))}
      </div>
    </div>
  );
};
export default Favorites;
