import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { Title } = bookmark;

  return (
    <div>
      <h2 className="text-2xl font-bold bg-slate-400 ml-8 mr-8 mt-4 rounded-xl p-6 text-white">
        {Title}
      </h2>
    </div>
  );
};

Bookmark.PropTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
