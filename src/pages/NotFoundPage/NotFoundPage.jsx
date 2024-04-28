
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-3xl md:text-5xl font-bold text-black mb-2">Oops!</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        Sorry, the page you are looking for was not found.
      </p>
      <a href="/" className="text-buttonHover hover:underline">Back to Home Page</a>
    </section>
  );
}
