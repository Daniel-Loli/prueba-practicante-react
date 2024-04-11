const fetchingApi = () => {
    return fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
        return []; // Devolver un array vacío en caso de error para manejarlo en el componente
      });
  };
  
  export default fetchingApi;
  