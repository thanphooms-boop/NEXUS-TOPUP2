import React, { useState } from 'react';

const GameLogos = {
  rov: (
    <div className="w-full h-full bg-gradient-to-br from-amber-950 via-yellow-900/60 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.25)_0%,transparent_70%)]"></div>
      <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
        <svg className="w-10 h-10 text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" fillOpacity="0.2"/>
          <path d="M12 4v12M8 9l8 6M16 9l-8 6" stroke="currentColor" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-yellow-400 mt-2 z-10 drop-shadow-md">ARENA OF VALOR</span>
    </div>
  ),
  avatarstar: (
    <div className="w-full h-full bg-gradient-to-br from-cyan-950 via-teal-900/60 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.25)_0%,transparent_70%)]"></div>
      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
        <svg className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 7v10M7 12h10"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-cyan-300 mt-2 z-10 drop-shadow-md">AVATAR STAR TH</span>
    </div>
  ),
  pubg: (
    <div className="w-full h-full bg-gradient-to-br from-orange-950 via-amber-900/60 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
        <svg className="w-10 h-10 text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-orange-400 mt-2 z-10 drop-shadow-md">PUBG MOBILE</span>
    </div>
  ),
  freefire: (
    <div className="w-full h-full bg-gradient-to-br from-red-950 via-amber-950 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
        <svg className="w-10 h-10 text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.5 4 6.5 1.5 1.5 2.5 3.5 2.5 5.5a6 6 0 1 1-12 0c0-1.05.27-2.05.74-2.91Z"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-red-400 mt-2 z-10 drop-shadow-md">FREE FIRE</span>
    </div>
  ),
  mlbb: (
    <div className="w-full h-full bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
        <svg className="w-10 h-10 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-blue-300 mt-2 z-10 drop-shadow-md">MOBILE LEGENDS</span>
    </div>
  ),
  valorant: (
    <div className="w-full h-full bg-gradient-to-br from-rose-950 via-red-900/60 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
        <svg className="w-10 h-10 text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 30 L45 70 H60 L40 30 H25 Z" fill="currentColor" />
          <path d="M75 30 L57 70 H48 L66 30 H75 Z" fill="#ECE8E1" />
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-rose-300 mt-2 z-10 drop-shadow-md">VALORANT</span>
    </div>
  ),
  roblox: (
    <div className="w-full h-full bg-gradient-to-br from-sky-950 via-blue-900/60 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
        <svg className="w-10 h-10 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="26" y="26" width="48" height="48" rx="8" fill="currentColor" transform="rotate(-15 50 50)"/>
          <rect x="42" y="42" width="16" height="16" rx="3" fill="#0F172A" transform="rotate(-15 50 50)"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-sky-300 mt-2 z-10 drop-shadow-md">ROBLOX</span>
    </div>
  ),
  genshin: (
    <div className="w-full h-full bg-gradient-to-br from-purple-950 via-indigo-900/60 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(192,132,252,0.3)]">
        <svg className="w-10 h-10 text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 15 C50 35 35 50 15 50 C35 50 50 65 50 85 C50 65 65 50 85 50 C65 50 50 35 50 15 Z" fill="currentColor"/>
          <circle cx="50" cy="50" r="10" stroke="#FDE047" strokeWidth="3" fill="none"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-purple-300 mt-2 z-10 drop-shadow-md">GENSHIN IMPACT</span>
    </div>
  ),
  honkai: (
    <div className="w-full h-full bg-gradient-to-br from-fuchsia-950 via-purple-950 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="w-16 h-16 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(217,70,239,0.3)]">
        <svg className="w-10 h-10 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-fuchsia-300 mt-2 z-10 drop-shadow-md">STAR RAIL</span>
    </div>
  ),
  eafc: (
    <div className="w-full h-full bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950 flex flex-col items-center justify-center p-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
        <svg className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2v20M2 12h20"/>
        </svg>
      </div>
      <span className="font-black text-xs tracking-widest text-emerald-300 mt-2 z-10 drop-shadow-md">EA FC MOBILE</span>
    </div>
  )
};

const gamesData = [
  { 
    id: 0, 
    name: 'RoV (Realm of Valor)', 
    category: 'all', 
    iconKey: 'rov',
    currency: 'คูปอง (Vouchers)', 
    idLabel: 'OpenID ของผู้เล่น (Garena / ROV)',
    idPlaceholder: 'กรอก OpenID 32 ตัวอักษร เช่น 4b89f2a17c09...',
    helpText: 'วิธีดู OpenID: เข้าเกม RoV -> ไปที่การตั้งค่า -> ทั่วไป -> คัดลอก OpenID',
    packages: [
      { id: 'rov1', name: '35 คูปอง', price: 35 }, 
      { id: 'rov2', name: '175 คูปอง', price: 170 }, 
      { id: 'rov3', name: '350 คูปอง', price: 340 }, 
      { id: 'rov4', name: '875 คูปอง', price: 840 },
      { id: 'rov5', name: '1,750 คูปอง', price: 1680 },
      { id: 'rov6', name: 'Valor Pass', price: 299 }
    ] 
  },
  { 
    id: 1, 
    name: 'Avatar Star Thailand', 
    category: 'pc', 
    iconKey: 'avatarstar',
    currency: 'Star Cash / Gems', 
    idLabel: 'Game ID / Username',
    idPlaceholder: 'กรอกไอดีหรือชื่อตัวละคร Avatar Star',
    helpText: 'เตรียมพร้อมรับความสนุกกับเกมชูตเตอร์สุดน่ารักในไทย',
    packages: [
      { id: 'as1', name: '100 Star Cash', price: 90 },
      { id: 'as2', name: '300 Star Cash', price: 270 },
      { id: 'as3', name: '500 Star Cash', price: 450 },
      { id: 'as4', name: '1,000 Star Cash', price: 890 }
    ] 
  },
  { 
    id: 2, 
    name: 'PUBG Mobile', 
    category: 'mobile', 
    iconKey: 'pubg',
    currency: 'Unknown Cash (UC)', 
    idLabel: 'Player ID (Character ID)',
    idPlaceholder: 'เช่น 5123456789',
    helpText: 'ตรวจสอบ Character ID ให้ถูกต้องก่อนทำรายการ',
    packages: [
      { id: 'p1', name: '60 UC', price: 29 },
      { id: 'p2', name: '325 UC', price: 149 },
      { id: 'p3', name: '660 UC', price: 299 },
      { id: 'p4', name: '1,800 UC', price: 799 }
    ] 
  },
  { 
    id: 3, 
    name: 'Free Fire', 
    category: 'mobile', 
    iconKey: 'freefire',
    currency: 'เพชร (Diamonds)', 
    idLabel: 'Player ID (UID)',
    idPlaceholder: 'กรอก UID ผู้เล่น Free Fire',
    helpText: 'คัดลอก UID ได้จากหน้าโปรไฟล์ในเกม',
    packages: [
      { id: 'ff1', name: '110 เพชร', price: 35 },
      { id: 'ff2', name: '310 เพชร', price: 99 },
      { id: 'ff3', name: '580 เพชร', price: 175 }
    ] 
  },
  { 
    id: 4, 
    name: 'Mobile Legends: Bang Bang', 
    category: 'mobile', 
    iconKey: 'mlbb',
    currency: 'Diamonds & Zone ID', 
    idLabel: 'User ID & Zone ID',
    idPlaceholder: 'เช่น 12345678 (1234)',
    helpText: 'ระบุ User ID และ Zone ID (ในวงเล็บหลังไอดี)',
    packages: [
      { id: 'ml1', name: '86 Diamonds', price: 35 },
      { id: 'ml2', name: '172 Diamonds', price: 70 },
      { id: 'ml3', name: '257 Diamonds', price: 105 }
    ] 
  },
  { 
    id: 5, 
    name: 'VALORANT', 
    category: 'pc', 
    iconKey: 'valorant',
    currency: 'VP (Valorant Points)', 
    idLabel: 'Riot ID (ชื่อตัวละคร#แท็ก)',
    idPlaceholder: 'เช่น GamerTH#1234',
    helpText: 'ระบุ Riot ID รวมเครื่องหมาย # และ Tag ให้ถูกต้อง',
    packages: [
      { id: 'v1', name: '475 VP', price: 175 }, 
      { id: 'v2', name: '1,000 VP', price: 350 }, 
      { id: 'v3', name: '2,050 VP', price: 700 }
    ] 
  },
  { 
    id: 6, 
    name: 'Roblox', 
    category: 'mobile', 
    iconKey: 'roblox',
    currency: 'Robux', 
    idLabel: 'Roblox Username',
    idPlaceholder: 'ระบุชื่อผู้ใช้ในเกม Roblox',
    helpText: 'ไม่ต้องกรอกรหัสผ่าน ปลอดภัย 100%',
    packages: [
      { id: 'r1', name: '400 Robux', price: 149 }, 
      { id: 'r2', name: '800 Robux', price: 299 }
    ] 
  },
  { 
    id: 7, 
    name: 'Genshin Impact', 
    category: 'mobile', 
    iconKey: 'genshin',
    currency: 'Genesis Crystals', 
    idLabel: 'UID & Server',
    idPlaceholder: 'เช่น 800123456 (Asia)',
    helpText: 'ตรวจสอบ Server ให้ถูกต้องก่อนทำรายการ',
    packages: [
      { id: 'g1', name: '60 Crystals', price: 35 }, 
      { id: 'g2', name: '300 Crystals', price: 169 }
    ] 
  },
  { 
    id: 8, 
    name: 'Honkai: Star Rail', 
    category: 'mobile', 
    iconKey: 'honkai',
    currency: 'Oneiric Shards', 
    idLabel: 'UID & Server',
    idPlaceholder: 'เช่น 800987654 (Asia)',
    helpText: 'ตรวจสอบ UID ที่มุมขวาล่างของหน้าจอเกม',
    packages: [
      { id: 'h1', name: '60 Shards', price: 35 }, 
      { id: 'h2', name: '300 Shards', price: 169 }
    ] 
  },
  { 
    id: 9, 
    name: 'EA FC Mobile', 
    category: 'mobile', 
    iconKey: 'eafc',
    currency: 'FC Points', 
    idLabel: 'User ID / In-game Name',
    idPlaceholder: 'กรอกไอดีผู้เล่น EA FC Mobile',
    helpText: 'ตรวจสอบไอดีภายในเกมให้ถูกต้อง',
    packages: [
      { id: 'fc1', name: '100 FC Points', price: 35 },
      { id: 'fc2', name: '520 FC Points', price: 175 }
    ] 
  }
];

export default function App() {
  const [balance, setBalance] = useState(1500.00);
  const [category, setCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [orderHistory, setOrderHistory] = useState([
    {
      id: 'NEXUS-884912',
      game: 'RoV (Realm of Valor)',
      pkg: '350 คูปอง',
      uid: 'e98a12004fa921b38',
      price: 340,
      status: 'สำเร็จ',
      time: '11:05:12'
    }
  ]);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [playerUid, setPlayerUid] = useState('');
  const [walletAmount, setWalletAmount] = useState(300);
  const [toast, setToast] = useState({ show: false, title: '', desc: '', type: 'success' });

  const showToast = (title, desc, type = 'success') => {
    setToast({ show: true, title, desc, type });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 4000);
  };

  const filteredGames = gamesData.filter(game => {
    const matchCategory = category === 'all' || game.category === 'all' || game.category === category;
    const matchSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleOpenCheckout = (game) => {
    setSelectedGame(game);
    setSelectedPackage(game.packages[0]);
    setPlayerUid('');
    setIsCheckoutOpen(true);
  };

  const handleCheckout = () => {
    if (!playerUid.trim()) {
      showToast("กรุณากรอกข้อมูลไอดี", `ต้องใช้ ${selectedGame.idLabel} เพื่อทำรายการ`, "error");
      return;
    }
    if (balance < selectedPackage.price) {
      showToast("ยอดเงินไม่เพียงพอ", "กรุณาเติมเงินเข้ากระเป๋าเงินก่อนทำรายการซื้อ", "error");
      setIsCheckoutOpen(false);
      setIsWalletOpen(true);
      return;
    }

    setBalance(prev => prev - selectedPackage.price);
    const newOrder = {
      id: 'NEXUS-' + Math.floor(100000 + Math.random() * 900000),
      game: selectedGame.name,
      pkg: selectedPackage.name,
      uid: playerUid,
      price: selectedPackage.price,
      status: 'สำเร็จ',
      time: new Date().toLocaleTimeString('th-TH')
    };

    setOrderHistory(prev => [newOrder, ...prev]);
    setIsCheckoutOpen(false);
    showToast("เติมเงินสำเร็จ!", `ทำรายการเติม ${selectedPackage.name} ให้ไอดี ${playerUid} เรียบร้อยแล้ว`, "success");
  };

  const handleWalletTopup = () => {
    if (walletAmount <= 0) {
      showToast("ยอดเงินไม่ถูกต้อง", "ระบุจำนวนเงินมากกว่า 0 บาท", "error");
      return;
    }
    setBalance(prev => prev + walletAmount);
    setIsWalletOpen(false);
    showToast("เติมเงินเข้ากระเป๋าสำเร็จ", `เพิ่มเครดิตจำนวน ${walletAmount.toLocaleString()} บาท เรียบร้อยแล้ว`, "success");
  };

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      <nav className="sticky top-0 z-40 bg-[#070d1f]/90 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_4px_20px_rgba(6,182,212,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => { setCategory('all'); setSearchQuery(''); }}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <svg className="w-6 h-6 text-slate-950" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">NEXUS-TOPUP</span>
              <span className="text-[9px] text-cyan-400/70 tracking-widest font-mono -mt-1">HIGH-SPEED SYSTEM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-[#0d1631] border border-cyan-500/30 rounded-xl px-3 py-1.5">
              <div className="flex flex-col text-right mr-3">
                <span className="text-[10px] text-cyan-300/70 uppercase font-semibold">เครดิตคงเหลือ</span>
                <span className="text-cyan-300 font-extrabold text-sm leading-none">{balance.toLocaleString()} ฿</span>
              </div>
              <button onClick={() => setIsWalletOpen(true)} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-black px-3 py-1.5 rounded-lg cursor-pointer">
                + เติมเงิน
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-950 via-slate-900 to-[#070d1f] border border-cyan-500/30 mb-10 p-6 sm:p-10 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-500/40 rounded-full px-3 py-1 mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-bold text-cyan-300">ระบบเติมเกมอัตโนมัติ 24 ชั่วโมง</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 text-white">
              เติมเกม <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent">Avatar Star & Top Games</span> ราคาถูกที่สุด
            </h1>
            <p className="text-slate-300 text-sm sm:text-base">รองรับการเติมเกม Avatar Star และเกมดังยอดฮิต ปลอดภัย รวดเร็ว เครดิตเข้าไอดีทันที</p>
          </div>
        </div>

        <h2 className="text-2xl font-black text-white mb-6">🎮 เลือกเกมที่ต้องการเติม</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {filteredGames.map(game => (
            <div 
              key={game.id} 
              onClick={() => handleOpenCheckout(game)}
              className="group bg-[#070e24] border border-cyan-900/40 hover:border-cyan-400 rounded-2xl overflow-hidden shadow-lg transition-all cursor-pointer flex flex-col relative"
            >
              {game.id === 1 && (
                <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-cyan-400 to-teal-500 text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full shadow-lg">
                  มาใหม่ 🔥
                </div>
              )}
              <div className="h-44 relative">{GameLogos[game.iconKey]}</div>
              <div className="p-4 flex flex-col flex-grow justify-between">
                <h3 className="font-bold text-base text-white group-hover:text-cyan-300">{game.name}</h3>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400">เติมทันที →</span>
                  <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">{game.currency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Checkout Modal */}
      {isCheckoutOpen && selectedGame && (
        <div className="fixed inset-0 z-50 bg-[#02050c]/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#070e24] border border-cyan-500/40 rounded-3xl max-w-lg w-full p-6 relative">
            <button onClick={() => setIsCheckoutOpen(false)} className="absolute top-5 right-5 text-slate-400 font-bold">✕</button>
            <h3 className="font-black text-lg text-white mb-4">เติมเงิน: {selectedGame.name}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">{selectedGame.idLabel}</label>
                <input 
                  type="text" 
                  value={playerUid} 
                  onChange={(e) => setPlayerUid(e.target.value)}
                  placeholder={selectedGame.idPlaceholder} 
                  className="w-full bg-[#030712] border border-cyan-900/60 rounded-xl px-4 py-3 text-sm text-slate-100 font-mono" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-2">เลือกแพ็กเกจ</label>
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {selectedGame.packages.map((pkg) => (
                    <button 
                      key={pkg.id} 
                      onClick={() => setSelectedPackage(pkg)}
                      className={`p-3 rounded-xl border text-left ${selectedPackage?.id === pkg.id ? 'border-cyan-400 bg-cyan-950/70 text-cyan-300' : 'border-slate-800 bg-[#030712] text-slate-300'}`}
                    >
                      <div className="font-bold text-xs">{pkg.name}</div>
                      <div className="text-xs font-extrabold text-cyan-400 mt-1">{pkg.price} ฿</div>
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={handleCheckout} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black py-3 rounded-xl mt-4 cursor-pointer">
                ยืนยันชำระเงิน ({selectedPackage?.price} ฿)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Wallet Modal */}
      {isWalletOpen && (
        <div className="fixed inset-0 z-50 bg-[#02050c]/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#070e24] border border-cyan-500/40 rounded-3xl max-w-sm w-full p-6 relative">
            <button onClick={() => setIsWalletOpen(false)} className="absolute top-4 right-4 text-slate-400 font-bold">✕</button>
            <h3 className="font-black text-lg text-white mb-4">เติมเงินเข้ากระเป๋า</h3>
            <div className="space-y-4">
              <input 
                type="number" 
                value={walletAmount}
                onChange={(e) => setWalletAmount(Number(e.target.value))}
                className="w-full bg-[#030712] border border-cyan-900/60 rounded-xl px-4 py-2.5 text-sm text-slate-100 font-mono"
              />
              <button onClick={handleWalletTopup} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black py-3 rounded-xl cursor-pointer">
                ยืนยันการเติมเงิน
              </button>
            </div>
          </div>
        </div>
      )}

      {toast.show && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#070e24] border border-cyan-500 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3">
          <div>
            <p className="text-xs font-black">{toast.title}</p>
            <p className="text-xs text-slate-300">{toast.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
