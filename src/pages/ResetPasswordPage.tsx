import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff } from 'lucide-react';

export function ResetPasswordPage() {
  const [passwords, setPasswords] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.password !== passwords.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Resetting password');
    navigate('/');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
        Nueva contraseña
      </h2>
      <p className="text-center text-gray-600 text-sm mb-6">
        Ingresa y confirma tu nueva contraseña
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Nueva contraseña"
            value={passwords.password}
            onChange={(e) => setPasswords(prev => ({ ...prev, password: e.target.value }))}
            className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirmar contraseña"
            value={passwords.confirmPassword}
            onChange={(e) => setPasswords(prev => ({ ...prev, confirmPassword: e.target.value }))}
            className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors font-semibold"
        >
          Cambiar contraseña
        </button>
      </form>
    </div>
  );
}