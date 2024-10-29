import React from 'react';

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav class="navbar navbar-expand-lg ">
        <div class="container">
            {/* <!-- Mobile/Tablet Logo on Left --> */}
            <a class="navbar-brand d-lg-none px-1 " href="#">Vinay Ramdas</a>
    
            {/* <!-- Toggle button on Mobile/Tablet on the right --> */}
            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-light"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarNav">
                {/* <!-- Left-side navigation links --> */}
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                </ul>
    
                {/* <!-- Desktop/Laptop Logo Centered --> */}
                <a class="navbar-brand ms-5 d-none d-lg-block" href="#">Vinay Ramdas</a>
    
                {/* <!-- Right-side navigation links --> */}
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  );
};

export default Navbar;
