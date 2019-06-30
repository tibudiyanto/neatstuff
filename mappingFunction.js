/**
 * Punya banyak if statement yang menumpuk?
 */
const bekerja = manusia => {
  const pekerjaan = manusia["pekerjaan"];
  if (pekerjaan === "penjahit") {
    menjahit();
  } else if (pekerjaan === "koki") {
    memasak();
  } else if (pekerjaan === "guru") {
    mengajar();
  } else if (pekerjaan === "programmer") {
    koding();
  } else {
    bengong();
  }
};

/**
 * Kita dapat menyederhanakan kode tersebut dengan cara begini
 */
const PEKERJAAN = {
  penjahit: menjahit,
  koki: memasak,
  guru: mengajar,
  programmer: koding
};

const bekerja = manusia => {
  const pekerjaan = PEKERJAAN[manusia["pekerjaan"]];
  if (!pekerjaan) {
    return bengong();
  }

  return pekerjaan();
};
