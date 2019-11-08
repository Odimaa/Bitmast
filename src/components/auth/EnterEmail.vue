<template>
  <div class="container-fluid">
    <div class="sign">
      <div class="row">
        <div class="col-lg-5 pl-0 pr-0">
          <div class="bgimg">
            <div class="logo">
              <img width="300" height="300" src="./img/Bitmast_wht_outline.svg" alt="flamingo" />
            </div>
            <div class="box">
              <img width="350" height="400" src="./img/drawing.svg" alt="flamingo" />
            </div>
          </div>
        </div>

        <div class="col-lg-7 py-5">
          <div class="container-fluid py-5">
            <div class="card card-body">
              <div class="d-flex justify-content-center align-items-center login-container">
                <form class="login-form text-center">
                  <h2 class="mb-5 font-weight-bold">What's your email</h2>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control mb-4 form-control-lg"
                      placeholder="Enter Email"
                    />
                  </div>
                  <router-link to="/Signupcode" activeClass="active">
                    <button type="button" class="btn mt-2 btn-custom btn-lg">Register Email</button>
                  </router-link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bgimg {
  height: 800px;
  background-color: #3f426a;
}
.floated {
  float: left;
  margin-right: 5px;
}
.logo img {
  position: absolute;
  left: 5rem;
}

.box img {
  position: absolute;
  bottom: 0;
  left: 5rem;
}
container-fluid {
  overflow: hidden;
}

.card-body {
  padding: 7rem;
}

.login-form .form-control {
  font-size: 15px;
  min-height: 60px;
  font-weight: 500;
}
.login-form a {
  text-decoration: none;
  color: #666;
}
.login-form a:hover {
  color: #292c57;
}
.forgot-link {
  font-size: 13px;
}

.form-control:focus {
  border-color: #292c57;
  box-shadow: 0 0 0 0.2rem rgba(114, 61, 190, 0.25);
}
.btn-custom {
  background: #ffba08;
  border-color: white;

  color: #292c57;
  font-size: 15px;
  font-weight: 600;
  min-height: 48px;
  min-width: 135px;
  right: 10px;
  padding-left: 40px;
  padding-right: 40px;
  margin-right: 90px;
}
</style>