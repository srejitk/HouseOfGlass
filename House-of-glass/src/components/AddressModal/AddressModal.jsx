import React, { useState } from "react";
import { useAuth } from "Contexts/Auth/AuthContext";
// import "./Address.css";
import { v4 } from "uuid";

export const AddressModal = ({ showModal, setShowModal }) => {
  const {
    userDetails,
    setUserDetails,
    addressList,
    setAddressList,
    setForm,
    form,
    initialAddress,
  } = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddress = (e) => {
    e.preventDefault();
    if (addressList?.some((address) => address?.id === form?.id)) {
      const temp = addressList?.map((address) =>
        address.id === form?.id ? form : address
      );
      setAddressList(temp);
    } else {
      setAddressList((prev) => [...prev, { ...form, id: v4() }]);
    }
    setForm(initialAddress);
    setShowModal(false);
  };

  return (
    <form onSubmit={(e) => handleAddress(e)} className="address-modal">
      <div className="input__container">
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={form.name}
          id="name"
          className="input__field input"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="name" className="input--toplabel">
          Name
        </label>
      </div>
      <div className="input__container">
        <input
          type="text"
          placeholder="Enter Street"
          name="street"
          value={form.street}
          id="street"
          className="input__field input"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="street" className="input--toplabel">
          Street
        </label>
      </div>
      <div className="input__container">
        <input
          type="number"
          placeholder="Enter Pincode"
          name="pin"
          value={form.pin}
          id="pin"
          className="input__field input"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="number" className="input--toplabel">
          Pincode
        </label>
      </div>
      <div className="input__container">
        <input
          type="text"
          placeholder="Enter Number"
          name="number"
          value={form.number}
          id="number"
          className="input__field input"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="number" className="input--toplabel">
          Mobile Number
        </label>
      </div>
      <div className="flex flex-mid-right">
        <button className="btn btn--link btn--rtl">
          {form.id === "" ? "Add" : "Update"}{" "}
          <span className="material-icons">
            {form.id === "" ? "check" : "edit"}
          </span>
        </button>
      </div>
    </form>
  );
};
