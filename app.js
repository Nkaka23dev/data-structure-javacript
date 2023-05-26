const getClass = id => content => document.querySelector(`.${id}`).textContent = content;


const selectEle = getClass("header");

selectEle("Hello people")




