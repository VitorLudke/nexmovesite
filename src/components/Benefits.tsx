import { ClockIcon, UserGroupIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: ClockIcon,
    title: "Para o BRT",
    items: [
      "Redução significativa de atrasos",
      "Maior pontualidade nas viagens",
      "Otimização da frota"
    ]
  },
  {
    icon: UserGroupIcon,
    title: "Para a População",
    items: [
      "Menor tempo de espera",
      "Mais qualidade de vida",
      "Previsibilidade no transporte"
    ]
  },
  {
    icon: BuildingLibraryIcon,
    title: "Para o Governo",
    items: [
      "Economia de recursos",
      "Imagem positiva da gestão",
      "Dados para tomada de decisão"
    ]
  }
];

export function Benefits() {
  return (
    <section className="section-padding bg-nexmove-darker" id="beneficios">
      <div className="container-custom">
        <h2 className="section-title">
          <span className="text-nexmove-orange">Benefícios</span> para Todos
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-nexmove-dark hover:bg-opacity-70 transition-all duration-300"
            >
              <benefit.icon className="w-12 h-12 text-nexmove-orange mb-4" />
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <ul className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-400">
                    <span className="w-1.5 h-1.5 bg-nexmove-orange rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 