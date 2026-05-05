import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { getAttributionFlat } from '../services/attribution';
import { track, trackCustomEvent } from '../services/tracking';

const ESTIMATED_TICKET_BRL = 35;
const QUALIFIED_LEAD_MIN_QTY = 30;

const BudgetForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'assessoria', // assessoria, evento, loja
        quantity: '',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        if (!formData.name.trim()) return "Nome é obrigatório.";
        if (!formData.email.includes('@')) return "Email inválido.";
        const phoneDigits = formData.phone.replace(/\D/g, '');
        if (phoneDigits.length < 10 || phoneDigits.length > 11) return "WhatsApp inválido. Use o formato (11) 99999-9999.";
        if (!formData.quantity || isNaN(formData.quantity) || Number(formData.quantity) <= 0) return "Quantidade inválida.";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const error = validate();
        if (error) {
            setErrorMessage(error);
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        try {
            const attribution = getAttributionFlat();
            const payload = {
                ...formData,
                ...attribution,
                submitted_at: new Date().toISOString(),
                page_url: window.location.href,
            };

            const response = await fetch("https://formspree.io/f/xreadaen", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const nameParts = formData.name.trim().split(/\s+/);
                const quantity = Number(formData.quantity);
                const userData = {
                    email: formData.email,
                    phone: formData.phone,
                    first_name: nameParts[0],
                    last_name: nameParts.slice(1).join(' '),
                };
                const customData = {
                    content_name: 'Orcamento Camiseta Poliamida',
                    content_category: formData.type,
                    num_items: quantity,
                    value: quantity * ESTIMATED_TICKET_BRL,
                    currency: 'BRL',
                    utm_source: attribution.utm_source,
                    utm_medium: attribution.utm_medium,
                    utm_campaign: attribution.utm_campaign,
                    utm_content: attribution.utm_content,
                };

                track('Lead', { user_data: userData, custom_data: customData });

                if (quantity >= QUALIFIED_LEAD_MIN_QTY) {
                    trackCustomEvent('Lead_Qualificado', { user_data: userData, custom_data: customData });
                }

                setStatus('success');
                setFormData({ name: '', email: '', phone: '', type: 'assessoria', quantity: '', message: '' });
            } else {
                throw new Error("Erro de resposta do servidor Formspree.");
            }
        } catch {
            setStatus('error');
            setErrorMessage("Não foi possível enviar o formulário no momento. Tente novamente mais tarde.");
        }
    };

    return (
        <section className="py-12 md:py-24 bg-black relative scroll-mt-24" id="orcamento">
            <div className="container mx-auto px-6 max-w-4xl">
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <span className="text-gray-500 tracking-widest uppercase text-sm font-bold">Contato Comercial</span>
                        <h2 className="text-4xl font-black text-white mt-4 mb-4">SOLICITE UM ORÇAMENTO</h2>
                        <p className="text-gray-400">Resposta garantida em até 24 horas úteis.</p>
                    </div>

                    <div className="bg-neutral-900/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl">
                        {status === 'success' ? (
                            <div className="text-center py-12 animate-fade-in-up">
                                <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Orçamento Enviado!</h3>
                                <p className="text-gray-400 mb-8">Nossa equipe de especialistas entrará em contato em breve.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-accent hover:underline font-bold"
                                >
                                    Enviar novo orçamento
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Nome Completo</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                            placeholder="Seu nome"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email Corporativo</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                            placeholder="seu@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">WhatsApp</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                            placeholder="(11) 99999-9999"
                                            inputMode="tel"
                                            autoComplete="tel"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Tipo de Negócio</label>
                                        <select
                                            name="type"
                                            value={formData.type}
                                            onChange={handleChange}
                                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none"
                                        >
                                            <option value="assessoria">Assessoria Esportiva</option>
                                            <option value="evento">Organizador de Eventos</option>
                                            <option value="loja">Lojista / Revenda</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Quantidade Estimada (Peças)</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                        placeholder="Ex: 50"
                                        min="1"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Detalhes do Projeto</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors h-32 resize-none"
                                        placeholder="Conte mais sobre sua necessidade..."
                                    ></textarea>
                                </div>

                                {errorMessage && (
                                    <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                                        <AlertCircle className="w-5 h-5" />
                                        <span className="text-sm font-medium">{errorMessage}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-accent text-black font-bold uppercase tracking-wider py-4 rounded-lg hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" /> Processando...
                                        </>
                                    ) : (
                                        <>
                                            Enviar Solicitação <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default BudgetForm;
