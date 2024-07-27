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

const Navbar = ({ view, setView }) => {
  return (
    <nav>
      <Link href={"/employee/list"}>Employee Management System</Link>

      <DropdownButton id="dropdown-basic-button" title="View">
        <Dropdown.Item onClick={() => setView('table')} active={view === 'table'}>
          Table
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setView('grid')} active={view === 'grid'}>
          Grid
        </Dropdown.Item>
      </DropdownButton>
    </nav>
  );
};

export default Navbar;
