function goToResults() {
  const input = document.getElementById("symptoms").value;

  if (!input) {
    alert("Please enter symptoms");
    return;
  }

  localStorage.setItem("symptoms", input);
  window.location.href = "result.html";
}

async function loadResults() {
  const input = localStorage.getItem("symptoms");
  const results = document.getElementById("results");

  if (!results) return;

  if (!input) {
    results.innerHTML = "<p>No symptoms provided.</p>";
    return;
  }

  const symptoms = input.split(",").map(s => s.trim());

  try {
    const res = await fetch("/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ symptoms })
    });

    const data = await res.json();

    results.innerHTML = "";

    if (!data.length) {
      results.innerHTML = "<p>No matching diseases found.</p>";
      return;
    }

    data.forEach(d => {
      const li = document.createElement("li");
      li.innerText = `${d.name} - ${Number(d.match_percentage).toFixed(2)}%`;
      results.appendChild(li);
    });

  } catch (err) {
    results.innerHTML = "<p>Error fetching results.</p>";
  }
}

window.onload = loadResults;