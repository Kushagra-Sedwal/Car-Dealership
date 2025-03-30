
    const carImg = document.getElementById('car');
    const red = document.getElementById('blue');
    const black = document.getElementById('grey');
    const white = document.getElementById('black');
    red.addEventListener('click', function(){
        carImg.src = `images/blue.png`;
    });
    black.addEventListener('click', function(){
        carImg.src = `images/black.png`;
    });
    white.addEventListener('click', function(){
        carImg.src = `images/grey.png`;
    });

    function openTab(event, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.classList.add("active");
        };
    
        