import { CameraIcon, AdjustmentsHorizontalIcon, WrenchIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: CameraIcon,
    title: "Captura em Tempo Real",
    description: "Câmeras captam imagens em tempo real do fluxo de veículos"
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: "Ajuste Dinâmico",
    description: "Software ajusta semáforos dinamicamente baseado em IA"
  },
  {
    icon: WrenchIcon,
    title: "Fácil Implementação",
    description: "Sem mudanças na infraestrutura: tecnologia acoplada aos semáforos existentes"
  }
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-nexmove-dark" id="como-funciona">
      <div className="container-custom">
        <h2 className="section-title">
          Como <span className="text-nexmove-orange">Funciona</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-nexmove-darker hover:bg-opacity-70 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-nexmove-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 