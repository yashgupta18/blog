import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">
      <Link to="/">404: Page not found</Link>
    </h1>
  );
};

export default NotFound;
