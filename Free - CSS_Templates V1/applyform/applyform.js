document.getElementById("bewerbungsformular").addEventListener("submit", function(event) {
    event.preventDefault();
    let vorname = document.getElementById("vorname").value;
    let nachname = document.getElementById("nachname").value;
    let adresse = document.getElementById("adresse").value;
    let telefonnummer = document.getElementById("telefonnummer").value;
    let email = document.getElementById("email").value;
    let schulbildung = document.getElementById("schulbildung").value;
    let abschlüsse = document.getElementById("abschlüsse").value;
    let arbeitserfahrung = document.getElementById("arbeitserfahrung").value;
    let skills = document.getElementById("skills").value;
    let referenzen = document.getElementById("referenzen").value;
    
    let bewerbung = {
      vorname: vorname,
      nachname: nachname,
      adresse: adresse,
      telefonnummer: telefonnummer,
      email: email,
      schulbildung: schulbildung,
      abschlüsse: abschlüsse,
      arbeitserfahrung: arbeitserfahrung,
      skills: skills,
      referenzen: referenzen
    };
    
    console.log(bewerbung);
    // Hier könnte man die Daten an einen Server senden, um sie zu speichern oder weiterzubearbeiten
  });
  