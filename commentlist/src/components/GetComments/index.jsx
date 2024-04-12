import { useEffect, useState } from "react";
import fetchingApi from "../../services/fetchingApi";
import AddBtn from "./AddBtn";

const GetComments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(""); 

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    } else {
      fetchingApi()
        .then((data) => setComments(data))
        .catch((error) => console.error("Error:", error));
    }
  }, []);


  const handleSubmit = (comment) => {
    const updatedComments = [...comments, { id: comments.length + 1, body: comment }];
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center mt-4">Mostrando <strong className="text-amber-500">{comments.length} </strong>comentarios</h2>
        <AddBtn handleSubmit={handleSubmit} newComment={newComment} setNewComment={setNewComment} />
      </div>

      <section>
        <ul className="flex flex-wrap justify-center mt-8 ">
          {comments.map((comment) => (
            <li className="mb-5 mx-10 font-mono lg:w-4/12 bg-white border-solid border-black border shadow-xl p-8" key={comment.id}>{`${comment.id}.${comment.body} `} 
            <span  className="font-serif underline text-blue-900 font-medium text-lg cursor-pointer"><br></br>ver mas</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default GetComments;
