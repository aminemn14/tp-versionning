import { useState } from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

function Album() {
  // État pour stocker les albums
  const [albums, setAlbums] = useState([
    { id: 1, name: 'Vacances à la plage' },
    { id: 2, name: 'Noël en famille' },
    { id: 3, name: 'Anniversaire surprise' }
  ]);

  // État pour le nom du nouvel album
  const [newAlbumName, setNewAlbumName] = useState('');
  const [editAlbum, setEditAlbum] = useState(null);
  const [isAddVisible, setIsAddVisible] = useState(false);

  // Fonction pour ajouter un album
  const handleAddAlbum = () => {
    if (newAlbumName.trim() === '') return;

    setAlbums([
      ...albums,
      { id: Date.now(), name: newAlbumName }
    ]);
    setNewAlbumName('');
    setIsAddVisible(false); // Cache le formulaire après l'ajout
  };

  // Gestion de la suppression d'un album
  const handleDeleteAlbum = (id) => {
    setAlbums(albums.filter(album => album.id !== id));
  };

  // Gestion de la modification d'un album
  const handleEditAlbum = (id) => {
    const album = albums.find(album => album.id === id);
    setEditAlbum(album);
    setNewAlbumName(album.name);
  };

  const handleSaveEdit = () => {
    setAlbums(albums.map(album =>
      album.id === editAlbum.id ? { ...album, name: newAlbumName } : album
    ));
    setEditAlbum(null);
    setNewAlbumName('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Mes Albums</h1>

      {/* Bouton Ajouter */}
      <button
        onClick={() => setIsAddVisible(!isAddVisible)}
        className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 mb-6"
      >
        Ajouter un album
      </button>

      {/* Formulaire d'ajout d'album (affiché seulement si isAddVisible est true) */}
      {isAddVisible && (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 mx-auto mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ajouter un album</h2>
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
        </div>
      )}

      {/* Grille d'albums */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {albums.map(album => (
          <div key={album.id} className="relative flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
            <span className="text-xl font-medium text-gray-700 mb-4">{album.name}</span>

            {/* Icônes Modifier et Supprimer en haut à droite */}
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
                <TrashIcon className='h-6 w-6' />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Formulaire de modification */}
      {editAlbum && (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Modifier l&apos;album</h2>
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
        </div>
      )}
    </div>
  );
}

export default Album;
