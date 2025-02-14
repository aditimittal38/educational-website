document.getElementById("search-bar").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const resources = document.querySelectorAll("#resource-list ul li");

  resources.forEach((item) => {
    if (item.textContent.toLowerCase().includes(query)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});
