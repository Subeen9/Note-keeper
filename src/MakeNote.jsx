import React, { useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import "firebase/firestore";
import "firebase/storage";
import cogoToast from "cogo-toast";

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
    cogoToast.success("Your notes was");

    //   fetch("http://localhost:3000/file", {
    //     method: "Post",
    //     headers: { "Content-type": "application/json" }, // informs the api that the data is json type
    //     body: JSON.stringify(result), // creates the object into Json string
    //   }).then(() => {
    //     console.log("New notes added");
    //   });
  };
  return (
    <div>
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
