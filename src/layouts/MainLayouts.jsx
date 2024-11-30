import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";

const MainLayouts = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="m-20">
      <h2 className="text-5xl mb-10 text-center font-semibold text-blue-500">
        Hot Hot Cold Coffees : {coffees.length}
      </h2>
      <div className="grid md:grid-cols-2 my-16 gap-10">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default MainLayouts;
