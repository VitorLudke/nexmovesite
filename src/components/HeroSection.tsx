import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-nexmove-dark relative overflow-hidden">
      {/* Imagem de fundo com blur */}
      <div className="absolute inset-0">
        <Image
          src="/traffic-lights.jpg"
          alt="Tráfego noturno com semáforos"
          fill
          className="object-cover"
          quality={100}
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            filter: 'blur(2px)',
            transform: 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-nexmove-darker to-transparent opacity-90" />
      </div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Mobilidade Inteligente com{" "}
            <span className="text-nexmove-orange">NexMove</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Solução que reduz atrasos de ônibus com semáforos inteligentes baseados em IA
          </p>
          
          <a href="#contato" className="btn-primary">
            Fale com a gente
          </a>
        </div>
      </div>
    </section>
  );
} 