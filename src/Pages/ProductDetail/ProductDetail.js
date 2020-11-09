import React, {Component} from 'react';
/* import Header from '../Components/Header'
import Breadcrumb from '../Components/Breadcrumb'
import page_he from '../Components/Page-heading'
import Content_P_Detail from '../Components/Content_P_Detail'
import Footer from '../Components/Footer'
import Back_top from '../Components/Back_top' */

class ProductDetail extends Component { 
    render() {
        return (
            <div>
        {/* Header */}
        <header>
          {/* Header desktop */}
          <div className="container-menu-desktop">
            <div className="topbar">
              <div className="content-topbar container h-100">
                <div className="left-topbar">
                  <span className="left-topbar-item flex-wr-s-c">
                    <span>
                      New York, NY
                    </span>
                    <img className="m-b-1 m-rl-8" src="images/icons/icon-night.png" alt="IMG" />
                    <span>
                      HI 58° LO 56°
                    </span>
                  </span>
                  <a href="#" className="left-topbar-item">
                    About
                  </a>
                  <a href="#" className="left-topbar-item">
                    Contact
                  </a>
                  <a href="#" className="left-topbar-item">
                    Sing up
                  </a>
                  <a href="#" className="left-topbar-item">
                    Log in
                  </a>
                </div>
                <div className="right-topbar">
                  <a href="#">
                    <span className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <span className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <span className="fab fa-pinterest-p" />
                  </a>
                  <a href="#">
                    <span className="fab fa-vimeo-v" />
                  </a>
                  <a href="#">
                    <span className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
            {/* Header Mobile */}
            <div className="wrap-header-mobile">
              {/* Logo moblie */}		
              <div className="logo-mobile">
                <a href="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO" /></a>
              </div>
              {/* Button show menu */}
              <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </div>
            </div>
            {/* Menu Mobile */}
            <div className="menu-mobile">
              <ul className="topbar-mobile">
                <li className="left-topbar">
                  <span className="left-topbar-item flex-wr-s-c">
                    <span>
                      New York, NY
                    </span>
                    <img className="m-b-1 m-rl-8" src="images/icons/icon-night.png" alt="IMG" />
                    <span>
                      HI 58° LO 56°
                    </span>
                  </span>
                </li>
                <li className="left-topbar">
                  <a href="#" className="left-topbar-item">
                    About
                  </a>
                  <a href="#" className="left-topbar-item">
                    Contact
                  </a>
                  <a href="#" className="left-topbar-item">
                    Sing up
                  </a>
                  <a href="#" className="left-topbar-item">
                    Log in
                  </a>
                </li>
                <li className="right-topbar">
                  <a href="#">
                    <span className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <span className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <span className="fab fa-pinterest-p" />
                  </a>
                  <a href="#">
                    <span className="fab fa-vimeo-v" />
                  </a>
                  <a href="#">
                    <span className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
              <ul className="main-menu-m">
                <li>
                  <a href="index.html">Home</a>
                  <ul className="sub-menu-m">
                    <li><a href="index.html">Homepage v1</a></li>
                    <li><a href="home-02.html">Homepage v2</a></li>
                    <li><a href="home-03.html">Homepage v3</a></li>
                  </ul>
                  <span className="arrow-main-menu-m">
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </span>
                </li>
                <li>
                  <a href="category-01.html">News</a>
                </li>
                <li>
                  <a href="category-02.html">Entertainment </a>
                </li>
                <li>
                  <a href="category-01.html">Business</a>
                </li>
                <li>
                  <a href="category-02.html">Travel</a>
                </li>
                <li>
                  <a href="category-01.html">Life Style</a>
                </li>
                <li>
                  <a href="category-02.html">Video</a>
                </li>
                <li>
                  <a href="#">Features</a>
                  <ul className="sub-menu-m">
                    <li><a href="category-01.html">Category Page v1</a></li>
                    <li><a href="category-02.html">Category Page v2</a></li>
                    <li><a href="blog-grid.html">Blog Grid Sidebar</a></li>
                    <li><a href="blog-list-01.html">Blog List Sidebar v1</a></li>
                    <li><a href="blog-list-02.html">Blog List Sidebar v2</a></li>
                    <li><a href="blog-detail-01.html">Blog Detail Sidebar</a></li>
                    <li><a href="blog-detail-02.html">Blog Detail No Sidebar</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                  <span className="arrow-main-menu-m">
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </span>
                </li>
              </ul>
            </div>
            {/*  */}
            <div className="wrap-logo container">
              {/* Logo desktop */}		
              <div className="logo">
                <a href="index.html"><img src="images/icons/logo-01.png" alt="LOGO" /></a>
              </div>	
              {/* Banner */}
              <div className="banner-header">
                <a href="#"><img src="images/banner-01.jpg" alt="IMG" /></a>
              </div>
            </div>	
            {/*  */}
            <div className="wrap-main-nav">
              <div className="main-nav">
                {/* Menu desktop */}
                <nav className="menu-desktop">
                  <a className="logo-stick" href="index.html">
                    <img src="images/icons/logo-01.png" alt="LOGO" />
                  </a>
                  <ul className="main-menu">
                    <li>
                      <a href="index.html">Home</a>
                      <ul className="sub-menu">
                        <li><a href="index.html">Homepage v1</a></li>
                        <li><a href="home-02.html">Homepage v2</a></li>
                        <li><a href="home-03.html">Homepage v3</a></li>
                      </ul>
                    </li>
                    <li className="mega-menu-item">
                      <a href="category-01.html">News</a>
                      <div className="sub-mega-menu">
                        <div className="nav flex-column nav-pills" role="tablist">
                          <a className="nav-link active" data-toggle="pill" href="#news-0" role="tab">All</a>
                          <a className="nav-link" data-toggle="pill" href="#news-1" role="tab">Entertaiment</a>
                          <a className="nav-link" data-toggle="pill" href="#news-2" role="tab">Fashion</a>
                          <a className="nav-link" data-toggle="pill" href="#news-3" role="tab">Life Style</a>
                          <a className="nav-link" data-toggle="pill" href="#news-4" role="tab">Technology</a>
                          <a className="nav-link" data-toggle="pill" href="#news-5" role="tab">Travel</a>
                        </div>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="news-0" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-05.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 18
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-10.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Finance
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 15
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-14.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Beach
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 12
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-36.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Technology
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="news-1" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-50.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 18
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-08.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 12
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-07.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-06.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 15
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="news-2" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-21.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 18
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-24.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 15
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-22.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 12
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-23.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="news-3" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-25.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 18
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-27.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-26.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 12
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-34.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 15
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="news-4" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-35.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 18
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-36.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 12
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-37.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-38.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 15
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="news-5" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-39.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 18
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-41.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-42.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 15
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-40.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 12
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mega-menu-item">
                      <a href="category-02.html">Entertainment </a>
                      <div className="sub-mega-menu">
                        <div className="nav flex-column nav-pills" role="tablist">
                          <a className="nav-link active" data-toggle="pill" href="#enter-1" role="tab">All</a>
                          <a className="nav-link" data-toggle="pill" href="#enter-2" role="tab">Game</a>
                          <a className="nav-link" data-toggle="pill" href="#enter-3" role="tab">Celebrity</a>
                        </div>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="enter-1" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-25.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 18
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-27.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-26.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 12
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-34.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 15
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="enter-2" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-35.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 18
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-36.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 12
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-37.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-38.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 15
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="enter-3" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-39.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 18
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-41.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-42.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 15
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-40.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 12
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mega-menu-item">
                      <a href="category-01.html">Business</a>
                      <div className="sub-mega-menu">
                        <div className="nav flex-column nav-pills" role="tablist">
                          <a className="nav-link active" data-toggle="pill" href="#business-1" role="tab">All</a>
                          <a className="nav-link" data-toggle="pill" href="#business-2" role="tab">Economy</a>
                        </div>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="business-1" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-10.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 18
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-11.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-26.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 12
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-34.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 15
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="business-2" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-35.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 18
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-36.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 12
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-37.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-38.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 15
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mega-menu-item">
                      <a href="category-02.html">Travel</a>
                      <div className="sub-mega-menu">
                        <div className="nav flex-column nav-pills" role="tablist">
                          <a className="nav-link active" data-toggle="pill" href="#travel-1" role="tab">All</a>
                          <a className="nav-link" data-toggle="pill" href="#travel-2" role="tab">Hotels</a>
                        </div>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="travel-1" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-39.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 18
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-41.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-42.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 15
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-40.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 12
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="travel-2" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-35.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 18
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-36.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 12
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-37.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-38.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 15
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mega-menu-item">
                      <a href="category-01.html">Life Style</a>
                      <div className="sub-mega-menu">
                        <div className="nav flex-column nav-pills" role="tablist">
                          <a className="nav-link active" data-toggle="pill" href="#life-1" role="tab">All</a>
                        </div>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="life-1" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-25.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 18
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-27.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-26.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 12
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-34.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 15
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mega-menu-item">
                      <a href="category-02.html">Video</a>
                      <div className="sub-mega-menu">
                        <div className="nav flex-column nav-pills" role="tablist">
                          <a className="nav-link active" data-toggle="pill" href="#video-1" role="tab">All</a>
                        </div>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="video-1" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-50.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 18
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-08.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Feb 12
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-07.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 20
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-06.jpg" alt="IMG" />
                                  </a>
                                  <div className="p-t-10">
                                    <h5 className="p-b-5">
                                      <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                        Donec metus orci, malesuada et lectus vitae
                                      </a>
                                    </h5>
                                    <span className="cl8">
                                      <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                        Music
                                      </a>
                                      <span className="f1-s-3 m-rl-3">
                                        -
                                      </span>
                                      <span className="f1-s-3">
                                        Jan 15
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="main-menu-active">
                      <a href="#">Features</a>
                      <ul className="sub-menu">
                        <li><a href="category-01.html">Category Page v1</a></li>
                        <li><a href="category-02.html">Category Page v2</a></li>
                        <li><a href="blog-grid.html">Blog Grid Sidebar</a></li>
                        <li><a href="blog-list-01.html">Blog List Sidebar v1</a></li>
                        <li><a href="blog-list-02.html">Blog List Sidebar v2</a></li>
                        <li><a href="blog-detail-01.html">Blog Detail Sidebar</a></li>
                        <li><a href="blog-detail-02.html">Blog Detail No Sidebar</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>	
          </div>
        </header>
        {/* Breadcrumb */}
        <div className="container">
          <div className="headline bg0 flex-wr-sb-c p-rl-20 p-tb-8">
            <div className="f2-s-1 p-r-30 m-tb-6">
              <a href="index.html" className="breadcrumb-item f1-s-3 cl9">
                Home 
              </a>
              <a href="blog-list-01.html" className="breadcrumb-item f1-s-3 cl9">
                Blog 
              </a>
              <span className="breadcrumb-item f1-s-3 cl9">
                Nulla non interdum metus non laoreet nisi tellus eget aliquam lorem pellentesque
              </span>
            </div>
            <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
              <input className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45" type="text" name="search" placeholder="Search" />
              <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
                <i className="zmdi zmdi-search" />
              </button>
            </div>
          </div>
        </div>
        {/* Content */}
        <section className="bg0 p-b-140 p-t-10">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 p-b-30">
                <div className="p-r-10 p-r-0-sr991">
                  {/* Blog Detail */}
                  <div className="p-b-70">
                    <a href="#" className="f1-s-10 cl2 hov-cl10 trans-03 text-uppercase">
                      Technology
                    </a>
                    <h3 className="f1-l-3 cl2 p-b-16 p-t-33 respon2">
                      Nulla non interdum metus non laoreet nisi tellus eget aliquam lorem pellentesque
                    </h3>
                    <div className="flex-wr-s-s p-b-40">
                      <span className="f1-s-3 cl8 m-r-15">
                        <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                          by John Alvarado
                        </a>
                        <span className="m-rl-3">-</span>
                        <span>
                          Feb 18
                        </span>
                      </span>
                      <span className="f1-s-3 cl8 m-r-15">
                        5239 Views
                      </span>
                      <a href="#" className="f1-s-3 cl8 hov-cl10 trans-03 m-r-15">
                        0 Comment
                      </a>
                    </div>
                    <div className="wrap-pic-max-w p-b-30">
                      <img src="images/blog-list-01.jpg" alt="IMG" />
                    </div>
                    <p className="f1-s-11 cl6 p-b-25">
                      Curabitur volutpat bibendum molestie. Vestibulum ornare gravida semper. Aliquam a dui suscipit, fringilla metus id, maximus leo. Vivamus sapien arcu, mollis eu pharetra vitae, condimentum in orci. Integer eu sodales dolor. Maecenas elementum arcu eu convallis rhoncus. Donec tortor sapien, euismod a faucibus eget, porttitor quis libero. 
                    </p>
                    <p className="f1-s-11 cl6 p-b-25">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est vel orci luctus sollicitudin. Duis eleifend vestibulum justo, varius semper lacus condimentum dictum. Donec pulvinar a magna ut malesuada. In posuere felis diam, vel sodales metus accumsan in. Duis viverra dui eu pharetra pellentesque. Donec a eros leo. Quisque sed ligula vitae lorem efficitur faucibus. Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum libero a, malesuada nisi. Nulla in porta nibh, id vestibulum ipsum. Praesent dapibus tempus erat quis aliquet. Donec ac purus id sapien condimentum feugiat.
                    </p>
                    <p className="f1-s-11 cl6 p-b-25">
                      Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis, quis vulputate
                    </p>
                    {/* Tag */}
                    <div className="flex-s-s p-t-12 p-b-15">
                      <span className="f1-s-12 cl5 m-r-8">
                        Tags:
                      </span>
                      <div className="flex-wr-s-s size-w-0">
                        <a href="#" className="f1-s-12 cl8 hov-link1 m-r-15">
                          Streetstyle
                        </a>
                        <a href="#" className="f1-s-12 cl8 hov-link1 m-r-15">
                          Crafts
                        </a>
                      </div>
                    </div>
                    {/* Share */}
                    <div className="flex-s-s">
                      <span className="f1-s-12 cl5 p-t-1 m-r-15">
                        Share:
                      </span>
                      <div className="flex-wr-s-s size-w-0">
                        <a href="#" className="dis-block f1-s-13 cl0 bg-facebook borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                          <i className="fab fa-facebook-f m-r-7" />
                          Facebook
                        </a>
                        <a href="#" className="dis-block f1-s-13 cl0 bg-twitter borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                          <i className="fab fa-twitter m-r-7" />
                          Twitter
                        </a>
                        <a href="#" className="dis-block f1-s-13 cl0 bg-google borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                          <i className="fab fa-google-plus-g m-r-7" />
                          Google+
                        </a>
                        <a href="#" className="dis-block f1-s-13 cl0 bg-pinterest borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                          <i className="fab fa-pinterest-p m-r-7" />
                          Pinterest
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Leave a comment */}
                  <div>
                    <h4 className="f1-l-4 cl3 p-b-12">
                      Leave a Comment
                    </h4>
                    <p className="f1-s-13 cl8 p-b-40">
                      Your email address will not be published. Required fields are marked *
                    </p>
                    <form>
                      <textarea className="bo-1-rad-3 bocl13 size-a-15 f1-s-13 cl5 plh6 p-rl-18 p-tb-14 m-b-20" name="msg" placeholder="Comment..." defaultValue={""} />
                      <input className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20" type="text" name="name" placeholder="Name*" />
                      <input className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20" type="text" name="email" placeholder="Email*" />
                      <input className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20" type="text" name="website" placeholder="Website" />
                      <button className="size-a-17 bg2 borad-3 f1-s-12 cl0 hov-btn1 trans-03 p-rl-15 m-t-10">
                        Post Comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Sidebar */}
              <div className="col-md-10 col-lg-4 p-b-30">
                <div className="p-l-10 p-rl-0-sr991 p-t-70">						
                  {/* Category */}
                  <div className="p-b-60">
                    <div className="how2 how2-cl4 flex-s-c">
                      <h3 className="f1-m-2 cl3 tab01-title">
                        Category
                      </h3>
                    </div>
                    <ul className="p-t-35">
                      <li className="how-bor3 p-rl-4">
                        <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                          Fashion
                        </a>
                      </li>
                      <li className="how-bor3 p-rl-4">
                        <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                          Beauty
                        </a>
                      </li>
                      <li className="how-bor3 p-rl-4">
                        <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                          Street Style
                        </a>
                      </li>
                      <li className="how-bor3 p-rl-4">
                        <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                          Life Style
                        </a>
                      </li>
                      <li className="how-bor3 p-rl-4">
                        <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                          DIY &amp; Crafts
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Archive */}
                  <div className="p-b-37">
                    <div className="how2 how2-cl4 flex-s-c">
                      <h3 className="f1-m-2 cl3 tab01-title">
                        Archive
                      </h3>
                    </div>
                    <ul className="p-t-32">
                      <li className="p-rl-4 p-b-19">
                        <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                          <span>
                            July 2018
                          </span>
                          <span>
                            (9)
                          </span>
                        </a>
                      </li>
                      <li className="p-rl-4 p-b-19">
                        <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                          <span>
                            June 2018
                          </span>
                          <span>
                            (39)
                          </span>
                        </a>
                      </li>
                      <li className="p-rl-4 p-b-19">
                        <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                          <span>
                            May 2018
                          </span>
                          <span>
                            (29)
                          </span>
                        </a>
                      </li>
                      <li className="p-rl-4 p-b-19">
                        <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                          <span>
                            April  2018
                          </span>
                          <span>
                            (35)
                          </span>
                        </a>
                      </li>
                      <li className="p-rl-4 p-b-19">
                        <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                          <span>
                            March 2018
                          </span>
                          <span>
                            (22)
                          </span>
                        </a>
                      </li>
                      <li className="p-rl-4 p-b-19">
                        <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                          <span>
                            February 2018
                          </span>
                          <span>
                            (32)
                          </span>
                        </a>
                      </li>
                      <li className="p-rl-4 p-b-19">
                        <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                          <span>
                            January 2018
                          </span>
                          <span>
                            (21)
                          </span>
                        </a>
                      </li>
                      <li className="p-rl-4 p-b-19">
                        <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                          <span>
                            December 2017
                          </span>
                          <span>
                            (26)
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Popular Posts */}
                  <div className="p-b-30">
                    <div className="how2 how2-cl4 flex-s-c">
                      <h3 className="f1-m-2 cl3 tab01-title">
                        Popular Post
                      </h3>
                    </div>
                    <ul className="p-t-35">
                      <li className="flex-wr-sb-s p-b-30">
                        <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                          <img src="images/popular-post-04.jpg" alt="IMG" />
                        </a>
                        <div className="size-w-11">
                          <h6 className="p-b-4">
                            <a href="blog-detail-02.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h6>
                          <span className="cl8 txt-center p-b-24">
                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                              Music
                            </a>
                            <span className="f1-s-3 m-rl-3">
                              -
                            </span>
                            <span className="f1-s-3">
                              Feb 18
                            </span>
                          </span>
                        </div>
                      </li>
                      <li className="flex-wr-sb-s p-b-30">
                        <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                          <img src="images/popular-post-05.jpg" alt="IMG" />
                        </a>
                        <div className="size-w-11">
                          <h6 className="p-b-4">
                            <a href="blog-detail-02.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h6>
                          <span className="cl8 txt-center p-b-24">
                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                              Game
                            </a>
                            <span className="f1-s-3 m-rl-3">
                              -
                            </span>
                            <span className="f1-s-3">
                              Feb 16
                            </span>
                          </span>
                        </div>
                      </li>
                      <li className="flex-wr-sb-s p-b-30">
                        <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                          <img src="images/popular-post-06.jpg" alt="IMG" />
                        </a>
                        <div className="size-w-11">
                          <h6 className="p-b-4">
                            <a href="blog-detail-02.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                              Donec metus orci, malesuada et lectus vitae
                            </a>
                          </h6>
                          <span className="cl8 txt-center p-b-24">
                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                              Celebrity
                            </a>
                            <span className="f1-s-3 m-rl-3">
                              -
                            </span>
                            <span className="f1-s-3">
                              Feb 12
                            </span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Tag */}
                  <div>
                    <div className="how2 how2-cl4 flex-s-c m-b-30">
                      <h3 className="f1-m-2 cl3 tab01-title">
                        Tags
                      </h3>
                    </div>
                    <div className="flex-wr-s-s m-rl--5">
                      <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                        Fashion
                      </a>
                      <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                        Lifestyle
                      </a>
                      <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                        Denim
                      </a>
                      <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                        Streetstyle
                      </a>
                      <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                        Crafts
                      </a>
                      <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                        Magazine
                      </a>
                      <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                        News
                      </a>
                      <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                        Blogs
                      </a>
                    </div>	
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer>
          <div className="bg2 p-t-40 p-b-25">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 p-b-20">
                  <div className="size-h-3 flex-s-c">
                    <a href="index.html">
                      <img className="max-s-full" src="images/icons/logo-02.png" alt="LOGO" />
                    </a>
                  </div>
                  <div>
                    <p className="f1-s-1 cl11 p-b-16">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero, mattis nec molestie at, facilisis ut turpis. Vestibulum dolor metus, tincidunt eget odio
                    </p>
                    <p className="f1-s-1 cl11 p-b-16">
                      Any questions? Call us on (+1) 96 716 6879
                    </p>
                    <div className="p-t-15">
                      <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                        <span className="fab fa-facebook-f" />
                      </a>
                      <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                        <span className="fab fa-twitter" />
                      </a>
                      <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                        <span className="fab fa-pinterest-p" />
                      </a>
                      <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                        <span className="fab fa-vimeo-v" />
                      </a>
                      <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                        <span className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 p-b-20">
                  <div className="size-h-3 flex-s-c">
                    <h5 className="f1-m-7 cl0">
                      Popular Posts
                    </h5>
                  </div>
                  <ul>
                    <li className="flex-wr-sb-s p-b-20">
                      <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                        <img src="images/popular-post-01.jpg" alt="IMG" />
                      </a>
                      <div className="size-w-5">
                        <h6 className="p-b-5">
                          <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                            Donec metus orci, malesuada et lectus vitae
                          </a>
                        </h6>
                        <span className="f1-s-3 cl6">
                          Feb 17
                        </span>
                      </div>
                    </li>
                    <li className="flex-wr-sb-s p-b-20">
                      <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                        <img src="images/popular-post-02.jpg" alt="IMG" />
                      </a>
                      <div className="size-w-5">
                        <h6 className="p-b-5">
                          <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                            Lorem ipsum dolor sit amet, consectetur
                          </a>
                        </h6>
                        <span className="f1-s-3 cl6">
                          Feb 16
                        </span>
                      </div>
                    </li>
                    <li className="flex-wr-sb-s p-b-20">
                      <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                        <img src="images/popular-post-03.jpg" alt="IMG" />
                      </a>
                      <div className="size-w-5">
                        <h6 className="p-b-5">
                          <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                            Suspendisse dictum enim quis imperdiet auctor
                          </a>
                        </h6>
                        <span className="f1-s-3 cl6">
                          Feb 15
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-lg-4 p-b-20">
                  <div className="size-h-3 flex-s-c">
                    <h5 className="f1-m-7 cl0">
                      Category
                    </h5>
                  </div>
                  <ul className="m-t--12">
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        Fashion (22)
                      </a>
                    </li>
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        Technology (29)
                      </a>
                    </li>
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        Street Style (15)
                      </a>
                    </li>
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        Life Style (28)
                      </a>
                    </li>
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        DIY &amp; Crafts (16)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg11">
            <div className="container size-h-4 flex-c-c p-tb-15">
              <span className="f1-s-1 cl0 txt-center">
                Copyright © 2018 
                <a href="#" className="f1-s-1 cl10 hov-link1">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by </a><a href="https://colorlib.com" target="_blank">Colorlib</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </span>
            </div>
          </div>
        </footer>
        {/* Back to top */}
        <div className="btn-back-to-top" id="myBtn">
          <span className="symbol-btn-back-to-top">
            <span className="fas fa-angle-up" />
          </span>
        </div>
      </div>
        );
    }
}
export default ProductDetail;