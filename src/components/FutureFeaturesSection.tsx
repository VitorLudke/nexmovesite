import { ShieldExclamationIcon, CameraIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const futureFeatures = [
  {
    icon: ShieldExclamationIcon,
    title: "Detecção de Emergências",
    description: "Identificação automática de situações de emergência para resposta rápida"
  },
  {
    icon: CameraIcon,
    title: "Fiscalização Automática",
    description: "Monitoramento de infrações de trânsito e controle de velocidade"
  },
  {
    icon: ChartBarIcon,
    title: "Previsão de Tráfego",
    description: "Análise preditiva com dados de sensores, clima e GPS"
  }
];

export function FutureFeaturesSection() {
  return (
    <section className="section-padding bg-nexmove-dark" id="futuro">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-4 mb-12">
          <h2 className="section-title mb-0">
            O <span className="text-nexmove-orange">Futuro</span> da Mobilidade
          </h2>
          <span className="bg-nexmove-orange text-white text-sm font-semibold px-3 py-1 rounded-full">
            Em breve
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-nexmove-darker hover:bg-opacity-70 transition-all duration-300 group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-12 h-12 text-nexmove-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 