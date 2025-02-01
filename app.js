const aminoAcidDataMan = [
    ["Pea (80g)", 4.1, 4.5, 5.1, 4.5, 0.6, 4.2, 4.5, 5.1, 4.2],
    ["Brown rice (50g)", 8.0, 3.6, 2.8, 1.2, 2.4, 2.8, 2.8, 4.4, 5.6],
    ["Pumpkin seed (28g)", 19.6, 21.8, 25.8, 10.6, 24.6, 19.6, 33.6, 9.0, 20.7],
    ["Sunflower seed (28g)", 54.4, 38.3, 28.9, 0, 0, 26.4, 32.3, 0, 46.8],
    ["Chia seed (15g)", 1.5, 0.8, 0.8, 0.4, 0.8, 0.8, 0.8, 2.3, 1.1],
    ["Flax seed (15g)", 4.9, 5.3, 4.6, 3.4, 2.7, 4.6, 5.7, 11.8, 6.1],
    ["Quinoa (43g)", 6.6, 5.1, 3.6, 5.1, 4.0, 3.9, 6.3, 33.0, 4.5],
    ["Spirulina (5g)", 2.0, 0.9, 0.9, 0.8, 0.5, 0.6, 1.5, 2.0, 1.9],
    ["Mung bean (50g)", 51.8, 52.5, 31.5, 41.2, 0, 70.5, 0, 36.0, 49.5],
    ["Lentil (50g)", 32.0, 25.2, 19.6, 29.64, 18.4, 36.8, 43.6, 28.8, 30.0],
    ["Chickpeas (90g)", 97.24, 99.0, 55.8, 73.8, 23.4, 61.2, 102.6, 117.0, 106.2],
    ["Kidney Beans (90g)", 85.7, 76.2, 47.6, 62.6, 44.9, 68.0, 112.9, 77.5, 78.9],
    ["Edamame (90g)", 21.6, 23.4, 20.7, 24.3, 15.3, 18.0, 42.3, 15.3, 22.5],
    ["Tempeh (85g)", 45.9, 46.8, 27.3, 36.5, 22.9, 47.6, 79.0, 41.6, 43.4],
    ["Seitan (85g)", 112.4, 77.7, 58.8, 0, 0, 56.7, 46.2, 0, 205.8],
    ["Peanuts (28g)", 84.1, 58.6, 65.5, 69.72, 13.6, 70.5, 53.5, 17.0, 78.2],
    ["Almonds (28g)", 51.0, 44.22, 45.9, 38.2, 6.0, 51.0, 33.1, 7.6, 54.4]
];

const aminoAcidDataWoman = [
    ["Pea (80g)", 5.0, 5.5, 6.3, 5.5, 0.7, 5.2, 5.5, 6.3, 5.2],
    ["Brown rice (50g)", 9.8, 4.4, 3.4, 1.5, 3.0, 3.4, 3.4, 5.4, 6.9],
    ["Pumpkin seed (28g)", 24.1, 26.8, 31.7, 13.0, 30.3, 24.1, 41.3, 11.1, 25.5],
    ["Sunflower seed (28g)", 66.9, 47.1, 35.5, 0, 0, 32.5, 39.7, 0, 57.6],
    ["Chia seed (15g)", 1.8, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 2.8, 1.4],
    ["Flax seed (15g)", 6.0, 6.5, 5.7, 4.2, 3.3, 5.7, 7.0, 14.5, 7.5],
    ["Quinoa (43g)", 8.1, 6.3, 4.4, 6.3, 4.9, 4.8, 7.7, 40.6, 5.5],
    ["Spirulina (5g)", 2.5, 1.1, 1.1, 1.0, 0.6, 0.7, 1.8, 2.5, 2.3],
    ["Mung bean (50g)", 63.7, 64.6, 38.7, 50.7, 0, 86.7, 0, 44.3, 60.9],
    ["Lentil (50g)", 39.4, 31.0, 24.1, 36.5, 22.6, 45.3, 53.6, 35.4, 36.9],
    ["Chickpeas (90g)", 119.6, 121.8, 68.6, 90.8, 28.8, 75.3, 126.2, 143.9, 130.6],
    ["Kidney Beans (90g)", 105.4, 93.7, 58.5, 77.0, 55.2, 83.6, 138.9, 95.3, 97.0],
    ["Edamame (90g)", 26.6, 28.8, 25.5, 29.9, 18.8, 22.1, 52.0, 18.8, 27.7],
    ["Tempeh (85g)", 56.5, 57.6, 33.6, 44.9, 28.2, 58.5, 97.2, 51.2, 53.4],
    ["Seitan (85g)", 138.3, 95.6, 72.3, 0, 0, 69.7, 56.8, 0, 253.1],
    ["Peanuts (28g)", 103.4, 72.1, 80.6, 85.8, 16.7, 86.7, 65.8, 20.9, 96.2],
    ["Almonds (28g)", 62.7, 54.4, 56.5, 47.0, 7.4, 62.7, 40.7, 9.3, 66.9]
];

function populateTable(tableId, data) {
    const tableBody = document.getElementById(tableId);
    data.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    populateTable("table-data-man", aminoAcidDataMan);
    populateTable("table-data-woman", aminoAcidDataWoman);
});
const proteinPowderData = [
    ["Pea protein", 480, 690, 1710, 1410, 90, 1110, 750, 210, 810],
    ["Brown rice protein", 720, 1350, 2490, 930, 870, 1710, 1140, 450, 1770],
    ["Soy protein", 720, 1140, 2070, 1710, 360, 1440, 960, 270, 1350],
    ["Pumpkin seed protein", 540, 810, 2130, 810, 930, 1290, 1320, 90, 990],
    ["Sunflower seed protein", 750, 1200, 2010, 0, 0, 1500, 750, 0, 1320],
    ["Chia seed protein", 150, 240, 420, 300, 180, 300, 210, 120, 30],
    ["Flaxseed protein", 660, 1200, 1740, 1200, 450, 1380, 1080, 540, 1380],
    ["Sacha inchi protein", 780, 1500, 1920, 1290, 1110, 2370, 1290, 1290, 1200],
    ["Quinoa protein", 810, 1200, 1890, 1710, 660, 1170, 1080, 1440, 144],
    ["Spirulina protein", 810, 750, 1650, 900, 420, 840, 870, 300, 1350],
    ["Mung bean protein", 840, 1170, 2220, 1860, 0, 2700, 0, 180, 1380],
    ["Lentil protein", 840, 900, 2190, 2100, 660, 2280, 2280, 270, 1500]
];

function populateTable(tableId, data) {
    const tableBody = document.getElementById(tableId);
    data.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    populateTable("protein-powder-data", proteinPowderData);
});
const dailyAminoAcidMan = [
    ["Pea protein", 16.3, 17.3, 19.4, 17.8, 2.3, 16.3, 18, 20, 16],
    ["Brown rice protein", 24.5, 25.1, 26.7, 19.5, 14.3, 24.6, 27.1, 107.1, 36.9],
    ["Soy protein", 24.5, 19, 23.3, 22.4, 4.5, 20.8, 22.9, 17.1, 20.8],
    ["Pumpkin seed protein", 16.5, 16.8, 20.1, 10.1, 15.4, 15.2, 31.4, 17.1, 20.5],
    ["Sunflower seed protein", 22.8, 22.4, 19, 0, 0, 21.2, 21.1, 0, 22.9],
    ["Chia seed protein", 3.6, 4.2, 3.3, 3, 4.5, 3.7, 25, 22.9, 2],
    ["Flaxseed protein", 15.7, 18.8, 13.8, 11, 5.9, 18.8, 30, 51.4, 28],
    ["Sacha inchi protein", 18.8, 19.8, 15.2, 10.8, 14.6, 23, 27.5, 155.2, 26.6],
    ["Quinoa protein", 19.4, 19, 15, 22.4, 8.7, 18.9, 30, 274.3, 20.8],
    ["Spirulina protein", 19.4, 13.8, 13.8, 9, 5.3, 8.3, 24.2, 57.1, 20.8],
    ["Mung bean protein", 20, 15.3, 15.6, 12.7, 0, 34.8, 0, 17.1, 27.8],
    ["Lentil protein", 20, 14, 16.6, 19, 8.7, 26.1, 47.6, 7.1, 26]
];

const dailyAminoAcidWoman = [
    ["Pea protein", 19.1, 20.2, 22.7, 20.8, 2.7, 19, 21.1, 23.4, 18.7],
    ["Brown rice protein", 28.7, 29.3, 31.3, 22.9, 16.8, 28.8, 31.7, 125.4, 43.2],
    ["Soy protein", 28.7, 22.2, 27.2, 26.3, 5.3, 24.4, 26.8, 20.1, 24.5],
    ["Pumpkin seed protein", 19.3, 19.7, 23.5, 11.8, 18, 17.8, 36.8, 20, 24.1],
    ["Sunflower seed protein", 26.7, 26.3, 22.2, 0, 0, 24.9, 24.6, 0, 26.7],
    ["Chia seed protein", 4.2, 5, 3.9, 3.5, 5.2, 4.3, 29.3, 26.8, 2.3],
    ["Flaxseed protein", 18.3, 22, 16.1, 12.9, 6.9, 22, 35.1, 60.1, 32.7],
    ["Sacha inchi protein", 22.1, 23.2, 17.8, 12.7, 17.1, 26.9, 32.2, 181.8, 31.1],
    ["Quinoa protein", 22.7, 22.3, 17.6, 26.3, 10.2, 22.1, 35.1, 321.7, 24.4],
    ["Spirulina protein", 22.7, 16.2, 16.1, 10.5, 6.2, 9.7, 28.3, 66.9, 24.4],
    ["Mung bean protein", 23.4, 17.9, 18.3, 14.8, 0, 40.8, 0, 20, 32.5],
    ["Lentil protein", 23.4, 16.4, 19.4, 22.2, 10.2, 30.5, 55.9, 8.3, 30.3]
];

function populateTable(tableId, data) {
    const tableBody = document.getElementById(tableId);
    data.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    populateTable("man-requirements", dailyAminoAcidMan);
    populateTable("woman-requirements", dailyAminoAcidWoman);
});
const aminoAcidFunctions = [
    ["Histidine", "Histidine contributes to the synthesis of histamine, a neurotransmitter crucial for immune response, digestive processes, sleep regulation, and sexual function."],
    ["Isoleucine", "Isoleucine contributes to muscle metabolism, immune system function, hemoglobin synthesis, and energy regulation in the body."],
    ["Leucine", "Leucine supports protein synthesis, growth hormone production, muscle repair, wound healing, and blood sugar level regulation."],
    ["Lysine", "Lysine plays a role in hormone production, energy generation, calcium absorption, and immune system function."],
    ["Methionine", "Methionine contributes to tissue growth, metabolism, detoxification, and facilitates the absorption of essential minerals such as zinc and selenium."],
    ["Phenylalanine", "Phenylalanine is essential for the synthesis of neurotransmitters like dopamine, epinephrine, and norepinephrine, as well as other amino acids."],
    ["Threonine", "Threonine is crucial for collagen and elastin formation, which provide structural support to skin and connective tissues. It also aids in blood clotting, fat metabolism, and immune system function."],
    ["Tryptophan", "Tryptophan helps maintain nitrogen balance and participates in the synthesis of serotonin, a neurotransmitter that regulates mood, appetite, and sleep."],
    ["Valine", "Valine contributes to muscle growth, tissue repair, and energy production."]
];

function populateAminoAcidFunctions(tableId, data) {
    const tableBody = document.getElementById(tableId);
    data.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    populateAminoAcidFunctions("amino-acid-functions-data", aminoAcidFunctions);
});
const aminoAcidContent = [
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/pea-protein' target='_blank'>Pea</a>", 16, 23, 57, 47, 3, 37, 25, 7, 27],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/brown-rice-protein' target='_blank'>Brown rice</a>", 24, 45, 83, 31, 29, 57, 38, 15, 59],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/soy-protein' target='_blank'>Soy</a>", 24, 38, 69, 57, 12, 48, 32, 9, 45],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/pumpkin-seed-protein' target='_blank'>Pumpkin seed</a>", 18, 27, 71, 27, 31, 43, 44, 3, 33],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/sunflower-seed-protein' target='_blank'>Sunflower seed</a>", 25, 40, 67, 0, 0, 50, 25, 0, 44],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/chia-seed-protein' target='_blank'>Chia seed</a>", 5, 8, 14, 10, 6, 10, 7, 4, 1],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/flaxseed-protein' target='_blank'>Flaxseed</a>", 22, 40, 58, 40, 15, 46, 36, 18, 46],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/sacha-inchi-protein' target='_blank'>Sacha inchi</a>", 26, 50, 64, 43, 37, 79, 43, 43, 40],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/quinoa-protein' target='_blank'>Quinoa</a>", 27, 40, 63, 57, 22, 39, 36, 48, 4.8],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/spirulina-protein' target='_blank'>Spirulina</a>", 27, 25, 55, 30, 14, 28, 29, 10, 45],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/mung-bean-protein' target='_blank'>Mung bean</a>", 28, 39, 74, 62, 0, 90, 0, 6, 46],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/lentil-protein' target='_blank'>Lentil</a>", 28, 30, 73, 70, 22, 76, 76, 9, 50],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/chickpea-protein' target='_blank'>Chickpeas</a>", 21, 89, 63, 52, 87, 48, 36, 37, 38],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/kidney-bean-protein' target='_blank'>Kidney Beans</a>", 27, 41, 78, 67, 11, 57, 46, 11, 51],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/edamame-protein' target='_blank'>Edamame</a>", 24, 38, 69, 57, 12, 48, 32, 9, 45],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/tempeh-protein' target='_blank'>Tempeh</a>", 24, 38, 69, 57, 12, 48, 32, 9, 45],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/wheat-gluten-protein' target='_blank'>Wheat Gluten</a>", 10, 30, 68, 0, 0, 44, 26, 0, 45],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/peanut-protein' target='_blank'>Peanuts</a>", 7, 10, 17, 10, 3.1, 14, 9, 10, 11],
    ["<a href='https://pubmed.ncbi.nlm.nih.gov/almond-protein' target='_blank'>Almonds</a>", 5, 8, 15, 6, 1.5, 11, 6, 5, 9]
];

function populateAminoAcidContent(tableId, data) {
    const tableBody = document.getElementById(tableId);
    data.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");
            td.innerHTML = cell;  // Use innerHTML to keep the hyperlinks
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    populateAminoAcidContent("amino-acid-content", aminoAcidContent);
});
