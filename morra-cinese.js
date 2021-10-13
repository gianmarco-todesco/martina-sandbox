let nomeGiocatore = "giocatore";
let tbl = document.getElementById('tbl');
const mosse = ['Carta', 'Forbice', 'Sasso'];

// cambia il nome del giocatore
function nameChanged(name)
{
  // console.log("Ciao, Martina. Io sono " + name);
  nomeGiocatore = name;
  // aggiorna il nome del giocatore nell'intestazione della tabella
  document.getElementById("th-nome-giocatore").innerHTML = name;
}

// aggiungi una riga alla tabella
// mossaGiocatore e mossaComputer sono i codici numerici delle rispettive mosse
// risultato è una stringa che descrive il risultato
function aggiungiRiga(mossaGiocatore, mossaComputer, risultato) {
  let tr = document.createElement('tr');
  tr.innerHTML = 
    "<td>"+mosse[mossaGiocatore]+"</td>"+
    "<td>"+mosse[mossaComputer]+"</td>"+
    "<td>"+risultato+"</td>";
  tbl.appendChild(tr);
}

// funzione principale: riceve la mossa del giocatore, 
// sceglie la mossa del computer, calcola il risultato e aggiorna la tabella
function gioca(mossaGiocatore)
{
  // selezione casuale della mossa
  let mossaComputer = Math.floor(Math.random()*3);

  // calcolo del risultato
  let result;
  if(mossaComputer == (mossaGiocatore+1)%3) {
    result = "Vince il computer";
  } else if(mossaGiocatore == (mossaComputer+1)%3) {
    result = "Vince " + nomeGiocatore;
  } else {
    result = "Patta";
  }
  //console.log(mossaGiocatore, mossaComputer, result);
  aggiungiRiga(mossaGiocatore, mossaComputer, result);
}