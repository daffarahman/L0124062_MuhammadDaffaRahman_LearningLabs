// Banner
let bannerImages = [
  "./img/banner1.jpg",
  "./img/banner2.jpg",
  "./img/banner3.jpg",
];
let bannerElement = document.getElementById("banner-image");
let bannerIdx = 0;
const updateBannerImage = () => {
  bannerElement.src = bannerImages[bannerIdx];
  bannerIdx = (bannerIdx + 1) % bannerImages.length;
};

setInterval(updateBannerImage, 2000);
