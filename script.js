let items = document.querySelectorAll('.slider .list .item');

let nextButton = document.querySelector('#next');

let prevButton = document.querySelector('#prev');

let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItems = items.length;
let itemActive = 0; //position of active item

nextButton.onclick = function() {
  itemActive = (itemActive + 1) % countItems;
  showSlider();
}

prevButton.onclick = function() {
  itemActive = (itemActive - 1 + countItems) % countItems;
  showSlider();
}

//auto run slider 
let refreshInterval = setInterval( () => {
  nextButton.click();
}, 5000)

function showSlider() {
  //remove old active item
  let activeOldItem = document.querySelector('.slider .list .item.active');
  let activeOldThumbnail = document.querySelector('.thumbnail .item.active')
  activeOldItem.classList.remove('active');
  activeOldThumbnail.classList.remove('active');
  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');

  //clearing the refreshInterval Counter
  clearInterval(refreshInterval);
  //then again start from beginning till 3s are completed to auto run the next counter
  refreshInterval = setInterval( () => {
    nextButton.click();
  }, 5000);
}

//if user clicks on any thumbnail image, then corresponding slider image will be displayed
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    itemActive = index;
    showSlider();
  })
})