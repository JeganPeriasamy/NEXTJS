import Link from 'next/link'
export default function Page() {
    return (
        <div>
           <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
      <img src="https://zameensquare.com/_next/static/media/zameen-logo.be926326.png" alt="logo" className="image-fluid w-10"></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2  ms-3 mb-lg-0">
        <li class="nav-item">
        <Link  className="text-decoration-none p-3 mt-2"href="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link  className="text-decoration-none p-3 mt-2"href="/Shop">Shop</Link>
        </li>
        <li class="nav-item">
        <Link  className="text-decoration-none p-3 mt-2"href="/Book">Book</Link>
        </li>
        <li class="nav-item">
        <Link  className="text-decoration-none p-3 mt-2"href="/Contact">Contact</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
}