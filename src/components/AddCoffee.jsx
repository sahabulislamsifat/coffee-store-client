import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;

    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, test, category, details, photo };
    console.log(newCoffee);

    ///send data to the server
    fetch("http://localhost:7000/coffee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-pink-50  p-24">
      <h2 className="text-2xl font-extrabold ">Add a Coffee</h2>
      {/* Form Name and Quantity  */}
      <form onSubmit={handleAddCoffee}>
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Name:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
                id=""
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <label className="label">
              <span className="label-text font-bold">Chef</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="chef"
                placeholder="Chef of Coffee"
                className="input input-bordered w-full"
                id=""
              />
            </label>
          </div>
        </div>
        {/* Form SUpplier and test  */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Supplier:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Supplier name"
                className="input input-bordered w-full"
                id=""
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <label className="label">
              <span className="label-text font-bold">Test</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="test"
                placeholder="Test of Coffee"
                className="input input-bordered w-full"
                id=""
              />
            </label>
          </div>
        </div>

        {/* Form Category and details  */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category of Coffee"
                className="input input-bordered w-full"
                id=""
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <label className="label">
              <span className="label-text font-bold">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Coffee Details"
                className="input input-bordered w-full"
                id=""
              />
            </label>
          </div>
        </div>

        {/* Form Name and Quantity  */}

        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Input Photo URL"
                className="input input-bordered w-full"
                id=""
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value={"Add Coffee"}
          className="btn btn-block bg-gray-600 text-white"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
