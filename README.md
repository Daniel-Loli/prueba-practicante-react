# Prueba técnica - practicante desarrollador front-end

#### Objetivo: Crear una aplicación React JS que utilice la API JSONPlaceholder para enlistar  comentarios y agregar nuevos comentarios.

- Crear una pantalla principal con un título "Lista de Comentarios" en la parte superior. Mostrar una lista de comentarios obtenidos de la API JSONPlaceholder
- Agregar un botón o elemento interactivo para permitir al usuario agregar nuevos comentarios.
- mplementar la lógica para agregar nuevos comentarios utilizando la API. Al hacer clic en el botón para agregar comentario, mostrar un formulario simple con campos requeridos de la  API. Después de agregar un comentario, actualizar dinámicamente la lista de comentarios para reflejar el nuevo comentario. 
- Utilizar ReactJs y JavaScripts para el desarrollo.




![](https://arielfuggini.com/static/d00325bbd9f153f8a3bfb2a3d4cd87e3/32ccb/react.png)


###Solución del reto

####Inicio y configuración del proyecto con Vite.js

`$ npm create vite@latest commentlist`
`$ cd commentlist`
`$ npm install`

####Instalación de Tailwindcss

`$ npm install -D tailwindcss postcss autoprefixer`
`$ npx tailwindcss init -p`
`$ npm install`

####Configuración inicial de tailwind

Indented 4 spaces, like `<pre>` (Preformatted Text).

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

####Consumo de la api mediante Fetch

```
const fetchingApi = () => {
    return fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
        return []; 
      });
  };
  
  export default fetchingApi;
```

####Mapeo de comentarios

```
import PropTypes from "prop-types";
import CommentItem from "./CommentItem";

const CommentList = ({ comments }) => (
  <section>
    <ul className="flex flex-wrap justify-center mt-8 ">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </ul>
  </section>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default CommentList;
    
```

####Formulario para agregar comentario

```
    <form onSubmit={handleFormSubmit} className="flex flex-col justify-center items-center gap-3 md:flex-row ">
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Escribe tu comentario..."
        className="w-64 h-12 border-2 border-gray-300 rounded-lg px-4"
        required 
      />
      <button type="submit" className="bg-green-500 w-52 h-12 rounded-2xl text-blue-50 hover:bg-green-600">
        Agregar comentario
      </button>
    </form>
```

####Persistencia de datos en el localStorage

```
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
```


<p>[commentlist.netlify.app](https://commentlist.netlify.app/ "Aplicación desplegada")</p>







###End
