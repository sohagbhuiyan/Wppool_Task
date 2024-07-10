window.addEventListener('scroll', function () {
  const nav = document.getElementById('nav');
  const nav2 = document.getElementById('nav2');
  if (window.scrollY > 590) {
    nav.style.display = 'none';
    nav2.style.display = 'flex';
  } else {
    nav.style.display = 'flex';
    nav2.style.display = 'none';
  }
});

//-------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('mobile-menu');
  const closeButton = document.getElementById('closebtn');
  const menuButton2 = document.getElementById('mobile-menu2');
  const navbar = document.getElementById('navbar');

  menuButton.addEventListener('click', function () {
    navbar.style.display = 'block';
  });

  menuButton2.addEventListener('click', function () {
    navbar.style.display = 'block';
  });
  closeButton.addEventListener('click', function () {
    navbar.style.display = 'none';
  });
});
//--------------------------
const pages = document.querySelectorAll(".side-name");

pages.forEach((item) => {
  item.addEventListener('click', active_item);
})

function active_item() {
  pages.forEach((item) => {
    item.classList.remove('is-active');
  });
  this.classList.add('is-active');
}
//------------slider------------
let slideIndex = 1;
// showSlides(slideIndex);
let translatePercentage = 0; // Start with the initial translation percentage

function plusSlides(n) {
  translatePercentage += n * 33;
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slidimg1");
  let slidesAll = document.querySelector(".slider-img");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  slidesAll.style.transform = `translate(${translatePercentage}%)`;
  console.log(slidesAll.style, "------------")
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//---------------chartJS------------
document.addEventListener('DOMContentLoaded', (event) => {
  const ctx = document.getElementById('lineChart').getContext('2d');

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'WPPOOL',
        data: [2, 10, 5, 37, 76, 17, 20,],
        borderColor: '#FF5733',
        fill: false,
      },
      {
        label: 'Google',
        data: [9, 2, 19, 64, 14, 28, 47],
        borderColor: '#4B77BE',
        fill: false,
      },
      {
        label: 'Microsoft',
        data: [7, 9, 18, 45, 16, 85, 20],
        borderColor: '#33FF57',
        fill: false,
      },
      {
        label: 'Twitter',
        data: [0, 35, 20, 45, 20, 5, 89],
        borderColor: '#9B59B6',
        fill: false,
      }
    ]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'The WPPOOL Index'
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
        legend: {
          position: 'top',
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Month'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Percentage Change'
          },
          beginAtZero: true
        }
      }
    }
  };

  const myChart = new Chart(ctx, config);
});

