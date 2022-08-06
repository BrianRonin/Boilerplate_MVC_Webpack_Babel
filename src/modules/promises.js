import { async } from "regenerator-runtime";

function proimise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise executada");
      resolve();
    }, 2000);
  });
}

export default async function () {
  await proimise();
  console.log("promise terminou de executar");
}
