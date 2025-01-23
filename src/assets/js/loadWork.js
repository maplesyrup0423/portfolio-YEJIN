// work.json 데이터를 임포트
import workData from "../json/work.json"; // 경로는 파일 위치에 맞게 수정

// 렌더링 함수
export function loadWork() {
  const rbDetail = document.querySelector(".rb-work");
  const table = document.createElement("table");
  table.className = "work";

  workData.forEach((work) => {
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
