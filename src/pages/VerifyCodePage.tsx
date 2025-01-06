import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { KeyRound } from 'lucide-react';

export function VerifyCodePage() {
  const [code, setCode] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Verifying code:', code);
    navigate('/reset-password', { state: { email } });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
        Verificar código
      </h2>
      <p className="text-center text-gray-600 text-sm mb-6">
        Hemos enviado un código de verificación a tu correo electrónico
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Código de verificación"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors font-semibold"
        >
          Verificar código
        </button>
      </form>
    </div>
  );
}
