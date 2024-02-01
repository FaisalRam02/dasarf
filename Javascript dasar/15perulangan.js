function ganjilGenap(platNomor) {
    if (platNomor % 2 === 1) {
      return "Ganjil";
    } else {
      return "Genap";
    }
  }
  
  let plat1 = 123;
  let plat2 = 246;
  
  console.log(ganjilGenap(plat1));
  console.log(ganjilGenap(plat2));  