const btnRechercher = document.getElementById("btn-rechercher");
const imageContainer = document.getElementById("image-container");

btnRechercher.addEventListener("click", () => {
	fetch("page-produits.html")
		.then(response => response.text())
		.then(data => {
			const parser = new DOMParser();
			const htmlDoc = parser.parseFromString(data, "text/html");
			const images = htmlDoc.querySelectorAll("img");

			if (images.length > 0) {
				const randomImage = images[Math.floor(Math.random() * images.length)];
				imageContainer.innerHTML = `<img src="${randomImage.src}" alt="Image trouvée">`;
			} else {
				imageContainer.innerHTML = "Aucune image trouvée.";
			}
		})
		.catch(error => console.error(error));
});
