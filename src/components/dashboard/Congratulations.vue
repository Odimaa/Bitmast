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
              <img width="350" height="400" src="./img/celebration.svg" alt="flamingo" />
            </div>
          </div>
        </div>

        <div class="col-lg-7 py-5">
          <div class="container-fluid py-5">
            <div class="card card-body">
              <div class="d-flex justify-content-center align-items-center login-container">
                <form class="login-form text-left">
                  <h2 class="mb-5 font-weight-bold">Congratulations!</h2>
                  <img width="100" height="100" src="./img/new-product.svg" alt="flamingo" />
                  <br />
                  <br />
                  <p>
                    Good job! You've succesfully registered your Bitmast account.
                    You now have an active wallet that can be used for transactions
                  </p>
                  <button type="button" class="btn mt-2 btn-custom btn-lg">Proceed to Dashboard</button>
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
  margin-right: 190px;
}
</style>