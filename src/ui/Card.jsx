import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ 
  title, 
  description, 
  icon: Icon, 
  linkTo, 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden ${className}`} {...props}>
      {linkTo && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      )}
      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
        {typeof Icon === 'function' ? <Icon className="w-7 h-7 text-white" /> : Icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      {description && (
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>
      )}
      {children}
      {linkTo && (
        <Link 
          to={linkTo} 
          className="text-blue-600 font-semibold text-sm inline-flex items-center gap-1 hover:text-blue-700 transition-colors duration-200 group"
        >
          Learn More →
        </Link>
      )}
    </div>
  );
};

export default Card;

