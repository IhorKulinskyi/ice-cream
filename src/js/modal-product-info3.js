(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-product3-open]'),
    closeModalBtn: document.querySelector('[data-modal-close-chocolate'),
    modal: document.querySelector('[data-chocolate]'),
    bodyNoScroll: document.querySelector('[data-no-scroll]')
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.bodyNoScroll.classList.toggle('no-scroll');
  }
})();
