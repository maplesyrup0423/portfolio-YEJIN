import { menu } from "./menu.js";
//import { port } from "./port.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";
import { showPDF } from "./showPDF";
import { startCursorAnimation } from "./cursor.js"; // cursor.js에서 함수 임포트
import { loadLicenses } from "./loadLicenses.js";
import { loadPortfolioData } from "./loadPortfolio.js";
import { loadSkills } from "./loadSkills.js";
import { loadWork } from "./loadWork.js";

window.addEventListener("load", function () {
  smooth();
  link();
  menu();
  //port();
  startCursorAnimation(); // 커서 애니메이션 시작
  loadLicenses();
  loadPortfolioData();
  loadSkills();
  loadWork();
});
