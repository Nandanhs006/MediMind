// Library page functionality

let allDiseases = [];
let currentSelectedDisease = null;

document.addEventListener('DOMContentLoaded', () => {
  initializeLibrary();
  
  // Check if a disease was passed as a query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const diseaseParam = urlParams.get('disease');
  if (diseaseParam) {
    setTimeout(() => {
      showDiseaseDetails(diseaseParam);
      // Scroll disease into view
      const items = document.querySelectorAll('#disease-list li');
      items.forEach(item => {
        if (item.textContent === diseaseParam) {
          item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    }, 100);
  }
});

function initializeLibrary() {
  // Get all diseases from database
  const diseasesData = getDiseasesData();
  allDiseases = Object.keys(diseasesData).sort();

  // Render disease list
  renderDiseaseList(allDiseases);

  // Add sidebar toggle
  const btn = document.getElementById('toggleBtn');
  const sidebar = document.querySelector('.sidebar');

  if (btn && sidebar) {
    btn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      btn.innerHTML = sidebar.classList.contains('collapsed') ? '>' : '<';
    });
  }
}

function renderDiseaseList(diseases, searchQuery = '') {
  const diseaseList = document.getElementById('disease-list');
  diseaseList.innerHTML = '';

  diseases.forEach(disease => {
    const li = document.createElement('li');
    
    // Highlight search query if provided
    if (searchQuery) {
      const safeQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${safeQuery})`, "gi");
      li.innerHTML = disease.replace(regex, "<strong>$1</strong>");
    } else {
      li.textContent = disease;
    }
    
    li.onclick = () => showDiseaseDetails(disease);
    diseaseList.appendChild(li);
  });
}

function filterDiseases() {
  const searchInput = document.getElementById('disease-search').value.toLowerCase();
  const filtered = allDiseases.filter(disease =>
    disease.toLowerCase().includes(searchInput)
  );
  renderDiseaseList(filtered, searchInput);
}

function showDiseaseDetails(diseaseName) {
  currentSelectedDisease = diseaseName;
  const diseaseData = getDiseaseData(diseaseName);
  const detailsContainer = document.getElementById('disease-details');

  // Update active state in list
  const items = document.querySelectorAll('#disease-list li');
  items.forEach(item => {
    item.classList.remove('active');
    if (item.textContent === diseaseName) {
      item.classList.add('active');
    }
  });

  // Render disease details
  let html = `<div class="disease-name">${diseaseName}</div>`;

  // Description
  if (diseaseData.description) {
    html += `
      <div class="disease-section">
        <h3>Description</h3>
        <p>${diseaseData.description}</p>
      </div>
    `;
  }

  // Symptoms
  if (diseaseData.symptoms && diseaseData.symptoms.length > 0) {
    html += `
      <div class="disease-section">
        <h3>Common Symptoms</h3>
        <ul>
          ${diseaseData.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  // Treatment
  if (diseaseData.treatments && diseaseData.treatments.length > 0) {
    html += `
      <div class="disease-section">
        <h3>Treatment Options</h3>
        <ul>
          ${diseaseData.treatments.map(treatment => `<li>${treatment}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  detailsContainer.innerHTML = html;
}

// Export for use on results page
function getDiseaseDetailsForResults(diseaseName) {
  return getDiseaseData(diseaseName);
}
