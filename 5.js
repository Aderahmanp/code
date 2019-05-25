kata = "purwarkata";
hapus = "a";
ubah = "o";

function gantiHuruf(kata, hapus, ubah) {
  let prosses = kata.split("");
  let hasil = [];
  for (var i = 0; i < prosses.length; i++) {
    if (prosses[i] == hapus) {
      prosses[i] = ubah;
      hasil.push(prosses[i]);
    } else {
      hasil.push(prosses[i]);
    }
  }

  return hasil.join("");
}

console.log(gantiHuruf(kata, hapus, ubah));
