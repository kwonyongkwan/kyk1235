// feature.js - 작은 기능들을 합치기 전
function createLoginForm() {
 // 여러 작은 수정 사항들이 포함된 코드
const form = document.createElement('form');
 form.innerHTML = `
 <input type="text" id="username" placeholder="Username">
 <button type="submit">Login</button>
 `;
 document.body.appendChild(form);
 // 작은 기능 추가들 (이 부분이 여러 커밋으로 나눠진 경우 스쿼시 가능)
}
