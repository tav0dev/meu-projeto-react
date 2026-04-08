import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TodoList from './pages/TodoList';
import ClickCounter from './pages/ClickCounter';
import TicTacToe from './pages/TicTacToe';
import Calculator from './pages/Calculator';
import CepFinder from './pages/CepFinder';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-mono text-white selection:bg-akiraRed selection:text-white">
        <Header />
        <main className="flex-grow p-4 lg:p-8 flex justify-center mt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/counter" element={<ClickCounter />} />
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/cep" element={<CepFinder />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
