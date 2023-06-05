let list = [];

const ShowList = (list, tag) => {
  let html = ``;
  list.forEach((item) => {
    html += `
    <div class="col-md-3 col-sm-4">
              <div class="single-new-arrival">
                <div class="single-new-arrival-bg">
                  <img
                    src="${urlImg}/${item.Ma_so}.png"
                    alt="new-arrivals images"
                  />
                  <div class="single-new-arrival-bg-overlay"></div>
          
                  <div class="new-arrival-cart">
                    <p>
                      <span class="lnr lnr-cart"></span>
                      <a href="javaScript:void(0)" onclick="addCart('${item.Ma_so}')">add <span>to </span> cart</a>
                    </p>
                    <p class="arrival-review pull-right">
                      <span class="lnr lnr-heart"></span>
                      <span class="lnr lnr-frame-expand"></span>
                    </p>
                  </div>
                </div>
                <h4><a href="#">${item.Ten}</a></h4>
                <p class="arrival-product-price">$${item.Don_gia_Ban}.00</p>
              </div>
            </div>
    `;
  });
  tag.innerHTML = html;
};

const ShowFeatureProducts = (list, tag) => {
  let html = ``;
  list.forEach((item) => {
    html += `
    <div class="col-sm-3">
        <div class="single-feature">
            <img
                src="${urlImg}/${item.Ma_so}.png"
                alt="feature image"
            />
            <div class="single-feature-txt text-center">
                <p>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <span class="spacial-feature-icon"
                    ><i class="fa fa-star"></i
                ></span>
                <span class="feature-review">(45 review)</span>
                </p>
                <h3><a href="#">${item.Ten}</a></h3>
                <h5>$${item.Don_gia_Ban}.00</h5>
            </div>
        </div>
    </div>
        `;
  });
  tag.innerHTML = html;
};
