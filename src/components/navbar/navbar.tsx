import type { ReactElement } from 'react';

type props = {
  children: ReactElement;
};

export default function Layout({ children }: props) {
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
            <div className="col-md">

              <div className="navbar-collapse d-flex  justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav ">
                  <li className="nav-item mx-4">
                    <a className="nav-link text-light" href="/">Home</a>
                  </li>
                  <li className="nav-item mx-4">
                    <a className="nav-link text-light" href="/home">Products</a>
                  </li>
                  <li className="nav-item mx-4">
                    <a className="nav-link text-light" href="/about">About us</a>
                  </li>
                  <li className="nav-item mx-4">
                    <a className="nav-link text-light" href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>




          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
