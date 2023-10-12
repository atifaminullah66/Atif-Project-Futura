import type { ReactElement } from 'react';

type LayoutProps = {
  children: ReactElement;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className='row w-100 '>
            <div className="col-md-4">   <a className="navbar-brand" href="/home">
              <img src="/foto.jpg" alt="Logo" width="50" className="rounded-circle 
              m-2" />
              <span className="text-light ml-2">Market Mingle</span>
            </a></div>

            {/* Headings */}
            <div className="col-md-4">

              <div className="navbar-collapse d-flex  justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav ">
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
            <div className="col-md-4">
              <form className="d-flex mx-2">
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
            </div>



          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
