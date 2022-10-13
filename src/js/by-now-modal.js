(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-now-modal-open-tabl]'),
    openMobileModalBtn: document.querySelector(
      '[data-buy-now-modal-open-mobile]'
    ),
    closeModalBtn: document.querySelector('[data-modal-close]'),

    modal: document.querySelector('[data-modal-buy-now]'),
    bodyNoScroll: document.querySelector('[data-no-scroll]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.bodyNoScroll.classList.toggle('no-scroll');
  }
})();
