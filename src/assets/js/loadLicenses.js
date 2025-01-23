// JSON 데이터 가져오기
fetch("assets/json/licenses.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => renderLicenses(data))
  .catch((error) => console.error("Error loading JSON:", error));

// 렌더링 함수
function renderLicenses(licenses) {
  const rbDetail = document.querySelector(".rb-License");
  const table = document.createElement("table");
  table.className = "License";

  licenses.forEach((license) => {
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
