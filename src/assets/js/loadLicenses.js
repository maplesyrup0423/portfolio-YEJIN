// loadLicenses.js
import licensesData from "../json/licenses.json"; // licenses.json 파일을 import

export function loadLicenses() {
  const rbDetail = document.querySelector(".rb-License");
  const table = document.createElement("table");
  table.className = "License";

  licensesData.forEach((license) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${license.date}</td>
      <td>${license.name}</td>
      <td>${license.status}</td>
      <td>${license.issuer}</td>
    `;
    table.appendChild(row);
  });

  rbDetail.appendChild(table);
}
