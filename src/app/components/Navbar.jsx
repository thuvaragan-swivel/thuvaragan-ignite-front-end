
// "use client";

// import Link from "next/link";
// import { DropdownButton, Dropdown } from "react-bootstrap";
// import { FaTable, FaTh, FaList } from "react-icons/fa";

// const Navbar = ({ view, setView }) => {
//   return (
//     <nav className="d-flex justify-content-between align-items-center mb-3">
//       <Link href={"/employee/list"} className="nav-link">
//         Employee Management System
//       </Link>

//       <DropdownButton id="dropdown-basic-button" title={<><FaList className="me-2" />View</>}>
//         <Dropdown.Item onClick={() => setView('table')} active={view === 'table'}>
//           <FaTable className="me-2" />
//           Table
//         </Dropdown.Item>
//         <Dropdown.Item onClick={() => setView('grid')} active={view === 'grid'}>
//           <FaTh className="me-2" />
//           Grid
//         </Dropdown.Item>
//       </DropdownButton>
//     </nav>
//   );
// };

// export default Navbar;

// src/app/components/Navbar.jsx
"use client";

import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { DropdownButton, Dropdown } from "react-bootstrap";
import { FaTable, FaTh, FaList } from "react-icons/fa";
import { setView } from '@/app/redux/employeeSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.employee.view);

  return (
    <nav className="d-flex justify-content-between align-items-center mb-3">
      <Link href="/employee/list" className="nav-link">
        Employee Management System
      </Link>

      <DropdownButton id="dropdown-basic-button" title={<><FaList className="me-2" />View</>}>
        <Dropdown.Item onClick={() => dispatch(setView('table'))} active={view === 'table'}>
          <FaTable className="me-2" />
          Table
        </Dropdown.Item>
        <Dropdown.Item onClick={() => dispatch(setView('grid'))} active={view === 'grid'}>
          <FaTh className="me-2" />
          Grid
        </Dropdown.Item>
      </DropdownButton>
    </nav>
  );
};

export default Navbar;
