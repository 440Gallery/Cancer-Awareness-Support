const donations = [
  { date: "2025-12-01", donor: "Ananya", amount: 2500 },
  { date: "2025-12-02", donor: "Rahul",  amount: 1500 },
  { date: "2025-12-03", donor: "Anonymous", amount: 500 },
  { date: "2025-12-04", donor: "Priya", amount: 3000 },
  { date: "2025-12-05", donor: "Karthik", amount: 1000 }
];

function renderSummary() {
  const total = donations.reduce((sum, d) => sum + d.amount, 0);
  const donorCount = new Set(donations.map(d => d.donor)).size;

  document.getElementById("total-donations").textContent = `₹${total.toLocaleString("en-IN")}`;
  document.getElementById("donor-count").textContent = donorCount;
}

function renderTable() {
  const tbody = document.getElementById("donation-rows");
  tbody.innerHTML = "";
  donations.forEach(d => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${d.date}</td>
      <td>${d.donor}</td>
      <td>₹${d.amount.toLocaleString("en-IN")}</td>
    `;
    tbody.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSummary();
  renderTable();
});
