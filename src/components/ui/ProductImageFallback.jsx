const CATEGORY_IMAGES = {
  'ac-spare-parts': '/products/AC.png',
  'compressors': '/products/Compressor.png',
  'fan-motors': '/products/Motor.png',
  'thermostats': '/products/Thermostat.png',
  'ac-remote-controls': '/products/AC.png',
  'ac-tools': '/products/Acutator.png',
  'refrigerants': '/products/Gas.png',
  'hvac-components': '/products/Coil.png'
};

export function ProductImageFallback({ categorySlug, name, brand, className = '' }) {
  const imageSrc = CATEGORY_IMAGES[categorySlug] || '/products/AC.png';

  return (
    <div className={`w-full h-full bg-slate-50 flex items-center justify-center p-4 text-center relative overflow-hidden border border-slate-100 ${className}`}>
      <img
        src={imageSrc}
        alt={name || 'HVAC Spare Part'}
        className="max-w-full max-h-full object-contain transform transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}
