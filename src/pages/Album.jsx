import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PencilSquareIcon,
  TrashIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import ModalManage from "../components/ModalManage";

function Album() {
  const [albums, setAlbums] = useState([
    {
      id: 1,
      name: "Vacances à la plage",
      image: "/src/assets/images/album-plage.jpg",
      photos: [
        { id: 1, name: "Plage 1", url: "/src/assets/images/plage1.jpg" },
        { id: 2, name: "Plage 2", url: "/src/assets/images/plage2.jpg" },
        { id: 3, name: "Plage 3", url: "/src/assets/images/plage3.jpg" },
      ],
    },
    {
      id: 2,
      name: "Noël en famille",
      image: "/src/assets/images/album-noel.jpg",
      photos: [
        { id: 1, name: "Noël 1", url: "/src/assets/images/noel1.jpg" },
        { id: 2, name: "Noël 2", url: "/src/assets/images/noel2.jpg" },
        { id: 3, name: "Noël 3", url: "/src/assets/images/noel3.jpg" },
      ],
    },
    {
      id: 3,
      name: "Anniversaire surprise",
      image: "/src/assets/images/album-anniversaire.jpg",
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
  ]);

  const [newAlbumName, setNewAlbumName] = useState("");
  const [editAlbum, setEditAlbum] = useState(null);
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [albumToDelete, setAlbumToDelete] = useState(null);

  const handleAddAlbum = () => {
    if (newAlbumName.trim() === "") return;
    setAlbums([
      ...albums,
      {
        id: Date.now(),
        name: newAlbumName,
        image: "../assets/images/default.jpg",
      },
    ]);
    setNewAlbumName("");
    setIsAddVisible(false);
  };

  const handleDeleteAlbum = (id) => {
    setAlbumToDelete(id);
    setIsConfirmVisible(true);
  };

  const confirmDeleteAlbum = () => {
    setAlbums(albums.filter((album) => album.id !== albumToDelete));
    setIsConfirmVisible(false);
    setAlbumToDelete(null);
  };

  const handleEditAlbum = (id) => {
    const album = albums.find((album) => album.id === id);
    setEditAlbum(album);
    setNewAlbumName(album.name);
  };

  const handleSaveEdit = () => {
    setAlbums(
      albums.map((album) =>
        album.id === editAlbum.id ? { ...album, name: newAlbumName } : album
      )
    );
    setEditAlbum(null);
    setNewAlbumName("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Mes Albums</h1>

      <button
        onClick={() => setIsAddVisible(true)}
        className="fixed pl-4 top-4 right-4 flex items-center bg-green-600 text-white font-semibold rounded-full p-2 hover:bg-green-700 transition-all duration-300 ease-in-out"
      >
        Ajouter un album
        <PlusCircleIcon className="ml-2 h-6 w-6" />
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="relative flex flex-col items-center bg-white rounded-lg shadow-lg p-4"
          >
            <Link to={`/album/${album.id}/photos`}>
              <img
                src={album.image}
                alt={album.name}
                className="w-full h-48 object-cover rounded-lg my-8"
              />
            </Link>
            <span className="text-xl font-medium text-gray-700 mb-4">
              {album.name}
            </span>
            <div className="absolute top-2 right-2 flex space-x-2">
              <button
                onClick={() => handleEditAlbum(album.id)}
                className="text-blue-600 hover:text-blue-800"
              >
                <PencilSquareIcon className="h-6 w-6" />
              </button>
              <button
                onClick={() => handleDeleteAlbum(album.id)}
                className="text-red-600 hover:text-red-800"
              >
                <TrashIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal d'ajout d'album */}
      <ModalManage isOpen={isAddVisible} onClose={() => setIsAddVisible(false)}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ajouter un album
        </h2>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          placeholder="Nom de l'album"
          value={newAlbumName}
          onChange={(e) => setNewAlbumName(e.target.value)}
        />
        <button
          onClick={handleAddAlbum}
          className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
        >
          Ajouter
        </button>
      </ModalManage>

      {/* Modal de modification d'album */}
      <ModalManage isOpen={!!editAlbum} onClose={() => setEditAlbum(null)}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Modifier l&apos;album
        </h2>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          placeholder="Nom de l'album"
          value={newAlbumName}
          onChange={(e) => setNewAlbumName(e.target.value)}
        />
        <button
          onClick={handleSaveEdit}
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Enregistrer
        </button>
      </ModalManage>

      {/* Modal de confirmation de suppression */}
      <ModalManage
        isOpen={isConfirmVisible}
        onClose={() => setIsConfirmVisible(false)}
        showButtons={true}
        onConfirm={confirmDeleteAlbum}
        onCancel={() => setIsConfirmVisible(false)}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Êtes-vous sûr de vouloir supprimer cet album ?
        </h2>
      </ModalManage>
    </div>
  );
}

export default Album;
