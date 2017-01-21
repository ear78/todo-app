

    //set page to 0 on refresh//////////////////////////////
    window.onbeforeunload = function () {
        window.scrollTo(0,0);
    }

    //PAGE LOAD FUNCTIONS PRACTICE//////////////////////////
    function pageLoadAnimation(){
        elBody.classList.add('page-load');
    }

    //SCROLL ANIMATIONS FOR PAGE///////////////////////////
    function scrollAnimation(){
        console.log('scrolled');
        var elDiv = document.getElementById('footerId');
        var elMidSection = document.getElementById('midSectionId');
        var elThirdSection = document.getElementById('thirdSectionId');
        var flag = window.pageYOffset;
        // IF GREATER THAN 200PX SCROLLED MID SECTION ANIMATED AND FOOTER
        if(flag > 100){
            console.log('scrolled 200');
            elMidSection.classList.add('mid-section-active');

            setTimeout(function(){
                elDiv.classList.add('color-change');
            }, 1200);
        }
        // IF GREATER THAN 250PX THIRD SECTION ANIMATED
        if(flag > 125){
            elThirdSection.classList.add('third-section-active');
        }

    }

    // CHANGE TO KOOL CLASS//////////////////////////////////////
    function changeHot(){
        var elHot = document.querySelectorAll('li.hot');
        for(var i = 0; i < elHot.length; i++){
            elHot[i].classList.add('cool');
        }
    }

    function changeLast(){
        var elList = document.querySelectorAll('li');
        for(var i = 0; i < elList.length; i++){
            if(i === elList.length - 1){
                elList[i].classList.add('cool');
            }
        }
    }



    //PAGE ANIMATION VARIABLES
    var elBody = document.getElementsByTagName('body')[0];
    elBody.onload = pageLoadAnimation;

    var winScroll = window;
    winScroll.onscroll = scrollAnimation;

    // GET THE LIST
    var list = document.getElementsByTagName('ul')[0];

    // ADD NEW ITEM TO END OF LIST
    var newItemLast = document.createElement('li');
    var newTextLast = document.createTextNode('Cream');
    newItemLast.appendChild(newTextLast);
    list.appendChild(newItemLast);

    // ADD NEW ITEM START OF LIST
    var newItemFirst = document.createElement('li');
    var newTextFirst = document.createTextNode('Apples');
    newItemFirst.appendChild(newTextFirst);
    list.insertBefore(newItemFirst, list.firstChild);

    // ADD NUMBER OF ITEMS TO HEADING
    var listItems = document.querySelectorAll('li');
    var heading = document.querySelector('h2');
    var headingText = heading.firstChild.nodeValue;
    var totalItems = listItems.length;
    var newHeading = headingText + '<span>' + totalItems + '<span>';
    heading.innerHTML = newHeading;

    //GET CLASS NAME HOT
    var elHotBtn = document.getElementById('hotBtn');
    elHotBtn.onclick = changeHot;

    //GET CHANGE LAST CHILD
    elLast = document.getElementById('four');
    elLast.onclick = changeLast;
