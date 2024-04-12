import PropTypes from "prop-types";

const CommentItem = ({ comment }) => (
  <li className="mb-5 mx-10 font-mono lg:w-4/12 bg-white border-solid border-black border shadow-xl p-8">
    {`${comment.id}.${comment.body} `}
    <span className="font-serif underline text-blue-900 font-medium text-lg cursor-pointer"><br></br>ver mas</span>
  </li>
);

CommentItem.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default CommentItem;
