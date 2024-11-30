import React from "react";

const AddCoffee = () => {
  return (
    <div className="bg-pink-50 container mx-auto">
      <h2>Add a Coffee</h2>
      <form className="p-10">
        <div className="grid grid-cols-2 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name=""
                placeholder="Coffee Name"
                className="input input-bordered"
                id=""
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name=""
                placeholder="Chef of Coffee"
                className="input input-bordered"
                id=""
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name=""
                placeholder="Supplier of Coffee"
                className="input input-bordered"
                id=""
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Test</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name=""
                placeholder="Test"
                className="input input-bordered"
                id=""
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name=""
                placeholder="Coffee Category"
                className="input input-bordered"
                id=""
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name=""
                placeholder="Coffee Details"
                className="input input-bordered"
                id=""
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name=""
                placeholder="Coffee Photo"
                className="input input-bordered"
                id=""
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
