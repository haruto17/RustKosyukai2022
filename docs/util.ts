const scroll_to_top_btn = document.querySelector("#scroll-to-top-button");

scroll_to_top_btn?.addEventListener("click", scroll_to_top);

function scroll_to_top() {
	window.scroll({ top: 0, behavior: "smooth" });
}
