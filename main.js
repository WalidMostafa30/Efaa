// Toggle home nav
const menuBtn = document.querySelectorAll(".menuBtn i");
const mobileNav = document.querySelectorAll(".mobileNav");
menuBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    mobileNav.forEach((nav) => {
      nav.classList.toggle("translate-x-0");
      nav.classList.toggle("translate-x-full");
    });
  });
});

// Toggle form
function toggleForm(value) {
  const individualForm = document.getElementById("individualForm");
  const companyForm = document.getElementById("companyForm");

  if (value === "individual") {
    individualForm.classList.remove("hidden");
    companyForm.classList.add("hidden");
  } else {
    individualForm.classList.add("hidden");
    companyForm.classList.remove("hidden");
  }
}

// toggle Modal
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");
openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});
closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});
