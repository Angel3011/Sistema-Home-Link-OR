import React from 'react';
import { Link } from 'react-router-dom';
import { Users, UserCircle, Star, ShoppingCart, Settings, LogOut } from 'lucide-react';

export function Sidebar() {
  const menuItems = [
    { icon: Users, label: 'Usuarios', path: '/dashboard/users' },
    { icon: UserCircle, label: 'Clientes', path: '/dashboard/clients' },
    { icon: Star, label: 'Roles', path: '/dashboard/roles' },
    { icon: Star, label: 'Tickets', path: '/dashboard/tickets' },
    { icon: ShoppingCart, label: 'Mercadería', path: '/dashboard/merchandise' },
    { icon: Settings, label: 'Configuración', path: '/dashboard/settings' },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-lg font-semibold">SISTEMA HOME LINK-OR</h1>
      </div>
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <UserCircle className="h-6 w-6" />
          <span>ADMINISTRADOR</span>
        </div>
      </div>
      <nav className="flex-1">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-700 transition-colors"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <Link
        to="/login"
        className="flex items-center space-x-3 px-4 py-3 bg-red-600 hover:bg-red-700 transition-colors"
      >
        <LogOut className="h-5 w-5" />
        <span>Cerrar Sesión</span>
      </Link>
    </div>
  );
}