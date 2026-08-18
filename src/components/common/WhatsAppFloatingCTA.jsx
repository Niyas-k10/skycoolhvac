import { useWhatsAppLink } from '../../hooks/useWhatsAppLink.js';

function WhatsAppIcon({ className = "w-7 h-7" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.726 0-3.418-.46-4.904-1.332l-.352-.208-3.647.956.973-3.557-.228-.363c-.96-1.527-1.467-3.295-1.467-5.111 0-5.263 4.281-9.544 9.548-9.544 2.551 0 4.95.995 6.753 2.8 1.804 1.803 2.798 4.204 2.798 6.752 0 5.265-4.282 9.547-9.475 9.547m0-21.05c-6.342 0-11.503 5.161-11.503 11.503 0 2.028.53 4.009 1.538 5.753l-1.636 5.976 6.114-1.603c1.681.916 3.582 1.399 5.487 1.399 6.344 0 11.506-5.162 11.506-11.505 0-3.074-1.197-5.965-3.37-8.138-2.174-2.173-5.064-3.37-8.136-3.37" />
    </svg>
  );
}

export function WhatsAppFloatingCTA() {
  const { getGeneralWhatsAppUrl } = useWhatsAppLink();

  return (
    <a
      href={getGeneralWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </a>
  );
}
