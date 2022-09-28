/************************** START SMOOTH ANCHOR LINK ***************************/
var linkNavList = document.querySelectorAll('.c-header__list')
for (var indexLinkHome = 0; indexLinkHome < linkNavList.length; indexLinkHome++) {
    linkNavList[indexLinkHome].onclick = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
}

/************************** END SMOOTH ANCHOR LINK ***************************/




/************************** START BUTTON LOAD ***************************/
// GET ITEM MOBILE
var itemMobileList = document.querySelectorAll('.c-itemmobile')
// GET BUTTON LOAD
var buttonLoadList = document.querySelectorAll('.c-itemmobile__contentbutton');

for (var indexLoad = 0; indexLoad < buttonLoadList.length; indexLoad++) {
    buttonLoadList[indexLoad].onclick = (e) => handleLoad(e.target.parentNode)
}

function handleLoad(btnObj) {
    if (btnObj.parentNode.parentNode.classList.contains("c-itemactive")) {
        btnObj.parentNode.parentNode.classList.remove("c-itemactive")
    } else if (!btnObj.parentNode.parentNode.classList.contains("c-itemactive")) {
        for (var i4 = 0; i4 < itemMobileList.length; i4++) {
            itemMobileList[i4].classList.remove("c-itemactive")
        }
        btnObj.parentNode.parentNode.classList.add("c-itemactive")
    }
}

/************************** END BUTTON LOAD ***************************/




/************************** START CLICK BUTTON MORE ***************************/
// GET EACH PART OF CONTENT ITEM
var contentItemList1 = document.querySelectorAll('.c-part1:nth-of-type(1) .c-part1__contentitem')
var contentItemList2 = document.querySelectorAll('.c-part1:nth-of-type(2) .c-part1__contentitem')
var contentItemList3 = document.querySelectorAll('.c-part1:nth-of-type(3) .c-part1__contentitem')

// GET ALL BUTTON MORE
var buttonMoreList = document.querySelectorAll('.c-morebtn__icon');

for (var indexBtn = 0; indexBtn < buttonMoreList.length; indexBtn++) {
    buttonMoreList[indexBtn].onclick = (e) => handleClick(e.target.parentNode)
}

function handleClick(btnObj) {
    for (var i = 0; i < contentItemList1.length; i++) {
        if (btnObj.parentNode.parentNode.parentNode.isEqualNode(contentItemList1[i])) {
            for (var j = 0; j < contentItemList1.length; j++) {
                contentItemList1[j].classList.remove("c-active")
            }
            btnObj.parentNode.parentNode.parentNode.classList.add("c-active")
        }
    }
    for (var ii = 0; ii < contentItemList2.length; ii++) {
        if (btnObj.parentNode.parentNode.parentNode.isEqualNode(contentItemList2[ii])) {
            for (var jj = 0; jj < contentItemList2.length; jj++) {
                contentItemList2[jj].classList.remove("c-active")
            }
            btnObj.parentNode.parentNode.parentNode.classList.add("c-active")
        }
    }
    for (var iii = 0; iii < contentItemList3.length; iii++) {
        if (btnObj.parentNode.parentNode.parentNode.isEqualNode(contentItemList3[iii])) {
            for (var jjj = 0; jjj < contentItemList3.length; jjj++) {
                contentItemList3[jjj].classList.remove("c-active")
            }
            btnObj.parentNode.parentNode.parentNode.classList.add("c-active")
        }
    }
}
/************************** END CLICK BUTTON MORE ***************************/



/************************** START SLIDER ANIMATION ***************************/

const slider1 = document.querySelector('.c-part1__contentmobilewrap1')
const slider2 = document.querySelector('.c-part1__contentmobilewrap2')
const slider3 = document.querySelector('.c-part1__contentmobilewrap3')

let isDown = false;
let startX;
let scrollLeft;

/* SLIDER 1 */
slider1.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider1.offsetLeft;
    scrollLeft = slider1.scrollLeft;
})
slider1.addEventListener('mouseleave', () => {
    isDown = false;

})
slider1.addEventListener('mouseup', () => {
    isDown = false;

})
slider1.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX  - slider1.offsetLeft;
    const walk = (x - startX) * 2;
    slider1.scrollLeft = scrollLeft - walk;
})

/* SLIDER 2 */
slider2.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider2.offsetLeft;
    scrollLeft = slider2.scrollLeft;
})
slider2.addEventListener('mouseleave', () => {
    isDown = false;

})
slider2.addEventListener('mouseup', () => {
    isDown = false;

})
slider2.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX  - slider2.offsetLeft;
    const walk = (x - startX) * 2;
    slider2.scrollLeft = scrollLeft - walk;
})

/* SLIDER 3 */
slider3.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider3.offsetLeft;
    scrollLeft = slider3.scrollLeft;
})
slider3.addEventListener('mouseleave', () => {
    isDown = false;

})
slider3.addEventListener('mouseup', () => {
    isDown = false;

})
slider3.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX  - slider3.offsetLeft;
    const walk = (x - startX) * 2;
    slider3.scrollLeft = scrollLeft - walk;
})

/************************** END SLIDER ANIMATION ***************************/




/************************** START MENU ***************************/
var btnBackToPage = document.querySelector('.c-menu__btnback')
var btnFixedMenu = document.querySelector('.c-menubtn')

var fixedMenu = document.querySelector('.l-fixedmenu')
var homePage = document.querySelector('.l-wrapper')

btnBackToPage.onclick = () => {
    fixedMenu.setAttribute('style', 'display: none');
    homePage.setAttribute('style', 'display: block')
    btnFixedMenu.setAttribute('style', 'display: block')

}

btnFixedMenu.onclick = () => {
    homePage.setAttribute('style', 'display: none')
    btnFixedMenu.setAttribute('style', 'display: none')
    fixedMenu.setAttribute('style', 'display: block');
}
/************************** END MENU ***************************/



/************************** START MENU LINK ***************************/
var linkFixedMenu = document.querySelectorAll('.c-menu__contentitem a')
console.dir(linkFixedMenu);

for (var indexLink = 0; indexLink < linkFixedMenu.length; indexLink++) {
    linkFixedMenu[indexLink].onclick = (e) => {
        console.dir(e.target)
        fixedMenu.setAttribute('style', 'display: none');
        btnFixedMenu.setAttribute('style', 'display: block')
        homePage.setAttribute('style', 'display: block')
    }
}

/************************** END MENU LINK ***************************/

/************************** START MOVING LEAF ***************************/
var leaf1 = document.querySelector('.c-bganimation__leaf1')
var leaf2 = document.querySelector('.c-bganimation__leaf2')
var dropList = document.querySelectorAll('.c-drop img')

window.onscroll = () => leafMove();
function leafMove() {
    if (window.scrollY > 0) {
        leaf1.setAttribute('style', 'animation: leafMoveUp linear 0.3s forwards')
        leaf2.setAttribute('style', 'animation: leafMoveRight linear 0.3s forwards')
        for (var indexDrop1 = 0; indexDrop1 < dropList.length; indexDrop1++) {
            dropList[indexDrop1].setAttribute('style', 'animation: dropMoveUp linear 1s forwards')
        }
    } else {
        leaf1.setAttribute('style', 'animation: leafMoveDown linear 0.3s forwards')
        leaf2.setAttribute('style', 'animation: leafMoveLeft linear 0.3s forwards')
        for (var indexDrop2 = 0; indexDrop2 < dropList.length; indexDrop2++) {
            dropList[indexDrop2].setAttribute('style', 'animation: dropMoveDown linear 1s forwards')
        }
        setTimeout(dropStruggle, 1000)
    }
}
function dropStruggle() {
    for (var indexDrop3 = 0; indexDrop3 < dropList.length; indexDrop3++) {
        dropList[indexDrop3].setAttribute('style', 'animation: struggle ease-out 1s alternate infinite')
    }
}
/************************** END MOVING LEAF ***************************/