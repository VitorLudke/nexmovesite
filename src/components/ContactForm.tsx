'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cidade: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Dados do formulário:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="section-padding bg-nexmove-darker" id="contato">
      <div className="container-custom max-w-4xl">
        <h2 className="section-title">
          Entre em <span className="text-nexmove-orange">Contato</span>
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium mb-2">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-nexmove-dark rounded-lg border border-gray-700 focus:border-nexmove-orange focus:ring-1 focus:ring-nexmove-orange outline-none transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-nexmove-dark rounded-lg border border-gray-700 focus:border-nexmove-orange focus:ring-1 focus:ring-nexmove-orange outline-none transition-colors"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="cidade" className="block text-sm font-medium mb-2">
              Cidade
            </label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-nexmove-dark rounded-lg border border-gray-700 focus:border-nexmove-orange focus:ring-1 focus:ring-nexmove-orange outline-none transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-nexmove-dark rounded-lg border border-gray-700 focus:border-nexmove-orange focus:ring-1 focus:ring-nexmove-orange outline-none transition-colors resize-none"
            />
          </div>
          
          <div className="text-center">
            <button type="submit" className="btn-primary">
              Solicitar Apresentação
            </button>
          </div>
        </form>
      </div>
    </section>
  );
} 