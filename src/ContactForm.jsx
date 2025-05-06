import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("meoggvjj"); // Usa tu ID de Formspree

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 max-w-lg mx-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-emerald-500/20 rounded-full p-4 mb-2">
          <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-4.5M21 10.5l-9 5.25L3 10.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">Envíame un mensaje</h3>
        <p className="text-gray-300 text-center text-sm">¿Tienes una idea, proyecto o propuesta? ¡Hablemos!</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-white mb-2 font-medium">Nombre</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 rounded-xl bg-white/20 border border-gray-500 text-white focus:outline-none focus:border-emerald-400 focus:bg-white/30 transition-all duration-200 shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white mb-2 font-medium">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-xl bg-white/20 border border-gray-500 text-white focus:outline-none focus:border-emerald-400 focus:bg-white/30 transition-all duration-200 shadow-sm"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message" className="block text-white mb-2 font-medium">Mensaje</label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            className="w-full px-4 py-2 rounded-xl bg-white/20 border border-gray-500 text-white focus:outline-none focus:border-emerald-400 focus:bg-white/30 transition-all duration-200 shadow-sm"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 text-white shadow-lg hover:from-emerald-500 hover:to-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={state.submitting}
        >
          {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
        </button>
        {state.succeeded && (
          <div className="text-green-400 text-center p-3 bg-green-400/10 rounded-lg mt-4 animate-pulse">
            ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm; 