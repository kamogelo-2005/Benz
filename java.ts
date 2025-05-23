n document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const model = params.get("model");

  const modelsData = {
    "s-class": {
      name: "Mercedes-Benz S-Class",
      image: "img/model1.jpg",
      description: "The S-Class is the flagship of Mercedes-Benz, offering unmatched luxury, comfort, and innovative technology. It's designed for those who expect the best of everything.",
      features: ["Luxury leather interior", "Advanced driver assistance", "Hybrid and V8 engine options", "Burmester® 3D sound system"]
    },
    "e-class": {
      name: "Mercedes-Benz E-Class",
      image: "img/model2.jpg",
      description: "Blending elegance with performance, the E-Class is perfect for executives and families. It’s packed with intuitive tech and comfort features.",
      features: ["Panoramic sunroof", "Voice assistant", "Ambient lighting", "Optional 4MATIC® all-wheel drive"]
    },
    "glc": {
      name: "Mercedes-Benz GLC",
      image: "img/model3.jpg",
      description: "The GLC is a versatile SUV that combines luxury and practicality with strong performance and top-tier infotainment.",
      features: ["4MATIC® AWD", "Large digital cockpit", "Rearview camera", "Heated seats"]
    },
    "a-class": {
      name: "Mercedes-Benz A-Class",
      image: "img/model4.jpg",
      description: "Sporty and compact, the A-Class is perfect for city driving while maintaining Mercedes-Benz’s luxury DNA.",
      features: ["Turbocharged engine", "MBUX infotainment", "Compact yet spacious", "Sporty design"]
    }
  };

  const selectedModel = modelsData[model];

  if (selectedModel) {
    const detailDiv = document.getElementById("model-detail");
    detailDiv.innerHTML = `
      <div class="model-detail-card">
        <img src="${selectedModel.image}" alt="${selectedModel.name}" />
        <h2>${selectedModel.name}</h2>
        <p>${selectedModel.description}</p>
        <h4>Key Features:</h4>
        <ul>
          ${selectedModel.features.map(feature => `<li>${feature}</li>`).join("")}
        </ul>
        <a href="models.html" class="btn">← Back to Models</a>
      </div>
    `;
  } else {
    document.getElementById("model-detail").innerHTML = `
      <p>Model not found. Please return to the <a href="models.html">models page</a>.</p>
    `;
  }
});
