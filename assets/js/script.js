function openNav() {
  const open = document.getElementById("mobile-nav");
  open.classList.toggle("show-nav");
}

function hideNav() {
  const hide = document.getElementById("mobile-nav");
  hide.classList.remove("show-nav");

  const unchecked = (document.getElementById("checkbox").checked = false);
}
