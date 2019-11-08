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
              <router-link to="/Support" activeClass="active" tag="li">
                <a class="nav-link" href="#">Top Ten</a>
              </router-link>

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
                <button class="btn btn-custom-sign px-5 py-2 primary-btn">Account</button>
              </router-link>
            </ul>
          </div>
        </nav>
      </div>
      <div class="container text-center pl-5">
        <div class="row">
          <div class="col-md-12 col-sm-12 p-5">
            <h1>Explore our Cryptocurrency Database</h1>
            <p class="text-white">Compare prices between crypto and flat currencies on the fly</p>

            <div class="card card-body p-5">
              <div class="input-group pb-4">
                <input
                  type="number"
                  id="searchbygenerals_priceTo"
                  name="searchbygenerals[priceTo]"
                  required="required"
                  class="form-control"
                  value="0"
                />

                <!-- insert this line -->
                <span
                  class="input-group-addon"
                  style="width:0px; padding-left:0px; padding-right:0px; border:none;"
                ></span>

                <select
                  id="searchbygenerals_currency"
                  name="searchbygenerals[currency]"
                  class="form-control"
                >
                  <option value="1">BTC</option>
                  <option value="2">BTH</option>
                </select>
              </div>
              <button type="button" class="btn btn-custom btn-lg btn-block">EQUALS</button>

              <div class="input-group pt-4">
                <input
                  type="number"
                  id="searchbygenerals_priceTo"
                  name="searchbygenerals[priceTo]"
                  required="required"
                  class="form-control"
                  value="0"
                />

                <!-- insert this line -->
                <span
                  class="input-group-addon"
                  style="width:0px; padding-left:0px; padding-right:0px; border:none;"
                ></span>

                <select
                  id="searchbygenerals_currency"
                  name="searchbygenerals[currency]"
                  class="form-control"
                >
                  <option value="1">NGN</option>
                  <option value="2">EUR</option>
                </select>
              </div>
            </div>
          </div>
          <!-- <p class="text-white">Compare prices between crypto and flat currnecies on the fly</p> -->
        </div>
      </div>
    </header>

    <button class="main-btn pb-3">&#9660;</button>

    <section class="section-1 container-fluid padding">
      <div class="buy/sell text-center">
        <div class="col-lg-12">
          <h3>TRENDING CURRENCIES</h3>
          <div class="search p-4">
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
            <input
              type="text"
              class="searchTerm"
              placeholder="Search our database using keywords, cryptocurrencies etc."
            />
          </div>

          <div class="table-responsive p-4">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">COIN</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">CHART</th>
                  <th scope="col">CHANGE</th>
                  <th scope="col">SUPPLY</th>
                  <th scope="col">TRADE VOLUME</th>
                  <th scope="col">
                    ADD NOTIFICATION
                    <i class="fa fa-bell"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
header .nav-item:last-child {
  padding-right: 10.5em;
}

header .nav-item {
  padding: 0.9em;
}

.card-body {
  margin: auto;
  width: 50%;
  background-color: transparent;
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

.table thead {
  color: white;
  background-color: #292c57;
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

header .container .col-md-12 h1 {
  font-size: 8.5vmin;
  font-weight: bold;
  padding: 0.1em 0em;
  color: #ffba08;
}

header .container .col-md-7 p {
  padding: 1vmin 5vmin;
}

.btn-custom {
  background: #ffba08;
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

.search {
  width: 100%;
  position: relative;
  display: flex;
}
.fa-search {
  color: #8d9096;
}

.searchTerm {
  width: 100%;
  border: 1px solid #8d9096;
  border-left: none;
  padding: 5px;

  height: 55px;
  outline: none;
  color: #8d9096;
}

.searchTerm:focus {
  color: #8d9096;
}

.searchButton {
  width: 40px;
  height: 55px;
  border: 1px solid #8d9096;
  background: white;
  text-align: center;
  border-right: none;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
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
.col-md-4 {
  margin: 40px auto;
}

.padding {
  padding: 100px;
}

.main-btn {
  background-color: #ffc400;
  border: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: block;
  position: absolute;
  transform: translateY(-50%) translateX(-50%);
  font-weight: bold;
  font-size: 2em;
  color: white;
  left: 50%;
  border-radius: 50%;
  filter: drop-shadow(16px 16px 20px blue);
  -webkit-filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.5));
  cursor: pointer;
  transition: background-color 0.1s ease-out;
}
.main-btn:hover {
  background-color: #ffcc11;
}
</style>