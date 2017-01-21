

    //set page to 0 on refresh//////////////////////////////
    window.onbeforeunload = function () {
        window.scrollTo(0,0);
    }

    //PAGE LOAD FUNCTIONS PRACTICE
    function pageLoadAnimation(){
        elBody.classList.add('page-load');
    }

    //SCROLL ANIMATIONS FOR PAGE
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

    //UPDATE AND CLEAR FUNCTIONS FOR DATA ON PAGE
    // function update(){
    //     var username = 'Molly';
    //     var message = 'See our upcoming range';
    //
    //     var elName = document.getElementById('name');
    //     elName.textContent = username;
    //
    //     var elNote = document.getElementById('note');
    //     elNote.textContent = message;
    //
    // }

    // var clearBtn = function(){
    //     var resetName = 'Friend';
    //     var resetMessage = 'How are you today?';
    //
    //     var elName = document.getElementById('name');
    //     elName.textContent = resetName;
    //
    //     var elNote = document.getElementById('note');
    //     elNote.textContent = resetMessage;
    // }

    // VARIABLES FOR UPDATE FUNCTIONS////////////////////
    ////////////////////////////////////////////////////
    // var btn = document.getElementById('btn');
    // btn.onclick = update;

    // var clear = document.getElementById('clear');
    // clear.onclick = clearBtn;

    //GET CLASS NAME HOT
    var elHotBtn = document.getElementById('hotBtn');
    elHotBtn.onclick = changeHot;

    //GET CHANGE LAST CHILD
    elLast = document.getElementById('four');
    elLast.onclick = changeLast;

    //PAGE ANIMATION VARIABLES
    var elBody = document.getElementsByTagName('body')[0];
    elBody.onload = pageLoadAnimation;

    var winScroll = window;
    winScroll.onscroll = scrollAnimation;
