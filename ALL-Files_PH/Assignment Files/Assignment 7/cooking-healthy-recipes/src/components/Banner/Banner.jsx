import "./banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div>
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-4xl">
            <h1 class="mb-8 mt-24 text-4xl font-bold text-[#F6995C]">
              "Welcome to BD Keto Recipes - Your Ultimate Destination for
              Delicious Keto Recipes!
            </h1>
            <p class="mb-8 text-white font-medium">
              "Discover delicious keto recipes for a healthy lifestyle. From
              breakfast to dessert, find low-carb, high-fat dishes to satisfy
              your cravings. Join our keto community today!"
            </p>
            <div className="flex flex-row gap-4 justify-center mb-24">
              <button class="btn btn-info">Explore Now</button>
              <button class="btn btn-outline text-yellow-300 font-bold">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
