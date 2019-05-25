function cetakGambar(jumlah) {
  let middle = Math.floor(jumlah / 2);
  let hasil = [];
  for (i = 0; i < jumlah; i++) {
    let row = [];
    if (i == 0 || i == jumlah - 1) {
      for (j = 0; j < jumlah; j++) {
        row.push("x");
      }
      hasil.push(row);
    } else {
      for (j = 0; j < jumlah; j++) {
        if (j == middle) {
          row.push("x");
        } else {
          row.push("=");
        }
      }
      hasil.push(row);
    }
  }
  return hasil;
}

let jumlah = 5;
console.log(cetakGambar(jumlah));
