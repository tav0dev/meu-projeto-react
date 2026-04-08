import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import pretext from 'pretext';
import { useNavigate } from 'react-router-dom';

import akiraLogo from '../assets/akira-logo.png';
import akiraChar from '../assets/akira-character.png';
import pillLogo from '../assets/pill-logo.png';

export default function Home() {
  const navigate = useNavigate();
  const [bootText, setBootText] = useState("");

  const originalMsg = "TOKYO IS ABOUT TO EXPLODE";
  
  useEffect(() => {
    let timer = setTimeout(() => {
      setBootText(typeof pretext.codify === 'function' ? pretext.codify(originalMsg) : originalMsg);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    { label: "TO-DO", path: "/todo" },
    { label: "COUNTER", path: "/counter" },
    { label: "TIC-TAC", path: "/tictactoe" },
    { label: "CALC", path: "/calculator" },
    { label: "CEP", path: "/cep" }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl pb-20 mt-10 relative">
      
      {/* Background Graphic */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hidden lg:block absolute -left-20 top-0 opacity-20 pointer-events-none"
      >
        <span className="text-[15rem] font-black leading-none text-akiraRed block transform -rotate-90 origin-bottom-left mix-blend-screen">
          アキラ
        </span>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 z-10 w-full flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:pl-32">
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
           className="w-full max-w-lg mb-8"
        >
          <img src={akiraLogo} alt="Akira Logo" className="w-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-black border-4 border-white p-6 lg:p-8 shadow-[8px_8px_0_0_#FFFFFF] w-full max-w-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-cover bg-center opacity-10 group-hover:opacity-30 group-hover:rotate-180 transition-all duration-[3000ms]" style={{ backgroundImage: `url(${pillLogo})` }}></div>
          
          <h2 className="text-3xl font-bold text-white mb-2 uppercase text-glitch" data-text="INITIALIZATION SEQUENCE">
            INITIALIZATION SEQUENCE
          </h2>
          
          <div className="h-2 w-1/3 bg-akiraRed mb-6"></div>

          <p className="text-xl font-mono text-white mb-6 break-words tracking-widest min-h-[3rem]">
            {bootText.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, display: 'inline-block' }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-3 h-5 bg-white ml-1 align-middle"
            />
          </p>
          
          <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-xl">
            "We are not fools. 2019 was a warning. Enter the systems." 
            <br/><br/>
            [ ACTIVATE PROTOCOLS ]
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {menuItems.map((item, idx) => (
              <motion.button
                key={item.label}
                whileHover={{ scale: 1.05, border: "4px solid #E22B29" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(item.path)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                className={`bg-[#101010] border-2 border-white text-white p-4 font-black text-xl uppercase skew-x-[-10deg] shadow-[4px_4px_0_0_#FFFFFF] hover:bg-akiraRed hover:text-black transition-colors ${idx === menuItems.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                {typeof pretext.dashify === 'function' ? pretext.dashify(item.label) : item.label}
              </motion.button>
            ))}
          </div>

        </motion.div>
      </div>

      {/* Character Image Graphic */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        className="flex-1 w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 relative z-20 pointer-events-none"
      >
        <motion.img 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          src={akiraChar} 
          alt="Akira Character" 
          className="w-4/5 max-w-[600px] object-contain drop-shadow-[0_0_20px_rgba(226,43,41,0.5)]" 
        />
        
        {/* Animated Caution Bar overlay behind the image partially */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-10 lg:left-0 right-0 h-8 bg-caution-red transform skew-y-3 z-[-1] origin-left shadow-neo"
        />
      </motion.div>

    </div>
  );
}
