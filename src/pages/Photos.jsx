import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PhotoDetails() {
  const { id, photoId } = useParams();
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);

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

  const fakeComments = [
    {
      id: 1,
      user: "Alice",
      comment: "Superbe photo, ça donne envie d'y être !",
    },
    { id: 2, user: "Bob", comment: "Magnifique couleur de l'eau !" },
    { id: 3, user: "Charlie", comment: "Quel beau paysage !" },
  ];

  useEffect(() => {
    const selectedAlbum = albums.find((album) => album.id == id);
    if (selectedAlbum) {
      const selectedPhoto = selectedAlbum.photos.find(
        (photo) => photo.id == photoId
      );
      setPhoto(selectedPhoto);
      setComments(fakeComments);
    }
  }, [id, photoId]);

  if (!photo) return <div>Photo non trouvée</div>;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{photo.name}</h1>
      <div className="flex justify-center mb-8">
        <img
          src={photo.url}
          alt={photo.name}
          className="w-full max-w-lg object-cover rounded-lg"
        />
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Commentaires
      </h2>
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-3 px-6 bg-gray-200 font-semibold text-gray-600">
              Utilisateur
            </th>
            <th className="py-3 px-6 bg-gray-200 font-semibold text-gray-600">
              Commentaire
            </th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id} className="border-t">
              <td className="py-4 px-6 text-gray-700">{comment.user}</td>
              <td className="py-4 px-6 text-gray-700">{comment.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PhotoDetails;
