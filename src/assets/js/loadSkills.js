// skills.json 데이터를 임포트
import skillsData from "../json/skills.json";

// 렌더링 함수
export function loadSkills() {
  const skillContainer = document.getElementById("skill-container");

  Object.keys(skillsData).forEach((category) => {
    const categoryData = skillsData[category];

    // 카테고리 박스 생성
    const skillBox = document.createElement("div");
    skillBox.className = "skill-box";

    // 카테고리 제목 추가
    skillBox.innerHTML = `
      <div class="rb-title">
        <i class="fas fa-${categoryData.icon}"></i> ${categoryData.name}
      </div>
    `;

    // 스킬 상세 추가
    const rbDetail = document.createElement("div");
    rbDetail.className = "rb-detail";

    categoryData.skills.forEach((skill) => {
      const skillItem = document.createElement("div");
      skillItem.className = "skill-item";

      skillItem.innerHTML = `
        <img
          src="${skill.icon}"
          alt="${skill.name}"
          class="skill-icon"
          onerror="this.style.display='none';"
        />
        ${skill.name}
      `;

      rbDetail.appendChild(skillItem);
    });

    skillBox.appendChild(rbDetail);
    skillContainer.appendChild(skillBox);
  });
}
