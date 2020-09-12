import React, { useState } from 'react';
import "./App.css";


function App() {
  return (
    <div className="background-beach bg-fixed h-full pb-64">
      <header className="container px-3 pb-32 h-full sm:mx-auto min-h-screen">
        <div style={{ height: "20vh" }}></div>
        <div className="bg-pink-100 p-5 pb-6 sm:p-10 sm:pb-12 rounded-lg shadow-2xl sm:max-w-lg mx-auto">
          <h1 className="text-3xl font-bold">
            <span className="text-5xl">🏝</span><br />
            <span className="inline-block leading-tight bg-clip-text text-transparent bg-gradient-to-l from-pink-400 to-red-500 h-full">
              Days until Summer Holidays
            </span>
          </h1>
          <p className="text-gray-600">The one question every student (and teacher?) occasionally comes across is finally answered!</p>
          <hr className="mb-3 mt-4 border-1 rounded-lg overflow-hidden bg-pink-200 border-pink-200 border-2"/>
          <h3 className="text-lg font-semibold mb-1">Some Questions first</h3>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Do you only go to school on weekdays?</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Does your school have extra days off?</span>
          </label>

          <label className="flex items-center mt-2">
            <input style={{maxWidth: "110px"}} className="form-input block" placeholder="26.07.2020"/>
            <span className="ml-2">When do your summer holidays start?</span>
          </label>
        </div>
      </header>
    </div>
  );
}

export default App;
