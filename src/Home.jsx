import React, { createContext, useEffect, useState } from "react";
import notes from "./file";
import Note from "./Note";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";
import cogoToast from "cogo-toast";
export const SearchContext = createContext();
function Home() {
  const [Notes, setNotes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    setSearch(searchValue);
    const searchRegex = new RegExp(search, "i"); // i makes regular expression case insensitive
    const findNotes = Notes.filter((notes) =>
      notes.title.title.match(searchRegex)
    );
    setSearchResults(findNotes);
  };
  const fetchNotes = async () => {
    try {
      const querySnapShot = await getDocs(collection(db, "notes"));
      const allNotes = [];
      querySnapShot.forEach((doc) => {
        const dataId = {
          id: doc.id,
          ...doc.data(),
        };
        allNotes.push(dataId);
      });
      console.log(allNotes);
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
    <SearchContext.Provider value={handleSearch}>
      <>
        {Notes.map((note) => (
          <Note
            key={note.id}
            title={note.title.title}
            content={note.content.content}
          />
        ))}
      </>
    </SearchContext.Provider>
  );
}

export default Home;
