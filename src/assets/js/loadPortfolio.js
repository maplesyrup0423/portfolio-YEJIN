async function loadPortfolioData() {
  try {
    const response = await fetch("/assets/portfolioData.json"); // JSON 파일을 fetch로 불러옵니다.
    const portfolioData = await response.json(); // JSON 데이터를 파싱합니다.

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

      // Add buttons at the end of the article
      project.buttons.forEach((button) => {
        const a = document.createElement("a");
        a.classList.add("site", `btn-${button.type}`);
        if (button.type === "detail" || button.type === "paper-pdf") {
          a.setAttribute("onclick", button.action);
        } else {
          a.setAttribute("href", button.url);
          a.setAttribute("target", "_blank");
        }
        a.textContent =
          button.type === "detail"
            ? "자세히 보기 ( pdf )"
            : button.type === "video"
            ? "시연영상 보기 ( YouTube )"
            : button.type === "code"
            ? "코드 보기 ( GitHub )"
            : button.type === "site"
            ? "사이트에서 직접보기"
            : button.type === "paper-site"
            ? "논문 사이트 보기"
            : button.type === "paper-pdf"
            ? "논문 PDF 보기 "
            : " ";
        article.appendChild(a);
      });
      article.appendChild(skillsDiv); // Skills

      // Append to the container
      portfolioContainer.appendChild(article);
    });
  } catch (error) {
    console.error("포트폴리오 데이터를 불러오는 데 실패했습니다.", error);
  }
}

// 페이지 로드 시 포트폴리오 데이터를 불러옴
document.addEventListener("DOMContentLoaded", loadPortfolioData);
