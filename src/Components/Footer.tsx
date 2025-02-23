import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 bottom-0">
      <div className="container px-6 py-8 mx-auto">

          <hr className="my-1 border-gray-200 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
              <p className="text-sm text-gray-500">© Copyright Sentient 2025. All Rights Reserved.</p>

              <div className="flex mt-3 -mx-2 sm:mt-0">
                  <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>

                  <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                  <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
              </div>
          </div>
      </div>
  </footer>
  );
};

export default Footer;
