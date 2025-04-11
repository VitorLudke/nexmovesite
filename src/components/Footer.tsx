export function Footer() {
  return (
    <footer className="bg-nexmove-dark py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-nexmove-orange">Nex</span>Move
            </h3>
            <p className="text-gray-400">
              Transformando a mobilidade urbana com tecnologia inteligente.
            </p>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-nexmove-orange transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-nexmove-orange transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-nexmove-orange transition-colors">
                  Políticas
                </a>
              </li>
            </ul>
          </div>
          
          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/nexmove-mobility/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-nexmove-darker flex items-center justify-center hover:bg-nexmove-orange transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NexMove. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 