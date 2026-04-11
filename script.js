document.querySelectorAll(" .toggle").forEach(button => {
    button.addEventListener("click", () => {
        const checklist = button.nextElementSibling;
        checklist.classList.toggle("hidden");
    });
});

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});