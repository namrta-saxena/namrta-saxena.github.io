// src/App.jsx
import React from 'react';
import ProfileGridLayout from './components/layouts/ProfileGridLayout';
import Copyright from './components/sections/Copyright';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12">
      <main className="max-w-[1200px] mx-auto">
        <ProfileGridLayout />
      </main>
      <Copyright />
    </div>
  );
}

export default App;