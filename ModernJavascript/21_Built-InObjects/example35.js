/**
 * 인코딩된 URI를 전달받아 이스케이프 처리 이전으로 디코딩한다.
 * @param {string} encodedURI - 인코딩된 URI
 * @returns {string} 디코딩된 URI
 * decodeURI(encodedURI)
 */

const uri = 'http://exmaple.com?name=이응모&job=programmer&teacher';
// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc = encodeURI(uri);
console.log(enc);
// http://exmaple.com?name=%EC%9D%B4%EC%9D%91%EB%AA%A8&job=programmer&teacher

// decodedURI 함수는 인코딩된 완전한 URI를 전달받아 이스케이프 처리 이전으로 디코딩한다.
const dec = decodeURI(enc);
console.log(dec);
// http://exmaple.com?name=이응모&job=programmer&teacher