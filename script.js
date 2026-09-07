function toggleMenu() {
    const m = document.getElementById("menu");
    m.style.display = m.style.display === "block" ? "none" : "block";
}
function syncHeight() {
    const a = document.getElementById("frontend");
    const b = document.getElementById("backend");
    const c = document.getElementById("ml");

    a.style.height = b.style.height = c.style.height = "max-content";
    console.log(a.offsetHeight, b.offsetHeight, c.offsetHeight);
    const maxH = Math.max(a.offsetHeight, b.offsetHeight, c.offsetHeight);
    a.style.height = b.style.height = c.style.height = maxH + "px";
}
window.addEventListener('load', function() {
    document.querySelectorAll('.img').forEach(img => {
        const overlay = img.lastElementChild;
        if (overlay) {
            const imgHeight = img.offsetHeight;
            const overlayHeight = overlay.offsetHeight;
            const overhang = Math.max(0, overlayHeight - (imgHeight * 0.35));
            img.style.marginBottom = overhang + 'px';
        }
    });
});
window.addEventListener("load", syncHeight);
window.addEventListener("resize", syncHeight);
window.addEventListener("resize", () => {
    const menu = document.getElementById("menu");
    if(menu) menu.style.display = "none";

});
