
export default class Tab {
    constructor() {
        this.allTabBtns = document.querySelectorAll("[data-tab]");
        // Check if tabs exist in the page
        if (this.allTabBtns.length > 0) {
            this.tabTriggerHandler();
        }
    }
    tabTriggerHandler() {
        this.allTabBtns[0]?.classList.add('active-tab');
        document.getElementById(this.allTabBtns[0].getAttribute("data-tab")).style.display = 'block'
        for (let tabBtn of this.allTabBtns) {
            tabBtn.onclick = (event) => {
                for (let tabBtn of this.allTabBtns) {
                    tabBtn?.classList.remove('active-tab');
                    let el = document.getElementById(tabBtn.getAttribute("data-tab"))
                    el.style.display = 'none'
                }
                event.target.classList.add('active-tab');
                let targetTabBody = document.getElementById(event.target.getAttribute("data-tab"))
                targetTabBody.style.display = 'block'

            }

        }
    }
}