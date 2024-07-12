import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import RecipesTitle from "./components/RecipesTitle/RecipesTitle";

function App() {
  const [cook, setCook] = useState([]);

  const handleWantToCook = (recipes) => {
    const isExist = cook.find(
      (recipe) => recipe.recipe_id == recipes.recipe_id
    );
    if (!isExist) {
      setCook([...cook, recipes]);
    } else {
      alert("This item is already add.");
    }
  };

  const handlePreparingBtn = (recipe_id) => {
    const readCook = cook.filter((recipe) => recipe.recipe_id != recipe_id);
    setCook(readCook);
  };

  return (
    <>
      <main className="max-w-7xl mx-auto">
        <Header></Header>
        <Banner></Banner>
        <div>
          <RecipesTitle></RecipesTitle>
          <div className="flex flex-col md:flex-row gap-6">
            <Recipes handleWantToCook={handleWantToCook}></Recipes>
            <div className="md:max-w-[35%]">
              <div>
                <div>
                  <div>
                    <h2 className="text-center text-xl font-bold mb-3">
                      Want to cook: 01
                    </h2>
                    <hr />
                    <table className="mt-4 ml-1">
                      <thead>
                        <tr className="flex flex-row gap-20 items-center  p-4">
                          <th>Name</th>
                          <th>Time</th>
                          <th>Calories</th>
                        </tr>
                      </thead>
                      <div>
                        {cook.map((reci, index) => (
                          <tbody>
                            <tr className="flex flex-row justify-between items-center gap-6 p-4 text-start">
                              <td>{index + 1}</td>
                              <td>{reci.recipe_name}</td>
                              <td>{reci.preparing_time}</td>
                              <td>{reci.calories}</td>
                              <button
                                onClick={() =>
                                  handlePreparingBtn(reci.recipe_id)
                                }
                                className="btn"
                              >
                                Preparing
                              </button>
                            </tr>
                          </tbody>
                        ))}
                      </div>
                    </table>
                  </div>
                  <div className="mt-8">
                    <h2 className="text-center text-xl font-bold mb-3">
                      Currently cooking: 02
                    </h2>
                    <hr />
                    <table className="mt-4 ml-4">
                      <thead>
                        <tr className="flex flex-row justify-between items-center md:gap-20 p-4">
                          <th>Name</th>
                          <th>Time</th>
                          <th>Calories</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="flex flex-row justify-between items-center md:gap-20 p-4">
                          <td>Chicken</td>
                          <td>20 minutes</td>
                          <td>400 calories</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="flex flex-col mt-12 justify-start text-xl font-medium">
                      <p>Total Time = </p>
                      <p>Total Calories = </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
