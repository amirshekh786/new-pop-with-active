const addClass = document.querySelector('#addClass');
const mypop = document.querySelector('#mypop');
const body = document.querySelector('body');
const titel = document.querySelector('#titel');
const poppup = document.querySelector('.poppup');


addClass.addEventListener("click", function() {
  if (body.classList.contains('active')) {
    body.classList.remove('active');
    titel.innerText = "Light Off Hai";
    titel.style.color = "black";
    addClass.innerHTML = "Add Class";
    poppup.style.opacity = "0";
    alert("Light Off Ho Raha Hai");
  }else 
  {
    body.classList.add('active');
    titel.innerText = "Light Aa Gayi Hai";
    titel.style.color = "darkgreen";
    addClass.innerHTML = "Remove Class";
    alert("Light Aa Gayi Hai");
  }
});

mypop.addEventListener("click", function() {
    if (body.classList.contains('active')) {
        if (poppup.style.opacity === '1') {
            poppup.style.opacity = '0';
            mypop.innerHTML = "Show Popup";
        } else {
            poppup.style.opacity = '1';
            mypop.innerHTML = "Close Popup";
        }
    } else {
        alert('Light nahi he');
        poppup.style.opacity = '0';
        mypop.innerHTML = "Show Popup";
    }
});