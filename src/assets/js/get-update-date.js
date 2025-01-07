const simpleGit = require("simple-git");
const git = simpleGit();

async function getLastCommitDate() {
  try {
    const log = await git.log(["-1"]);
    const lastCommitDate = log.latest.date; // 마지막 커밋 날짜
    return new Date(lastCommitDate).toLocaleDateString("ko-KR"); // 날짜 포맷
  } catch (err) {
    console.error("Git 로그를 가져오는 데 실패했습니다:", err);
  }
}

getLastCommitDate().then((date) => {
  console.log("최종 업데이트 날짜:", date);
});
