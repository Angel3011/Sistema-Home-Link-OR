import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending verification code to:', email);
    navigate('/verify-code', { state: { email } });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
        Recuperar contraseña
      </h2>
      <p className="text-center text-gray-600 text-sm mb-6">
        Ingresa tu correo electrónico y te enviaremos un código de verificación
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors font-semibold"
        >
          Enviar código
        </button>
      </form>

      <button
        onClick={() => navigate('/LoginForm.tsx')}
        className="w-full flex items-center justify-center text-blue-500 py-3 rounded hover:bg-blue-50 transition-colors font-semibold"
      >
        <ArrowLeft className="text-center text-sm" />
        Regresar al login
      </button>
    </div>
  );
}
