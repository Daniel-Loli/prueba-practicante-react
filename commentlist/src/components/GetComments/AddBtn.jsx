import PropTypes from "prop-types";

const AddBtn = ({ handleSubmit, newComment, setNewComment }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(newComment);
    setNewComment("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Escribe tu comentario..."
        className="w-64 h-12 border-2 border-gray-300 rounded-lg px-4"
      />
      <button type="submit" className="bg-green-500 w-52 h-12 rounded-2xl text-blue-50 hover:bg-green-600">
        Agregar comentario
      </button>
    </form>
  );
};

// Definir los propTypes
AddBtn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  newComment: PropTypes.string.isRequired,
  setNewComment: PropTypes.func.isRequired
};

export default AddBtn;
