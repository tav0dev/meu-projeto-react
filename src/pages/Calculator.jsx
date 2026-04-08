import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Calculator() {
  const [display, setDisplay] = useState('');
  const [error, setError] = useState(false);

  const handlePress = (val) => {
    if (error) { setDisplay(val); setError(false); return; }
    setDisplay(prev => prev + val);
  };

  const calculate = () => {
    try {
      // Safe eval equivalent using Function for simple mathematical strings
      // Note: Only allowing math operators and digits
      if (/[^0-9+\-*/.()]/.test(display)) {
        throw new Error("Invalid characters");
      }
      // eslint-disable-next-line
      const result = new Function(`return ${display}`)();
      
      if (!isFinite(result) || isNaN(result)) {
        throw new Error("Math Error");
      }
      
      setDisplay(String(result));
    } catch (e) {
      setError(true);
      setDisplay('ERR');
    }
  };

  const clear = () => {
    setDisplay('');
    setError(false);
  };

  const buttons = [
    '(', ')', 'C', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=', ''
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full mt-12 pb-20">
      <div className="border-4 border-white bg-black p-6 md:p-8 shadow-[8px_8px_0_0_#FFFFFF] w-full max-w-sm relative overflow-hidden">
        <h2 className="text-xl font-bold text-white mb-4 uppercase text-glitch" data-text="COMPUTE MODULE">COMPUTE MODULE</h2>
        
        <div className={`w-full h-20 mb-6 border-2 flex justify-end items-center p-4 text-4xl overflow-hidden ${error ? 'bg-akiraRed border-akiraRed text-white font-black animate-pulse' : 'bg-black border-white text-white font-mono'}`}>
          {display || '0'}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, i) => {
            if (!btn) return <div key={i} />
            const isOp = ['/','*','-','+','='].includes(btn);
            const isClear = btn === 'C';
            
            return (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  if (btn === '=') calculate();
                  else if (btn === 'C') clear();
                  else handlePress(btn);
                }}
                className={`py-4 text-2xl font-black transition-colors ${
                  isOp ? 'bg-akiraBlue text-white hover:bg-white border-2 border-akiraBlue hover:border-white hover:text-black' : 
                  isClear ? 'bg-akiraRed text-white hover:bg-black border-2 border-akiraRed' : 
                  'bg-transparent border-2 border-gray-600 hover:border-white hover:text-white text-gray-300'
                }`}
              >
                {btn}
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>
  );
}
