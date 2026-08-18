import { SITE_CONFIG } from '../config/site.config.js';

export function useWhatsAppLink() {
  const getProductWhatsAppUrl = (product) => {
    const number = SITE_CONFIG.contact.whatsappNumber;
    let message = `Hello ${SITE_CONFIG.shortName}, I am interested in inquiring about ${product?.name || 'AC Spare Parts'}.`;
    
    if (product?.model) {
      message += ` (Model: ${product.model})`;
    }
    
    message += ` Please confirm price and availability for Dubai delivery. Thank you!`;
    
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  const getGeneralWhatsAppUrl = (customMessage) => {
    const number = SITE_CONFIG.contact.whatsappNumber;
    const defaultMsg = customMessage || `Hello ${SITE_CONFIG.shortName}, I would like to inquire about AC spare parts availability in Dubai.`;
    return `https://wa.me/${number}?text=${encodeURIComponent(defaultMsg)}`;
  };

  return { getProductWhatsAppUrl, getGeneralWhatsAppUrl };
}
