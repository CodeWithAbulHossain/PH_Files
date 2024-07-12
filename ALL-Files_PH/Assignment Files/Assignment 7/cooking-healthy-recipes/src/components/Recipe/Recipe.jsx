import { IoTimeOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe, handleWantToCook, handleTotalTime }) => {
  const {
    recipe_name,
    short_description,
    preparing_time,
    calories,
    recipe_image,
    ingredients,
  } = recipe;
  return (
    <div>
      <div>
        <div className="border-2 p-4 rounded-2xl">
          <div class="card card-compact bg-base-100 shadow-xl h-[700px]">
            <figure>
              <img className="w-full h-full" src={recipe_image} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{recipe_name}</h2>
              <p>{short_description}</p>
              <hr />
              <div className="mt-4 mb-4">
                <h2 className="font-bold mb-2 text-xl">
                  Ingredients : {ingredients.length}
                </h2>
                <p>
                  {ingredients.map((ingred) => (
                    <li> {ingred} </li>
                  ))}
                </p>
              </div>
              <hr />
              <div className="flex flex-row justify-between items-center gap-2 mt-4 mb-8">
                <div className="flex flex-row justify-start items-center gap-2">
                  <IoTimeOutline></IoTimeOutline>
                  <p>{preparing_time}</p>
                </div>
                <div className="flex flex-row justify-start items-center gap-2">
                  <FaFire></FaFire>
                  <p>{calories} calories</p>
                </div>
              </div>
              <div class="card-actions justify-start">
                <button
                  onClick={(e) => handleWantToCook(recipe)}
                  class="btn btn-primary rounded-3xl px-6"
                >
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
