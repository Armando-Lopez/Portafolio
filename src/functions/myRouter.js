const goTo = (destination) => {
  let element;

  switch (destination) {
    case "/":
      element = document.getElementById("about-me");
      break;
    case "projects":
      element = document.getElementById("projects");
      break;
    default:
      break;
  }

  element.classList.add("going_to");
  element.addEventListener("animationend", () => {
    window.location.href = destination;
  });
};

export default goTo;
