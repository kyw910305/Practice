// 매개변수는 최대 3개 이상을 넘지 않는것을 권장
// JQuery의 ajax메서드에 객체를 인수로 전달
  $.ajax ({
    method: 'POST',
    url: '/user',
    data: { id: 1, name: 'Kim' },
    cache: false
  });