function page(id)
{

    /*
    Wenn die Funktion aufgerufen wird, wird das Parameter "id" genutzt, um die Seite zu wechseln.
    Beispiel:
    
    page(1)
    springt zur nächsten seite
    
    page(2)
    springt zwei seiten weiter

    page(-1)
    springt eine seite zurück

    Parameter:
    id  - Integer
    */

    // Verrechnung von der id -> pId (Maximal 5, minimal 1)
    pId = Math.max(Math.min(5,pId + id), 1);

    // Ändern der Bild Quelle
    document.getElementById("img").src = "img/igel" + pId + ".jpg";

}

// Setzen der ID für das Bild

pId = 1;