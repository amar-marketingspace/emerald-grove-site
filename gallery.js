// gallery.js — Sanity-powered gallery with category filtering.
// Falls back to placeholder grid if Sanity isn't configured yet
// (projectId still says 'YOUR_PROJECT_ID'), so the page never breaks.

(function () {
  const cfg = window.SITE_CONFIG || {};
  const sanity = cfg.sanity || {};

  // ---- Filter buttons (category tabs) ----
  const buttons = document.querySelectorAll('.filter-btn');
  const gridEl  = document.getElementById('gallery-grid');

  function setFilter(filter) {
    buttons.forEach(b => {
      const active = b.dataset.filter === filter;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    if (!gridEl) return;
    gridEl.querySelectorAll('.ph-photo').forEach(item => {
      const match = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('is-hidden', !match);
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
  });

  // ---- Sanity fetch ----
  const isSanityConfigured = sanity.projectId && sanity.projectId !== 'YOUR_PROJECT_ID';

  if (!isSanityConfigured) {
    // Sanity not wired up yet — placeholder grid already in the HTML, nothing to do.
    return;
  }

  // Build a GROQ query URL — no npm client needed, this is just a plain HTTPS request.
  // GROQ: fetch all galleryImage documents, ordered by order asc then _createdAt asc.
  // We ask Sanity to return the image URL already constructed (imageUrl via the asset ref).
  const query = encodeURIComponent(
    `*[_type == "galleryImage"] | order(order asc, _createdAt asc) {
       _id,
       title,
       category,
       alt,
       "imageUrl": image.asset->url,
       "lqip": image.asset->metadata.lqip
     }`
  );

  const apiUrl = `https://${sanity.projectId}.api.sanity.io/v${sanity.apiVersion}/data/query/${sanity.dataset}?query=${query}`;

  // Show loading state
  if (gridEl) {
    gridEl.innerHTML = `
      <div class="gallery-loading" style="grid-column:1/-1; text-align:center; padding:60px 0; color:var(--color-text-secondary);">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" style="animation:spin 1s linear infinite; display:block; margin:0 auto 12px;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
          <path d="M12 2a10 10 0 0 1 10 10"/>
        </svg>
        Loading photos…
      </div>`;
    // Inject spin keyframe once
    if (!document.getElementById('gallery-spin-style')) {
      const s = document.createElement('style');
      s.id = 'gallery-spin-style';
      s.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
      document.head.appendChild(s);
    }
  }

  fetch(apiUrl)
    .then(res => {
      if (!res.ok) throw new Error(`Sanity API error: ${res.status}`);
      return res.json();
    })
    .then(data => {
      const images = (data.result || []);
      if (!images.length) {
        gridEl.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:60px 0; color:var(--color-text-secondary);">No gallery images published yet. Add some in Sanity Studio.</p>`;
        return;
      }
      renderGallery(images);
    })
    .catch(err => {
      console.warn('Sanity gallery fetch failed:', err);
      gridEl.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:60px 0; color:var(--color-text-secondary);">
        Gallery temporarily unavailable. <a href="contact.html" style="color:var(--color-emerald-700);">Enquire directly</a>.
      </p>`;
    });

  function renderGallery(images) {
    if (!gridEl) return;

    // Sanity image URL builder — applies width, auto format (webp where supported),
    // and quality. No npm client needed.
    function imageUrl(baseUrl, width) {
      return `${baseUrl}?w=${width}&auto=format&q=80`;
    }

    gridEl.innerHTML = images.map((img, i) => {
      const src     = imageUrl(img.imageUrl, 800);
      const srcset  = `${imageUrl(img.imageUrl, 400)} 400w, ${imageUrl(img.imageUrl, 800)} 800w`;
      const lqip    = img.lqip || '';
      const label   = img.title || img.category || '';
      return `
        <div class="ph-photo" data-category="${img.category || ''}" style="background:${lqip ? `url(${lqip}) center/cover` : 'var(--color-emerald-100)'};">
          <img src="${src}"
               srcset="${srcset}"
               sizes="(max-width:560px) 100vw, (max-width:900px) 50vw, 33vw"
               alt="${img.alt || label}"
               loading="${i < 3 ? 'eager' : 'lazy'}"
               style="width:100%;height:100%;object-fit:cover;">
          ${label ? `<span class="ph-label">${label}</span>` : ''}
        </div>`;
    }).join('');

    // Re-apply current active filter to the newly rendered items
    const activeBtn = document.querySelector('.filter-btn.is-active');
    if (activeBtn) setFilter(activeBtn.dataset.filter);
  }
})();
