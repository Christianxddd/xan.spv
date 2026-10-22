/* =========================================================
   XAN-SVA DIGITAL MARKET — INTERACTIONS
   Frontend demo only: no payment, auth or database service.
   ========================================================= */

"use strict";

/* 01. Product catalogue */
const products = [
  {
    "id": 1,
    "name": "Cuenta Roblox — perfil inicial",
    "category": "Roblox",
    "price": 9.9,
    "glyph": "ACC",
    "badge": "POPULAR",
    "badgeClass": "badge-new",
    "description": "Cuenta de Roblox de ejemplo. Consulta detalles, progreso, restricciones y disponibilidad antes de cualquier operación.",
    "availability": true,
    "accent": "#70e4ff",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#11242f",
    "featured": 1,
    "details": "Cuenta de Roblox de ejemplo. Consulta detalles, progreso, restricciones y disponibilidad antes de cualquier operación."
  },
  {
    "id": 2,
    "name": "Cuenta Roblox — perfil avanzado",
    "category": "Roblox",
    "price": 19.9,
    "glyph": "ACC",
    "badge": "DESTACADO",
    "badgeClass": "badge-limited",
    "description": "Publicación demostrativa de cuenta Roblox. Las características y el precio deben confirmarse por WhatsApp.",
    "availability": true,
    "accent": "#9be5a7",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#15251e",
    "featured": 2,
    "details": "Publicación demostrativa de cuenta Roblox. Las características y el precio deben confirmarse por WhatsApp."
  },
  {
    "id": 3,
    "name": "Cuenta Roblox — perfil especial",
    "category": "Roblox",
    "price": 34.9,
    "glyph": "ACC",
    "badge": "NUEVO",
    "badgeClass": "badge-new",
    "description": "Ejemplo de cuenta Roblox para mostrar el catálogo. No representa una oferta verificada.",
    "availability": true,
    "accent": "#ffd17d",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#292114",
    "featured": 3,
    "details": "Ejemplo de cuenta Roblox para mostrar el catálogo. No representa una oferta verificada."
  },
  {
    "id": 4,
    "name": "Cuenta Roblox — varios juegos",
    "category": "Roblox",
    "price": 12.9,
    "glyph": "ACC",
    "badge": "CONSULTAR",
    "badgeClass": "badge-limited",
    "description": "Consulta qué juegos incluye el perfil, su progreso y las condiciones de transferencia.",
    "availability": true,
    "accent": "#b9a2ff",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#1b1830",
    "featured": 4,
    "details": "Consulta qué juegos incluye el perfil, su progreso y las condiciones de transferencia."
  },
  {
    "id": 5,
    "name": "Cuenta Roblox — perfil de colección",
    "category": "Roblox",
    "price": 7.9,
    "glyph": "ACC",
    "badge": "ESTILO",
    "badgeClass": "",
    "description": "Cuenta de ejemplo con descripción pendiente de completar según el inventario real.",
    "availability": true,
    "accent": "#f5a7d7",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#2a1728",
    "featured": 5,
    "details": "Cuenta de ejemplo con descripción pendiente de completar según el inventario real."
  },
  {
    "id": 6,
    "name": "Cuenta Roblox — perfil Blox Fruits",
    "category": "Roblox",
    "price": 15.9,
    "glyph": "ACC",
    "badge": "SERVICIO",
    "badgeClass": "",
    "description": "Ejemplo de cuenta asociada a Blox Fruits. Verifica las reglas de Roblox y del juego antes de comprar.",
    "availability": true,
    "accent": "#ff9c8d",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#2b1a20",
    "featured": 6,
    "details": "Ejemplo de cuenta asociada a Blox Fruits. Verifica las reglas de Roblox y del juego antes de comprar."
  },
  {
    "id": 7,
    "name": "Cuenta Free Fire — perfil inicial",
    "category": "Free Fire",
    "price": 4.9,
    "glyph": "♦",
    "badge": "STARTER",
    "badgeClass": "",
    "description": "Cuenta demostrativa. Confirma nivel, inventario, acceso y disponibilidad antes de cualquier operación.",
    "availability": true,
    "accent": "#ffbd69",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#2b2115",
    "featured": 7,
    "details": "Cuenta demostrativa. Confirma nivel, inventario, acceso y disponibilidad antes de cualquier operación."
  },
  {
    "id": 8,
    "name": "Cuenta Free Fire — perfil avanzado",
    "category": "Free Fire",
    "price": 14.9,
    "glyph": "♦",
    "badge": "POPULAR",
    "badgeClass": "badge-new",
    "description": "Publicación de ejemplo. Las características y el precio deben confirmarse por WhatsApp.",
    "availability": true,
    "accent": "#ff7b35",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#2c1a15",
    "featured": 8,
    "details": "Publicación de ejemplo. Las características y el precio deben confirmarse por WhatsApp."
  },
  {
    "id": 9,
    "name": "Cuenta Free Fire — colección especial",
    "category": "Free Fire",
    "price": 29.9,
    "glyph": "♦",
    "badge": "DESTACADO",
    "badgeClass": "badge-limited",
    "description": "Cuenta ilustrativa. Confirma el progreso, el acceso y las condiciones antes de cualquier operación.",
    "availability": true,
    "accent": "#ffd17d",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#292114",
    "featured": 9,
    "details": "Cuenta ilustrativa. Confirma el progreso, el acceso y las condiciones antes de cualquier operación."
  },
  {
    "id": 10,
    "name": "Cuenta Free Fire — progreso de temporada",
    "category": "Free Fire",
    "price": 24.9,
    "glyph": "✦",
    "badge": "TEMPORADA",
    "badgeClass": "badge-new",
    "description": "Cuenta demostrativa con progreso por confirmar. Consulta las características y condiciones.",
    "availability": true,
    "accent": "#b9a2ff",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#1b1830",
    "featured": 10,
    "details": "Cuenta demostrativa con progreso por confirmar. Consulta las características y condiciones."
  },
  {
    "id": 11,
    "name": "Cuenta Free Fire — perfil personalizado",
    "category": "Free Fire",
    "price": 8.9,
    "glyph": "◉",
    "badge": "ESTILO",
    "badgeClass": "",
    "description": "Cuenta de ejemplo con perfil por confirmar. Verifica las condiciones de transferencia de la plataforma.",
    "availability": true,
    "accent": "#70e4ff",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#11242f",
    "featured": 11,
    "details": "Cuenta de ejemplo con perfil por confirmar. Verifica las condiciones de transferencia de la plataforma."
  },
  {
    "id": 12,
    "name": "Cuenta Free Fire — perfil competitivo",
    "category": "Free Fire",
    "price": 39.9,
    "glyph": "FF",
    "badge": "CONSULTAR",
    "badgeClass": "badge-limited",
    "description": "No es una cuenta real publicada. Verifica las reglas de transferencia de la plataforma.",
    "availability": true,
    "accent": "#ff9c8d",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#2b1a20",
    "featured": 12,
    "details": "No es una cuenta real publicada. Verifica las reglas de transferencia de la plataforma."
  },
  {
    "id": 13,
    "name": "Cuenta Clash Royale — perfil inicial",
    "category": "Clash Royale",
    "price": 9.9,
    "glyph": "♜",
    "badge": "STARTER",
    "badgeClass": "",
    "description": "Cuenta demostrativa. Consulta arena, cartas, nivel y condiciones antes de cualquier operación.",
    "availability": true,
    "accent": "#a0ffd8",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#112720",
    "featured": 13,
    "details": "Cuenta demostrativa. Consulta arena, cartas, nivel y condiciones antes de cualquier operación."
  },
  {
    "id": 14,
    "name": "Cuenta Clash Royale — perfil avanzado",
    "category": "Clash Royale",
    "price": 22.9,
    "glyph": "♜",
    "badge": "POPULAR",
    "badgeClass": "badge-new",
    "description": "Cuenta de ejemplo; nivel, progreso y disponibilidad deben confirmarse.",
    "availability": true,
    "accent": "#ffd17d",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#292114",
    "featured": 14,
    "details": "Cuenta de ejemplo; nivel, progreso y disponibilidad deben confirmarse."
  },
  {
    "id": 15,
    "name": "Cuenta Free Fire — progreso de temporada",
    "category": "Clash Royale",
    "price": 26.9,
    "glyph": "♛",
    "badge": "TEMPORADA",
    "badgeClass": "badge-new",
    "description": "Cuenta ilustrativa con progreso de temporada por confirmar.",
    "availability": true,
    "accent": "#b9a2ff",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#1b1830",
    "featured": 15,
    "details": "Cuenta ilustrativa con progreso de temporada por confirmar."
  },
  {
    "id": 16,
    "name": "Cuenta Clash Royale — colección de cartas",
    "category": "Clash Royale",
    "price": 17.9,
    "glyph": "♜",
    "badge": "NUEVO",
    "badgeClass": "badge-new",
    "description": "Cuenta de ejemplo; no representa inventario oficial disponible.",
    "availability": true,
    "accent": "#70e4ff",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#11242f",
    "featured": 16,
    "details": "Cuenta de ejemplo; no representa inventario oficial disponible."
  },
  {
    "id": 17,
    "name": "Cuenta Clash Royale — progreso de arena",
    "category": "Clash Royale",
    "price": 6.9,
    "glyph": "⌘",
    "badge": "GUÍA",
    "badgeClass": "",
    "description": "Perfil de ejemplo con colección de cartas por confirmar.",
    "availability": true,
    "accent": "#9be5a7",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#15251e",
    "featured": 17,
    "details": "Perfil de ejemplo con colección de cartas por confirmar."
  },
  {
    "id": 18,
    "name": "Cuenta Clash Royale — perfil competitivo",
    "category": "Clash Royale",
    "price": 12.9,
    "glyph": "ϟ",
    "badge": "SERVICIO",
    "badgeClass": "",
    "description": "Perfil demostrativo; confirma arena, cartas y condiciones antes de comprar.",
    "availability": true,
    "accent": "#ff9c8d",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#2b1a20",
    "featured": 18,
    "details": "Perfil demostrativo; confirma arena, cartas y condiciones antes de comprar."
  },
  {
    "id": 19,
    "name": "Artículo digital especial",
    "category": "Otras",
    "price": 19.9,
    "glyph": "✦",
    "badge": "OTRAS",
    "badgeClass": "badge-limited",
    "description": "Consulta la descripción exacta, compatibilidad y disponibilidad de este artículo.",
    "availability": true,
    "accent": "#36d9ff",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#11242f",
    "featured": 19,
    "details": "Consulta la descripción exacta, compatibilidad y disponibilidad de este artículo."
  },
  {
    "id": 20,
    "name": "Pack de artículos variados",
    "category": "Otras",
    "price": 29.9,
    "glyph": "✦",
    "badge": "OTRAS",
    "badgeClass": "",
    "description": "Publicación de ejemplo para la sección Otras. Confirma el contenido antes de comprar.",
    "availability": true,
    "accent": "#b9a2ff",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#1b1830",
    "featured": 20,
    "details": "Publicación de ejemplo para la sección Otras. Confirma el contenido antes de comprar."
  },
  {
    "id": 21,
    "name": "Artículo de colección",
    "category": "Otras",
    "price": 25.0,
    "glyph": "✦",
    "badge": "OTRAS",
    "badgeClass": "badge-new",
    "description": "Artículo demostrativo. El contenido, el precio y la entrega se deben confirmar.",
    "availability": true,
    "accent": "#f5a7d7",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#2a1728",
    "featured": 21,
    "details": "Artículo demostrativo. El contenido, el precio y la entrega se deben confirmar."
  },
  {
    "id": 22,
    "name": "Servicio digital por consulta",
    "category": "Otras",
    "price": 8.9,
    "glyph": "✦",
    "badge": "OTRAS",
    "badgeClass": "badge-new",
    "description": "Cuéntanos qué necesitas y coordinaremos las condiciones antes del pago.",
    "availability": true,
    "accent": "#ffd17d",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#292114",
    "featured": 22,
    "details": "Cuéntanos qué necesitas y coordinaremos las condiciones antes del pago."
  },
  {
    "id": 23,
    "name": "Personalización digital",
    "category": "Otras",
    "price": 7.9,
    "glyph": "✦",
    "badge": "OTRAS",
    "badgeClass": "",
    "description": "Servicio de ejemplo para personalizaciones. Confirma alcance y tiempos por WhatsApp.",
    "availability": true,
    "accent": "#7ed957",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#15251e",
    "featured": 23,
    "details": "Servicio de ejemplo para personalizaciones. Confirma alcance y tiempos por WhatsApp."
  },
  {
    "id": 24,
    "name": "Recursos creativos digitales",
    "category": "Otras",
    "price": 12.9,
    "glyph": "✦",
    "badge": "OTRAS",
    "badgeClass": "",
    "description": "Publicación de ejemplo para recursos y materiales digitales variados.",
    "availability": true,
    "accent": "#70e4ff",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#11242f",
    "featured": 24,
    "details": "Publicación de ejemplo para recursos y materiales digitales variados."
  },
  {
    "id": 25,
    "name": "Diseño o recurso personalizado",
    "category": "Otras",
    "price": 14.9,
    "glyph": "✦",
    "badge": "OTRAS",
    "badgeClass": "",
    "description": "Consulta disponibilidad, formato de entrega y condiciones.",
    "availability": true,
    "accent": "#9be5a7",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#15251e",
    "featured": 25,
    "details": "Consulta disponibilidad, formato de entrega y condiciones."
  },
  {
    "id": 26,
    "name": "Servicio personalizado",
    "category": "Otras",
    "price": 24.9,
    "glyph": "✦",
    "badge": "OTRAS",
    "badgeClass": "",
    "description": "Describe lo que necesitas para confirmar si podemos ofrecerlo.",
    "availability": true,
    "accent": "#ffd17d",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#292114",
    "featured": 26,
    "details": "Describe lo que necesitas para confirmar si podemos ofrecerlo."
  },
  {
    "id": 27,
    "name": "Artículo digital — opción básica",
    "category": "Otras",
    "price": 10.0,
    "glyph": "✦",
    "badge": "OTRAS",
    "badgeClass": "",
    "description": "Artículo demostrativo de la categoría Otras. Precio y disponibilidad por confirmar.",
    "availability": true,
    "accent": "#e779ff",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#27152f",
    "featured": 27,
    "details": "Artículo demostrativo de la categoría Otras. Precio y disponibilidad por confirmar."
  },
  {
    "id": 28,
    "name": "Artículo digital — opción estándar",
    "category": "Otras",
    "price": 20.0,
    "glyph": "✦",
    "badge": "OTRAS",
    "badgeClass": "badge-new",
    "description": "Artículo demostrativo de la categoría Otras. Precio y disponibilidad por confirmar.",
    "availability": true,
    "accent": "#b9a2ff",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#1b1830",
    "featured": 28,
    "details": "Artículo demostrativo de la categoría Otras. Precio y disponibilidad por confirmar."
  },
  {
    "id": 29,
    "name": "Artículo digital — opción premium",
    "category": "Otras",
    "price": 50.0,
    "glyph": "✦",
    "badge": "OTRAS",
    "badgeClass": "",
    "description": "Artículo demostrativo de la categoría Otras. Precio y disponibilidad por confirmar.",
    "availability": true,
    "accent": "#ffbd69",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#2b2115",
    "featured": 29,
    "details": "Artículo demostrativo de la categoría Otras. Precio y disponibilidad por confirmar."
  },
  {
    "id": 30,
    "name": "Consulta por artículo especial",
    "category": "Otras",
    "price": 0.0,
    "glyph": "✦",
    "badge": "OTRAS",
    "badgeClass": "badge-limited",
    "description": "¿Buscas algo distinto? Escríbenos para consultar si está disponible.",
    "availability": true,
    "accent": "#70e4ff",
    "glow": "rgba(112,228,255,.22)",
    "artBg": "#11242f",
    "featured": 30,
    "details": "¿Buscas algo distinto? Escríbenos para consultar si está disponible."
  }
 ];

/* Product imagery: replace these URLs with your own product photos when ready. */
const productImageSets = {
  "Roblox": [
    "https://tse1.mm.bing.net/th?adlt=moderate&mkt=en-US&pid=Api&q=roblox+drawing+game+2",
    "https://dcserverlist.com/images/servers/1-dmg-per-revive.webp",
    "https://tse1.mm.bing.net/th?adlt=moderate&mkt=en-US&pid=Api&q=roblox+avatar+game+art"
  ],
  "Free Fire": [
    "https://cdn4.idcgames.com/storage/image/1258/free-new-logo/default.jpg",
    "https://gamegyan.com/wp-content/uploads/2024/10/free-fire-steffie-character-photo.webp",
    "https://tse1.mm.bing.net/th?adlt=moderate&mkt=en-US&pid=Api&q=free+fire+game+characters+artwork"
  ],
  "Clash Royale": [
    "https://infinity-area.com/medias/statics/tiny/2025-02/maxresdefault-1740527144-49d5539b3f7199e2b572.webp",
    "https://staticg.sportskeeda.com/editor/2024/03/67389-17105860653585-1920.jpg",
    "https://tse1.mm.bing.net/th?adlt=moderate&mkt=en-US&pid=Api&q=clash+royale+game+characters+arena"
  ],
  "Otras": [
    "https://images.tvmovie.de/asus-rog-raikiri-2-controller-tvmovie-amazon%2Cid%3Dcd2313f6%2Cb%3Dtvmovie%2Cw%3D910%2Crm%3Dsk.webp",
    "https://images.squarespace-cdn.com/content/v1/5e7eaf7501b2e061b53d2525/f7a4da21-2c61-4727-8ce9-387c9b668737/lara048656_17075_gaming_industry_branding_0c3d0bb9-3a7a-4146-82aa-2f4ba7dbb9ec.png?format=1000w",
    "https://tse1.mm.bing.net/th?adlt=moderate&mkt=en-US&pid=Api&q=gaming+keyboard+headphones+controller+setup"
  ]
};
products.forEach((product) => {
  const set = productImageSets[product.category] || productImageSets.Otras;
  product.image = set[(product.id - 1) % set.length];
});

/* 02. Application state */
const state = {
  activeCategory: "Todos",
  searchTerm: "",
  sortMode: "featured",
  maxPrice: 200,
  availableOnly: false,
  showAll: false,
  cart: [],
  favorites: new Set(),
  activeModal: null,
  announcementVisible: true
};

const selectors = {
  productGrid: document.getElementById("productGrid"),
  resultsCount: document.getElementById("resultsCount"),
  emptyState: document.getElementById("emptyState"),
  filterTabs: document.getElementById("filterTabs"),
  sortSelect: document.getElementById("sortSelect"),
  searchPanel: document.getElementById("searchPanel"),
  globalSearch: document.getElementById("globalSearch"),
  cartDrawer: document.getElementById("cartDrawer"),
  cartOverlay: document.getElementById("cartOverlay"),
  cartItems: document.getElementById("cartItems"),
  cartCount: document.getElementById("cartCount"),
  drawerCount: document.getElementById("drawerCount"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  cartTotal: document.getElementById("cartTotal"),
  modalBackdrop: document.getElementById("modalBackdrop"),
  loginModal: document.getElementById("loginModal"),
  productModal: document.getElementById("productModal"),
  productModalContent: document.getElementById("productModalContent"),
  toastContainer: document.getElementById("toastContainer")
};

/* 03. Utility functions */
function formatPrice(value) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2
  }).format(value);
}

function getProduct(productId) {
  return products.find((product) => product.id === Number(productId));
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function productArtStyle(product) {
  return `--art-accent:${product.accent};--art-glow:${product.glow};--art-bg:${product.artBg};`;
}

function getFilteredProducts() {
  let result = [...products];

  if (state.activeCategory !== "Todos") {
    result = result.filter((product) => product.category === state.activeCategory);
  }

  if (state.searchTerm.trim()) {
    const query = state.searchTerm.trim().toLocaleLowerCase("es");
    result = result.filter((product) => {
      const searchable = `${product.name} ${product.category} ${product.description}`.toLocaleLowerCase("es");
      return searchable.includes(query);
    });
  }

  result = result.filter((product) => product.price <= state.maxPrice);

  if (state.availableOnly) {
    result = result.filter((product) => product.availability);
  }

  if (state.sortMode === "price-asc") {
    result.sort((a, b) => a.price - b.price);
  } else if (state.sortMode === "price-desc") {
    result.sort((a, b) => b.price - a.price);
  } else if (state.sortMode === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name, "es"));
  } else {
    result.sort((a, b) => a.featured - b.featured);
  }

  return result;
}

/* 04. Product card rendering */
function createProductCard(product) {
  const favorite = state.favorites.has(product.id);
  const badgeClass = product.badgeClass ? ` ${product.badgeClass}` : "";
  const availabilityText = product.availability ? "Disponible" : "Agotado";
  const unavailableClass = product.availability ? "" : " unavailable";

  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-art" style="${productArtStyle(product)}">
        <img class="product-cover" src="${escapeHTML(product.image)}" alt="Imagen ilustrativa de ${escapeHTML(product.name)}" loading="lazy" onerror="this.classList.add('image-failed')">
        <span class="product-image-shade"></span>
        <span class="product-badge${badgeClass}">${escapeHTML(product.badge)}</span>
        <button class="favorite-button${favorite ? " is-favorite" : ""}" data-favorite="${product.id}" aria-label="${favorite ? "Quitar de favoritos" : "Añadir a favoritos"}" aria-pressed="${favorite}">${favorite ? "♥" : "♡"}</button>
        <span class="art-glyph">${escapeHTML(product.glyph)}</span>
      </div>
      <div class="product-info">
        <div class="product-meta"><span>${escapeHTML(product.category)}</span><span class="product-availability${unavailableClass}">${availabilityText}</span></div>
        <h3 class="product-title">${escapeHTML(product.name)}</h3>
        <p class="product-description">${escapeHTML(product.description)}</p>
        <div class="product-bottom">
          <div class="product-price"><small>Precio de referencia</small><strong>${formatPrice(product.price)}</strong></div>
          <button class="add-button" data-add="${product.id}" aria-label="Añadir ${escapeHTML(product.name)} al carrito" ${product.availability ? "" : "disabled"}>${product.availability ? "+" : "–"}</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  const visible = state.showAll ? filtered : filtered.slice(0, 12);

  selectors.productGrid.innerHTML = visible.map(createProductCard).join("");
  selectors.resultsCount.textContent = `Mostrando ${visible.length} de ${filtered.length} publicaciones`;
  selectors.emptyState.classList.toggle("hidden", filtered.length > 0);
  selectors.productGrid.classList.toggle("hidden", filtered.length === 0);

  const loadMoreButton = document.getElementById("loadMore");
  const loadMoreWrap = document.querySelector(".load-more-wrap");
  const shouldShowMore = filtered.length > 12 && !state.showAll;
  loadMoreWrap.classList.toggle("hidden", filtered.length === 0);
  loadMoreButton.classList.toggle("hidden", !shouldShowMore);
  loadMoreButton.innerHTML = state.showAll ? "Todas las publicaciones visibles" : 'Ver más publicaciones <span>＋</span>';

  updateFilterCounts();
}

function updateFilterCounts() {
  const tabs = [...document.querySelectorAll(".filter-tab")];
  tabs.forEach((tab) => {
    const category = tab.dataset.filter;
    const count = category === "Todos"
      ? products.length
      : products.filter((product) => product.category === category).length;
    const countElement = tab.querySelector("span");
    if (countElement) countElement.textContent = String(count).padStart(2, "0");
  });
}

/* 05. Filter interaction */
function setCategory(category) {
  state.activeCategory = category;
  state.showAll = false;

  document.querySelectorAll(".filter-tab").forEach((tab) => {
    const active = tab.dataset.filter === category;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-pressed", String(active));
  });

  renderProducts();
}

selectors.filterTabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-filter]");
  if (!tab) return;
  setCategory(tab.dataset.filter);
});

document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", () => {
    setCategory(card.dataset.category);
    document.getElementById("market").scrollIntoView({ behavior: "smooth" });
  });
});

selectors.sortSelect.addEventListener("change", (event) => {
  state.sortMode = event.target.value;
  state.showAll = false;
  renderProducts();
});

document.getElementById("filterToggle").addEventListener("click", () => {
  const filters = document.getElementById("advancedFilters");
  filters.classList.toggle("open");
});

document.getElementById("priceRange").addEventListener("input", (event) => {
  state.maxPrice = Number(event.target.value);
  document.getElementById("priceMaxLabel").textContent = formatPrice(state.maxPrice);
  state.showAll = false;
  renderProducts();
});

document.getElementById("availableOnly").addEventListener("change", (event) => {
  state.availableOnly = event.target.checked;
  state.showAll = false;
  renderProducts();
});

document.getElementById("resetFilters").addEventListener("click", resetFilters);
document.getElementById("clearSearch").addEventListener("click", resetFilters);

function resetFilters() {
  state.activeCategory = "Todos";
  state.searchTerm = "";
  state.sortMode = "featured";
  state.maxPrice = 200;
  state.availableOnly = false;
  state.showAll = false;

  selectors.globalSearch.value = "";
  selectors.sortSelect.value = "featured";
  document.getElementById("priceRange").value = "200";
  document.getElementById("priceMaxLabel").textContent = formatPrice(200);
  document.getElementById("availableOnly").checked = false;
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.filter === "Todos");
  });
  renderProducts();
  showToast("Filtros restablecidos", "Ahora estás viendo todo el catálogo.", "success");
}

document.getElementById("loadMore").addEventListener("click", () => {
  state.showAll = true;
  renderProducts();
});

/* 06. Search panel */
function openSearch() {
  selectors.searchPanel.classList.add("open");
  selectors.globalSearch.focus();
  document.getElementById("mobileNav").classList.remove("open");
}

function closeSearch() {
  selectors.searchPanel.classList.remove("open");
}

document.getElementById("searchToggle").addEventListener("click", () => {
  if (selectors.searchPanel.classList.contains("open")) {
    closeSearch();
  } else {
    openSearch();
  }
});

selectors.globalSearch.addEventListener("input", (event) => {
  state.searchTerm = event.target.value;
  state.showAll = false;
  renderProducts();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSearch();
    closeCart();
    closeModal();
    document.getElementById("mobileNav").classList.remove("open");
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openSearch();
  }
});

/* 07. Favorites */
selectors.productGrid.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite]");
  if (!favoriteButton) return;

  const productId = Number(favoriteButton.dataset.favorite);
  if (state.favorites.has(productId)) {
    state.favorites.delete(productId);
    showToast("Quitado de favoritos", "El artículo ya no está en tu lista.", "success");
  } else {
    state.favorites.add(productId);
    showToast("Guardado en favoritos", "Puedes volver a encontrarlo mientras esta página esté abierta.", "success");
  }
  renderProducts();
});

/* 08. Cart management */
function addToCart(productId) {
  const product = getProduct(productId);
  if (!product) return;

  if (!product.availability) {
    showToast("No disponible", "Este artículo no se puede añadir por ahora.", "error");
    return;
  }

  const existing = state.cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ id: product.id, quantity: 1 });
  }

  updateCart();
  showToast("Añadido al carrito", `${product.name} se agregó a tu selección.`, "success");
}

selectors.productGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    addToCart(Number(addButton.dataset.add));
    return;
  }

  const productCard = event.target.closest(".product-card");
  if (productCard && !event.target.closest("button")) {
    openProductModal(Number(productCard.dataset.productId));
  }
});

function changeQuantity(productId, change) {
  const item = state.cart.find((entry) => entry.id === Number(productId));
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== Number(productId));
  }
  updateCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== Number(productId));
  updateCart();
  showToast("Artículo eliminado", "Se actualizó tu selección.", "success");
}

function cartQuantity() {
  return state.cart.reduce((total, item) => total + item.quantity, 0);
}

function cartSubtotal() {
  return state.cart.reduce((total, item) => {
    const product = getProduct(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function renderCartItems() {
  if (state.cart.length === 0) {
    selectors.cartItems.innerHTML = `
      <div class="cart-empty">
        <span>＋</span>
        <h3>Tu carrito está vacío</h3>
        <p>Explora el mercado y añade algo que te guste.</p>
        <button class="button button-outline" id="continueShopping">Explorar artículos</button>
      </div>
    `;
    return;
  }

  selectors.cartItems.innerHTML = state.cart.map((item) => {
    const product = getProduct(item.id);
    if (!product) return "";
    return `
      <article class="cart-item">
        <div class="cart-item-art" style="${productArtStyle(product)}">${escapeHTML(product.glyph)}</div>
        <div>
          <h4>${escapeHTML(product.name)}</h4>
          <p>${formatPrice(product.price)}</p>
          <div class="cart-item-actions">
            <button class="quantity-button" data-quantity="${product.id}" data-change="-1" aria-label="Reducir cantidad">−</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-button" data-quantity="${product.id}" data-change="1" aria-label="Aumentar cantidad">+</button>
          </div>
        </div>
        <button class="remove-item" data-remove="${product.id}" aria-label="Eliminar artículo">×</button>
      </article>
    `;
  }).join("");
}

function updateCart() {
  const quantity = cartQuantity();
  const subtotal = cartSubtotal();

  selectors.cartCount.textContent = quantity;
  selectors.drawerCount.textContent = `(${quantity})`;
  selectors.cartSubtotal.textContent = formatPrice(subtotal);
  selectors.cartTotal.textContent = formatPrice(subtotal);
  renderCartItems();
}

selectors.cartItems.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");

  if (quantityButton) {
    changeQuantity(Number(quantityButton.dataset.quantity), Number(quantityButton.dataset.change));
  }
  if (removeButton) {
    removeFromCart(Number(removeButton.dataset.remove));
  }
  if (event.target.closest("#continueShopping")) {
    closeCart();
    document.getElementById("market").scrollIntoView({ behavior: "smooth" });
  }
});

function openCart() {
  selectors.cartDrawer.classList.add("open");
  selectors.cartOverlay.classList.add("open");
  selectors.cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeCart() {
  selectors.cartDrawer.classList.remove("open");
  selectors.cartOverlay.classList.remove("open");
  selectors.cartDrawer.setAttribute("aria-hidden", "true");
  if (!selectors.modalBackdrop.classList.contains("open")) {
    document.body.classList.remove("no-scroll");
  }
}

document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
selectors.cartOverlay.addEventListener("click", closeCart);

/* 08. Checkout and payment handoff (manual payment; no card data collected) */
const paymentDetails = {
  yape: {
    title: "Paga con Yape",
    description: "Abre Yape y envía exactamente el total del pedido al número indicado. Antes de confirmar, verifica que el nombre del destinatario coincida con el que te haya confirmado el vendedor.",
    recipientLabel: "Número para Yape",
    recipient: "+51 936 521 540",
    link: "https://www.yape.com.pe/",
    linkLabel: "Abrir información de Yape ↗",
    note: "Si el enlace no abre la app instalada, entra directamente a Yape en tu celular."
  },
  plin: {
    title: "Paga con Plin",
    description: "Entra a la app de tu banco o billetera compatible con Plin y verifica el destinatario antes de enviar. Confirma el monto exacto del pedido.",
    recipientLabel: "Número para Plin",
    recipient: "+51 936 521 540",
    link: "https://plin.pe/",
    linkLabel: "Abrir información de Plin ↗",
    note: "La disponibilidad de Plin depende de tu banco o billetera."
  },
  paypal: {
    title: "Paga con PayPal",
    description: "Abre PayPal, entra en la opción para enviar dinero e introduce el correo de destino. Comprueba el destinatario y el importe antes de confirmar.",
    recipientLabel: "Correo de PayPal",
    recipient: "jsebastian10045@gmail.com",
    link: "https://www.paypal.com/send",
    linkLabel: "Abrir PayPal ↗",
    note: "El importe mostrado está en soles. Revisa el tipo de cambio y las comisiones que PayPal muestre antes de enviar."
  }
};
let selectedPaymentMethod = "yape";
let receiptFileName = "";
let receiptObjectUrl = "";

function renderPaymentOrder() {
  const items = state.cart.map((item) => {
    const product = getProduct(item.id);
    if (!product) return "";
    return `<div class="payment-order-item"><span><b>${escapeHTML(product.name)}</b><small>Cantidad: ${item.quantity}</small></span><strong>${formatPrice(product.price * item.quantity)}</strong></div>`;
  }).join("");
  document.getElementById("paymentOrderItems").innerHTML = items;
  document.getElementById("paymentItemCount").textContent = `${cartQuantity()} ${cartQuantity() === 1 ? "artículo" : "artículos"}`;
  document.getElementById("paymentOrderTotal").textContent = formatPrice(cartSubtotal());
}

function renderPaymentInstructions() {
  const method = paymentDetails[selectedPaymentMethod];
  const target = document.getElementById("paymentInstructions");
  target.innerHTML = `<div class="payment-instruction-heading"><span class="instruction-check">✓</span><div><strong>${method.title}</strong><small>PASO 1 · REALIZA EL PAGO</small></div></div>
    <p>${method.description}</p>
    <div class="recipient-box"><span>${method.recipientLabel}</span><strong id="paymentRecipientValue">${method.recipient}</strong><button type="button" class="copy-recipient" id="copyPaymentRecipient">Copiar</button></div>
    <a class="payment-app-link" href="${method.link}" target="_blank" rel="noopener noreferrer">${method.linkLabel}</a>
    <small class="payment-method-note">${method.note}</small>`;
  document.querySelectorAll("[data-payment-method]").forEach((button) => {
    const active = button.dataset.paymentMethod === selectedPaymentMethod;
    button.classList.toggle("selected", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.getElementById("copyPaymentRecipient").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(method.recipient);
      showToast("Dato copiado", `${method.recipient} está listo para pegar.`, "success");
    } catch {
      showToast("Copia manual", `Mantén pulsado o selecciona: ${method.recipient}`, "info");
    }
  });
}

function openPaymentCheckout() {
  if (state.cart.length === 0) {
    showToast("Tu carrito está vacío", "Añade al menos un artículo para continuar.", "error");
    return;
  }
  closeCart();
  renderPaymentOrder();
  renderPaymentInstructions();
  openModal("paymentModal");
}

document.getElementById("checkoutButton").addEventListener("click", openPaymentCheckout);
document.querySelectorAll("[data-payment-method]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedPaymentMethod = button.dataset.paymentMethod;
    renderPaymentInstructions();
  });
});
document.getElementById("backToCart").addEventListener("click", () => {
  closeModal();
  openCart();
});
document.getElementById("receiptFile").addEventListener("change", (event) => {
  const file = event.target.files && event.target.files[0];
  const preview = document.getElementById("receiptPreview");
  receiptFileName = "";
  if (receiptObjectUrl) URL.revokeObjectURL(receiptObjectUrl);
  receiptObjectUrl = "";
  if (!file) {
    preview.hidden = true;
    preview.innerHTML = "";
    return;
  }
  if (!file.type.startsWith("image/")) {
    event.target.value = "";
    showToast("Archivo no válido", "Elige una captura en formato de imagen.", "error");
    return;
  }
  if (file.size > 8 * 1024 * 1024) {
    event.target.value = "";
    showToast("Imagen muy pesada", "Elige una captura de hasta 8 MB.", "error");
    return;
  }
  receiptFileName = file.name;
  receiptObjectUrl = URL.createObjectURL(file);
  preview.hidden = false;
  preview.innerHTML = `<img src="${receiptObjectUrl}" alt="Vista previa del comprobante"><span>${escapeHTML(file.name)} · listo para adjuntar en WhatsApp</span><button type="button" id="removeReceipt" aria-label="Quitar captura">×</button>`;
  document.getElementById("removeReceipt").addEventListener("click", () => {
    document.getElementById("receiptFile").value = "";
    receiptFileName = "";
    if (receiptObjectUrl) URL.revokeObjectURL(receiptObjectUrl);
    receiptObjectUrl = "";
    preview.hidden = true;
    preview.innerHTML = "";
  });
  showToast("Captura seleccionada", "Recuerda adjuntarla manualmente en el chat de WhatsApp.", "success");
});
document.getElementById("sendOrderButton").addEventListener("click", () => {
  if (state.cart.length === 0) {
    closeModal();
    showToast("Tu carrito está vacío", "Añade un artículo antes de enviar el pedido.", "error");
    return;
  }
  const buyer = document.getElementById("buyerName").value.trim() || "No indicado";
  const method = paymentDetails[selectedPaymentMethod];
  const lines = state.cart.map((item) => {
    const product = getProduct(item.id);
    return product ? `• ${product.name} x${item.quantity} — ${formatPrice(product.price * item.quantity)}` : "";
  }).filter(Boolean).join("\n");
  const message = `¡Hola! Quiero coordinar este pedido de XAN-SVA.\n\nPedido:\n${lines}\n\nTOTAL: ${formatPrice(cartSubtotal())}\nNombre/alias: ${buyer}\nMétodo elegido: ${selectedPaymentMethod.toUpperCase()}\nDestinatario: ${method.recipient}\nComprobante: ${receiptFileName ? `Tengo la captura (${receiptFileName}) y la adjuntaré manualmente aquí.` : "Lo adjuntaré después de realizar el pago."}\n\nPor favor, confirma la disponibilidad, el destinatario y las condiciones de entrega antes de cerrar la compra.`;
  const url = `https://wa.me/51936521540?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  showToast("Pedido preparado", "WhatsApp se abrirá con el resumen. Adjunta allí la captura del pago.", "success");
});

/* 09. Product detail modal */
function openProductModal(productId) {
  const product = getProduct(productId);
  if (!product) return;

  selectors.productModalContent.innerHTML = `
    <div class="product-modal-art" style="${productArtStyle(product)}"><img src="${escapeHTML(product.image)}" alt="Imagen ilustrativa de ${escapeHTML(product.name)}" onerror="this.classList.add('image-failed')"><span class="modal-art-label">XAN-SVA SELECT</span></div>
    <div class="eyebrow"><span class="eyebrow-line"></span> ${escapeHTML(product.category.toUpperCase())}</div>
    <h2 id="productModalTitle">${escapeHTML(product.name)}</h2>
    <p class="product-modal-description">${escapeHTML(product.details)}</p>
    <div class="product-modal-details">
      <div class="product-detail"><small>Disponibilidad</small><strong>${product.availability ? "Disponible en demo" : "Agotado"}</strong></div>
      <div class="product-detail"><small>Tipo de publicación</small><strong>Artículo de ejemplo</strong></div>
    </div>
    <div class="product-modal-footer">
      <span class="product-modal-price">${formatPrice(product.price)}</span>
      <button class="button button-primary" data-modal-add="${product.id}" ${product.availability ? "" : "disabled"}>${product.availability ? "Añadir al carrito ↗" : "No disponible"}</button>
    </div>
  `;

  openModal("productModal");
}

selectors.productModalContent.addEventListener("click", (event) => {
  const button = event.target.closest("[data-modal-add]");
  if (!button) return;

  addToCart(Number(button.dataset.modalAdd));
  closeModal();
});

/* 10. Modal manager */
function openModal(modalId) {
  closeCart();
  closeSearch();
  selectors.modalBackdrop.classList.add("open");
  selectors.loginModal.classList.remove("active");
  selectors.productModal.classList.remove("active");
  const paymentModal = document.getElementById("paymentModal");
  if (paymentModal) paymentModal.classList.remove("active");

  const modal = document.getElementById(modalId);
  modal.classList.add("active");
  state.activeModal = modalId;
  document.body.classList.add("no-scroll");

  const firstInput = modal.querySelector("input");
  if (firstInput) {
    window.setTimeout(() => firstInput.focus(), 60);
  }
}

function closeModal() {
  selectors.modalBackdrop.classList.remove("open");
  selectors.loginModal.classList.remove("active");
  selectors.productModal.classList.remove("active");
  const paymentModal = document.getElementById("paymentModal");
  if (paymentModal) paymentModal.classList.remove("active");
  state.activeModal = null;
  document.body.classList.remove("no-scroll");
}

document.getElementById("loginButton").addEventListener("click", () => { window.open("https://wa.me/51936521540?text=" + encodeURIComponent("¡Hola! Vengo de XAN-SVA y quisiera consultar sobre el catálogo."), "_blank", "noopener,noreferrer"); });
document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeModal);
});
selectors.modalBackdrop.addEventListener("click", (event) => {
  if (event.target === selectors.modalBackdrop) closeModal();
});

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  closeModal();
  showToast("Inicio de sesión de demostración", "No se creó ninguna cuenta ni se guardó tu contraseña.", "success");
  event.currentTarget.reset();
});

/* 11. Mobile navigation */
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileNav = document.getElementById("mobileNav");

mobileMenuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
  });
});

/* 12. FAQ accordion */
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const willOpen = !item.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      otherItem.classList.remove("open");
      otherItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
    });

    if (willOpen) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

/* 13. Contact inquiry form: opens WhatsApp; no data is stored */
document.getElementById("newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const inquiryInput = document.getElementById("newsletterEmail");
  const message = document.getElementById("newsletterMessage");
  const inquiry = inquiryInput.value.trim();
  if (!inquiry) { inquiryInput.reportValidity(); return; }
  const text = `¡Hola! Vengo de XAN-SVA y estoy buscando: ${inquiry}. ¿Me pueden informar sobre disponibilidad y precio?`;
  window.open("https://wa.me/51936521540?text=" + encodeURIComponent(text), "_blank", "noopener,noreferrer");
  message.textContent = "Se abrió WhatsApp para continuar tu consulta.";
  message.style.color = "var(--cyan)";
});

/* 14. Announcement bar */
document.getElementById("closeAnnouncement").addEventListener("click", () => {
  document.querySelector(".announcement-bar").remove();
  document.querySelector(".search-panel").style.top = window.innerWidth <= 820 ? "70px" : "78px";
});

/* 15. Testimonials controls */
const testimonialTrack = document.getElementById("testimonialTrack");
let testimonialIndex = 0;

function moveTestimonials(direction) {
  const cards = [...testimonialTrack.querySelectorAll(".testimonial-card")];
  if (cards.length < 2) return;

  testimonialIndex = (testimonialIndex + direction + cards.length) % cards.length;
  if (window.innerWidth <= 560) {
    cards.forEach((card, index) => {
      card.style.display = index === testimonialIndex ? "block" : "none";
    });
  } else if (window.innerWidth <= 820) {
    cards.forEach((card, index) => {
      card.style.display = index === testimonialIndex || index === (testimonialIndex + 1) % cards.length ? "block" : "none";
    });
  } else {
    cards.forEach((card) => {
      card.style.display = "block";
    });
    cards[testimonialIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }
}

document.getElementById("testimonialPrev").addEventListener("click", () => moveTestimonials(-1));
document.getElementById("testimonialNext").addEventListener("click", () => moveTestimonials(1));

/* 16. Toast notification system */
function showToast(title, message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast${type === "error" ? " toast-error" : ""}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === "error" ? "!" : "✓"}</span>
    <div class="toast-content">
      <strong>${escapeHTML(title)}</strong>
      <p>${escapeHTML(message)}</p>
    </div>
  `;

  selectors.toastContainer.appendChild(toast);

  window.setTimeout(() => {
    toast.classList.add("removing");
    window.setTimeout(() => toast.remove(), 220);
  }, 3500);
}

/* 17. Back-to-top and active nav */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 600);

  const sections = ["market", "categories", "how-it-works", "faq"];
  let current = "";
  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section && window.scrollY >= section.offsetTop - 160) {
      current = sectionId;
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    const target = link.getAttribute("href").slice(1);
    link.classList.toggle("active", target === current);
  });
}, { passive: true });

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* 18. Responsive adjustments */
window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    mobileNav.classList.remove("open");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
  }

  const cards = [...testimonialTrack.querySelectorAll(".testimonial-card")];
  cards.forEach((card, index) => {
    if (window.innerWidth > 820 || (window.innerWidth <= 820 && window.innerWidth > 560 && index < 2)) {
      card.style.display = "block";
    } else if (window.innerWidth <= 560) {
      card.style.display = index === testimonialIndex ? "block" : "none";
    } else {
      card.style.display = "none";
    }
  });
});

/* 19. Small keyboard and accessibility refinements */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* 20. Startup */
function initializeStore() {
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.setAttribute("aria-pressed", String(tab.classList.contains("active")));
  });

  renderProducts();
  updateCart();

  if (window.matchMedia("(max-width: 560px)").matches) {
    const cards = [...testimonialTrack.querySelectorAll(".testimonial-card")];
    cards.forEach((card, index) => {
      card.style.display = index === 0 ? "block" : "none";
    });
  }

  console.info("XAN-SVA initialized. Orders are coordinated manually; payment is not automatically verified.");
}

initializeStore();
