
    const carImg = document.getElementById('car');
    const red = document.getElementById('blue');
    const white = document.getElementById('grey');
    const black = document.getElementById('red');
    red.addEventListener('click', function(){
        carImg.src = `images/blue.jpg`;
    });
    black.addEventListener('click', function(){
        carImg.src = `images/red.jpg`;
    });
    white.addEventListener('click', function(){
        carImg.src = `images/grey.jpg`;
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
    
        