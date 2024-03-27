export default class Modal {
    constructor() {
        this.triggerBtns = document.querySelectorAll("[data-modal]");
        this.modalTriggerHandler();
    }
    modalTriggerHandler() {
        for (let modalBtn of this.triggerBtns) {
            const modalElm = document.getElementById(modalBtn.getAttribute("data-modal"));
            const closeBtn = modalElm.querySelector('.modal-close');
            const modalOverlay = document.querySelector('.overlay');
            modalBtn.onclick = () => {
                modalElm.classList.add('active-modal');
                modalOverlay.classList.add('active-modal-overlay');
            }
            closeBtn.onclick = () => {
                modalElm.classList.remove('active-modal');
                modalOverlay.classList.remove('active-modal-overlay');
            }

        }
    }
}