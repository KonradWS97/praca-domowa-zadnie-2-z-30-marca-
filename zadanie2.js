let suwak = document.getElementById("zip") //pobieranie elementu zip z html
let napisAli = document.getElementById("napis")//pobieranie elementu zip z html
suwak.addEventListener("input", function(suw)// element suwak jest wrazliwy na input
{   let fontAli=document.getElementById("dane1")//przypuje z html dane1 do fontAli
    let wartoscSuwaka =(suwak.value)//przypisuje wartosc dla wartosciSuwaka wartosc która ma suwak Xd
    console.log(suwak.value)// wyswietlam wartosc w celu sprawdzenia czy ładnie się wyswietla
    napisAli.style.fontSize=wartoscSuwaka+'px'//zmieniam wartosc napisu ala ma kota wzgledem wartosci suwaka
    console.log(napisAli.style.fontSize)//wyswietlam wartosc w celu sprawdzenia czy ładnie się wyswietla
    fontAli.innerHTML= suwak.value// przypisanie wartosci suwaka dla fonAli pokazujaca wartosc w pikselach napisu Ala.. na ekranie
})