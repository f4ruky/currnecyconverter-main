var menu = document.getElementById("itemler");
  menu.addEventListener("change", function() {
    window.location = this.value;
  });