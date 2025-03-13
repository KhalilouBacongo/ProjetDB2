import React, { useState } from "react";

// Composant FormField : champ de saisie générique pour chaque formulaire
export const FormField = ({ label, type = "text", value, onChange, name }) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2" htmlFor={name}>
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="border border-gray-300 p-2 w-full rounded"
    />
  </div>
);

// Composant ServicesForm
export const ServicesForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    description: "",
    icon: "",
    image: "",
    presentation: "",
    fonctionnement: "",
    etapes: "",
    opportunites: "",
    perspectives: "",
    objectif: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      description: "",
      icon: "",
      image: "",
      presentation: "",
      fonctionnement: "",
      etapes: "",
      opportunites: "",
      perspectives: "",
      objectif: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Gérer les Services</h2>
      <FormField
        label="Description"
        value={formData.description}
        onChange={handleChange}
        name="description"
      />
      <FormField
        label="Icon"
        value={formData.icon}
        onChange={handleChange}
        name="icon"
      />
      <FormField
        label="Image"
        type="file"
        onChange={handleFileChange}
        name="image"
      />
      <FormField
        label="Présentation"
        value={formData.presentation}
        onChange={handleChange}
        name="presentation"
      />
      <FormField
        label="Fonctionnement"
        value={formData.fonctionnement}
        onChange={handleChange}
        name="fonctionnement"
      />
      <FormField
        label="Étapes"
        value={formData.etapes}
        onChange={handleChange}
        name="etapes"
      />
      <FormField
        label="Opportunités"
        value={formData.opportunites}
        onChange={handleChange}
        name="opportunites"
      />
      <FormField
        label="Perspectives"
        value={formData.perspectives}
        onChange={handleChange}
        name="perspectives"
      />
      <FormField
        label="Objectif"
        value={formData.objectif}
        onChange={handleChange}
        name="objectif"
      />
      <button
        type="submit"
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
      >
        Enregistrer
      </button>
    </form>
  );
};

// Composant FormationsForm
export const FormationsForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    duree: "",
    image: "",
    video: "",
    dateDebut: "",
    prix: "",
    niveau: "",
    avis: "",
    objectif: "",
    perspective: "",
    opportunite: "",
    debouche: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      titre: "",
      description: "",
      duree: "",
      image: "",
      video: "",
      dateDebut: "",
      prix: "",
      niveau: "",
      avis: "",
      objectif: "",
      perspective: "",
      opportunite: "",
      debouche: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Gérer les Formations</h2>
      <FormField
        label="Titre"
        value={formData.titre}
        onChange={handleChange}
        name="titre"
      />
      <FormField
        label="Description"
        value={formData.description}
        onChange={handleChange}
        name="description"
      />
      <FormField
        label="Durée"
        value={formData.duree}
        onChange={handleChange}
        name="duree"
      />
      <FormField
        label="Image"
        type="file"
        onChange={handleFileChange}
        name="image"
      />
      <FormField
        label="Vidéo"
        type="file"
        onChange={handleFileChange}
        name="video"
      />
      <FormField
        label="Date de début"
        type="date"
        value={formData.dateDebut}
        onChange={handleChange}
        name="dateDebut"
      />
      <FormField
        label="Prix"
        type="number"
        value={formData.prix}
        onChange={handleChange}
        name="prix"
      />
      <FormField
        label="Niveau"
        value={formData.niveau}
        onChange={handleChange}
        name="niveau"
      />
      <FormField
        label="Avis"
        value={formData.avis}
        onChange={handleChange}
        name="avis"
      />
      <FormField
        label="Objectif"
        value={formData.objectif}
        onChange={handleChange}
        name="objectif"
      />
      <FormField
        label="Perspective"
        value={formData.perspective}
        onChange={handleChange}
        name="perspective"
      />
      <FormField
        label="Opportunité"
        value={formData.opportunite}
        onChange={handleChange}
        name="opportunite"
      />
      <FormField
        label="Débouché"
        value={formData.debouche}
        onChange={handleChange}
        name="debouche"
      />
      <button
        type="submit"
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
      >
        Enregistrer
      </button>
    </form>
  );
};

// Composant AvisForm
export const AvisForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    commentaire: "",
    imageUtilisateur: "",
    nom: "",
    prenom: "",
    entreprise: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      commentaire: "",
      imageUtilisateur: "",
      nom: "",
      prenom: "",
      entreprise: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Gérer les Avis</h2>
      <FormField
        label="Commentaire"
        value={formData.commentaire}
        onChange={handleChange}
        name="commentaire"
      />
      <FormField
        label="Image Utilisateur"
        type="file"
        onChange={handleFileChange}
        name="imageUtilisateur"
      />
      <FormField
        label="Nom"
        value={formData.nom}
        onChange={handleChange}
        name="nom"
      />
      <FormField
        label="Prénom"
        value={formData.prenom}
        onChange={handleChange}
        name="prenom"
      />
      <FormField
        label="Entreprise"
        value={formData.entreprise}
        onChange={handleChange}
        name="entreprise"
      />
      <button
        type="submit"
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
      >
        Enregistrer
      </button>
    </form>
  );
};
