import React, { useState, useEffect } from 'react';

const PasswordGenerator = ({ isOpen, onClose }) => {
    const [baseWord, setBaseWord] = useState("");
    const [passwordLength, setPasswordLength] = useState(12);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [options, setOptions] = useState({
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: false,
    });

    const generatePassword = () => {
        setError("");
        const sets = {
            lowercase: "abcdefghijklmnopqrstuvwxyz",
            uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            numbers: "0123456789",
            symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
        };

        // 1. Validation Logic
        const activeKeys = Object.keys(options).filter(key => options[key]);
        const minRequiredLength = activeKeys.length + baseWord.length;

        if (activeKeys.length === 0) {
            setError("Please select at least one character type.");
            setPassword("");
            return;
        }

        if (passwordLength < minRequiredLength) {
            setError(`Minimum length required is ${minRequiredLength} (Base word + selected types).`);
            setPassword("");
            return;
        }

        // 2. Guaranteed Inclusion Logic
        let resultArr = [];

        // Ensure at least one of each selected type
        activeKeys.forEach(key => {
            const set = sets[key];
            resultArr.push(set[Math.floor(Math.random() * set.length)]);
        });

        // 3. Fill remaining length
        const charPool = activeKeys.map(key => sets[key]).join("");
        const remainingCount = passwordLength - baseWord.length - resultArr.length;

        for (let i = 0; i < remainingCount; i++) {
            resultArr.push(charPool[Math.floor(Math.random() * charPool.length)]);
        }

        // 4. Shuffle and Combine
        // We shuffle the random parts so the "guaranteed" chars aren't always at the start
        const shuffledRandom = resultArr.sort(() => Math.random() - 0.5).join("");
        setPassword(`${baseWord}${shuffledRandom}`);
    };

    useEffect(() => { if (isOpen) generatePassword(); }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">

                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h2 className="text-lg font-extrabold text-slate-800">Password Generator</h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    {/* Result Display */}
                    <div className="relative group">
                        <input
                            readOnly
                            value={password}
                            placeholder={error ? "---" : "Generating..."}
                            className={`w-full p-4 bg-slate-50 border-2 rounded-xl text-center font-mono text-lg font-bold transition-colors ${error ? 'border-red-100 text-red-300' : 'border-slate-200 text-sky-600'}`}
                        />
                        {!error && (
                            <button onClick={generatePassword} className="absolute right-3 top-3 p-1.5 bg-white border border-slate-200 rounded-md hover:text-sky-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                            </button>
                        )}
                    </div>

                    {/* Error Message Section */}
                    {error && (
                        <div className="flex items-center gap-2 px-3 py-2 bg-red-50 border border-red-100 rounded-lg">
                            <svg className="w-4 h-4 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                            <p className="text-[11px] font-bold text-red-600 uppercase tracking-tight">{error}</p>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase">Length</label>
                            <input
                                type="number"
                                value={passwordLength}
                                onChange={(e) => setPasswordLength(parseInt(e.target.value) || 0)}
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-bold outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase">Base Word</label>
                            <input
                                type="text"
                                value={baseWord}
                                onChange={(e) => setBaseWord(e.target.value)}
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        </div>
                    </div>

                    {/* Criteria Selection */}
                    <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        {Object.keys(options).map((key) => (
                            <label key={key} className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={options[key]}
                                    onChange={() => setOptions({ ...options, [key]: !options[key] })}
                                    className="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                                />
                                <span className="text-xs font-bold text-slate-600 capitalize">{key}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="p-6 pt-2">
                    <button
                        onClick={generatePassword}
                        className="w-full py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-sky-600 transition-all shadow-lg active:scale-95"
                    >
                        Generate Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PasswordGenerator;