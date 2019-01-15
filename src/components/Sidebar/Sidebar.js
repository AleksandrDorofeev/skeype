import React from "react";
import "./Sidebar.scss";

import User from "../../containers/User/User";

const Sidebar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map(contact => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
  );
};

export default Sidebar;
