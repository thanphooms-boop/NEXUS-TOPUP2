import React, { useState } from 'react';

export default function App() {
  const [balance, setBalance] = useState(1500.00);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
      <div className="bg-slate-900 border border-cyan-500/40 rounded-3xl p-8 max-w-md w-full text-center shadow-[0_0_30px_rgba(6,182,212,0.2)]">
        <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-400 rounded-2xl mx-auto flex items-center justify-center mb-4 text-cyan-400 font-black text-2xl">
          N
        </div>
        <h1 className="text-2xl font-black mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">NEXUS-TOPUP</h1>
        <p className="text-slate-400 text-xs mb-6">ระบบเติมเกม Avatar Star และเกมดังอัตโนมัติ 24 ชม.</p>
        
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 mb-6">
          <p className="text-xs text-slate-400">เครดิตคงเหลือในระบบ</p>
          <p className="text-2xl font-black text-cyan-400 mt-1">{balance.toLocaleString()} ฿</p>
        </div>

        <button 
          onClick={() => alert("ระบบพร้อมให้บริการเติมเกมแล้ว!")}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black py-3 rounded-xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
        >
          🎮 เริ่มต้นใช้งานร้านค้า
        </button>
      </div>
    </div>
  );
}
