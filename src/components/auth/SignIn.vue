<template>
  <div class="container-fluid">
    <div class="sign">
      <div class="row">
        <div class="col-lg-5 pl-0 pr-0">
          <div class="bgimg">
            <div class="logo">
              <router-link to="/Home" activeClass="active">
                <img width="300" height="300" src="./img/Bitmast_wht_outline.svg" alt="flamingo" />
              </router-link>
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
                  <h2 class="mb-5 font-weight-bold">Sign in to your account</h2>
                  <div class="form-group">
                    <input
                      type="tel"
                      class="form-control mb-4 form-control-lg"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control mb-4 form-control-lg"
                      placeholder="Password"
                    />
                  </div>
                  <div
                    class="forgot-link form-group d-flex justify-content-between align-items-center"
                  >
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="remember" />
                      <label class="form-check-label" for="remember">Remember Password</label>
                    </div>
                    <a href="#">Forgot Password?</a>
                  </div>

                  <button type="button" class="btn mt-5 btn-custom-cancel btn-lg">Cancel</button>
                  <button type="button" class="btn mt-5 btn-custom btn-lg">Sign In</button>

                  <p class="mt-3 font-weight-normal">
                    Don't have an account?
                    <a href="#">
                      <strong>Sign In</strong>
                    </a>
                  </p>
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
  margin: 5px;
}

.btn-custom-cancel {
  background: white;
  border-color: #292c57;
  color: #292c57;
  font-size: 15px;
  font-weight: 600;
  min-height: 48px;
  min-width: 135px;
  margin: 5px;
}
.btn-custom:focus,
.btn-custom:hover,
.btn-custom:active,
.btn-custom:active:focus {
  background: #292c57;
  border-color: #292c57;
  color: #fff;
}
.btn-custom:focus {
  box-shadow: 0 0 0 0.2rem rgba(114, 61, 190, 0.25);
}
</style>