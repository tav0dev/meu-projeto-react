import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return null;
  };

  const winInfo = calculateWinner(board);
  const winner = winInfo?.winner;
  const winningLine = winInfo?.line;

  const handleClick = (i) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const isDraw = !winner && board.every(Boolean);
  
  const reset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const getLineProps = () => {
    if (!winningLine) return {};
    const [idx0, , idx2] = winningLine;
    const pos = [16.6, 50, 83.4];
    const x1 = pos[idx0 % 3];
    const y1 = pos[Math.floor(idx0 / 3)];
    const x2 = pos[idx2 % 3];
    const y2 = pos[Math.floor(idx2 / 3)];

    if (y1 === y2) return { x1: 5, y1, x2: 95, y2 };
    if (x1 === x2) return { x1, y1: 5, x2, y2: 95 };
    if (idx0 === 0 && idx2 === 8) return { x1: 5, y1: 5, x2: 95, y2: 95 };
    if (idx0 === 2 && idx2 === 6) return { x1: 95, y1: 5, x2: 5, y2: 95 };
    return {};
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-12 pb-20">
       <div className="border-4 border-white bg-black p-6 md:p-8 shadow-[8px_8px_0_0_#FFFFFF] relative overflow-hidden">
          <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-widest text-center text-glitch" data-text="GRID WARS">GRID WARS</h2>
          
          <div className="mb-6 text-center font-mono text-xl">
            {winner ? (
              <span className={`${winner === 'X' ? 'text-akiraRed' : 'text-akiraBlue'} animate-pulse uppercase`}>Winner: {winner}</span>
            ) : isDraw ? (
              <span className="text-white">STALEMATE</span>
            ) : (
              <span className={xIsNext ? 'text-akiraRed' : 'text-akiraBlue'}>TURN: {xIsNext ? 'X' : 'O'}</span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2 bg-gray-800 p-2 relative">
            {board.map((cell, i) => {
              const isWinningCell = winningLine?.includes(i);
              return (
                <motion.button
                  key={i}
                  whileHover={{ scale: cell ? 1 : 1.05 }}
                  whileTap={{ scale: cell ? 1 : 0.95 }}
                  onClick={() => handleClick(i)}
                  className={`w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-5xl font-black border-2 border-transparent transition-colors z-10 ${
                    !winner ? 'hover:border-gray-600' : ''
                  } ${
                    cell === 'X' ? 'text-akiraRed' : cell === 'O' ? 'text-akiraBlue' : ''
                  } ${
                    isWinningCell ? (winner === 'X' ? 'bg-[#330000] border-akiraRed' : 'bg-[#001133] border-akiraBlue') : 'bg-black'
                  }`}
                >
                  {cell}
                </motion.button>
              );
            })}

            {winner && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 drop-shadow-[0_0_8px_currentColor] text-[transparent]" style={{ color: winner === 'X' ? '#E22B29' : '#3B82F6' }} viewBox="0 0 100 100" preserveAspectRatio="none">
                 <motion.line
                    {...getLineProps()}
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                 />
              </svg>
            )}
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={reset}
              className="bg-white text-black font-bold py-2 px-6 uppercase shadow-[4px_4px_0_0_#FFFFFF] hover:bg-black hover:text-white border-2 border-white transition-colors"
            >
              REINITIALIZE
            </button>
          </div>
       </div>
    </div>
  );
}
