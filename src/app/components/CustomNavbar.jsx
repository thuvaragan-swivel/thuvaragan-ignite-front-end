"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaTable, FaTh, FaList } from "react-icons/fa";
import { setView } from "@/app/redux/employeeSlice";

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.employee.view);

  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="mb-3 custom-navbar"
    >
      <Navbar.Brand href="/employee/list">
        Employee Management System
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown
            title={
              <>
                <FaList className="me-2" />
                View
              </>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              onClick={() => dispatch(setView("table"))}
              active={view === "table"}
            >
              <FaTable className="me-2" />
              Table
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => dispatch(setView("grid"))}
              active={view === "grid"}
            >
              <FaTh className="me-2" />
              Grid
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
