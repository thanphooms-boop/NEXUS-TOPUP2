import React, { useState } from 'react';

const gamesData = [
  { id: 1, name: 'Avatar Star Thailand', category: 'pc', badge: 'มาใหม่ 🔥', currency: 'Star Cash', price: 'เริ่มต้น 90 ฿' },
  { id: 2, name: 'RoV (Realm of Valor)', category: 'mobile', badge: 'ยอดฮิต 👑', currency: 'คูปอง', price: 'เริ่มต้น 35 ฿' },
  { id: 3, name: 'PUBG Mobile', category: 'mobile', badge: 'ขายดี ⚡', currency: 'UC', price: 'เริ่มต้น 29 ฿' },
  { id: 4, name: 'Free Fire', category: 'mobile', badge: null, currency: 'เพชร', price: 'เริ่มต้น 35 ฿' },
  { id: 5, name: 'VALORANT', category: 'pc', badge: 'ยอดฮิต 👑', currency: 'VP', price: 'เริ่มต้น 175 ฿' },
  { id: 6, name: 'Roblox', category: 'mobile', badge: null, currency: 'Robux', price: 'เริ่มต้น 149 ฿' }
];

export default function App() {
  const [balance, setBalance] = useState(1500.00);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const filteredGames = activeTab === 'all' 
    ? gamesData 
    : gamesData.filter(g => g.category === activeTab);

  const handleOpenModal = (game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Header */}
      <nav className="sticky top-0 z-40 bg-[#070d1f]/90 backdrop-blur-md border-b border-cyan-500/20 px-4 sm:px-8 h-16 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-slate-950 text-xl shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            N
          </div>
          <div>
            <span className="text-xl font-black tracking-wider bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">NEXUS-TOPUP</span>
            <p className="text-[9px] text-cyan-400 tracking-widest font-mono">CYBER STORE SYSTEM</p>
          </div>
        </div>

        <div className="flex items-center bg-[#0d1631] border border-cyan-500/30 rounded-2xl px-4 py-2 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
          <div className="text-right mr-3">
            <span className="text-[10px] text-cyan-300/75 block">เครดิตคงเหลือ</span>
            <span className="text-cyan-300 font-black text-sm">{balance.toLocaleString()} ฿</span>
          </div>
          <button 
            onClick={() => alert("ระบบกระเป๋าเงินพร้อมใช้งาน")} 
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-black px-3 py-1.5 rounded-xl cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.4)] transition-all"
          >
            + เติมเงิน
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow w-full">
        
        {/* Hero Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-[#070d1f] border border-cyan-500/30 p-8 mb-8 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
              ⚡ ระบบเปิดให้บริการเติมเกมอัตโนมัติ 24 ชม.
            </span>
            <h1 className="text-3xl sm:text-4xl font-black mb-3 text-white">
              เติมเกม <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Avatar Star & Top Games</span> ราคาถูกที่สุด
            </h1>
            <p className="text-slate-300 text-sm max-w-xl">บริการเติมเกมสปีดไว เครดิตเข้าไอดีทันที ทำรายการง่าย ปลอดภัย 100% รองรับทรูวอเลทและสแกน QR Code</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all ${activeTab === 'all' ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]' : 'bg-[#070e24] text-slate-400 border border-slate-800 hover:border-cyan-500/40'}`}
          >
            🎮 เกมทั้งหมด
          </button>
          <button 
            onClick={() => setActiveTab('mobile')}
            className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all ${activeTab === 'mobile' ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]' : 'bg-[#070e24] text-slate-400 border border-slate-800 hover:border-cyan-500/40'}`}
          >
            📱 เกมมือถือ (Mobile)
          </button>
          <button 
            onClick={() => setActiveTab('pc')}
            className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all ${activeTab === 'pc' ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]' : 'bg-[#070e24] text-slate-400 border border-slate-800 hover:border-cyan-500/40'}`}
          >
            💻 เกมคอมพิวเตอร์ (PC)
          </button>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredGames.map(game => (
            <div 
              key={game.id}
              onClick={() => handleOpenModal(game)}
              className="bg-[#070e24] border border-cyan-900/40 hover:border-cyan-400 rounded-2xl p-5 cursor-pointer transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
            >
              <div>
                {game.badge && (
                  <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {game.badge}
                  </span>
                )}
                <h3 className="font-bold text-white group-hover:text-cyan-300 transition-colors text-base">{game.name}</h3>
                <p className="text-xs text-slate-400 mt-1">สกุลเงิน: {game.currency}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-black text-cyan-400">{game.price}</span>
                <span className="text-xs text-cyan-400 group-hover:translate-x-1 transition-transform font-bold">เติมเลย →</span>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-cyan-900/30 bg-[#040817] py-6 text-center text-xs text-slate-500 mt-12">
        <p>© 2026 NEXUS-TOPUP. All Rights Reserved. ระบบเติมเกมออนไลน์มั่นคงปลอดภัย</p>
      </footer>

      {/* Modal */}
      {isModalOpen && selectedGame && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#070e24] border border-cyan-500/40 rounded-3xl max-w-md w-full p-6 relative shadow-[0_0_40px_rgba(6,182,212,0.2)] animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-4 right-4 text-slate-400 hover:text-white font-bold w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-lg font-black text-white mb-1">เติมเงิน: {selectedGame.name}</h3>
            <p className="text-xs text-cyan-400 mb-4">สกุลเงินในเกม: {selectedGame.currency}</p>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs text-slate-300 block mb-1">กรอกยูสเซอร์เนม / ไอดีผู้เล่น / OpenID</label>
                <input 
                  type="text" 
                  placeholder="เช่น PlayerID12345" 
                  className="w-full bg-[#030712] border border-cyan-900/60 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">เลือกแพ็กเกจราคา</label>
                <select className="w-full bg-[#030712] border border-cyan-900/60 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-cyan-400 transition-colors">
                  <option>แพ็กเกจทดลอง - 90 ฿</option>
                  <option>แพ็กเกจยอดฮิต - 300 ฿</option>
                  <option>แพ็กเกจสุดคุ้ม - 500 ฿</option>
                  <option>แพ็กเกจVIP - 1,000 ฿</option>
                </select>
              </div>

              <button 
                onClick={() => { alert("ทำรายการเติมเงินสำเร็จเรียบร้อย!"); setIsModalOpen(false); }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black py-3.5 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer hover:opacity-90 transition-opacity mt-2"
              >
                ยืนยันการทำรายการ
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
