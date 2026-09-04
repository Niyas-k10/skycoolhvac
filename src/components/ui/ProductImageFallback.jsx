const CATEGORY_IMAGES = {
  'ac-spare-parts': '/products/AC.webp',
  'compressors': '/products/Compressor.webp',
  'fan-motors': '/products/Motor.webp',
  'thermostats': '/products/Thermostat.webp',
  'thermostat': '/products/Thermostat.png',
  'ac-remote-controls': '/products/AC.webp',
  'ac-tools': '/products/Acutator.webp',
  'refrigerants': '/products/Gas.webp',
  'hvac-components': '/products/Coil.webp'
};

export function ProductImageFallback({ categorySlug, name, brand, className = '' }) {
  const imageSrc = CATEGORY_IMAGES[categorySlug] || '/products/AC.webp';

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
