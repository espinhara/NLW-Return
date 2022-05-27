onScroll = () => {
    if (scrollY > 0) {
        document.querySelector("nav").className = "scroll"

    } else {

        document.querySelector("nav").className = ""
    }
}

closeMenu = () => {
    document.querySelector("body").className = ""
}

openMenu = () =>{
    document.querySelector("body").className = "menu-expanded"
}