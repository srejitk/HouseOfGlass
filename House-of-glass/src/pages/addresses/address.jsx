import CartCard from "components/Cards/CartCard/CartCard";
import EmptyState from "components/EmptyState/EmptyState";
import { Modal } from "components/Modal/Modal";
import { Sidebar } from "components/Sidebar/Sidebar";
import { useCart } from "Contexts/Cart/CartContext";
import { useAuth } from "Contexts/Auth/AuthContext";
import React, { useState } from "react";
import "./Address.css";
import { uuid } from "uuidv4";

export const Address = () => {
  const initialAddress = {
    id: "",
    name: "",
    street: "",
    pin: "",
    number: "",
  };
  const [form, setForm] = useState(initialAddress);

  const { userDetails, setUserDetails, addressList, setAddressList } =
    useAuth();
  const [showModal, setShowModal] = useState(false);

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
      setAddressList([...addressList, { ...form, id: uuid() }]);
    }
    setForm(initialAddress);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    const temp = addressList?.filter((address) => address.id !== id);
    setAddressList(temp);
  };

  const setDefaultAddress = (address) => {
    setUserDetails({
      ...userDetails,
      address: address,
    });
  };

  return (
    <div className="container order-page-wrapper">
      <Sidebar />
      <div className={`address-content`}>
        <div className="title-section">
          <h5 className="subtitle-1">{`My Account > Your Saved Addresses`}</h5>
        </div>
        <div className="address-wrapper full-width">
          <div
            onClick={(e) => setShowModal((prev) => !prev)}
            className="new-address block"
          >
            <span className="material-icons">add_circle</span>
            <p className="subtitle-1">Add new address</p>
          </div>
          <div className="address-list">
            {addressList.length > 0 &&
              addressList?.map((address) => (
                <div
                  key={address.id}
                  onClick={(e) => setDefaultAddress(address)}
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
              ))}
          </div>
        </div>
      </div>
      {showModal && (
        <Modal openModal={showModal} setOpenModal={setShowModal}>
          {" "}
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
        </Modal>
      )}
    </div>
  );
};
