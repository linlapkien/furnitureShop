let carts = [];

const addCart = (maSo) => {
  //Nhóm mặt hàng
  apiFucniture().then((result) => {
    let id = maSo;
    let sl = 1;
    //lưu trữ vào session
    let vt = -1;
    //Lưu vào sessionStorage
    if (sessionStorage.getItem('carts') != undefined) {
      carts = JSON.parse(sessionStorage.getItem('carts'));
      vt = carts.findIndex((item) => item.maso == id);
    }

    if (vt == -1) {
      let tmp = result.find((x) => x.Ma_so == id);
      let cart = {
        maso: id,
        soluong: sl,
        ten: tmp.Ten,
        dongiaban: Number(tmp.Don_gia_Ban),
      };
      carts.push(cart); // Thêm
    } else {
      carts[vt].soluong += sl; // Cập nhật lại số lượng
    }

    if (carts.length > 0) {
      sessionStorage.setItem('carts', JSON.stringify(carts));
    } else {
      sessionStorage.removeItem('carts');
    }
    document.getElementById('show_cart_quantity').innerHTML = carts.length;

    carts = JSON.parse(sessionStorage.getItem('carts'));
    console.log(carts);
    ShowCartList(show_cart_list);
  });
};

const ShowCartList = (tag) => {
  let html = ``;
  console.log(carts);
  carts.forEach((item) => {
    html += `
    <li class="single-cart-list">
        <a href="#" class="photo"
            ><img
            src="${urlImg}/${item.maso}.png"
            class="cart-thumb"
            alt="image"
        /></a>
        <div class="cart-list-txt">
            <h6>
            <a href="#"
                >${item.ten}</a
            >
            </h6>
            <p>${item.soluong} x - <span class="price">$${item.dongiaban}.00</span></p>
        </div>
        <!--/.cart-list-txt-->
        <div class="cart-close">
            <span class="lnr lnr-cross"></span>
        </div>
        <!--/.cart-close-->
    </li>
      
      `;
  });
  tag.innerHTML = html;
  TotalCost();
};

const TotalCost = () => {
  if (carts.length < 1) return;
  let total = 0;
  carts = JSON.parse(sessionStorage.getItem('carts'));
  carts.forEach((item) => {
    total += item.soluong * item.dongiaban;
  });
  showTotalCost.innerHTML = `
    <span>Total: $${total}.00</span>
    <button
    class="btn-cart pull-right"
    onclick="window.location.href='../cart/index.html'"
    >
        view cart
    </button>
  `;
};

const xuatCart = (carts, Th_Cha) => {
  let html = '';
  let total = 0;
  carts.forEach((item) => {
    total += item.dongiaban * item.soluong;
    html += `
              <tr>
                  <td><img
                  class="card-img-top"
                  style="width:100px"
                  src="${urlImg}/${item.maso}.png"
                  /></td>
                  <td>${item.soluong}</td>
                  <td>${item.ten}</td>
                  <td>$${item.dongiaban.toLocaleString()}.00</td>
                  <td>$${(
                    item.dongiaban * item.soluong
                  ).toLocaleString()}.00</td>
                  <td><a href="#!" style="color: red" onclick="xoaGiohang('${
                    item.maso
                  }')">Xoá</a></td>
              </tr>
          `;
  });
  Th_Cha.innerHTML = html;
  if (carts.length >= 1) tongThanhTien();
  else {
    Th_TongThanhTien.innerHTML = '';
  }
};

const tongThanhTien = () => {
  let total = 0;
  carts = JSON.parse(sessionStorage.getItem('carts'));
  carts.forEach((item) => {
    total += item.soluong * item.dongiaban;
  });
  Th_TongThanhTien.innerHTML = `
              <p style="text-align: right; color:red">Tổng thành tiền: $${total.toLocaleString()}.00</p>
          `;
};

const xoaGiohang = (Ma_so) => {
  carts = JSON.parse(sessionStorage.getItem('carts'));
  let vt = carts.findIndex((x) => x.maso == Ma_so);
  carts.splice(vt, 1);
  sessionStorage.setItem('carts', JSON.stringify(carts));
  xuatCart(carts, Th_TableGioHang);
};

const datHang = () => {
  sessionStorage.clear();
  alert('Đơn đặt hàng thành công...');
  window.location.reload();
  window.location.href = '../home/index.html';
};
