import { ReactNode } from 'react';

const Section = ({ 
  title, 
  subtitle, 
  children, 
  className = '',
  bg = 'white',
  id 
}) => {
  const bgClass = {
    'white': 'bg-white text-gray-900',
    'light': 'bg-gray-50 text-gray-900',
    'gradient': 'bg-gradient-to-b from-slate-50 to-white text-gray-900'
  }[bg] || 'bg-white text-gray-900';

  return (
    <section className={`${bgClass} py-20 lg:py-32 ${className}`} id={id}>

      <div className="container">
        {title && (
          <div className="text-center mb-12 lg:mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
            {subtitle && (
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;

