let newsValue = document.getElementById("addnews")
let img = document.getElementById("image")
let title = document.getElementById("title")
let description = document.getElementById("description")
let description2 = document.getElementById("description2")
let readmore = document.getElementById("readmore")

let arr = []
let titleArr = []
let desArr = []
let value = "latest"
let placeholderImage = "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
// console.log(newsValue);
let apiKey = `https://newsapi.org/v2/everything?q=${value}&apiKey=be1981aebd86456395c70feeb50522ea`


async function getNews() {
  try {
    const response = await fetch(apiKey);
    const data = await response.json();
    const newsData = data.articles;

    newsData.forEach(news => {
      const newsItem = {
        urlimage: news.urlToImage || placeholderImage,
        title: news.title,
        description: news.description,
        link: news.url
      };

      const imageresponse = `
        <div class="swiper-slide">
          <img src="${newsItem.urlimage}" class="img-fluid w-100 h-100 object-fit newsimg position-relative" alt="" />
        </div>`;

      const titleresponse = `
        <div class="swiper-slide">
          <h2 class="heading fw-bold pt-4 text-start">${newsItem.title}</h2>
          
        </div>`;

      const descriptionVal = `<div class="swiper-slide mb-3">
       <h2 class="heading fw-bold pt-4 text-start d-block pb-3 d-lg-none ">${newsItem.title}</h2>
                      <p class="mb-0 text-gray pe-0 pe-lg-5  text-start">
                      ${newsItem.description}
                      </p>
                      <div class ="d-flex mt-1"><a href="${newsItem.link}" target="blank" class="text-decoration-none curser readmore fw-bold  border-bottom primary-text">Read more</a></div>
                    </div>`

      arr.push(imageresponse);
      titleArr.push(titleresponse);
      desArr.push(descriptionVal)
    });


    let newArr = arr.join("")
    img.innerHTML = newArr
    description.innerHTML = desArr.join("")
    description2.innerHTML = desArr.join("")

    title.innerHTML = titleArr.join("");
    // newsValue.innerHTML = arr.join("");
    // console.log(arr);
    // ✅ Initialize Swiper only after content is inserted
    new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      },
    });

  } catch (error) {
    console.error("Error fetching news:", error);
  }
}

// document.addEventListener("DOMContentLoaded", getNews);
getNews()