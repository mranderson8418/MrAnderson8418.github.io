import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "vertical",
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});

function next() {
	var myImage = new Array();
	myImage[0] = "/SOAP_PICS/MARINE_GREEN_JPG/MARINE_GREEN_new_1.jpeg";
	myImage[1] = "/SOAP_PICS/MARINE_GREEN_JPG/MARINE_GREEN_new_2.jpeg";
	myImage[2] = "/SOAP_PICS/MARINE_GREEN_JPG/MARINE_GREEN_new_3.jpegg";
	myImage[3] = "/SOAP_PICS/MARINE_GREEN_JPG/MARINE_GREEN_new_4.jpeg";

	ImageCnt++;

	document.getElementById("whiteBox").style.background = "url(myImage[ImageCnt])";
}
