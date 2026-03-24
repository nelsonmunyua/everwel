import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  features, 
  ctaPrimary, 
  ctaSecondary,
  className = ''
}) => {
  return (
    <section className={`relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-slate-800 via-blue-600 to-blue-400 p-20 lg:p-32 overflow-hidden ${className}`}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-6xl mx-auto text-center text-white drop-shadow-2xl z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 -tracking-[0.02em] leading-tight">{title}</h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-opacity-95">{subtitle}</p>
        <p className="text-lg md:text-xl lg:text-2xl leading-7 mb-12 text-opacity-85 max-w-3xl mx-auto">{description}</p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 text-lg font-medium bg-white/30 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/50">
              <div className="w-6 h-6 flex-shrink-0">
                {feature.icon}
              </div>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            to="/contact" 
            className="btn bg-amber-500 hover:bg-amber-600 text-white px-12 py-8 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            {ctaPrimary}
          </Link>
          <Link 
            to="/contact" 
            className="btn border-2 border-white/70 bg-white/10 backdrop-blur-lg hover:bg-white hover:text-blue-600 text-white px-12 py-8 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            {ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

