import PropTypes from "prop-types";
import CommentItem from "./CommentIItem";

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
    