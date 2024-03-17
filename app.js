var listCounter = document.querySelectorAll('.counter')
var upLoadPicture = document.querySelector('#mypicture')
var pre = document.querySelector('.preview')

// lay avatar trong localStorage
function init(){
    let oldUrl = localStorage.getItem('avatar')
    var img = document.createElement('img')
    img.src = oldUrl
    pre.appendChild(img)
}

init()

// change avatar
upLoadPicture.addEventListener('change', (e) => {

    var file = upLoadPicture.files[0];
    var urls = URL.createObjectURL(file)
    var img = document.createElement('img')
    img.src = urls
    pre.appendChild(img)

    localStorage.setItem('avatar', urls)
})

// ham count tu dong
function count(el){
    var count = 0;

    var NumberEl = el.querySelector('.number')
    var to = parseInt(NumberEl.innerText)

    let counting = setInterval(() => {
        count += to / 100;

        if(count > to){
            // xoa ham counting
            clearInterval(counting);
            NumberEl.innerText = to;
        } else {
            NumberEl.innerText = Math.round(count);
        }
    }, 1)
}

listCounter.forEach(item => {
    count(item)
})