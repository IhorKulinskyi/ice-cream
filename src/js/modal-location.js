(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-location-open]'),
    closeModalBtn: document.querySelector('[data-location-close]'),
    modal: document.querySelector('[data-location]'),
    bodyNoScroll: document.querySelector('[data-no-scroll]')
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.bodyNoScroll.classList.toggle('no-scroll');
  }
})();