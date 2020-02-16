const dom = {
  messageBox: document.querySelector('.message'),
  searchForm: document.getElementsByTagName('form'),
  cityInput: document.querySelector('.search__city'),
  countryInput: document.querySelector('.search__country'),
  searchBtn: document.querySelector('.search__btn'),
  infoSection: document.querySelector('.info-section'),
  daySection: document.querySelector('.day-section'),
  hourSection: document.querySelector('.hour-section'),
  unitbtn: document.querySelector('.temp-unit'),
};

function displayMessage(msg) {
  setTimeout(() => {
    dom.messageBox.textContent = msg;
  }, 2000);
}

export { dom, displayMessage };