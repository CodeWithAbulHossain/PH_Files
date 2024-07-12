import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex flex-row">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={150}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
