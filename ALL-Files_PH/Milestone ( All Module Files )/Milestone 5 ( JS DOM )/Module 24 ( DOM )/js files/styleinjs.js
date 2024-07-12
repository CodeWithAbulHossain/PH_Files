const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "2px solid blue";
  section.style.marginBottom = "10px";
  section.style.borderRadius = "15px";
  section.style.paddingLeft = "8px";
  section.style.backgroundColor = "gray";
}

// const placesContainer = document.getElementById("places-container");
// placesContainer.style.backgroundColor = "Gold";

const placesContainer = document.getElementById("places-container");
placesContainer.classList.add("text-center");
placesContainer.classList.remove("large-text");

// const placesContainer = document.getElementById("places-container");
// placesContainer.childNodes;
// placesContainer.childNodes[1];
// placesContainer.childNodes[1].childNodes;
// placesContainer.childNodes[1].childNodes[4].nextSibling
// placesContainer.childNodes[3].childNodes[5]

const placesUl = document.querySelector("#places-container ul");

// document.createElement("span");
// document.createElement("div");
// document.createElement("p");
// document.createElement("header");

// const li = document.createElement("li");

// li.innerText = "Brend new place to go";

// placesUl.append(li);

// const li2 = document.createElement("li");

// li2.innerText = "anther dynamic li";

// placesUl.appendChild(li2);

// placesUl.parentNode
