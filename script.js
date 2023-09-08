const mobNav = document.querySelector('.nav-list')

document.querySelector('.icon-mobile-nav[name="close"]').addEventListener("click", function() {
    document.querySelector('.nav').classList.remove('nav-open')
})

document.querySelector('.icon-mobile-nav[name="menu"]').addEventListener("click", function() {
    document.querySelector('.nav').classList.add('nav-open')
}
)
document.querySelector('.icon-mobile-nav[name="menu"]').addEventListener("click", function() {
    // document.querySelector('.nav-list').classList.add('nav-open')
    console.log("clicked navigation");
})


document.querySelector('.checking').addEventListener('click', function () {
    console.log('clicked');
    document.querySelector('.added').classList.toggle('ready')
})

// console.log("hello world"););