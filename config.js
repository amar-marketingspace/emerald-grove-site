// Edit this file when spinning up the template for a new venue.
// Nothing in components.js or main.js should need to change.
window.SITE_CONFIG = {
  brandName: "Emerald Grove Events & Spaces",
  tagline: "Rent the space. Make it yours.",
  seoTagline: "Flexible Event & Celebration Spaces in Bangalore",
  location: "JP Nagar, Bangalore",

  nav: [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "Gallery", href: "gallery.html" },
    { label: "Contact", href: "contact.html" }
  ],
  ctaLabel: "Enquire now",
  ctaHref: "contact.html",

  contact: {
    phone: "+91 91876 61638",
    whatsapp: "https://wa.me/919187661638",
    email: "info@emeraldgrove.co.in",
    address: "No. 73, 2nd Cross, KR Layout, JP Nagar 6th Phase, Bangalore 560078",
    responseTime: "We usually reply within a few hours",
    // Placeholder pin (nearby JP Nagar 7th Phase landmark) – swap for the real
    // venue's coordinates once available. Note this does NOT yet match the
    // address text above (6th Phase vs 7th Phase) – deliberate stand-in for now.
    mapsEmbedSrc: "https://maps.google.com/maps?q=12.8789511,77.5879323&z=15&output=embed",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=12.8789511,77.5879323"
  },

  social: {
    instagram: "https://instagram.com/emeraldgrove.blr?utm_source=website&utm_medium=footer&utm_campaign=social",
    youtube: "https://youtube.com/@emeraldgroveeventsspaces?utm_source=website&utm_medium=footer&utm_campaign=social",
    facebook: "#"     // placeholder
  },


  // Sanity CMS — gallery images.
  // Step 1: Replace YOUR_PROJECT_ID with the ID from sanity.io/manage.
  // Step 2: Redeploy the site. The gallery page will then fetch from Sanity
  //         instead of showing placeholder images.
  sanity: {
    projectId: '3ssnn7z8',  // e.g. 'abc12345'
    dataset:   'production',
    apiVersion: '2024-01-01'
  },

  // Apps Script Web App URL – fill in once the script is deployed (Phase 1b)
  formEndpoint: "https://script.google.com/macros/s/AKfycbxD3HDXUvBdO9xPjfia7aIVOjfLG4oYTvL2u7EExDgEn0zK64OD4tIqZlqYapi9je6C3A/exec",

  footerNote: "Policies are in draft and pending final legal review."
};
