import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="w-full max-w-2xl px-4 mt-8">
      <div className="border-4 border-white bg-black p-6 md:p-8 shadow-[8px_8px_0_0_#FFFFFF] relative overflow-hidden">
        <h2 className="text-4xl font-black text-akiraRed mb-6 uppercase tracking-widest text-glitch" data-text="DATA LOGGING">DATA LOGGING</h2>
        
        <form onSubmit={addTask} className="flex gap-4 mb-8">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ENTER NEW DIRECTIVE..." 
            className="flex-grow bg-[#151515] border-2 border-white text-white p-3 font-mono focus:outline-none focus:border-akiraBlue placeholder:text-gray-600 transition-all"
          />
          <button type="submit" className="bg-akiraBlue text-black border-2 border-akiraBlue font-bold p-3 uppercase flex items-center gap-2 hover:bg-black hover:text-akiraBlue transition-colors shadow-[4px_4px_0_0_#3B82F6]">
            <Plus /> ADD
          </button>
        </form>

        <div className="space-y-4">
          <AnimatePresence>
            {tasks.map(task => (
              <motion.div 
                key={task.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={`flex justify-between items-center p-4 border-l-4 ${task.completed ? 'border-gray-600 bg-[#111] opacity-60' : 'border-white bg-[#111]'} shadow-sm`}
              >
                <div onClick={() => toggleTask(task.id)} className="flex items-center gap-3 cursor-pointer flex-grow">
                  <div className={`w-5 h-5 border-2 flex items-center justify-center ${task.completed ? 'border-gray-500 text-gray-500' : 'border-white text-white'}`}>
                    {task.completed && 'X'}
                  </div>
                  <span className={`font-mono ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                    {task.text}
                  </span>
                </div>
                <button onClick={() => removeTask(task.id)} className="text-red-500 hover:text-akiraRed transition-colors">
                  <Trash2 />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
          {tasks.length === 0 && (
            <p className="text-gray-500 font-mono italic text-center py-8">No directives assigned. Standing by.</p>
          )}
        </div>
      </div>
    </div>
  );
}
