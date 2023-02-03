// acsess on main variables in website
let iconToGetList = document.querySelector(".get-links-icon");
let listOfLinks = document.querySelector("ul.links");
let links = document.querySelectorAll("ul.links li");
let homeText = document.querySelector(".home-text");
let personalImg = document.querySelector(".img-div .personal-img");
let preloadDiv = document.querySelector(".preload-div");
let allSection = document.querySelectorAll(".section")


// function to toggle clicked class to drob the list of our links
function addClickedClass() {
    iconToGetList.classList.toggle("clicked");
    listOfLinks.classList.toggle("drobing")
}
// call the function when click on the icon
iconToGetList.addEventListener("click" , addClickedClass);

links.forEach(link=>{
    link.onclick = ()=>{
        let section = document.querySelector(`.${link.dataset.section}`);
        section.scrollIntoView();

        links.forEach(link=>{
            link.classList.remove("active")
        })
        link.classList.add("active")

    }
})

window.onload = ()=>{
    homeText.classList.add("no-translate");
    personalImg.classList.add("no-translate");
    preloadDiv.classList.add("none")
}


window.onscroll = ()=>{


    allSection.forEach(section=>{
        section.className = section.dataset.class;
    })

    let scrollPosition = window.scrollY;

    allSection.forEach(section=>{
        if(scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            
            section.classList.add("active-section");

            links.forEach(link=>{
                link.classList.remove("active");
            })
            let activeLink = document.getElementById(section.dataset.id);
            activeLink.classList.add("active");

            let allCircles = document.querySelectorAll(`.section .circle-div`)
                allCircles.forEach(circle=>{
                    circle.classList.remove("active")
                })

            let activeCircles = document.querySelectorAll(`.section #${section.dataset.id}`)
                activeCircles.forEach(circle=>{
                    circle.classList.add("active")
                });

            let container = document.querySelector(`#${section.getAttribute("id")} .container`);
            // loop on elements to add no-translate class  
            for(i = 0; i<container.children.length; i++) {
                container.children[i].classList.add("no-translate")
            }
        }
    })


}


