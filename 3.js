let hurufHidup = ["a", "i", "u", "e", "o"];
let scanHuruf = "progrAmmer";

function huruf(hurufHidup, scanHuruf) {
  let jumlah = 0;
  let i = 0;

  while (i < scanHuruf.length) {
    if (hurufHidup.includes(scanHuruf[i].toLowerCase())) {
      jumlah += 1;
    }
    i++;
  }

  return jumlah;
}

console.log(huruf(hurufHidup, scanHuruf));
