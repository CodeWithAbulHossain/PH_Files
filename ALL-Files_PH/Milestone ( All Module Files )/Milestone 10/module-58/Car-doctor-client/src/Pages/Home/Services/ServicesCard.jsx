const ServicesCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-4 py-4">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-start text-center">
        <h2 className="card-title text-3xl font-semibold">{title}</h2>
        <p className="text-red-700 text-2xl font-semibold">Price: ${price}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
