/** encodeURI / decodeRUI
 * 완전한 URI를 문자열로 전달받아 이스케이프 처리를 위해 인코딩한다.
 * @param {string} uri - 완전한 URI
 * @returns {string} 인코딩된 URI
 * encodeURI(uri)
 */

// 완전한 URI
const uri = 'http://exmaple.com?name=이응모&job=programmer&teacher';
// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc = encodeURI(uri);
console.log(enc);
// http://exmaple.com?name=%EC%9D%B4%EC%9D%91%EB%AA%A8&job=programmer&teacher