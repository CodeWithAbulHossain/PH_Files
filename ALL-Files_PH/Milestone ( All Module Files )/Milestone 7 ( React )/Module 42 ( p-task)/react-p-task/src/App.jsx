import "./App.css";
import Courses from "./components/Courses/Courses";

function App() {
  return (
    <>
      <h1 className="text-4xl font-extrabold p-6 text-center max-w-7xl mx-auto bg-slate-400 text-yellow-200 mt-4">
        Course Resgistration
      </h1>
      <Courses></Courses>
    </>
  );
}

export default App;
