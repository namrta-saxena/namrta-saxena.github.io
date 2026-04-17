import React, { useState, useEffect } from 'react';

const PasswordGenerator = ({ isOpen, onClose }) => {
    const [baseWord, setBaseWord] = useState("");
    const [passwordLength, setPasswordLength] = useState(12);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [options, setOptions] = useState({
        lowercase: { active: true, count: 2 },
        uppercase: { active: true, count: 2 },
        numbers: { active: true, count: 2 },
        symbols: { active: false, count: 0 },
    });

    const handleOptionChange = (key, field, value) => {
        setOptions(prev => ({
            ...prev,
            [key]: { ...prev[key], [field]: value }
        }));
    };

    const generatePassword = () => {
        setError("");
        const sets = {
            lowercase: "abcdefghijklmnopqrstuvwxyz",
            uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            numbers: "0123456789",
            symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
        };

        const activeKeys = Object.keys(options).filter(k => options[k].active);
        const requestedCharCount = activeKeys.reduce((sum, k) => sum + (parseInt(options[k].count) || 0), 0);
        const totalWithBase = requestedCharCount + baseWord.length;

        if (activeKeys.length === 0 && baseWord.length === 0) {
            return setError("Enter a base word or select a category.");
        }
        if (totalWithBase > passwordLength) {
            return setError(`Required chars (${totalWithBase}) exceed length (${passwordLength}).`);
        }

        let randomChars = [];
        activeKeys.forEach(key => {
            const targetCount = parseInt(options[key].count) || 0;
            for (let i = 0; i < targetCount; i++) {
                randomChars.push(sets[key][Math.floor(Math.random() * sets[key].length)]);
            }
        });

        const gap = passwordLength - (baseWord.length + randomChars.length);
        if (gap > 0) {
            for (let i = 0; i < gap; i++) {
                randomChars.push(sets.lowercase[Math.floor(Math.random() * sets.lowercase.length)]);
            }
        }

        let finalArray = baseWord.split("");
        const shuffledRandom = randomChars.sort(() => Math.random() - 0.5);

        if (finalArray.length > 0) {
            shuffledRandom.forEach(char => {
                const randomIndex = Math.floor(Math.random() * (finalArray.length)) + 1;
                finalArray.splice(randomIndex, 0, char);
            });
        } else {
            finalArray = shuffledRandom;
        }

        setPassword(finalArray.join(""));
    };

    useEffect(() => { if (isOpen) generatePassword(); }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h2 className="text-lg font-extrabold text-slate-800 tracking-tight">Advanced Generator</h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-red-500 text-2xl transition-colors">&times;</button>
                </div>

                <div className="p-6 space-y-4">
                    {/* Result Area */}
                    <div className="space-y-2">
                        <input
                            readOnly
                            value={password}
                            className={`w-full p-4 bg-slate-50 border-2 rounded-xl text-center font-mono text-lg font-bold transition-all ${error ? 'border-red-100 text-red-300' : 'border-slate-200 text-sky-600 shadow-inner'}`}
                        />
                        <div className={`overflow-hidden transition-all duration-300 ${error ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="flex items-center justify-center py-1 bg-red-50 rounded-lg">
                                <span className="text-[10px] font-black text-red-500 uppercase tracking-tighter">{error}</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-400 uppercase">Length</label>
                            <input type="number" value={passwordLength} onChange={(e) => setPasswordLength(parseInt(e.target.value) || 0)} className="w-full px-3 py-2 border rounded-lg text-sm font-bold focus:ring-2 focus:ring-sky-500 outline-none transition-shadow" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-400 uppercase">Base Word</label>
                            <input type="text" value={baseWord} onChange={(e) => setBaseWord(e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-sky-500 outline-none transition-shadow" />
                        </div>
                    </div>

                    {/* Category List with Layout Stability */}
                    <div className="space-y-1 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase mb-3">Category Rules</p>
                        {Object.keys(options).map((key) => (
                            <div key={key} className="flex items-center justify-between h-9 group"> {/* Fixed height (h-9) prevents jumping */}
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={options[key].active}
                                        onChange={() => handleOptionChange(key, 'active', !options[key].active)}
                                        className="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                                    />
                                    <span className="text-xs font-bold text-slate-600 capitalize group-hover:text-slate-900 transition-colors">{key}</span>
                                </label>

                                {/* Fixed space container for the number input */}
                                <div className={`flex items-center gap-2 transition-all duration-300 ${options[key].active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
                                    <span className="text-[9px] text-slate-300 font-bold uppercase">Qty:</span>
                                    <input
                                        type="number"
                                        value={options[key].count}
                                        onChange={(e) => handleOptionChange(key, 'count', parseInt(e.target.value) || 0)}
                                        className="w-12 px-1 py-1 text-xs font-black border rounded bg-white text-center focus:border-sky-600 outline-none"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={generatePassword} className="w-full py-3.5 bg-slate-900 text-white text-sm font-black rounded-xl hover:bg-sky-600 transition-all shadow-lg active:scale-95">
                        GENERATE SECURE PASSWORD
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PasswordGenerator;