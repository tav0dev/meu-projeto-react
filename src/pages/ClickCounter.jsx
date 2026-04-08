import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 mt-12 pb-20">
      <div className="border-4 border-white bg-black p-12 text-center shadow-[8px_8px_0_0_#FFFFFF] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-pulse"></div>
        <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-widest text-glitch" data-text="OVERCLOCK">OVERCLOCK</h2>
        
        <div className="text-8xl md:text-[10rem] font-bold text-white mb-12 tabular-nums">
          {count}
        </div>
        
        <div className="flex gap-6 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCount(c => c - 1)}
            className="w-20 h-20 bg-transparent border-2 border-akiraRed text-akiraRed text-4xl font-black rounded-none shadow-neo flex items-center justify-center hover:bg-akiraRed hover:text-white transition-colors"
          >
            -
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCount(c => c + 1)}
            className="w-20 h-20 bg-transparent border-2 border-akiraBlue text-akiraBlue text-4xl font-black rounded-none shadow-[4px_4px_0_0_#3B82F6] flex items-center justify-center hover:bg-akiraBlue hover:text-white transition-colors"
          >
            +
          </motion.button>
        </div>
        
        <button 
          onClick={() => setCount(0)}
          className="mt-12 text-gray-500 font-mono tracking-widest hover:text-white transition-colors underline decoration-dashed"
        >
          [ RESET PROTOCOL ]
        </button>
      </div>
    </div>
  );
}
