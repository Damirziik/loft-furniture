const burgerMenu = document.querySelector('.burger-menu')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector(".close-icon")


burgerMenu.addEventListener("click", () => {
    sidebar.classList.toggle('active')
})


closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active")
})
