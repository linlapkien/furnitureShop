const urlService = `https://js282.onrender.com`;

const urlImg = `https://res.cloudinary.com/daacyls4c/image/upload/v1/furniture`;

const apiFucniture = () => {
  return new Promise((resolve, reject) => {
    const Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.onload = () => {
      var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText);
      resolve(Doi_tuong_Kq);
    };
    let apiName = 'furnitureList';
    Xu_ly_HTTP.open('GET', `${urlService}/${apiName}`);
    Xu_ly_HTTP.send();
  });
};
