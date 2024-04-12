import { useEffect, useState } from "react";
import fetchingApi from "../../services/fetchingApi";
import AddBtn from "./AddBtn";
import CommentList from "./CommentList"; //

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
    if (comment.trim() === "") {
      return;
    }
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
      <CommentList comments={comments} />
    </main>
  );
};

export default GetComments;
