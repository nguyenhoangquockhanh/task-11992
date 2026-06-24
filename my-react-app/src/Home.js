import React from "react";
import "./style.css";

function Home() {
  return (
    <div>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-bar-inter">
          <div className="top-bar-left">
            <img src="assets/check 1.png" alt="check" className="icon-check" />
            <div className="text">Free Shipping On All Orders Over $50</div>
          </div>
          <div className="top-link">
            <a href="#" className="top-link-a">
              Eng
              <svg width="7" height="3.5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 0.5L4 4L0.5 0.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="top-link-a">Fags</a>
            <a href="#" className="top-link-a">
              <img src="assets/alert-circle 1.png" alt="help" className="icon-info" />
              Need Help
            </a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="container header__inner">
          <a href="#" className="logo">
            <img src="assets/logo.png" alt="Comforty logo" />
            <span>Comforty</span>
          </a>
          <div className="search-bar">
            <input type="text" placeholder="Search here..." />
            <button type="button" aria-label="Search">
              <img src="assets/icon-search.png" alt="search" />
            </button>
          </div>
          <div className="header__actions">
            <button type="button" className="cart-btn">
              <img src="assets/icon-cart.png" alt="cart" />
              Cart <span className="cart-count">2</span>
            </button>
            <button type="button" className="icon-btn" aria-label="Wishlist">
              <img src="assets/icon-heart.png" alt="wishlist" />
            </button>
            <button type="button" className="icon-btn" aria-label="Account">
              <img src="assets/icon-user.png" alt="account" />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN NAV */}
      <nav className="main-nav">
        <div className="container main-nav__inner">
          <button type="button" className="category-btn">
            <img src="assets/icon-categories.png" alt="categories" />
            All Categories
          </button>
          <ul className="main-nav__links">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">About</a></li>
          </ul>
          <p className="main-nav__contact">Contact: <strong>(808) 555-0111</strong></p>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero__wrap">
          <div className="hero__banner">
            <button type="button" className="hero__arrow hero__arrow--left" aria-label="Previous slide">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="52" rx="26" fill="white"/>
                <path d="M22.5 30.5L18 26L22.5 21.5M18 26H34" stroke="#007580" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="hero__content">
              <div className="hero__text">
                <p className="hero__eyebrow">WELCOME TO CHAIRY</p>
                <h1>Best Furniture Collection For Your Interior.</h1>
                <a href="#" className="hero__btn">
                  Shop Now
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 16.5L20 12L15.5 7.5M20 12H4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className="hero__visual">
                <div className="hero__circle"></div>
                <img src="assets/hero-chair.png" alt="Modern accent chair" className="hero__chair" />
                <img src="assets/badge-discount.png" alt="54% Discount" className="hero__badge" />
              </div>
            </div>

            <button type="button" className="hero__arrow hero__arrow--right" aria-label="Next slide">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="52" rx="26" transform="matrix(-1 0 0 1 52 0)" fill="white"/>
                <path d="M29.5 30.5L34 26L29.5 21.5M34 26H18" stroke="#007580" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="hero__dots">
              <span></span>
              <span className="is-active"></span>
              <span></span>
            </div>
            <div className="container hero__features-wrap">
        <div className="features-bar">
          <div className="feature-item">
            <img src="assets/icon-discount.png" alt=""/>
            <div>
              <h4>Discount</h4>
              <p>Every week new sales</p>
            </div>
          </div>
          <div className="feature-item">
            <img src="assets/icon-delivery.png" alt=""/>
            <div>
              <h4>Free Delivery</h4>
              <p>100% Free for all orders</p>
            </div>
          </div>
          <div className="feature-item">
            <img src="assets/icon-support.png" alt=""/>
            <div>
              <h4>Great Support 24/7</h4>
              <p>We care your experiences</p>
            </div>
          </div>
          <div className="feature-item">
            <img src="assets/icon-secure.png" alt=""/>
            <div>
              <h4>Secure Payment</h4>
              <p>100% Secure Payment Method</p>
            </div>
          </div>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="brands">
        <div className="container brands__inner">
          <img src="assets/brand-zapier.png" alt="Zapier" />
          <img src="assets/brand-pipedrive.png" alt="Pipedrive" />
          <img src="assets/brand-cibbank.png" alt="CIB Bank" />
          <img src="assets/brand-z.png" alt="Brand" />
          <img src="assets/brand-burnttoast.png" alt="Burnt Toast" />
          <img src="assets/brand-pandadoc.png" alt="PandaDoc" />
          <img src="assets/brand-moz.png" alt="Moz" />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section__featured">
        <div className="container">
          <div className="section__head">
            <h2>Featured Products</h2>
            <div className="nav-arrows">
              <button type="button" className="nav-arrows__btn nav-arrows__btn--active" aria-label="Previous">&#8592;</button>
              <button type="button" className="nav-arrows__btn" aria-label="Next">&#8594;</button>
            </div>
          </div>
          <div className="product-grid product-grid--4">
            {/* ... copy toàn bộ product-card từ HTML, đổi class -> className */}
        {/*<!-- Product 1 -->*/}
        <article className="product-card">
          <div className="product-card__image">
            <span className="tag tag--new">New</span>
            <button type="button" className="wishlist-btn">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" rx="8" fill="white" fill-opacity="0.8"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6327 21.6315C12.6491 18.5607 13.7977 15.0508 17.0225 14.0122C17.8587 13.7446 18.7468 13.6809 19.6127 13.8263C20.4785 13.9717 21.2971 14.3221 22 14.8482C23.3338 13.8169 25.2743 13.4686 26.9683 14.0122C30.1923 15.0508 31.3491 18.5607 30.3664 21.6315C28.8356 26.499 22 30.2482 22 30.2482C22 30.2482 15.2148 26.5558 13.6327 21.6315V21.6315Z" stroke="#272343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <img src="assets/product-1.png" alt="Library Stool Chair"/>
          </div>
          <div className="product-card__info">
            <div>
              <a href="#" className="product-card__name product-card__name--link">Library Stool Chair</a>
              <p className="price">$20</p>
            </div>
            <button type="button" className="add-cart-btn add-cart-btn--active"><img src="assets/icon-cart.png" alt=""/></button>
          </div>
        </article>

        {/*<!-- Product 2 -->*/}
        <article className="product-card">
          <div className="product-card__image">
            <span className="tag tag--sale">Sales</span>
            <img src="assets/product-2.png" alt="Library Stool Chair"/>
          </div>
          <div className="product-card__info">
            <div>
              <p className="product-card__name">Library Stool Chair</p>
              <p className="price">$20 <span className="price--old">$30</span></p>
            </div>
            <button type="button" class="add-cart-btn"><img src="assets/icon-cart.png" alt=""/></button>
          </div>
        </article>

        {/*<!-- Product 3 -->*/}
        <article className="product-card">
          <div className="product-card__image">
            <img src="assets/product-3.png" alt="Library Stool Chair"/>
          </div>
          <div className="product-card__info">
            <div>
              <p className="product-card__name">Library Stool Chair</p>
              <p className="price">$20</p>
            </div>
            <button type="button" className="add-cart-btn"><img src="assets/icon-cart.png" alt=""/></button>
          </div>
        </article>

        {/*<!-- Product 4 -->*/}
        <article className="product-card">
          <div className="product-card__image">
            <img src="assets/product-4.png" alt="Library Stool Chair"/>
          </div>
          <div className="product-card__info">
            <div>
              <p className="product-card__name">Library Stool Chair</p>
              <p className="price">$20</p>
            </div>
            <button type="button" className="add-cart-btn"><img src="assets/icon-cart.png" alt=""/></button>
          </div>
        </article>
      </div>
    </div>
  </section>

      {/* TOP CATEGORIES */}
      <section className="section top-categories">
    <div className="top-categories__head-wrap">
      <div className="top-categories__head">
        <h2>Top Categories</h2>
        <div className="top-categories__arrows">
          <button type="button" className="nav-arrows__btn nav-arrows__btn--active" aria-label="Previous">&#8592;</button>
          <button type="button" className="nav-arrows__btn" aria-label="Next">&#8594;</button>
        </div>
      </div>
    </div>

    <div className="top-categories__track-wrap">
      <div className="top-categories__track">
        <article className="category-card">
          <img src="assets/category-1.png" alt="Sofa"/>
          <div className="category-info">
            <h4>Sofa</h4>
            <p>2,120 Products</p>
          </div>
        </article>

        <article className="category-card">
          <img src="assets/category-2.png" alt="Wing Chair"/>
          <div className="category-info">
            <h4>Wing Chair</h4>
            <p>3,584 Products</p>
          </div>
        </article>

        <article className="category-card">
          <img src="assets/category-3.png" alt="Wooden Chair"/>
          <div className="category-info">
            <h4>Wooden Chair</h4>
            <p>157 Products</p>
          </div>
        </article>

        <article className="category-card">
          <img src="assets/category-4.png" alt="Desk Chair"/>
          <div className="category-info">
            <h4>Desk Chair</h4>
            <p>154 Products</p>
          </div>
        </article>

        <article className="category-card">
          <img src="assets/category-5.png" alt="Park Bench"/>
          <div className="category-info">
            <h4>Park Bench</h4>
            <p>156 Products</p>
          </div>
        </article>
      </div>
    </div>
  </section>

      {/* OUR PRODUCTS */}
      <section className="section our-products">
  <div className="container">
    <div className="section__head section__head--center">
      <h2>Our Products</h2>
      <div className="filter-tabs">
        <input type="radio" id="tab1" name="tabs" defaultChecked />
        <label htmlFor="tab1">ALL</label>

        <input type="radio" id="tab2" name="tabs" />
        <label htmlFor="tab2">NEWEST</label>

        <input type="radio" id="tab3" name="tabs" />
        <label htmlFor="tab3">TRENDING</label>

        <input type="radio" id="tab4" name="tabs" />
        <label htmlFor="tab4">BEST SELLERS</label>

        <input type="radio" id="tab5" name="tabs" />
        <label htmlFor="tab5">FEATURED</label>
      </div>
    </div>

    <div className="product-grid product-grid--4">
      <article className="product-card">
        <div className="product-card__image">
          <span className="tag tag--new">New</span>
          <button type="button" className="wishlist-btn">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" rx="8" fill="white" fillOpacity="0.8" />
              <path fillRule="evenodd" clipRule="evenodd" d="M13.6327 21.6315C12.6491 18.5607 13.7977 15.0508 17.0225 14.0122C17.8587 13.7446 18.7468 13.6809 19.6127 13.8263C20.4785 13.9717 21.2971 14.3221 22 14.8482C23.3338 13.8169 25.2743 13.4686 26.9683 14.0122C30.1923 15.0508 31.3491 18.5607 30.3664 21.6315C28.8356 26.499 22 30.2482 22 30.2482C22 30.2482 15.2148 26.5558 13.6327 21.6315V21.6315Z" stroke="#272343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <img src="assets/product-1.png" alt="Library Stool Chair" />
        </div>
        <div className="product-card__info">
          <div>
            <a href="#" className="product-card__name product-card__name--link">Library Stool Chair</a>
            <p className="price">$20</p>
          </div>
          <button type="button" className="add-cart-btn add-cart-btn--active">
            <img src="assets/icon-cart.png" alt="cart" />
          </button>
        </div>
      </article>

      {/* Các product-card khác bạn copy tương tự, đổi class -> className, img -> img /> */}
      <article className="product-card">
          <div className="product-card__image">
            <span className="tag tag--sale">Sales</span>
            <img src="assets/product-2.png" alt="Library Stool Chair"/>
          </div>
          <div className="product-card__info">
            <div>
              <p className="product-card__name">Library Stool Chair</p>
              <p className="price">$20 <span className="price--old">$30</span></p>
            </div>
            <button type="button" className="add-cart-btn"><img src="assets/icon-cart.png" alt=""/></button>
          </div>
        </article>

        <article className="product-card">
          <div className="product-card__image">
            <img src="assets/product-3.png" alt="Library Stool Chair"/>
          </div>
          <div className="product-card__info">
            <div>
              <p className="product-card__name">Library Stool Chair</p>
              <p className="price">$20</p>
            </div>
            <button type="button" className="add-cart-btn"><img src="assets/icon-cart.png" alt=""/></button>
          </div>
        </article>

        <article className="product-card">
          <div className="product-card__image">
            <img src="assets/product-4.png" alt="Library Stool Chair"/>
          </div>
          <div className="product-card__info">
            <div>
              <p className="product-card__name">Library Stool Chair</p>
              <p className="price">$20</p>
            </div>
            <button type="button" className="add-cart-btn"><img src="assets/icon-cart.png" alt=""/></button>
          </div>
        </article>

        <article className="product-card">
          <div className="product-card__image">
            <span className="tag tag--new">New</span>
            <img src="assets/product-7.png" alt="Library Stool Chair"/>
          </div>
          <div className="product-card__info">
            <div>
              <p className="product-card__name">Library Stool Chair</p>
              <p className="price">$20</p>
            </div>
            <button type="button" className="add-cart-btn"><img src="assets/icon-cart.png" alt=""/></button>
          </div>
        </article>

        <article className="product-card">
          <div className="product-card__image">
            <span className="tag tag--sale">Sales</span>
            <img src="assets/product-5.png" alt="Library Stool Chair"/>
          </div>
          <div className="product-card__info">
            <div>
              <p className="product-card__name">Library Stool Chair</p>
              <p className="price">$20 <span className="price--old">$30</span></p>
            </div>
            <button type="button" className="add-cart-btn"><img src="assets/icon-cart.png" alt=""/></button>
          </div>
        </article>

        <article className="product-card">
          <div className="product-card__image">
            <img src="assets/product-6.png" alt="Library Stool Chair"/>
          </div>
          <div className="product-card__info">
            <div>
              <p className="product-card__name">Library Stool Chair</p>
              <p className="price">$20</p>
            </div>
            <button type="button" className="add-cart-btn"><img src="assets/icon-cart.png" alt=""/></button>
          </div>
        </article>

        <article className="product-card">
          <div className="product-card__image">
            <img src="assets/product-1.png" alt="Library Stool Chair"/>
          </div>
          <div className="product-card__info">
            <div>
              <p className="product-card__name">Library Stool Chair</p>
              <p className="price">$20</p>
            </div>
            <button type="button" class="add-cart-btn"><img src="assets/icon-cart.png" alt=""/></button>
          </div>
        </article>
    </div>
  </div>
</section>


      {/* TESTIMONIALS */}
      <section className="section section--gray">
    <div className="container">
      <div className="section__head">
        <h2>What Client Says About Us</h2>
        <div className="nav-arrows">
          <button type="button" className="nav-arrows__btn nav-arrows__btn--active" aria-label="Previous">&#8592;</button>
          <button type="button" className="nav-arrows__btn" aria-label="Next">&#8594;</button>
        </div>
      </div>

      <div className="testimonial-grid">
        <div className="testimonial-card">
          <img src="assets/icon-quote.png" alt="" className="testimonial-card__quote"/>
          <p className="testimonial-card__text">&ldquo;Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Sit Amet Mi Nec Massa Tincidunt Blandit Et Eu Sem. Maecenas Laoreet Ultrices Diam Dignissim Posuere. Aenean Ultrices Dui At Ipsum Sagittis, Pharetra Lacinia Dui Faucibus. In Ac Bibendum Ex. Aenean Dolor Massa, Euismod Sit Amet Suscipit Et&rdquo;</p>
          <div className="testimonial-card__author">
            <img src="assets/avatar-1.png" alt="Kristin Watson"/>
            <div>
              <h5>Kristin Watson</h5>
              <p>Fashion Designer</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <img src="assets/icon-quote.png" alt="" className="testimonial-card__quote"/>
          <p className="testimonial-card__text">Nullam Sapien Elit, Dignissim Eu Viverra Et, Scelerisque Et Felis. Aliquam Egestas Dui Elit, Quis Tincidunt Lacus Aliquam Et. Duis Nulla Velit, Dignissim Ut Odio Ac, Eleifend Luctus Leo. Ut Ac Imperdiet Velit. Aliquam Semper Ex In Volutpat Rutrum.</p>
          <div className="testimonial-card__author">
            <img src="assets/avatar-2.png" alt="Esther Howard"/>
            <div>
              <h5>Esther Howard</h5>
              <p>Fashion Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* RECENTLY ADDED */}
      <section className="section recently-added">
        {/* ... copy toàn bộ product-card từ HTML */}
        <div className="container">
      <div className="section__head">
        <h2>Recently Added</h2>
        <div className="nav-arrows">
          <button type="button" className="nav-arrows__btn nav-arrows__btn--active" aria-label="Previous">&#8592;</button>
          <button type="button" className="nav-arrows__btn" aria-label="Next">&#8594;</button>
        </div>
      </div>

      <div className="product-grid product-grid--4">
        <article className="product-card">
          <div className="product-card__image">
            <span className="tag tag--new">New</span>
            <button type="button" className="wishlist-btn">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" rx="8" fill="white" fill-opacity="0.8"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6327 21.6315C12.6491 18.5607 13.7977 15.0508 17.0225 14.0122C17.8587 13.7446 18.7468 13.6809 19.6127 13.8263C20.4785 13.9717 21.2971 14.3221 22 14.8482C23.3338 13.8169 25.2743 13.4686 26.9683 14.0122C30.1923 15.0508 31.3491 18.5607 30.3664 21.6315C28.8356 26.499 22 30.2482 22 30.2482C22 30.2482 15.2148 26.5558 13.6327 21.6315V21.6315Z" stroke="#272343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <img src="assets/product-1.png" alt="Library Stool Chair"/>
          </div>
          <div className="product-card__info">
            <div>
              <a href="#" className="product-card__name product-card__name--link">Library Stool Chair</a>
              <p className="price">$20</p>
            </div>
            <button type="button" className="add-cart-btn add-cart-btn--active"><img src="assets/icon-cart.png" alt=""/></button>
          </div>
        </article>

        <article className="product-card">
          <div className="product-card__image">
            <span className="tag tag--sale">Sales</span>
            <img src="assets/product-2.png" alt="Library Stool Chair"/>
          </div>
          <div className="product-card__info">
            <div>
              <p className="product-card__name">Library Stool Chair</p>
              <p className="price">$20 <span className="price--old">$30</span></p>
            </div>
            <button type="button" className="add-cart-btn"><img src="assets/icon-cart.png" alt=""/></button>
          </div>
        </article>

        <article className="product-card">
          <div className="product-card__image">
            <img src="assets/product-3.png" alt="Library Stool Chair"/>
          </div>
          <div className="product-card__info">
            <div>
              <p className="product-card__name">Library Stool Chair</p>
              <p className="price">$20</p>
            </div>
            <button type="button" className="add-cart-btn"><img src="assets/icon-cart.png" alt=""/></button>
          </div>
        </article>

        <article className="product-card">
          <div className="product-card__image">
            <img src="assets/product-4.png" alt="Library Stool Chair"/>
          </div>
          <div className="product-card__info">
            <div>
              <p className="product-card__name">Library Stool Chair</p>
              <p className="price">$20</p>
            </div>
            <button type="button" className="add-cart-btn"><img src="assets/icon-cart.png" alt=""/></button>
          </div>
        </article>
      </div>
    </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__about">
            <a href="#" className="logo">
              <img src="assets/logo.png" alt="Comforty logo" />
              <span>Comforty</span>
            </a>
            <p>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus</p>
            <div className="footer__social">
              <a href="#"><img src="assets/social-facebook.png" alt="Facebook" /></a>
              <a href="#"><img src="assets/social-twitter.png" alt="Twitter" /></a>
              <a href="#"><img src="assets/social-instagram.png" alt="Instagram" /></a>
              <a href="#"><img src="assets/social-pinterest.png" alt="Pinterest" /></a>
              <a href="#"><img src="assets/social-youtube.png" alt="Youtube" /></a>
            </div>
          </div>
          {/* ... copy các phần links, newsletter, bottom từ HTML */}
          <div className="footer__links">
        <h5>Category</h5>
        <ul>
          <li><a href="#">Sofa</a></li>
          <li><a href="#">Armchair</a></li>
          <li><a href="#">Wing Chair</a></li>
          <li><a href="#" class="active">Desk Chair</a></li>
          <li><a href="#">Wooden Chair</a></li>
          <li><a href="#">Park Bench</a></li>
        </ul>
      </div>

      <div className="footer__links">
        <h5>Support</h5>
        <ul>
          <li><a href="#">Help &amp; Support</a></li>
          <li><a href="#">Tearms &amp; Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>

      <div className="footer__newsletter">
        <h5>Newsletter</h5>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email"/>
          <button type="submit">Subscribe</button>
        </form>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
      </div>
    </div>

    <div className="footer__bottom">
      <div className="container footer__bottom-inner">
        <p>@ 2021 - Blogy - Designed &amp; Develop by <strong>Zokirsoft</strong></p>
        <img src="assets/payment-icons.png" alt="Mastercard, PayPal, Amex, Visa"/>
      </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
