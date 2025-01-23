// JSON 데이터 가져오기
fetch("assets/json/work.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => renderWork(data))
  .catch((error) => console.error("Error loading JSON:", error));

// 렌더링 함수
function renderWork(workList) {
  const rbDetail = document.querySelector(".rb-work");
  const table = document.createElement("table");
  table.className = "work";

  workList.forEach((work) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${work.period}</td>
      <td>${work.duration}</td>
      <td>${work.company}</td>
      <td>${work.role}</td>
    `;
    table.appendChild(row);
  });

  rbDetail.appendChild(table);
}
