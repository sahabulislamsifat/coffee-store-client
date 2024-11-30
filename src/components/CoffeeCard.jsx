import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, test, category, details, photo } = coffee;
  //   console.log(coffees);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:7000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              const remaining = coffees.filter((cof) => cof._id !== _id);
              //   const newData = [...remaining];
              setCoffees(remaining);
              //   console.log(remaining.length);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-pink-50 rounded-sm shadow-md">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex p-4 justify-between w-full">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{chef}</p>
            <p>{supplier}</p>
            <p>{test}</p>
            <p>{category}</p>
            <p>{details}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical mt-5 space-y-3">
              <button className="btn border border-slate-400 rounded-sm btn-sm">
                View🪟
              </button>
              <Link
                to={`/updateCoffee/${_id}`}
                className="btn border border-slate-400 rounded-sm btn-sm"
              >
                Edit ✒️
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn border border-slate-400 rounded-sm btn-sm text-red-600"
              >
                X 🚮
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
