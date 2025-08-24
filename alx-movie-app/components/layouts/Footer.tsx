import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <p>&copy; {new Date().getFullYear()} alx-movie-app. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
