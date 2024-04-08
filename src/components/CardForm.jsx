import { useState } from "react";

function CardForm({ addCity }) {
  const [formData, setFormData] = useState({
    name: "aaaa",
    description: "eee",
    imgUrl: "",
    isVisited: false,
  });

  /**
   * Metodo per gestire il change dell'input
   * @param {event} e
   */
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type == "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  /**
   * Metodo di invio form
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const city = {
      id: Math.random() * 10,
      name: formData.name,
      description: formData.description,
      imgUrl: formData.imgUrl,
      isVisited: formData.isVisited,
    };
    //Svuoto il form
    setFormData({
      name: "",
      description: "",
      imgUrl: "",
      isVisited: false,
    });
    addCity(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg"
    >
      <div className="flex flex-col ">
        <label>Nome citta </label>
        <input
          type="text"
          name="name"
          value={formData?.name}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="flex flex-col ">
        <label>Descrizione </label>
        <textarea
          name="description"
          value={formData?.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="flex flex-col ">
        <label>Immagine</label>
        <input
          type="text"
          name="imgUrl"
          onChange={handleInputChange}
          value={formData?.imgUrl}
        ></input>
      </div>
      <div className="flex flex-col ">
        <label>Visitata </label>
        <input
          type="checkbox"
          name="isVisited"
          onChange={handleInputChange}
          checked={formData.isVisited}
        ></input>
      </div>

      <button type="submit"> Aggiungi Card</button>
    </form>
  );
}

export default CardForm;
