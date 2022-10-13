(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-video]"),
    closeModalBtn: document.querySelector("[data-modal-close-video]"),
    modal: document.querySelector("[data-modal-video]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();