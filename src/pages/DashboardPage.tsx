import React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { DashboardCard } from '../components/dashboard/DashboardCard';
import { Users, UserCircle, Star, ShoppingCart, Settings } from 'lucide-react';

export function DashboardPage() {
  const cards = [
    { id: 1, title: 'Usuarios Registrados', icon: Users, color: 'bg-yellow-300', link: '/dashboard/users' },
    { id: 2, title: 'Clientes Registrados', icon: UserCircle, color: 'bg-blue-300', link: '/dashboard/clients' },
    { id: 3, title: 'Roles Registrados', icon: Star, color: 'bg-green-300', link: '/dashboard/roles' },
    { id: 4, title: 'Tickets Registrados', icon: Star, color: 'bg-orange-300', link: '/dashboard/tickets' },
    { id: 5, title: 'Mercadería Registrada', icon: ShoppingCart, color: 'bg-red-500', link: '/dashboard/merchandise' },
    { id: 6, title: 'Configuración', icon: Settings, color: 'bg-purple-300', link: '/dashboard/settings' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Bienvenido al sistema - ADMINISTRADOR</h1>
          <p className="text-gray-600">Contenido del sistema</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <DashboardCard
              key={card.id}
              title={card.title}
              icon={card.icon}
              color={card.color}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}