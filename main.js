document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion_button");

  accordionItems.forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.parentElement;
      const icon = button.firstElementChild;
      console.log(icon)
      if (item.classList.contains("active")) {

        if (icon) {
         icon.classList.remove("minus")
        icon.classList.toggle("plus")
        }

        item.classList.toggle("close");
        item.classList.remove("active");
        return;
      }
       icon.classList.remove("plus")
        icon.classList.toggle("minus")

      item.classList.toggle("active");
      item.classList.remove("close");
    });
  });
});
