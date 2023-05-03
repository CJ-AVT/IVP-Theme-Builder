const tickboxes = document.querySelectorAll(".my-tickbox-checkbox");
tickboxes.forEach((tickbox) => {
    tickbox.addEventListener("click", () => {
        tickbox.classList.toggle("checked");
        // Additional logic goes here...
    });
});