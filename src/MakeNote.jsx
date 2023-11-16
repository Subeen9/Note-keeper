import React, { useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import "firebase/firestore";
import "firebase/storage";
import cogoToast from "cogo-toast";
import './index.css'
import student from './assests/students.png'
import { useNavigate } from "react-router-dom";



function MakeNote() {
  const navigate = useNavigate();
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
    navigate("/home");
  };

  return (
    <>
    <div className="main">
      <picture className="studentPicture">
      <img src={student}  alt="student "></img>
      </picture>
    <div className="notes">
      <h3>Write your ideas here</h3>
      <form onSubmit={handleSubmit} className="notesSubmit">
        <div className="form-group col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
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
    </div>
  
    </>
  );
}
export default MakeNote;
