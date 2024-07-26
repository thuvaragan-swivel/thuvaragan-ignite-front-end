// "use client";

import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import { Button } from 'react-bootstrap';

const Page = () => {
  return (
    <div>HOME PAGE :)

<div className="">
        <h1>Homepage!!</h1>
        <Link href="/employee/add">
          <Button className="">Add Employee</Button>
        </Link>

        <Link href="/employee/list">
          <Button className="">View All Employees</Button>
        </Link>
      </div>

    </div>
  )
}

export default Page