import fs from "fs";
import path from "path";

async function updateFooterDate() {
  const filePath = path.resolve("public", "index.html"); // 절대 경로로 해결

  try {
    // index.html 파일 읽기
    const data = fs.readFileSync(filePath, "utf-8");
    const currentYear = new Date().getFullYear();

    // 'footer-date' 클래스 찾기 및 업데이트
    const updatedData = data.replace(
      /(<span class="footer-date">)(\d{4})(<\/span>)/,
      `$1${currentYear}$3`
    );

    // 업데이트된 내용 저장
    fs.writeFileSync(filePath, updatedData, "utf-8");
    console.log(`Footer date updated to ${currentYear}`);
  } catch (error) {
    console.error("Error updating the footer date:", error);
  }
}

updateFooterDate();
