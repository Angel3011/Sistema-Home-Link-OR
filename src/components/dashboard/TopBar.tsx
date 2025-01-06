import React from 'react';
import { Menu, UserCircle } from 'lucide-react';

export function TopBar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex justify-between items-center px-6 py-3">
        <div className="flex items-center space-x-4">
          <Menu className="h-6 w-6" />
          <h2 className="text-lg font-semibold">SISTEMA DE GESTIÓN</h2>
        </div>
        <div className="flex items-center space-x-2">
          <span>Administrador</span>
          <UserCircle className="h-8 w-8" />
        </div>
      </div>
    </header>
  );
}