/*SNACK 1
function somma(num1, num2) {
    return num1 + num2;
}

const somma = function (Num1, Num2) {
    return num1 + num2;
}

const somma = (num1, num2) => num1 + num2;

SNACK 2
const quadrato = num1 => num1 * num1;

SNACK 3
const eseguiOperazione = (num1, num2, operatore) => {
    operatore(num1, num2);
}

SNACK 4
function creaTimer(ms) {
  return () => {
    setTimeout(() => {
      console.log("Tempo scaduto");
    }, ms);
  }
}

const timer = creaTimer(5000);
timer();

SNACK 5
function stampaOgniSecondo(message) {
    setInterval(() => {
      console.log(message);
    }, 1000);
}

stampaOgniSecondo("Fine");

clearInterval(message);

SNACK 6
function creaContatoreAutomatico(intervallo) {
  let count = 0;
  return () => {
    setInterval(() => {
      count ++; 
      console.log(`Il contatore è a ${count}`);
    }, 1000);
  }
}
  
const conta = creaContatoreAutomatico(1000);
conta();

SNACK 7
function eseguiEferma(messaggio, intervallo, durata){
  const intervalloId = setInterval (() => {
    console.log(messaggio);
  }, intervallo);
  
  setTimeout(() => {
    clearInterval(intervalloId);
  }, durata);
  }
                                
eseguiEferma("Sto eseguen...", 2000, 6000);

*/


