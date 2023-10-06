import type { ReactElement } from 'react';

type LayoutProps = {
  children: ReactElement;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/home">
            <img src="/foto.jpg" alt="Logo" width="50" className="rounded-circle m-2" />
            <span className="text-light ml-2">Ale-Casa</span>
          </a>


          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-4">
                <a className="nav-link text-light" href="/">Home</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link text-light" href="/home">Products</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link text-light" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <form className="d-flex mx-lg-2 ">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
      </nav>

      <main>{children}</main>
    </div>
  );
}
