import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  link: string;
}

export function DashboardCard({ title, icon: Icon, color, link }: DashboardCardProps) {
  return (
    <Link to={link} className={`${color} rounded-lg p-6 transition-transform hover:scale-105`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        </div>
        <Icon className="h-8 w-8" />
      </div>
      <div className="mt-4 flex justify-end">
        <span className="text-sm font-medium hover:underline">Más Detalles →</span>
      </div>
    </Link>
  );
}