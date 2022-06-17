import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="profile-sidebar">
      <div className="sidebar-hero">
        <div className="profile-pic">MV</div>
        <div>Maverick</div>
      </div>
      <Link to="/profile/orders" className="sidebar-item">
        <span className="material-icons sidebar-icon">local_shipping</span>
        <p className="sidebar-label subtitle-1">Orders</p>
      </Link>
      <Link to="/profile/address" className="sidebar-item">
        <span className="material-icons  sidebar-icon">add_home</span>
        <p className="sidebar-label subtitle-1">Addresses</p>
      </Link>{" "}
      <Link to="/profile/settings" className="sidebar-item">
        <span className="material-icons  sidebar-icon">settings</span>
        <p className="sidebar-label subtitle-1">Settings</p>
      </Link>
    </div>
  );
};
