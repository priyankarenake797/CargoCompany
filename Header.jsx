import { BsThreeDotsVertical } from "react-icons/bs";

import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
          ></a>
          <ul className="nav col-9 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 link-secondary"></a>
            </li>
          </ul>
          <div className="heading">
            <img
              src="http://img06.deviantart.net/4f6c/i/2014/307/3/7/cargo_transport_logo3_by_myedsjosh-d85750a.png"
              width="80"
              height="60"
            />
          </div>
          <form
            className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-3 "
            role="search"
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="logo">
            <h5>
              <FaRegUser />
              <BsThreeDotsVertical />
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
