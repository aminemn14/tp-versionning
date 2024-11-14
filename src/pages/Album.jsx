import { useState } from "react";
import {
  PencilSquareIcon,
  TrashIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import ModalManage from "../components/ModalManage";

function Album() {
  const [albums, setAlbums] = useState([
    { id: 1, name: "Vacances à la plage" },
    { id: 2, name: "Noël en famille" },
    { id: 3, name: "Anniversaire surprise" },
  ]);

  const [newAlbumName, setNewAlbumName] = useState("");
  const [editAlbum, setEditAlbum] = useState(null);
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [albumToDelete, setAlbumToDelete] = useState(null);

  const handleAddAlbum = () => {
    if (newAlbumName.trim() === "") return;
    setAlbums([...albums, { id: Date.now(), name: newAlbumName }]);
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
        <PlusCircleIcon className=" ml-2 h-6 w-6" />
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="relative flex flex-col items-center bg-white rounded-lg shadow-lg p-4"
          >
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
