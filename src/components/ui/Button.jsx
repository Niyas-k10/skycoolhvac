export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  href,
  onClick,
  type = 'button',
  icon: Icon,
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary:
      'bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-600/20 focus-visible:ring-sky-500',
    whatsapp:
      'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/25 whatsapp-glow focus-visible:ring-emerald-500',
    secondary:
      'bg-slate-900 hover:bg-slate-800 text-white focus-visible:ring-slate-700',
    outline:
      'border-2 border-slate-200 hover:border-sky-600 hover:bg-sky-50 text-slate-700 hover:text-sky-700 focus-visible:ring-sky-500',
    ghost:
      'bg-transparent hover:bg-slate-100 text-slate-700 focus-visible:ring-slate-400'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5 font-semibold'
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('https') || href.startsWith('wa.me');
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {Icon && <Icon className="w-5 h-5 shrink-0" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {Icon && <Icon className="w-5 h-5 shrink-0" />}
      <span>{children}</span>
    </button>
  );
}
