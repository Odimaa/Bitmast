<template>
  <div class="landing">
    <header>
      <div class="container-fluid p-3">
        <nav class="navbar navbar-expand-lg">
          <router-link to="/Home" activeClass="active">
            <a class="navbar-brand" href="#">
              <img width="250" height="300" src="./img/Bitmast_wht_outline.svg" class="img-fluid" />
            </a>
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-align-right text-light"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="mr-auto"></div>
            <ul class="navbar-nav">
              <router-link to="/Developers" activeClass="active" tag="li">
                <a class="nav-link" href="#">
                  Developers
                  <span class="sr-only">(current)</span>
                </a>
              </router-link>

              <router-link to="/Support" activeClass="active" tag="li">
                <a class="nav-link" href="#">Support</a>
              </router-link>

              <router-link to="/SignIn" activeClass="active" tag="li">
                <button class="btn btn-custom-sign px-5 py-2 primary-btn">Sign In</button>
              </router-link>
            </ul>
          </div>
        </nav>
      </div>
      <div class="container text-left pl-5">
        <div class="row">
          <div class="col-md-7 col-sm-12 text-white">
            <h1>
              Send and Receive
              <br />Cryptocurrency Payments
              <br />Conveniently
            </h1>
            <br />
            <router-link to="/Register" activeClass="active">
              <button class="btn btn-custom px-5 py-2 primary-btn">Create Account</button>
            </router-link>
            <button class="btn btn-custom-cancel px-5 py-2 primary-btn">Learn More</button>
          </div>
          <div class="box col-md-5 col-sm-12">
            <img src="./img/smartphone.svg" class="user" style="width:328px;height:328px;" />
          </div>
        </div>
      </div>
    </header>

    <section class="section-1 container-fluid padding">
      <div class="buy/sell text-center">
        <div class="col-lg-12">
          <h3>Create your Cryptocurrency account to buy and sell</h3>
          <p>With your Bitmast wallet you can buy, sell, or store cryptocurrencies securely.</p>

          <div class="card-deck pt-5">
            <div class="col-lg-4">
              <div class="card card-body">
                <img width="80" height="80" src="./img/pay.svg" class="img-fluid" />

                <h4 class="card-title">Instant Payments</h4>
                <p class="card-text">Send and Receive cryptocurrency payments instantly with wallets</p>
                <br />
                <br />
                <a href="#" class="btn btn-custom-card">Learn More</a>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="card card-body">
                <img width="80" height="80" src="./img/shield.svg" class="img-fluid" />

                <h4 class="card-title">Secure Wallets</h4>
                <p class="card-text">Manage your funds on a secure cryptocurrency wallet</p>
                <br />
                <br />
                <br />

                <a href="#" class="btn btn-custom-card">Learn More</a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card card-body">
                <img width="80" height="80" src="./img/bank.svg" class="img-fluid" />

                <h4 class="card-title">Reliable Cashouts</h4>
                <p class="card-text">Conveniently move funds to verified bank account in minutes</p>
                <br />
                <br />
                <a href="#" class="btn btn-custom-card">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-2 container-fluid">
      <div class="testimonials text-center">
        <h2>Testimonials</h2>
        <p>
          A small river named Duded flows by their supplies it
          with the necessary regelialia.
          <br />Separated they live in Bookmarksgrove right at the
          coast of the Semantics
        </p>
        <div class="row padding">
          <div class="col-md-4 text-center">
            <div class="profile">
              <img src="./img/photo3.jpg" class="user" style="width:128px;height:128px;" />
              <blockquote>
                Even the all-Powerful Pointing has no control about
                the blind texts it is a small line of blind text by the name Lorem Ipsum
                decided to leave or the World of Grammar
              </blockquote>
              <h3>
                David Gere
                <br />
                <span>Co-founder at Amico</span>
              </h3>
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="profile">
              <img src="./img/photo3.jpg" class="user" style="width:128px;height:128px;" />
              <blockquote>
                Even the all-Powerful Pointing has no control about
                the blind texts it is a small line of blind text by the name Lorem Ipsum
                decided to leave or the World of Grammar
              </blockquote>
              <h3>
                David Gere
                <br />

                <span>Co-founder at Amico</span>
              </h3>
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="profile">
              <img src="./img/photo3.jpg" class="user" style="width:128px;height:128px;" />
              <blockquote>
                Even the all-Powerful Pointing has no control about
                the blind texts it is a small line of blind text by the name Lorem Ipsum
                decided to leave or the World of Grammar
              </blockquote>
              <h3>
                David Gere
                <br />
                <span>Co-founder at Amico</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="container-fluid p-5">
        <img width="250" height="300" src="./img/Bitmast_wht_outline.svg" class="img-fluid" />
        <hr class="light-100" />
        <div class="row text-center">
          <div class="col-md-5 p-5">
            <h5>CONTACT</h5>

            <p>
              <i class="fas fa-phone mr-3"></i> +234 800 123 4567
            </p>
            <p>
              <i class="fas fa-envelope mr-3"></i>support@bitmast.com
            </p>
            <p>
              <i class="fas fa-home mr-3"></i> 1 Infinity Drive, Palo Alto, California
            </p>
          </div>

          <div class="col-md-3 p-5">
            <h5>Products</h5>
            <p>Buy & Sell</p>
            <p>Wallet</p>
            <p>Custody</p>
            <p>OTC Cashout</p>
          </div>

          <div class="col-md-3 p-5">
            <h5>Company</h5>
            <p>About</p>
            <p>Affiliates</p>
            <p>Careers</p>
            <p>Legal & Privacy</p>
          </div>

          <div class="col-md-1 p-5">
            <h5>Media</h5>
            <p>Press</p>
            <p>Blog</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
header .nav-item:last-child {
  padding-right: 10.5em;
}

header .nav-item {
  padding: 0.9em;
}

.box img {
  margin-top: 70px;
  margin-left: 50px;
}
.nav-item a {
  color: white;
}
header .navbar-brand {
  padding-left: 8rem;
}

header .nav-link:hover {
  color: black;
}

header .row .col-md-7 {
  padding: 22vmin 1vmin;
  padding-bottom: 35vmin;
}

header .row .col-md-5 {
  padding: 4.2vmin 1vmin;
}

header .row .col-md-5 img {
  width: 90%;
}

header {
  /* background-color: #8487a5; */
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(41, 44, 87, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
}

header .container .col-md-7 {
  font-family: "Rubik", sans-serif;
}

header .container .col-md-7 h6 {
  padding: 1vmin;
  letter-spacing: 4px;
}

header .container .col-md-7 h1 {
  font-size: 8.5vmin;
  font-weight: bold;
  padding: 0.1em 0em;
}

header .container .col-md-7 p {
  padding: 1vmin 5vmin;
}

.btn-custom-sign {
  font-weight: bold;
  color: white;
  border-color: white;
  margin-top: 5px;
}
.btn-signin {
  border-color: white;
  color: white;
  margin-top: 10px;
}

.btn-custom-sign:focus,
.btn-custom-sign:hover,
.btn-custom-sign:active,
.btn-custom-sign:active:focus {
  background: white;
  border-color: #292c57;
  color: #292c57;
}
.navbar-nav li a {
  padding-right: 40px;
  color: white;
  font-size: 15pt;
}
.navbar-nav > li {
  padding-left: 20px;
  padding-right: 20px;
}
.btn-custom {
  background: #ffba08;
  box-shadow: 5px 5px;

  color: #292c57;
  font-size: 15px;
  font-weight: 600;
  min-height: 48px;
  min-width: 135px;
  margin: 5px;
  padding-right: 40px;
  padding-left: 40px;
}

.testimonials p {
  color: #8d9096;
}

.btn-custom-cancel {
  background: white;
  color: #292c57;
  font-size: 15px;
  font-weight: 600;
  min-height: 48px;
  min-width: 135px;
  margin: 5px;
  box-shadow: 5px 5px;

  padding-right: 100px;
  padding-left: 100px;
}

.card-body {
  padding-top: 80px;
  padding-bottom: 80px;
}

.btn-custom-card {
  background: white;
  border-color: #292c57;
}

.btn-custom-card:focus,
.btn-custom-card:hover,
.btn-custom-card:active,
.btn-custom-card:active:focus {
  background: #292c57;
  border-color: #292c57;
  color: #fff;
}

.card-body img {
  align-self: center;
  padding-bottom: 10px;
}
.card-body p {
  color: #8d9096;
}

footer {
  background-color: #393a3d;
  color: #d5d5d5;
  padding-top: 2rem;
}

hr.light {
  border-top: 1px solid #d5d5d5;
  width: 75%;
}

.testimonials .row {
  margin-top: 30px;
}

.col-md-4 {
  margin: 40px auto;
}

.profile {
  padding: 70px 10px 10px;
  background-color: #efefef;
}

.profile img {
  top: -60px;
  position: absolute;
  left: calc(50% - 60px);
  border: 10px solid white;
}

.profile h3 {
  font-size: 20px;
  margin-top: 15px;
  color: #8d9096;
}

span {
  font-size: 12px;
}

blockquote {
  font-size: 16px;
  line-height: 30px;
  color: #8d9096;
}

blockquote::before {
  content: "\93";
  font-size: 50px;
  position: relative;
  color: #8d9096;
  line-height: 20px;
  bottom: -15px;
  right: 5px;
}

blockquote::after {
  content: "\94";
  font-size: 50px;
  position: relative;
  color: #8d9096;
  line-height: 10px;
  bottom: -15px;
  left: 5px;
}

.profile:hover {
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.5s;
}
.user {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
footer a {
  color: #d5d5d5;
}

hr.light-100 {
  border-top: 1px solid#d5d5d5;
  width: 100%;
  margin-top: 0.8rem;
  margin-bottom: 1rem;
}
footer {
  padding-top: 30px;
  padding-right: 120px;
}
footer h5 {
  padding-bottom: 20px;
  text-align: left;
}
.padding {
  padding: 100px;
}

footer p {
  font-size: 10pt;
  text-align: left;
}
</style>