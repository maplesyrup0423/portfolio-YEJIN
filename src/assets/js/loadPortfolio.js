// portfolioData.json 파일을 import
import portfolioData from "../json/portfolioData.json";

export async function loadPortfolioData() {
  try {
    // portfolioData는 이미 import 되어 있기 때문에 fetch는 필요 없습니다.
    const portfolioContainer = document.querySelector(".port__wrap"); // 'port__wrap' 클래스를 가진 컨테이너를 선택합니다.

    portfolioData.forEach((project) => {
      const article = document.createElement("article");
      article.classList.add("port__item", project.id);

      // Title and Date
      const headerDiv = document.createElement("div");
      headerDiv.innerHTML = `<span class="num">${project.num}</span><span>${project.title}</span>`;

      const dateSpan = document.createElement("span");
      dateSpan.textContent = project.date;

      // Image and Project Title
      const imgLink = document.createElement("a");
      imgLink.classList.add("img");
      imgLink.setAttribute("href", "#");
      imgLink.setAttribute("onclick", project.buttons[0].action);
      imgLink.setAttribute("target", "_blank");
      imgLink.innerHTML = `<img src="${project.imgSrc}" alt="${project.mainTitle}" />`;

      const h3Title = document.createElement("h3");
      h3Title.classList.add("title");
      h3Title.textContent = project.mainTitle;

      // Description
      const pDesc = document.createElement("p");
      pDesc.classList.add("desc");
      pDesc.textContent = project.description;

      // Skills
      const skillsDiv = document.createElement("div");
      skillsDiv.classList.add("fff-skill");

      const skillsContainer = document.createElement("div");
      skillsContainer.classList.add("port-skill");
      project.skills.forEach((skill) => {
        const img = document.createElement("img");
        img.classList.add("svg-image");
        img.setAttribute("src", skill);
        skillsContainer.appendChild(img);
      });

      skillsDiv.appendChild(skillsContainer);

      // Add elements in proper order
      article.appendChild(headerDiv); // Title and Date
      article.appendChild(dateSpan);
      article.appendChild(imgLink); // Image with link
      article.appendChild(h3Title); // Project Title
      article.appendChild(pDesc); // Project Description

      // 버튼 타입에 맞는 텍스트를 설정하고, 해당하지 않으면 버튼을 생성하지 않음
      project.buttons.forEach((button) => {
        const a = document.createElement("a");
        a.classList.add("site", `btn-${button.type}`);

        // 버튼 타입에 맞는 텍스트를 설정
        let buttonText = "";
        if (button.type === "detail") {
          buttonText = "자세히 보기 ( pdf )";
        } else if (button.type === "video") {
          buttonText = "시연영상 보기 ( YouTube )";
        } else if (button.type === "code") {
          buttonText = "코드 보기 ( GitHub )";
        } else if (button.type === "site") {
          buttonText = "사이트에서 직접 보기";
        } else if (button.type === "paper-site") {
          buttonText = "논문 사이트 보기";
        } else if (button.type === "paper-pdf") {
          buttonText = "논문 PDF 보기";
        }

        // 버튼 텍스트가 비어 있지 않으면, 버튼에 URL이나 동작을 설정하고 추가
        if (buttonText) {
          a.textContent = buttonText;

          // 버튼의 클릭 이벤트 또는 링크 설정
          if (button.type === "detail" || button.type === "paper-pdf") {
            a.setAttribute("onclick", button.action);
          } else {
            a.setAttribute("href", button.url);
            a.setAttribute("target", "_blank");
          }

          // 버튼을 아티클에 추가
          article.appendChild(a);
        }
      });
      article.appendChild(skillsDiv); // Skills

      // Append to the container
      portfolioContainer.appendChild(article);
    });
  } catch (error) {
    console.error("포트폴리오 데이터를 불러오는 데 실패했습니다.", error);
  }
}
