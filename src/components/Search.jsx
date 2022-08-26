import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  console.log();

  const handlesearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
    props.filterByCategory(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Buscar </label>
      <select
        name="category"
        id="category"
        onChange={handlesearch}
        value={search}
      >
        <option value=""></option>
        <option value="Pruebas">Pruebas</option>
        <option value="Canción Propia">Canción Propia</option>
        <option value="Versión">Versión</option>
        <option value="Otros">Otros</option>
      </select>
    </div>
  );
}

export default Search;
