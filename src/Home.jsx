// Home.js
import React, { Children, useContext, useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";
import cogoToast from "cogo-toast";
import Note from "./Note";
import Navigation from "./components/Navigation";

const searchContext = React.createContext()
function Home() {
  const [Notes, setNotes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");


  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    setSearch(searchValue);
    const searchRegex = new RegExp(search, "i");
    const findNotes = Notes.filter((note) => note.title.title.match(searchRegex));
    setSearchResults(findNotes);
  };

  const fetchNotes = async () => {
    try {
      const querySnapShot = await getDocs(collection(db, "notes"));
      const allNotes = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(allNotes);
    } catch (e) {
      console.log("Error fetching data " + e);
      cogoToast.error("Cannot get the notes");
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
    <searchContext.Provider value={{searchResults,handleSearch}}>
      
      {Notes.map((note) => (
        <Note key={note.id} title={note.title.title} content={note.content.content} />
      ))}
     </searchContext.Provider>
    </>
  );
}
export const useSearch = ()=>{
  const search = useContext(searchContext);
  return search;
}

export default Home;
