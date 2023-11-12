import React, { useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import "firebase/firestore";
import "firebase/storage";
import cogoToast from "cogo-toast";
import './MakeNote.css'

function MakeNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // collection  Reference
  const colRef = collection(db, "notes");
  getDocs(colRef).then((snapShot) => {
    console.log(snapShot.docs);
  });

  const savePost = async () => {
    await addDoc(colRef, {
      title: { title },
      content: { content },
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    savePost();
    cogoToast.success("Your notes was added");
  };
  return (
    <div className="Notesform">
      <form onSubmit={handleSubmit}>
        <div className="form-group col-md-6">
          <label htmlFor="Add your Title Here">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="area">Your Notes</label>
          <textarea
            className="form-control"
            id="area"
            rows="3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default MakeNote;
