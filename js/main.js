var menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', function(){
    document.querySelector('body')
      .classList
      .toggle('nav-open')
});

var ToggleName = document.querySelector('.menu-toggle');

ToggleName.addEventListener('click', function(){
    document.querySelector('header h2')
        .innerHTML= 'Menu'
}
)

var ToggleName = document.querySelector('.menu-toggle');

ToggleName.addEventListener('click', function(){
    document.querySelector('.nav-open header h2')
        .innerHTML= 'Close'
}
)




