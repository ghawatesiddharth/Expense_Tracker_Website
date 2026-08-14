import React from "react";
import CARD_2 from "../../assets/images/card_2.jpeg";
import { LuTrendingUpDown } from "react-icons/lu";
const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-[60vw] h-screen px-12 pt-8 pb-12 overflow-hidden">
        <h2 className="text-2xl font-medium text-black mb-8">
          Expense Tracker
        </h2>

        {children}
      </div>

      <div className="hidden md:block w-[40vw] h-screen bg-violet-50 bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5"/>
        <div className="w-48 h-56 rounded-[40px] border-20 border-fuchsia-600 absolute top-[30%] -right-20"/>
        <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5"/>

        <div className="grid grid-cols-1 z-20">
            <StatsInfoCard 
            icon={<LuTrendingUpDown/>} 
            label = "Track your Expense" 
            value="120,000" 
            color="bg-primary"
            />
        </div>

        <img
          src={CARD_2}
          alt="Expense Tracker"
          className="w-64 lg:w-[90%] absolute bottom-10 left-1/2 -translate-x-1/2 shadow-lg shadow-black/20"
        />
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard =({icon, label, value, color})=>{
    return <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10">
        <div 
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white rounded-full drop-shadow-xl ${color}`}>
        {icon}
    </div>
        <div>
      <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
      <span className="text-[20px] ">₹{value}</span>
    </div>
  </div>;
};