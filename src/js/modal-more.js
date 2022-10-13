(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-video]'),
    closeModalBtn: document.querySelector('[data-modal-close-video]'),
    modal: document.querySelector('[data-modal-video]'),
    bodyNoScroll: document.querySelector('[data-no-scroll]')
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.bodyNoScroll.classList.toggle('no-scroll');
  }
})();

