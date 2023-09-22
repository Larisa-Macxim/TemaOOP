import Masina from "./masina.js";
import MasinaDeCurse from "./masinaDeCurse.js";
// Exercitiul 1
function main() {
  const masina1 = new Masina("Volvo", "XC-60", "Negru", 234000);
  const masina2 = new Masina("Mazda", "CX-5", "Verde", 112030);
  const masina3 = new Masina("Dacia", "BIGGSTER", "Rosu", 20347);

  console.log(masina1.proprietati);
  console.log(masina2.proprietati);
  console.log(masina3.proprietati);
}

main();

// exercitiul 2
function mainMasiniCurse() {
  const masinaDeCurse1 = new MasinaDeCurse(
    "Toyota",
    "Turbo",
    "Verde",
    102543,
    3
  );
  const masinaDeCurse2 = new MasinaDeCurse(
    "Porsche",
    "911 GT3",
    "Albastru",
    50423,
    -5
  );

  console.log(masinaDeCurse1);
  console.log(masinaDeCurse2);
  console.log(masinaDeCurse1.participaLaCampionat());
  console.log(masinaDeCurse2.participaLaCampionat());
}
mainMasiniCurse();
