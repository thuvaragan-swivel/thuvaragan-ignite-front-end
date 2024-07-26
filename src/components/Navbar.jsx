"use client"

import Link from "next/link";
import { DropdownButton, DropdownItem } from "react-bootstrap";

export default function Navbar() {
  return (
    <nav>
      <Link href={"/employee/list"}>Employee Management System</Link>

      <DropdownButton id="dropdown-basic-button" title="View">
        <DropdownItem>Table</DropdownItem>
        <DropdownItem>Grid</DropdownItem>
      </DropdownButton>
    </nav>
  );
}
