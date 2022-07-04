import React, { useState } from "react";
import { useAuth } from "Contexts/Auth/AuthContext";
import "./AddressCard.css";
export const AddressCard = ({ address, setShowModal }) => {
  const { userDetails, setUserDetails, addressList, setAddressList, setForm } =
    useAuth();

  const handleDelete = (id) => {
    const temp = addressList?.filter((address) => address.id !== id);
    setAddressList(temp);
  };

  const setDefaultAddress = (e, address) => {
    e.stopPropagation();
    setUserDetails({
      ...userDetails,
      address: address,
    });
  };

  console.log(address);
  return (
    <div
      key={address.id}
      onClick={(e) => setDefaultAddress(e, address)}
      className="added-address relative block full-width"
    >
      {userDetails.address === address ? (
        <span
          className="material-icons defaultAdd_toggle"
          style={{ color: "var(--component-blue-05)" }}
        >
          check_circle
        </span>
      ) : (
        <span className="material-icons defaultAdd_toggle">
          radio_button_unchecked
        </span>
      )}
      <p className="header-6">{address.name}</p>
      <p className="subtitle-2">{address.street}</p>
      <p className="subtitle-2">{address.pin}</p>
      <p className="subtitle-2">{address.number}</p>
      <div className="flex-row-wrap gap20 flex-mid-right">
        <button
          className="btn btn_action"
          style={{
            color: "var(--component-blue-05)",
            backgroundColor: "var(--component-blue-01)",
          }}
          onClick={(e) => {
            {
              setShowModal(true);
            }
            setForm(address);
          }}
        >
          <span className="material-icons">edit</span>
        </button>
        <button
          className="btn btn_action"
          onClick={(e) => handleDelete(address.id)}
          style={{
            color: "var(--component-red-05)",
            backgroundColor: "var(--component-red-01)",
          }}
        >
          <span className="material-icons">delete</span>
        </button>
      </div>
    </div>
  );
};
