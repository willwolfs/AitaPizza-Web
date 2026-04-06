
const noticias = document.querySelectorAll(".noticia-item");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitulo = document.getElementById("modalTitulo");
const modalTexto = document.getElementById("modalTexto");
const cerrar = document.querySelector(".cerrar");

noticias.forEach(noticia => {
    noticia.addEventListener("click", () => {
        const img = noticia.querySelector("img").src;
        const titulo = noticia.querySelector("h3").innerText;
        const texto = noticia.querySelector("p").innerText;

        modal.style.display = "block";
        modalImg.src = img;
        modalTitulo.innerText = titulo;
        modalTexto.innerText = texto;
    });
});

cerrar.onclick = () => {
    modal.style.display = "none";
};

// cerrar haciendo click afuera
window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};
