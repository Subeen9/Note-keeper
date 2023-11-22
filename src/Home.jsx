// Home.js
import React, { Children, useContext, useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";
import cogoToast from "cogo-toast";
import Note from "./Note";


const searchContext = React.createContext()
function Home() {
  const [Notes, setNotes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");
  const[click, isClick] = useState(false);


  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    if (searchValue.trim() === "") {
     
      setSearchResults(Notes);
    } else {
      const searchRegex = new RegExp(searchValue, "i");
      const findNotes = Notes.filter((note) => note.title.title.match(searchRegex));
      setSearchResults(findNotes);
    }

    isClick(true);
  };

  const fetchNotes = async () => {
    try {
      const querySnapShot = await getDocs(collection(db, "notes"));
      const allNotes = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      if(click == false)
      setNotes(allNotes);
    else{
      
    }
    } catch (e) {
      console.log("Error fetching data " + e);
      cogoToast.error("Cannot get the notes");
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);
 

  return(
    <>
    {Notes.map((note) => (
      <Note key={note.id} title={note.title.title} content={note.content.content} />
    ))}
   
  </>
  )
      
    
  }
  


export default Home
