(() => {
	const refs = {
	  openModalBtn: document.querySelector("[data-modal-open]"),
	  closeModalBtn: document.querySelector("[data-modal-close]"),
	  modal: document.querySelector("[data-modal]"),
	  bodyNoScroll: document.querySelector("[data-no-scroll]")
	};
 
	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);
 
	function toggleModal() {
	  refs.modal.classList.toggle("is-hidden");
	  refs.bodyNoScroll.classList.toggle('no-scroll');
	}
 })();