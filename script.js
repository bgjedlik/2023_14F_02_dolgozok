let urlap = document.querySelector('.urlap');
let tablazat = document.querySelector('.tablazat').getElementsByTagName('tbody')[0];

let dolgozok = []; // üres tömb

function hozzaad(event){
    event.preventDefault(); // nem engedi újratöltődni az oldalt
    // console.log('OK');
    let dolgozo = {}; // üres objektum
    dolgozo.nev = document.querySelector('#nev').value;
    dolgozo.email = document.querySelector('#email').value;
    dolgozo.szuletesiDatum = document.querySelector('#szuletesi-datum').value;
    dolgozo.neme = document.querySelector('input[name="neme"]:checked').value;

    //console.log(dolgozo);
    dolgozok.push(dolgozo); // .push() a végén bővíti a tömböt
    //console.log(dolgozok);
    listazas();
}

function listazas(){
    let i = 1;
    tablazat.innerHTML=''; // törli a tbody tartalmát
    dolgozok.forEach(egyDolgozo => {
        let tr = document.createElement('tr');  // <tr></tr>

        let td = document.createElement('td'); // <td></td>
        td.textContent = i;        // <td>1</td>
        tr.append(td); 

        td = document.createElement('td'); // <td></td>
        td.textContent = egyDolgozo.nev;        // <td>Béla</td>
        tr.append(td); // a végén bővíti a html elemet <tr><td>Béla</td></tr>

        td = document.createElement('td'); 
        td.textContent = egyDolgozo.email;       
        tr.append(td); 

        td = document.createElement('td'); 
        td.textContent = egyDolgozo.szuletesiDatum;       
        tr.append(td); 

        td = document.createElement('td'); 
        td.textContent = egyDolgozo.neme;       
        tr.append(td); 

        tablazat.append(tr);
        i++;
    });
}

urlap.addEventListener('submit',hozzaad);