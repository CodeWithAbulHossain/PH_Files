import { useLoaderData } from "react-router-dom";
import ViewStudentHouse from "./ViewStudentHouse";
import { Helmet } from "react-helmet-async";

const StudentAcc = () => {
  const studentHouse = useLoaderData();
  console.log(studentHouse);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Helmet>
        {" "}
        <title>ResiCoop | View Student House</title>{" "}
      </Helmet>
      {studentHouse.map((house) => (
        <ViewStudentHouse
          key={house.id}
          studentHouse={house}
        ></ViewStudentHouse>
      ))}
    </div>
  );
};

export default StudentAcc;
