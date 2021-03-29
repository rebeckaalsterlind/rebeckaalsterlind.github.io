	//Toggle between hiding and showing the dropdown content
    document.getElementById("hbBtn").addEventListener("click", function(){
        document.getElementById("myDropdown").classList.toggle("show");
    });

    window.addEventListener("click", function(evt) {
        if (!evt.target.matches('.menu__btn')) {
            const dropdowns = document.getElementsByClassName("menu__content");
            for (let dropdown of dropdowns) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                };
            };
        };
    });