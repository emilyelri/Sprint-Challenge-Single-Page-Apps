import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";

 function SearchForm(props) {
 
  const characters = props.characters;
  console.log("Search props", characters);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   const results = characters.filter(character =>
  //     character.toLowerCase().includes(searchTerm)
  //     );
  //     setSearchResults(results);
  // }, [searchTerm])

  // const handleChange = event => {
  //   setSearchTerm(event.target.value);
  // };

  return (
    <div>
      <form>
        <label for="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          // onChange={handleChange}
        />
      </form>
      <div>
        <ul>
          
        </ul>
      </div>
    </div>
  );
}

export default SearchForm;