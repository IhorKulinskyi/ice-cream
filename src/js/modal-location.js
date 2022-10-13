(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-location-open]"),
    closeModalBtn: document.querySelector("[data-location-close]"),
    modal: document.querySelector("[data-location]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();