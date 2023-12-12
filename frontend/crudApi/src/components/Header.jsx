import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <a href="#" className="logo">
        User Management System
      </a>
      <div className="header-right">
        <a href="#" className="active">
          Home
        </a>
        <a href="#" className="active">
          Add New User
        </a>
      </div>
    </div>
  );
};

export default Header;
