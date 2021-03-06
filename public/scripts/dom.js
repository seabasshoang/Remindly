
const groupModal = document.querySelector('.addcontact-customgroup-modal');
const groupModalBtn = document.querySelector('#customgroupbtn');
const groupModalClose = document.querySelector('.addcontact-customgroup-modal-close');
const eventModal = document.querySelector('.addcontact-customevent-modal');
const eventModalBtn = document.querySelector('#customeventbtn');
const eventModalClose = document.querySelector('.addcontact-customevent-modal-close');

groupModalBtn.addEventListener("click", () => {
  groupModal.style.display = "block";
});

groupModalClose.addEventListener("click", () => {
  groupModal.style.display = "none";
});


eventModalBtn.addEventListener("click", () => {
    eventModal.style.display = "block";
})

eventModalClose.addEventListener("click", () => {
    eventModal.style.display = "none";
})

window.addEventListener("click", (event) => {
    if (event.target == groupModal) {
        groupModal.style.display = "none";
    }if (event.target == eventModal) {
        eventModal.style.display = "none";
    }
})
