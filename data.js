fetch('https://korkeasaarenkavijat.onrender.com/api/data/year')
// Muunnetaan vastaus JSON muotoon
    .then(function (response) {
    return response.json();
    })
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
// Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro0(responseJson)
    })
// Jos tuli jokin virhe
    .catch(function (error) {
    document.getElementById("vastaus0").innerHTML =
    "<p>Tietoa ei pystytä hakemaan </p>"+ error;
})

// kaikki
function kerro0(data){
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    // tähän tulee muiden tietojen käsittely
    teksti = teksti + "<p> Kokonaiskävijämäärä: " + data.total + "</p>" ;

      // teksti-muuttujan sisällön tulostus
      document.getElementById("vastaus0").innerHTML = teksti;
    }


// Tammikuu
fetch('https://korkeasaarenkavijat.onrender.com/api/data/year')
// Muunnetaan vastaus JSON muotoon
.then(function (response) {
    return response.json();
    })
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
// Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro1(responseJson)
    })
// Jos tuli jokin virhe
    .catch(function (error) {
    document.getElementById("vastaus1").innerHTML =
    "<p>Tietoa ei pystytä hakemaan </p>"+ error;
})

function kerro1(data){
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    // tähän tulee muiden tietojen käsittely
    teksti = teksti + "<p> Kävijämäärä: " + data.months[0].total + "</p>" ;

      // teksti-muuttujan sisällön tulostus
      document.getElementById("vastaus1").innerHTML = teksti;
    }

//Helmikuu
fetch('https://korkeasaarenkavijat.onrender.com/api/data/year')
// Muunnetaan vastaus JSON muotoon
.then(function (response) {
    return response.json();
    })
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
// Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro2(responseJson)
    })
// Jos tuli jokin virhe
    .catch(function (error) {
    document.getElementById("vastaus2").innerHTML =
    "<p>Tietoa ei pystytä hakemaan </p>"+ error;
})

function kerro2(data){
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    // tähän tulee muiden tietojen käsittely
    teksti = teksti + "<p> Kävijämäärä: " + data.months[1].total + "</p>" ;

      // teksti-muuttujan sisällön tulostus
      document.getElementById("vastaus2").innerHTML = teksti;
    }

// Maaliskuu
fetch('https://korkeasaarenkavijat.onrender.com/api/data/year')
// Muunnetaan vastaus JSON muotoon
.then(function (response) {
    return response.json();
    })
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
// Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro3(responseJson)
    })
// Jos tuli jokin virhe
    .catch(function (error) {
    document.getElementById("vastaus3").innerHTML =
    "<p>Tietoa ei pystytä hakemaan </p>"+ error;
})

function kerro3(data){
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    // tähän tulee muiden tietojen käsittely
    teksti = teksti + "<p> Kävijämäärä: " + data.months[2].total + "</p>" ;

      // teksti-muuttujan sisällön tulostus
      document.getElementById("vastaus3").innerHTML = teksti;
    }

// Huhtikuu
fetch('https://korkeasaarenkavijat.onrender.com/api/data/year')
// Muunnetaan vastaus JSON muotoon
.then(function (response) {
    return response.json();
    })
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
// Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro4(responseJson)
    })
// Jos tuli jokin virhe
    .catch(function (error) {
    document.getElementById("vastaus4").innerHTML =
    "<p>Tietoa ei pystytä hakemaan </p>"+ error;
})

function kerro4(data){
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    // tähän tulee muiden tietojen käsittely
    teksti = teksti + "<p> Kävijämäärä: " + data.months[3].total + "</p>" ;

      // teksti-muuttujan sisällön tulostus
      document.getElementById("vastaus4").innerHTML = teksti;
    }

// Toukokuu
fetch('https://korkeasaarenkavijat.onrender.com/api/data/year')
// Muunnetaan vastaus JSON muotoon
.then(function (response) {
    return response.json();
    })
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
// Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro5(responseJson)
    })
// Jos tuli jokin virhe
    .catch(function (error) {
    document.getElementById("vastaus5").innerHTML =
    "<p>Tietoa ei pystytä hakemaan </p>"+ error;
})

function kerro5(data){
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    // tähän tulee muiden tietojen käsittely
    teksti = teksti + "<p> Kävijämäärä: " + data.months[4].total + "</p>" ;

      // teksti-muuttujan sisällön tulostus
      document.getElementById("vastaus5").innerHTML = teksti;
    }

// Kesäkuu
fetch('https://korkeasaarenkavijat.onrender.com/api/data/year')
// Muunnetaan vastaus JSON muotoon
.then(function (response) {
    return response.json();
    })
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
// Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro6(responseJson)
    })
// Jos tuli jokin virhe
    .catch(function (error) {
    document.getElementById("vastaus6").innerHTML =
    "<p>Tietoa ei pystytä hakemaan </p>"+ error;
})

function kerro6(data){
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    // tähän tulee muiden tietojen käsittely
    teksti = teksti + "<p> Kävijämäärä: " + data.months[5].total + "</p>" ;

      // teksti-muuttujan sisällön tulostus
      document.getElementById("vastaus6").innerHTML = teksti;
    }

// Heinäkuu
fetch('https://korkeasaarenkavijat.onrender.com/api/data/year')
// Muunnetaan vastaus JSON muotoon
.then(function (response) {
    return response.json();
    })
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
// Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro7(responseJson)
    })
// Jos tuli jokin virhe
    .catch(function (error) {
    document.getElementById("vastaus7").innerHTML =
    "<p>Tietoa ei pystytä hakemaan </p>"+ error;
})

function kerro7(data){
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    // tähän tulee muiden tietojen käsittely
    teksti = teksti + "<p> Kävijämäärä: " + data.months[6].total + "</p>" ;

      // teksti-muuttujan sisällön tulostus
      document.getElementById("vastaus7").innerHTML = teksti;
    }

// Elokuu
fetch('https://korkeasaarenkavijat.onrender.com/api/data/year')
// Muunnetaan vastaus JSON muotoon
.then(function (response) {
    return response.json();
    })
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
// Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro8(responseJson)
    })
// Jos tuli jokin virhe
    .catch(function (error) {
    document.getElementById("vastaus8").innerHTML =
    "<p>Tietoa ei pystytä hakemaan </p>"+ error;
})

function kerro8(data){
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    // tähän tulee muiden tietojen käsittely
    teksti = teksti + "<p> Kävijämäärä: " + data.months[7].total + "</p>" ;

      // teksti-muuttujan sisällön tulostus
      document.getElementById("vastaus8").innerHTML = teksti;
    }

// Syyskuu
fetch('https://korkeasaarenkavijat.onrender.com/api/data/year')
// Muunnetaan vastaus JSON muotoon
.then(function (response) {
    return response.json();
    })
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
// Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro9(responseJson)
    })
// Jos tuli jokin virhe
    .catch(function (error) {
    document.getElementById("vastaus9").innerHTML =
    "<p>Tietoa ei pystytä hakemaan </p>"+ error;
})

function kerro9(data){
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    // tähän tulee muiden tietojen käsittely
    teksti = teksti + "<p> Kävijämäärä: " + data.months[8].total + "</p>" ;

      // teksti-muuttujan sisällön tulostus
      document.getElementById("vastaus9").innerHTML = teksti;
    }

// Lokakuu
fetch('https://korkeasaarenkavijat.onrender.com/api/data/year')
// Muunnetaan vastaus JSON muotoon
.then(function (response) {
    return response.json();
    })
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
// Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro10(responseJson)
    })
// Jos tuli jokin virhe
    .catch(function (error) {
    document.getElementById("vastaus10").innerHTML =
    "<p>Tietoa ei pystytä hakemaan </p>"+ error;
})

function kerro10(data){
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    // tähän tulee muiden tietojen käsittely
    teksti = teksti + "<p> Kävijämäärä: " + data.months[9].total + "</p>" ;

      // teksti-muuttujan sisällön tulostus
      document.getElementById("vastaus10").innerHTML = teksti;
    }

// Marraskuu
fetch('https://korkeasaarenkavijat.onrender.com/api/data/year')
// Muunnetaan vastaus JSON muotoon
.then(function (response) {
    return response.json();
    })
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
// Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro11(responseJson)
    })
// Jos tuli jokin virhe
    .catch(function (error) {
    document.getElementById("vastaus11").innerHTML =
    "<p>Tietoa ei pystytä hakemaan </p>"+ error;
})

function kerro11(data){
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    // tähän tulee muiden tietojen käsittely
    teksti = teksti + "<p> Kävijämäärä: " + data.months[10].total + "</p>" ;

      // teksti-muuttujan sisällön tulostus
      document.getElementById("vastaus11").innerHTML = teksti;
    }

// Joulukuu
fetch('https://korkeasaarenkavijat.onrender.com/api/data/year')
// Muunnetaan vastaus JSON muotoon
.then(function (response) {
    return response.json();
    })
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
// Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro12(responseJson)
    })
// Jos tuli jokin virhe
    .catch(function (error) {
    document.getElementById("vastaus12").innerHTML =
    "<p>Tietoa ei pystytä hakemaan </p>"+ error;
})

function kerro12(data){
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    // tähän tulee muiden tietojen käsittely
    teksti = teksti + "<p> Kävijämäärä: " + data.months[11].total + "</p>" ;

      // teksti-muuttujan sisällön tulostus
      document.getElementById("vastaus12").innerHTML = teksti;
    }