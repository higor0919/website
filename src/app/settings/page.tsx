import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { UserIcon, BellIcon, GlobeAltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function SettingsPage() {
  return (
    <MainLayout activePage="settings">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-600">Configure your TradeTrack Pro application</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center mb-4">
            <div className="bg-gray-100 p-3 rounded-full mr-3">
              <UserIcon className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold">User Settings</h3>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Name</label>
              <input 
                type="text" 
                className="border border-gray-300 rounded-md px-3 py-2" 
                defaultValue="Admin User"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Email</label>
              <input 
                type="email" 
                className="border border-gray-300 rounded-md px-3 py-2" 
                defaultValue="admin@yourcompany.com"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Password</label>
              <input 
                type="password" 
                className="border border-gray-300 rounded-md px-3 py-2" 
                defaultValue="********"
              />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
              Update Profile
            </button>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center mb-4">
            <div className="bg-gray-100 p-3 rounded-full mr-3">
              <BellIcon className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold">Notification Settings</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Email Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Document Alerts</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Payment Reminders</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Shipment Updates</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center mb-4">
            <div className="bg-gray-100 p-3 rounded-full mr-3">
              <GlobeAltIcon className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold">System Settings</h3>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Language</label>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option value="en">English</option>
                <option value="pt">Portuguese</option>
                <option value="zh">Chinese</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Time Zone</label>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option value="utc">UTC</option>
                <option value="america_sao_paulo">America/Sao Paulo</option>
                <option value="asia_shanghai">Asia/Shanghai</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Currency</label>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option value="usd">USD</option>
                <option value="brl">BRL</option>
                <option value="cny">CNY</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center mb-4">
            <div className="bg-gray-100 p-3 rounded-full mr-3">
              <ShieldCheckIcon className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold">Security Settings</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Two-Factor Authentication</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Session Timeout (minutes)</label>
              <input 
                type="number" 
                className="border border-gray-300 rounded-md px-3 py-2" 
                defaultValue="30"
              />
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
              Reset Security Settings
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
