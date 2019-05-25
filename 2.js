function betweenDays(A, B) {
  let hasil = [];
  for (i = A; i < B; i++) {
    A += 1;

    let C = A.toString();
    let D = C.slice(0, 4) + "-" + C.slice(4, 6) + "-" + C.slice(6, 8);
    hasil.push(D);
  }

  return hasil;
}

console.log(betweenDays(20191101, 20191105));
