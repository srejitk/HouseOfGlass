import { Modal } from "components/Modal/Modal";
import { Sidebar } from "components/Sidebar/Sidebar";
import { useAuth } from "Contexts/Auth/AuthContext";
import React, { useState } from "react";
import "./Address.css";
import { AddressModal } from "components/AddressModal/AddressModal";
import { AddressCard } from "components/Cards/AddressCard/AddressCard";

export const Address = () => {
  const { addressList, setForm } = useAuth();
  const [showModal, setShowModal] = useState(false);

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
                <AddressCard
                  key={address?.id}
                  address={address}
                  setShowModal={setShowModal}
                />
              ))}
          </div>
        </div>
      </div>
      {showModal && (
        <Modal openModal={showModal} setOpenModal={setShowModal}>
          <AddressModal showModal={showModal} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
};
