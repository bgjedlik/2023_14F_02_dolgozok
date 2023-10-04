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

function torles(event){
    // console.log('OK',event.target.dataset.id);
    dolgozok.splice(event.target.dataset.id,1); // kitörli az adot sorszámú elemet
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

        let button =  document.createElement('button'); // <button></button>
        button.textContent = 'Törlés';                  // <button>Törlés</button>
        button.className = 'btn btn-danger';
        button.dataset.id = i-1;
        button.addEventListener('click',torles);
        td = document.createElement('td'); 
        td.append(button);                              // <td><button>Törlés</button></td>
        tr.append(td);

        tablazat.append(tr);
        i++;
    });
}

// eseménykezelés
urlap.addEventListener('submit',hozzaad);


// teszt adatok
dolgozok.push({
    nev : 'Józsi',
    email: 'jozsi@cegem.hu',
    szuletesiDatum: '1980.01.01',
    neme: 'fiú'
});
dolgozok.push({
    nev : 'Béla',
    email: 'bela@cegem.hu',
    szuletesiDatum: '1984.11.01',
    neme: 'fiú'
});
dolgozok.push({
    nev : 'Kata',
    email: 'kata@cegem.hu',
    szuletesiDatum: '1985.10.02',
    neme: 'lány'
});
listazas();