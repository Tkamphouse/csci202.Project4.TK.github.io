userHasScrolled = false;

window.onscroll = function (e) {  
	 userHasScrolled = true;
} 

if(userHasScrolled)
{
	//do your code here
	userHasScrolled = false;
}

		
var scrollW = document.getElementById('wrap-scroll');
var scrollUl = document.getElementById('ul-scroll');
var itemsScrolled, itemsMax, cloned = false;
var listOpts = {
    itemCount: null,
    itemHeight: null,
    items: []
};
function scrollWrap() {
    itemsScrolled = Math.ceil((this.scrollTop + listOpts.itemHeight / 2) / listOpts.itemHeight);
    if (this.scrollTop < 1) {
        itemsScrolled = 0;
    }
    listOpts.items.forEach(function (ele) {
        ele.classList.remove('active');
    });
    if (itemsScrolled < listOpts.items.length) {
        listOpts.items[itemsScrolled].classList.add('active');
    }
    if (itemsScrolled > listOpts.items.length - 3) {
        for (_x = 0; _x <= itemsMax - 1; _x++) {
            if (window.CP.shouldStopExecution(1)) {
                break;
            }
            var node = listOpts.items[_x];
            if (!cloned) {
                node = listOpts.items[_x].cloneNode(true);
            }
            scrollUl.appendChild(node);
        }
        initItems(cloned);
        cloned = true;
        itemsScrolled = 0;
        window.CP.exitedLoop(1);
    }
}
function initItems(scrollSmooth) {
    listOpts.items = [].slice.call(scrollUl.querySelectorAll('li'));
    listOpts.itemHeight = listOpts.items[0].clientHeight;
    listOpts.itemCount = listOpts.items.length;
    if (!itemsMax) {
        itemsMax = listOpts.itemCount;
    }
    if (scrollSmooth) {
        var seamLessScrollPoint = (itemsMax - 3) * listOpts.itemHeight;
        scrollW.scrollTop = seamLessScrollPoint;
    }
}
document.addEventListener('DOMContentLoaded', function (event) {
    initItems();
    scrollW.onscroll = scrollWrap;
});

// ************************** MODAL ****************************
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ************************** MOUSE OVER ****************************
var x = document.getElementById("b_image1");
x.addEventListener("mouseover", mouseOverFunc_B1);
x.addEventListener("mouseout", mouseOutFunc_B1);
function mouseOverFunc_B1() { document.getElementById("b_cap1").style.opacity = 1; }
function mouseOutFunc_B1() { document.getElementById("b_cap1").style.opacity = 0; }

var x = document.getElementById("b_image2");
x.addEventListener("mouseover", mouseOverFunc_B2);
x.addEventListener("mouseout", mouseOutFunc_B2);
function mouseOverFunc_B2() { document.getElementById("b_cap2").style.opacity = 1; }
function mouseOutFunc_B2() { document.getElementById("b_cap2").style.opacity = 0; }



		
		
		

