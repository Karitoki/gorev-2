document.querySelectorAll(".card img").forEach(el => {
    el.addEventListener('click', () => {
        let src = el.getAttribute("src");

        let modalImage = document.getElementById("modal-image");
        modalImage.setAttribute("src", src);
    });
});