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
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slidimg1");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
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
        data: [0, 10, 20, 30, 40, 50, 60],
        borderColor: '#FF5733',
        fill: false,
      },
      {
        label: 'Google',
        data: [0, 15, 30, 45, 60, 75, 90],
        borderColor: '#4B77BE',
        fill: false,
      },
      {
        label: 'Microsoft',
        data: [0, 20, 40, 60, 80, 100, 120],
        borderColor: '#33FF57',
        fill: false,
      },
      {
        label: 'Twitter',
        data: [0, 5, 10, 15, 20, 25, 30],
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