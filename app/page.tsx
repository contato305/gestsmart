export const metadata = {
  title: 'Meu Site - Landing',
  description: 'Landing page de negócios — foco em conversão'
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1>GestSmart</h1>
          <nav>
            <a href="#servicos" className="px-4">Serviços</a>
            <a href="#sobre" className="px-4">Sobre</a>
            <a href="#contato" className="px-4">Contato</a>
          </nav>
        </div>
      </header>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Soluções que impulsionam seu negócio</h2>
          <p className="text-lg text-gray-600 mb-8">
            Landing otimizada para conversão, design moderno e formulário de contato funcional.
          </p>
          <a
            href="#contato"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md shadow hover:bg-indigo-700"
          >
            Solicitar Contato
          </a>
        </div>
      </section>

      <section id="servicos" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Consultoria</h3>
            <p className="text-gray-600">Estratégia, análise e execução para crescimento.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Desenvolvimento</h3>
            <p className="text-gray-600">Websites, aplicações e integrações sob medida.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Design</h3>
            <p className="text-gray-600">UI/UX limpo e centrado na conversão.</p>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Sobre nós</h3>
          <p className="text-gray-600">
            Somos uma equipe dedicada a transformar visitantes em clientes com sites rápidos e bonitos.
          </p>
        </div>
      </section>

      <section id="contato" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-4 text-center">Fale conosco</h3>

          {/* Substitua YOUR_FORMSPREE_ID pelo seu ID do Formspree ou use outro endpoint */}
          <form
            action="https://formspree.io/f/YOUR_FORMSPREE_ID"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">E-mail</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mensagem</label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
              >
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Minha Empresa. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
