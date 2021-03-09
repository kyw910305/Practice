// 전역객체
// 브라우저 환경
// globalThis === this   // true
// globalThis === window // true
// globalThis === self   // true
// globalThis === frames // true

// Node.js 환경
globalThis === this   // true
globalThis === global // true