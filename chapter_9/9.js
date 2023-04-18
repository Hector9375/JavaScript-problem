// concat 을 활용한 출력 방법

// 데이터
let year = '2023';
let month = '04';
let day = '19';
let hour = '05';
let minute = '04';
let second = '35';

let result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
// let result = `${year}/${month}/${day}/${hour}:${minute}:${second}`;

console.log(result);

// 출력
// 2023/04/19 05:04:35;