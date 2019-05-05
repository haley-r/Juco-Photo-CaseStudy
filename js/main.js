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

/*this javascript is basically copied from Andy Barefoot's article: https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb */

function resizeGridItem(item){
    grid = document.getElementsByClassName("grid")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
 }
 
 function resizeAllGridItems(){
    allItems = document.getElementsByClassName("item");
    for(x=0;x<allItems.length;x++){
       resizeGridItem(allItems[x]);
    }
 }
 
 window.onload = resizeAllGridItems();
 
 window.addEventListener("resize", resizeAllGridItems);
 
 allItems = document.getElementsByClassName("item");
 for(x=0;x<allItems.length;x++){
    imagesLoaded( allItems[x], resizeInstance);
 }
 
 function resizeInstance(instance){
    item = instance.elements[0];
    resizeGridItem(item);
 }

/*
function resizeThumbnail(thumblink) {
    gallery = document.getElementById("thumbnails")[0];

    rowHeight = parseInt(window.getComputedStyle(gallery) .getPropertyValue('grid-auto-rows'));

    rowGap = parseInt(window.getComputedStyle(gallery) .getPropertyValue('grid-row-gap'));

    rowSpan = Math.ceil((item.querySelector('.thumbimage') .getBoundingClientRect().height+rowGap)/(rowHeight + rowGap));

    item.style.gridRowEnd = "span "+rowSpan;  
}

function resizeAllThumbnails() {
    allThumbnails = document.getElementsByClassName("thumblink");
    for (x=0;x<allThumbnails.length;x++) {
        resizeThumbnail(allThumbnails[x]);
    }
}

window.onload = resizeAllThumbnails();

window.addEventListener("resize", resizeAllThumbnails);

allThumbnails = document.getElementsByClassName("thumblink");
for(x=0;x<allThumbnails.length;x++){
    imagesLoaded(allThumbnails[x],resizeInstance);
}

function resizeInstance(instance){
    thumblink = instance.elements[0];
    resizeThumbnail(thumblink);
}
*/


