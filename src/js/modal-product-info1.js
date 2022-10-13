(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-product1-open]'),
    closeModalBtn: document.querySelector('[data-modal-close-chocolate'),
    modal: document.querySelector('[data-chocolate]'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();