import "./scss/style.scss";

const modal = document.querySelector("dialog");
const openModalBtn = document.querySelector(".open-button");
const closeModalBtn = document.querySelector(".modal__close-button");
const videoContainer = document.querySelector(".modal__video");

const videoId = "x6iyz1AQhuU";
const videoTitle = "Introduction to SmartRecruiters Hiring Platform";
const iframeHTML = `
<iframe
		src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1"
		title="${videoTitle}"
		style="border: 0;"
		loading="lazy"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
	</iframe>`;

const openVideoModal = () => {
	if (modal && videoContainer) {
		videoContainer.innerHTML = iframeHTML;
		modal.showModal();
	}
};

const closeVideoModal = () => {
	if (modal && videoContainer) {
		modal.close();
		videoContainer.innerHTML = "";
	}
};

const handleKeyboardClose = (e) => {
	if (e.key === "Escape") {
		closeVideoModal();
	}
};

const handleOutsideModalClick = (e) => {
	const rect = modal.getBoundingClientRect();
	const isInDialog =
		e.clientY >= rect.top &&
		e.clientY <= rect.bottom &&
		e.clientX >= rect.left &&
		e.clientX <= rect.right;

	if (!isInDialog) {
		closeVideoModal();
	}
};

if (openModalBtn && closeModalBtn && modal) {
	openModalBtn.addEventListener("click", openVideoModal);
	closeModalBtn.addEventListener("click", closeVideoModal);
	modal.addEventListener("click", handleOutsideModalClick);
	document.addEventListener("keydown", handleKeyboardClose);
}
