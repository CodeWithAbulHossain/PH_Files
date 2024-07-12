const GalleryCard = ({ gallery }) => {
  const { image } = gallery;
  return (
    <div className="mt-6">
      <img
        className="w-full gap-4 bg-gray-500 aspect-square rounded-3xl"
        src={image}
      />
    </div>
  );
};

export default GalleryCard;
