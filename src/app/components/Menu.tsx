import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Link from 'next/link';
import ScientificCommitteeButton from './ScientificCommitteeButton';

const Menu = ({ searchVisible, setSearchVisible }) => {
  const styles = {
    btnBlue: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      color: 'white',
      backgroundColor: 'rgba(3, 112, 225, 1)', // BluFil color
      borderRadius: '0.375rem', // Rounded corners
      transition: 'background-color 0.3s ease',
      textDecoration: 'none', // No underline
      
    },
    btnBlueHover: {
      backgroundColor: 'rgba(2, 90, 180, 1)', // A slightly darker shade for hover effect
    },
  };

  return (
    <div className="menu-container">
      <div className="max-w-screen-1xl text-black h-full mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <div
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
            
          }}
          className="logo-container"
        >
          <Link href="http://localhost:3000/" passHref>
            <img
              src="/assets/logo fil.svg"
              alt="Left Logo"
              style={{ width: '150px', height: 'auto', marginRight: '30px', borderRadius: '7px' }}
              className="logo"
            />
          </Link>
        </div>

        {/* Menu */}
        {!searchVisible && (
          <ul className="flex items-center gap-4 uppercase text-sm font-medium">
            <li className="cursor-pointer duration-300">
              <Link href="http://localhost:3000/ressource" passHref>
                <div
                  style={styles.btnBlue}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = styles.btnBlueHover.backgroundColor)}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = styles.btnBlue.backgroundColor)}
                >
                  Toutes les ressources
                </div>
              </Link>
            </li>
            <li className="cursor-pointer duration-300">
              <Link href="http://localhost:3000/methodologie">
                <div>Methodologie</div>
              </Link>
            </li>
            <li className="cursor-pointer duration-300">
              <Link href="http://localhost:3000/promotion">
                <div>Promotion</div>
              </Link>
            </li>
            <li className="cursor-pointer duration-300">
              <Link href="http://localhost:3000/classe">
                <div>Pour la classe</div>
              </Link>
            </li>
            <li className="cursor-pointer duration-300">
              <Link href="http://localhost:3000/pays">
                <div>Pays</div>
              </Link>
            </li>
          </ul>
        )}

        {/* Recherche */}
        <div className="flex gap-8 items-center justify-center">
          <BsSearch className="text-xl hover:text-hoverColor cursor-pointer text-center" onClick={() => setSearchVisible(!searchVisible)} />
          {searchVisible && (
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-80 h-8 bg-white text-black uppercase text-sm font-normal rounded-md border-gray-300 px-2"
            />
          )}
          <ScientificCommitteeButton />
        </div>
      </div>
    </div>
  );
};

export default Menu;
