'use client';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState('');

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? '' : menu);
    };

    return (
        <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">English Tenses</h1>

                <div className="flex space-x-6 relative">

                    {/* Present Tense */}
                    <div className="relative">
                        <button onClick={() => toggleMenu('present')} className="flex items-center gap-1 hover:text-blue-400">
                            Present Tense <FaChevronDown className="text-sm" />
                        </button>
                        {openMenu === 'present' && (
                            <div className="absolute mt-2 bg-gray-800 shadow-md rounded p-2 space-y-2 z-10">
                                <a href="#" className="block hover:text-blue-400">Present Simple</a>
                                <a href="#" className="block hover:text-blue-400">Present Continuous</a>
                                <a href="#" className="block hover:text-blue-400">Present Perfect</a>
                                <a href="#" className="block hover:text-blue-400">Present Perfect Continuous</a>
                            </div>
                        )}
                    </div>

                    {/* Past Tense */}
                    <div className="relative">
                        <button onClick={() => toggleMenu('past')} className="flex items-center gap-1 hover:text-blue-400">
                            Past Tense <FaChevronDown className="text-sm" />
                        </button>
                        {openMenu === 'past' && (
                            <div className="absolute mt-2 bg-gray-800 shadow-md rounded p-2 space-y-2 z-10">
                                <a href="#" className="block hover:text-blue-400">Past Simple</a>
                                <a href="#" className="block hover:text-blue-400">Past Continuous</a>
                                <a href="#" className="block hover:text-blue-400">Past Perfect</a>
                                <a href="#" className="block hover:text-blue-400">Past Perfect Continuous</a>
                            </div>
                        )}
                    </div>

                    {/* Future Tense */}
                    <div className="relative">
                        <button onClick={() => toggleMenu('future')} className="flex items-center gap-1 hover:text-blue-400">
                            Future Tense <FaChevronDown className="text-sm" />
                        </button>
                        {openMenu === 'future' && (
                            <div className="absolute mt-2 bg-gray-800 shadow-md rounded p-2 space-y-2 z-10">
                                <a href="#" className="block hover:text-blue-400">Future Simple</a>
                                <a href="#" className="block hover:text-blue-400">Future Continuous</a>
                                <a href="#" className="block hover:text-blue-400">Future Perfect</a>
                                <a href="#" className="block hover:text-blue-400">Future Perfect Continuous</a>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
