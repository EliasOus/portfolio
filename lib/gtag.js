export const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

// Fonction pour enregistrer une page vue
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Fonction pour enregistrer un événement personnalisé (ex: clic bouton)
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
