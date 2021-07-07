import React from 'react'

 function Navbar() {
     return (
         <div>
                {/* top section */}
             <div className="topbar-area">
                 <div className="container">
                     <div className="row justify-content-center">
                         <div className="col-lg-4 col-md-4 align-self-center">
                             <div className="topbar-left text-md-left text-center">
                                 <span>Advertice  </span>
                                 <span>Contact  </span>
                             </div>
                         </div>         
                         <div className="col-lg-4 col-md-4 align-self-center">
                             <div className="topbar-left text-md-center text-center">
                                 <span>CREATIVE SCREENWRITER  </span>
                             </div>
                         </div>                    
                         <div className="col-lg-4 col-md-4 text-md-right text-center">
                             <div className="topbar-right">
                                 <div className="topbar-left text-md-right text-center">
                                     <span><i className="fa fa-search" aria-hidden="true"></i> </span>
      
                                     <span>Login  </span>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             
                    {/* second section */}
             <div className="navbar-area">
                 <nav className="navbar navbar-expand-lg">
                     <div className="container nav-container">
                         <div className="responsive-mobile-menu">       
                             <button className="menu toggle-btn d-block d-lg-none" data-target="#miralax_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                                 <span className="icon-left"></span>
                                 <span className="icon-right"></span>
                             </button>
                         </div>
                         <div className="nav-right-part nav-right-part-mobile">
                             <a className="search header-search" href="#"><i className="fa fa-search"></i></a>
                         </div>
                         <div className="col-lg-2 col-md-2 text-md-left text-center">
                             <div className="topbar-right">
                                 <ul className="social-area">
                                     <li> <a><i className="fa fa-facebook icnsz" aria-hidden="true"></i></a></li> 
                                     <li> <a><i className="fa fa-twitter icnsz" aria-hidden="true"></i></a></li> 
                                     <li> <a><i className="fa fa-instagram icnsz" aria-hidden="true"></i></a></li> 
                                 </ul>
                             </div>
                         </div>
                         <div className="col-lg-9 col-md-9 align-self-center">
                         <div className="collapse navbar-collapse" id="miralax_main_menu">
                             <ul className="navbar-nav menu-open">
                                     <li><a href="#">Craft </a></li>
                                     <li><a href="#">Carrer </a></li>
                                     <li><a href="#">Business </a></li>
                                     <li><a href="#">Interviews </a></li>
                                     <li><a href="#">Podcast </a></li>
                                     <li><a href="#">Contest </a></li>
                                     <li><a href="#">Events </a></li>
                                     <li><a href="#">Gigs </a></li>
                                     <li><a href="#">CSPro </a></li>                                 
                             </ul>
                             </div>
                         </div>
                         <div className="col-lg-1 col-md-1 text-md-right text-center">
                         <div className="nav-right-part-desktop">
                                 <i className="fa fa-bars" style={{ color: 'white' }}></i>
                             </div>
                         </div>
                     </div>
                 </nav>
             </div>


         </div>
     );
}

export default Navbar;
