import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckSquare, MousePointerClick, Hash, Calculator as CalcIcon, MapPin } from 'lucide-react';
import pretext from 'pretext';

import pillLogo from '../assets/pill-logo.png';

const navItems = [
  { path: '/todo', label: 'TO-DO', icon: CheckSquare },
  { path: '/counter', label: 'CLICKS', icon: MousePointerClick },
  { path: '/tictactoe', label: 'TIC-TAC', icon: Hash },
  { path: '/calculator', label: 'CALC', icon: CalcIcon },
  { path: '/cep', label: 'CEP', icon: MapPin },
];

export default function Header() {
  const location = useLocation();
  const [glitchTitle, setGlitchTitle] = useState('SYSTEM');

  useEffect(() => {
    const cycle = setInterval(() => {
      setGlitchTitle(prev => prev === 'SYSTEM' ? (typeof pretext.dashify === 'function' ? pretext.dashify('アキラ') : 'ア-キ-ラ') : 'SYSTEM');
    }, 4000);
    return () => clearInterval(cycle);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#080808] border-b-8 border-akiraRed">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(226,43,41,0.1)_10px,rgba(226,43,41,0.1)_20px)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between relative z-10">
        
        <Link to="/" className="flex items-center gap-4 group">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 180 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="flex items-center justify-center bg-transparent p-1 rounded-full"
          >
            <img src={pillLogo} alt="Pill Logo" className="w-14 h-14 object-contain" />
          </motion.div>
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white" style={{textShadow: '3px 3px 0 #E22B29', lineHeight: 0.9}}>
              {typeof pretext.trim === 'function' ? pretext.trim('NEO TOKYO') : 'NEO TOKYO'}
            </h1>
            <AnimatePresence mode="popLayout">
              <motion.span 
                key={glitchTitle}
                initial={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                className="text-akiraRed text-xl font-bold tracking-widest uppercase mt-1 inline-block"
              >
                {`// ${glitchTitle}`}
              </motion.span>
            </AnimatePresence>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-0 bg-[#050505] p-2 border-2 border-akiraRed shadow-neo">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center gap-2 px-5 py-3 font-black uppercase transition-colors duration-200 ${
                  isActive
                    ? 'text-black z-10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-akiraRed z-[-1]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : ''}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
