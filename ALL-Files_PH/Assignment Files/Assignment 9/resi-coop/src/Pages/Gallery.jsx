import { useLoaderData } from "react-router-dom";
import GalleryCard from "../components/GalleryCard";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  const gallery = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      <Helmet>
        {" "}
        <title>ResiCoop | Gallery</title>{" "}
      </Helmet>
      {gallery.map((gall) => (
        <GalleryCard key={gall.id} gallery={gall}></GalleryCard>
      ))}
    </div>
  );
};

export default Gallery;
