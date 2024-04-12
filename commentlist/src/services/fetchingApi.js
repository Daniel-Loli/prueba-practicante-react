const fetchingApi = () => {
    return fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
        return []; 
      });
  };
  
  export default fetchingApi;
  