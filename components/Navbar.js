class Navbar extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML=`
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">NewsHunt</a>
                <button class="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page"
                                href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="livenews.html">Live News</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#"
                                role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Cateogries
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item"
                                        href="#" id="business">Bussiness</a></li>
                                <li><a class="dropdown-item"
                                        href="#" id="health">Health</a></li>
                                <li><a class="dropdown-item"
                                        href="#" id="science">Science</a></li>
                                <li><a class="dropdown-item"
                                        href="#" id="entertainment">Entertainment</a></li>
                                <li><a class="dropdown-item"
                                        href="#" id="sports">Sports</a></li>
                                <li><a class="dropdown-item"
                                        href="#" id="technology">Technology</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        `
    }
}

customElements.define("navbar-component",Navbar)