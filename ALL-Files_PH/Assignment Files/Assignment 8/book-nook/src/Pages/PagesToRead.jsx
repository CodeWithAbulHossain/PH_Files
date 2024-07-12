// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomBar from "../components/CustomBar";

const PagesToRead = ({ book }) => {
  const books = useLoaderData();

  const getColor = (totalPages) => {
    if (totalPages < 300) {
      return "#ff6347";
    } else if (totalPages < 400) {
      return "#ffa500";
    } else {
      return "#8884d8";
    }
  };

  return (
    <div>
      <h2>Pages To Read</h2>

      <ResponsiveContainer width="100%" height={440}>
        <BarChart
          data={books}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"bookName"} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalPages" fill={getColor(books.totalPages)}>
            {books.map((books, index) => (
              <CustomBar key={`bar-${index}`} book={book} data={books} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
