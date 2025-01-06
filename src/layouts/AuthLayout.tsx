import React from 'react';
import { Outlet } from 'react-router-dom';
import { BrandHeader } from '../components/BrandHeader';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <BrandHeader />
        <Outlet />
      </div>
    </div>
  );
}