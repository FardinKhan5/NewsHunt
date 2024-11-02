class Footer extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const year=new Date().getFullYear()
        this.innerHTML = `
        <footer class="py-3 mt-4 bg-dark text-light">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="/" class="nav-link px-2 text-light">Home</a></li>
            <li class="nav-item"><a href="/livenews.html" class="nav-link px-2 text-light">Live News</a></li>
            <li class="nav-item"><a href="/contact.html" class="nav-link px-2 text-light ">Contact</a></li>
            <li class="nav-item"><a href="/about.html" class="nav-link px-2 text-light">About</a></li>
        </ul>
        <p class="text-center ">© ${year} NewsHunt, Inc</p>
        </footer>
`
    }
}

customElements.define("footer-component", Footer)