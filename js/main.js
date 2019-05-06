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

/*this javascript is copied, with modifications to some class/function names by me, from Andy Barefoot's article: https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb */

function resizeGridItem(thumbnail){
    grid = document.getElementsByClassName("gallery")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((thumbnail.querySelector('.thumbnail img').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    thumbnail.style.gridRowEnd = "span "+rowSpan;
}
 
function resizeAllGridItems(){
    allItems = document.getElementsByClassName("thumbnail");
    for(x=0;x<allItems.length;x++){
        resizeGridItem(allItems[x]);
    }
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("thumbnail");
for(x=0;x<allItems.length;x++){
    imagesLoaded(allItems[x], resizeInstance);
}

function resizeInstance(instance){
    thumbnail = instance.elements[0];
    resizeGridItem(thumbnail);
}


