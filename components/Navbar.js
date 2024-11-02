class Navbar extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML=`
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/NewsHunt/">NewsHunt</a>
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
                            <a class="nav-link ${window.location.pathname==="/NewsHunt/"?"active ":""}" aria-current="page"
                                href="/NewsHunt/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${window.location.pathname==="/NewsHunt/about.html"?"active":""}" href="/NewsHunt/about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${window.location.pathname==="/NewsHunt/contact.html"?"active":""} " href="/NewsHunt/contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${window.location.pathname==="/NewsHunt/livenews.html"?"active":""}" href="/NewsHunt/livenews.html">Live News</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#"
                                role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Cateogries
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item"
                                        href="/NewsHunt/?category=general" id="general">General</a></li>
                                <li><a class="dropdown-item"
                                        href="/NewsHunt/" id="world">World</a></li>
                                <li><a class="dropdown-item"
                                        href="/NewsHunt/?category=nation" id="nation">Nation</a></li>
                                <li><a class="dropdown-item"
                                        href="/NewsHunt/?category=business" id="business">Business</a></li>
                                <li><a class="dropdown-item"
                                        href="/NewsHunt/?category=health" id="health">Health</a></li>
                                <li><a class="dropdown-item"
                                        href="/NewsHunt/?category=science" id="science">Science</a></li>
                                <li><a class="dropdown-item"
                                        href="/NewsHunt/?category=entertainment" id="entertainment">Entertainment</a></li>
                                <li><a class="dropdown-item"
                                        href="/NewsHunt/?category=sports" id="sports">Sports</a></li>
                                <li><a class="dropdown-item"
                                        href="/NewsHunt/?category=technology" id="technology">Technology</a></li>
                            </ul>
                        </li>
                    </ul>
                    <button class="btn btn-outline-danger" id="logout">Logout</button>
                </div>
            </div>
        </nav>
        `
    }
}

customElements.define("navbar-component",Navbar)
