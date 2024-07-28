// "use client"

// import Link from "next/link";
// import { DropdownButton, DropdownItem } from "react-bootstrap";

// export default function Navbar() {
//   return (
//     <nav>
//       <Link href={"/employee/list"}>Employee Management System</Link>

//       <DropdownButton id="dropdown-basic-button" title="View">
//         <DropdownItem>Table</DropdownItem>
//         <DropdownItem>Grid</DropdownItem>
//       </DropdownButton>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { FaTable, FaTh, FaList } from "react-icons/fa";

const Navbar = ({ view, setView }) => {
  return (
    <nav className="d-flex justify-content-between align-items-center mb-3">
      <Link href={"/employee/list"} className="nav-link">
        Employee Management System
      </Link>

      <DropdownButton id="dropdown-basic-button" title={<><FaList className="me-2" />View</>}>
        <Dropdown.Item onClick={() => setView('table')} active={view === 'table'}>
          <FaTable className="me-2" />
          Table
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setView('grid')} active={view === 'grid'}>
          <FaTh className="me-2" />
          Grid
        </Dropdown.Item>
      </DropdownButton>
    </nav>
  );
};

export default Navbar;
