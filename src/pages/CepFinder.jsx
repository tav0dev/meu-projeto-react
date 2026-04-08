import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Map } from 'lucide-react';

export default function CepFinder() {
  const [cep, setCep] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCep = async (e) => {
    e.preventDefault();
    if (cep.length !== 8 || isNaN(cep)) {
        setError('INVALID IDENTIFIER. REQUIRE 8 MULTIPLEX DIGITS.');
        setData(null);
        return;
    }

    setLoading(true);
    setError('');
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const json = await res.json();
      if (json.erro) {
        throw new Error('NO SECTOR MATCH FOUND.');
      }
      setData(json);
    } catch (err) {
      setError(err.message || 'LINK FAILED. RETRY SEQUENCE.');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-12 px-4 pb-20">
      <div className="border-4 border-white bg-black p-6 md:p-8 shadow-[8px_8px_0_0_#FFFFFF] w-full max-w-lg relative overflow-hidden">
        <Map className="absolute -bottom-10 -right-10 w-64 h-64 text-akiraBlue opacity-10 blur-sm pointer-events-none" />
        
        <h2 className="text-3xl font-black text-akiraBlue mb-6 uppercase tracking-widest text-glitch" data-text="SECTOR LOCATOR">SECTOR LOCATOR</h2>
        
        <form onSubmit={fetchCep} className="flex gap-4 mb-8 relative z-10">
          <input 
            type="text" 
            value={cep}
            onChange={(e) => setCep(e.target.value.replace(/\D/g, '').slice(0, 8))}
            placeholder="INPUT SECTOR ID..." 
            className="flex-grow bg-black border-2 border-white text-white p-3 font-mono focus:outline-none focus:border-akiraBlue placeholder:text-gray-600 transition-colors"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="bg-akiraBlue text-white border-2 border-akiraBlue font-bold p-3 uppercase flex items-center gap-2 hover:bg-black hover:text-akiraBlue transition-colors disabled:opacity-50"
          >
            {loading ? <span className="animate-spin">⧗</span> : <Search />}
          </button>
        </form>

        <div className="min-h-[200px] relative z-10">
          {error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-akiraRed text-white p-4 font-bold font-mono border-2 border-white shadow-neo-white mb-4">
              [ERROR]: {error}
            </motion.div>
          )}

          {data && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} 
              className="bg-black border-4 border-white p-4 font-mono space-y-2 uppercase text-white"
            >
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-500 text-sm">CEP / SECTOR</span>
                <span className="text-akiraBlue font-bold">{data.cep}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-500 text-sm">STREET</span>
                <span className="font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]" title={data.logradouro}>{data.logradouro || 'UNKNOWN'}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-500 text-sm">NEIGHBORHOOD</span>
                <span className="font-bold">{data.bairro || 'UNKNOWN'}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-500 text-sm">CITY</span>
                <span className="font-bold">{data.localidade}</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-gray-500 text-sm">STATE</span>
                <span className="font-bold">{data.uf}</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
