import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Photos() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  // Simuler les données d'album (à remplacer par une vraie source de données)
  const albums = [
    {
      id: 1,
      name: "Vacances à la plage",
      photos: [
        { id: 1, name: "Plage 1", url: "/src/assets/images/plage1.jpg" },
        { id: 2, name: "Plage 2", url: "/src/assets/images/plage2.jpg" },
        { id: 3, name: "Plage 3", url: "/src/assets/images/plage3.jpg" },
      ],
    },
    {
      id: 2,
      name: "Noël en famille",
      photos: [
        { id: 1, name: "Noël 1", url: "/src/assets/images/noel1.jpg" },
        { id: 2, name: "Noël 2", url: "/src/assets/images/noel2.jpg" },
        { id: 3, name: "Noël 3", url: "/src/assets/images/noel3.jpg" },
      ],
    },
    {
      id: 3,
      name: "Anniversaire surprise",
      photos: [
        {
          id: 1,
          name: "Anniversaire 1",
          url: "/src/assets/images/anniversaire1.jpg",
        },
        {
          id: 2,
          name: "Anniversaire 2",
          url: "/src/assets/images/anniversaire2.jpg",
        },
        {
          id: 3,
          name: "Anniversaire 3",
          url: "/src/assets/images/anniversaire3.jpg",
        },
      ],
    },
  ];

  useEffect(() => {
    const selectedAlbum = albums.find((album) => album.id === parseInt(id));
    setAlbum(selectedAlbum);
  }, [id]);

  if (!album) return <div>Album non trouvé</div>;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{album.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {album.photos.map((photo) => (
          <div
            key={photo.id}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4"
          >
            <Link to={`/album/${id}/photos/${photo.id}`}>
              <img
                src={photo.url}
                alt={photo.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <span className="text-xl font-medium text-gray-700">
                {photo.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photos;
