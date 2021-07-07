import React from 'react'
import image1 from '../display/images/banner.jpg';
import image2 from '../display/images/image-1.jpg';
import image3 from '../display/images/123/1.png';
import image4 from '../display/images/123/2.png';
import image5 from '../display/images/123/3.png';

 function Homebanner() {
    return (
        <div>
          
            <div className="top-post-area pd-top-70 pd-bottom-50">
                <div className="container">
                    <div className="section-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h4 className="title"></h4>
                            </div>
                            <div className="col-sm-6 text-sm-right align-self-center">
                                <a className="see-all-btn float-sm-right" href="#"> </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="top-post-wrap">
                                <div className="thumb">
                                    <div className="overlay"></div>
                                    <img src={image1} alt="img" />
                                </div>
                                <div className="top-post-details ">
                                    <p className="test6 craft">CRAFT</p>
                                    <h3 style={{ color: 'white' }}><a href="#">There are 5 Simple Screenwriting Will Sell Your Script  </a></h3>
                                    <div className="meta"> 
                                        <div className="date">
                                             By Tony Jameson September 12, 2020
                                 </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="widget widget-list">
                                    <h5 className="widget most-popular">MOST POPULAR </h5>
                                    <div className="media-post-wrap media">
                                        <div className="thumb">
                                            <img src={image3} alt="img" />
                                        </div>
                                        <div className="media-body aaa">
                                            <h6 style={{ color: 'black' }}><strong>There are 5 simple Screenwritting Tips</strong></h6>
                                            <div className="meta">  
                                                <div className="views">
                                                    Help You Break in to the Industry   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-post-wrap media">
                                        <div className="thumb">
                                            <img src={image4} alt="img" />
                                        </div>
                                        <div className="media-body aaa">
                                            <h6 style={{ color: 'black' }}><strong>There are 5 simple Screenwritting Tips</strong></h6>
                                            <div className="meta">
                                                <div className="views">
                                                    Help You Break in to the Industry
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-post-wrap media">
                                        <div className="thumb">
                                            <img src={image5} alt="img" />
                                        </div>
                                        <div className="media-body aaa">
                                            <h6 style={{ color: 'black' }}><strong>There are 5 simple Screenwritting Tips</strong></h6>
                                            <div className="meta">
                                                <div className="views">
                                                    Help You Break in to the Industry
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="widget widget-subscribe text-left bg-grey">
                                    <div className="widget-subscribe-details">
                                        <h6><strong>Subscribe to the <br /> Newsletter </strong></h6>
                                        <p>Newest articles, writing gigs, contest,<br/> exclusive offers & more</p>
                                        <div className="newsletter-inner">
                                            <input type="text" placeholder="Enter Email Address" />
                                        </div>
                                        <div className="newsletter-inner">
                                            <button>SUBSCRIBE</button>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div> 
                   <div className="featured-area bg-white pd-top-70 pd-bottom-50">
                 <div className="container">
                     
                     <div className="row justify-content-center">
                         <div className="col-lg-4 col-md-6">
                             <div className="top-post-wrap">
                                 <div className="thumb">
                                     <div className="overlay"></div>
                                     <img src={image2} alt="img" />
                                     <a className="tag tag-1" href="#">CSPro </a>
                                 </div>
                                 <div className="top-post-details-2">
                                        <h6 style={{ color: 'white' }}><a href="#">There are 5 Simple Screenwriting Will Sell Your Script </a></h6>
                                      <p>By Tony Jameson September 12, 2020</p>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-6">
                             <div className="top-post-wrap">
                                 <div className="thumb">
                                     <div className="overlay"></div>
                                     <img src={image2} alt="img" />
                                     
                                 </div>
                                 <div className="top-post-details-2">
                                        <h6 style={{ color: 'white' }}><a href="#">There are 5 Simple Screenwriting Will Sell Your Script </a></h6>
                                     <p>By Tony Jameson September 12, 2020</p>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-6">
                             <div className="top-post-wrap">
                                 <div className="thumb">
                                     <div className="overlay"></div>
                                     <img src={image2} alt="img" />
                                     <p className="tag tag-1" href="#">CSPro </p>
                                 </div>
                                 <div className="top-post-details-2">
                                     <h6 style={{ color: 'white' }}><a href="#">There are 5 Simple Screenwriting Will Sell Your Script </a></h6>
                                     <p>By Tony Jameson September 12, 2020</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
                
            </div>
        </div>
    )
}

export default Homebanner;