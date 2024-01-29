const form = document.querySelector(".form");

form.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(form);
    fetch("/send.php", {
        method: "POST",
        body: formData
    })
});

