import  { useEffect, useState } from "react";
import AddBtn from "./AddBtn";
import fetchingApi from "../../services/fetchingApi";

const GetComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchingApi()
      .then((data) => setComments(data))
      .catch((error) => console.error("Error:", error));
  }, []); 

  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-center">Mostrando {comments.length} comentarios</h2>
        <AddBtn />
      </div>

      <section>
        <ul>
          {comments.map((comment) => (
            <li className="mb-2 mx-10 font-mono" key={comment.id}>{`${comment.id}  ${comment.name} ${comment.email}`}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default GetComments;
