import React from 'react'
import image1 from '../display/images/top-story.jpg'
import image3 from '../display/images/instagram/post-01.jpg';
import image4 from '../display/images/instagram/post-02.jpg';
import image5 from '../display/images/instagram/post-03.jpg';
import image6 from '../display/images/instagram/post-04.jpg';
import image7 from '../display/images/instagram/post-05.jpg';
import image8 from '../display/images/instagram/post-06.jpg';

function Topstories() {
    return (
        <div>

            <div className="top-news-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 pd-top-25">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="recent-news-area extra pd-top-70">
                                        <div className="section-title section-title-3 ">
                                            <div className="row ">
                                                <div className="col-sm-6 ">

                                                    <h4 style={{ color: 'black' }} className="title">Top Stories </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media-post-wrap-2 media">
                                            <div className="thumb">
                                                <img src={image1} alt="img" />
                                            </div>
                                            <div className="media-body bbb">
                                                 <p className="test4 career">CAREER</p>
                                                <h6 style={{ color: 'black' }}>These 5 Simple Screenwriting Tricks Will Help You</h6>
                                                <div className="meta">
                                                    <a style={{ color: 'grey' }} href="#" className="">
                                                        By Tony Jameson September 12, 2020<br /><br />These 5 Simple Screenwriting Tricks Will Help You.These 5 Simple Screenwriting Tricks Will Help You.These 5 Simple Screenwriting Tricks Will Help You
                                             </a>
                                                </div>
                                                <p>  </p>
                                            </div>
                                        </div>
                                        <div className="media-post-wrap-2 media">
                                            <div className="thumb">
                                                <img src={image1} alt="img" />
                                            </div>
                                            <div className="media-body bbb">
                                                <p className="test5 interviews">INTERVIEWS</p>
                                                <h6 style={{ color: 'black' }}>These 5 Simple Screenwriting Tricks Will Help You</h6>
                                                <div className="meta">
                                                    <a style={{ color: 'grey' }} href="#" className="">
                                                        By Tony Jameson September 12, 2020<br /><br />These 5 Simple Screenwriting Tricks Will Help You.These 5 Simple Screenwriting Tricks Will Help You.These 5 Simple Screenwriting Tricks Will Help You
                                             </a>
                                                </div>
                                                <p>  </p>
                                            </div>
                                        </div>
                                        <div className="media-post-wrap-2 media">
                                            <div className="thumb">
                                                <img src={image1} alt="img" />
                                            </div>
                                            <div className="media-body bbb">
                                                <p className="test6 craft">CRAFT</p>
                                                <h6 style={{ color: 'black' }}>These 5 Simple Screenwriting Tricks Will Help You</h6>
                                                <div className="meta">
                                                    <a style={{ color: 'grey' }} href="#" className="">
                                                        By Tony Jameson September 12, 2020<br /><br />These 5 Simple Screenwriting Tricks Will Help You.These 5 Simple Screenwriting Tricks Will Help You.These 5 Simple Screenwriting Tricks Will Help You
                                             </a>
                                                </div>
                                                <p>  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* second section */}
                        <div className="col-lg-4">
                            <div className="sidebar-area">
                                <div className="widget widget-list">

                                    <div className="rectangle">
                                        <strong> Add Space</strong>
                                    </div>



                                    {/* filter */}
                                    <div className="widget-tab widget-tab-2 widget ">
                                        <ul className="nav nav-tabs">
                                            <li><a className="active" data-toggle="tab" href="#po1">CONTESTS </a>
                                            </li>
                                            <li><a data-toggle="tab" href="#po2">GIGS </a>
                                            </li>
                                            <li><a data-toggle="tab" href="#pot3">EVENTS </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="po1" className="tab-pane fade active show">
                                                <div className="media-post-wrap media">
                                                    <div className="media-body">
                                                        <h6 style={{ color: 'black' }}><strong>Emerging Screenwriter Genre<br /> Screenplay Competition</strong></h6>
                                                        <div className="meta">
                                                            <div className="date">
                                                                <div className="date">
                                                                    <p>$25,000 in Cash</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-post-wrap media">
                                                    <div className="media-body">
                                                        <h6 style={{ color: 'black' }}><strong>Emerging Screenwriter Genre<br /> Screenplay Competition</strong></h6>
                                                        <div className="meta">
                                                            <div className="date">
                                                                <div className="date">
                                                                    <p>$25,000 in Cash</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-post-wrap media mb-0">
                                                    <div className="media-body">
                                                        <h6 style={{ color: 'black' }}><strong>Emerging Screenwriter Genre<br /> Screenplay Competition</strong></h6>
                                                        <div className="meta">
                                                            <div className="date">
                                                                <div className="date">
                                                                    <p>$25,000 in Cash</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="po2" className="tab-pane fade">
                                                <div className="media-body">
                                                    <h6 style={{ color: 'black' }}><strong>Emerging Screenwriter Genre<br /> Screenplay Competition</strong></h6>
                                                    <div className="meta">
                                                        <div className="date">
                                                            <div className="date">
                                                                <p>$25,000 in Cash</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>    
                                                <div className="media-post-wrap media">
                                                    <div className="media-body">
                                                        <h6 style={{ color: 'black' }}><strong>Emerging Screenwriter Genre<br /> Screenplay Competition</strong></h6>
                                                        <div className="meta">
                                                            <div className="date">
                                                                <div className="date">
                                                                    <p>$25,000 in Cash</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            <div className="media-post-wrap media mb-0">
                                                <div className="media-body">
                                                        <h6 style={{ color: 'black' }}><strong>Emerging Screenwriter Genre<br /> Screenplay Competition</strong></h6>
                                                    <div className="meta">
                                                        <div className="date">
                                                            <div className="date">
                                                                <p>$25,000 in Cash</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        
                                            <div id="po3" className="tab-pane fade">
                                            <div className="media-post-wrap media">
                                                <div className="media-body">
                                                        <h6 style={{ color: 'black' }}><strong>Emerging Screenwriter Genre<br /> Screenplay Competition</strong></h6>
                                                    <div className="meta">
                                                        <div className="date">
                                                            <div className="date">
                                                                <p>$25,000 in Cash</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                  <div className="media-post-wrap media">
                                                    <div className="media-body">
                                                        <h6 style={{ color: 'black' }}><strong>Emerging Screenwriter Genre<br /> Screenplay Competition</strong></h6>
                                                        <div className="meta">
                                                            <div className="date">
                                                                <div className="date">
                                                                    <p>$25,000 in Cash</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-post-wrap media">
                                                    <div className="media-body">
                                                        <h6 style={{ color: 'black' }}><strong>Emerging Screenwriter Genre<br /> Screenplay Competition</strong></h6>
                                                        <div className="meta">
                                                            <div className="date">
                                                                <div className="date">
                                                                    <p>$25,000 in Cash</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        </div>  
                                        <a style={{ color: 'black' }} className="load-more-btn" href="#"><strong>INSTAGRAM</strong> </a>
                                    </div>

                                  
                                    <div className="mdb-lightbox">
                                        <div className="row galpic">
                                            <figure className="col-md-4">
                                                <a href="" data-size="1600x1067">
                                                    <img alt="picture" src={image3} className="img-fluid" />
                                                </a>
                                            </figure>

                                            <figure className="col-md-4">
                                                <a href="" data-size="1600x1067">
                                                    <img alt="picture" src={image4} className="img-fluid" />
                                                </a>
                                            </figure>

                                            <figure className="col-md-4">
                                                <a href="" data-size="1600x1067">
                                                    <img alt="picture" src={image5} className="img-fluid" />
                                                </a>
                                            </figure>

                                            <figure className="col-md-4">
                                                <a href="" data-size="1600x1067">
                                                    <img alt="picture" src={image6} className="img-fluid" />
                                                </a>
                                            </figure>

                                            <figure className="col-md-4">
                                                <a href="" data-size="1600x1067">
                                                    <img alt="picture" src={image7} className="img-fluid" />
                                                </a>
                                            </figure>

                                            <figure className="col-md-4">
                                                <a href="" data-size="1600x1067">
                                                    <img alt="picture" src={image8} className="img-fluid" />
                                                </a>
                                            </figure>
                                        </div>
                                        <a className="btn btn-main" href="#">FOLLOW US </a>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="rectangle1">
                            <strong> Add Space</strong>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Topstories;