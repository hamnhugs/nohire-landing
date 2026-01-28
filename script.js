// FAQ toggles
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('open');
  });
});

// Form submission
document.getElementById('audit-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = { name: form.name.value, email: form.email.value };
  console.log('Form submitted:', data);

  // TODO: POST to Supabase when endpoint is ready
  // try {
  //   await fetch('https://uielffxuotmrgvpfdpxu.supabase.co/functions/v1/api', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(data),
  //   });
  // } catch (err) { console.error(err); }

  form.style.display = 'none';
  document.querySelector('.form-note').style.display = 'none';
  document.getElementById('form-success').classList.add('show');
});

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });

document.querySelectorAll('.section, .card, .pain-card, .price-col, .step, .stat, .faq-item').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});
