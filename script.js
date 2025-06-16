document.addEventListener("DOMContentLoaded", () => {
  const projectLinks = [
    {
      img: "project1.jpg",
      link: "https://whosdrw.github.io/Web-System-Projects/FA2_Ragodon/Finals%20Activity%202/"
    },
    {
      img: "project2.jpg",
      link: "https://whosdrw.github.io/Web-System-Projects/RAGODON_FA1/RAGODON_FA1/"
    },
    {
      img: "project3.jpg",
      link: "https://whosdrw.github.io/Web-System-Projects/Ragodon_MA4/Ragodon_MA4/"
    }
  ];

  const container = document.querySelector(".projects-grid");
  container.innerHTML = ""; // Clear existing HTML

  projectLinks.forEach((proj) => {
    const card = document.createElement("div");
    card.className = "project-card";

    const img = document.createElement("img");
    img.src = proj.img;
    img.alt = "Project Screenshot";

    const link = document.createElement("a");
    link.href = proj.link;
    link.target = "_blank";
    link.className = "project-link";
    link.textContent = "View Project";

    card.appendChild(img);
    card.appendChild(link);
    container.appendChild(card);
  });
});
