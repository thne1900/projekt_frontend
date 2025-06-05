# Projektuppgift: Frontend
## Arbetsprocessen under frontendprojektet

### Med detta projektarbete ska en webbplats byggas utifrån min tidigare utformad automatiserade arbetsmiljö. För att skapa en "mashup", där två olika API:er ska kombinieras. Webbplatsen kommer rikta sig till besökare som har ett intresse för skräckgenren, där författaren Stephen Kings bokverk och deras filmatiseringar kommer presenteras, med ett tillhörande grafiskt skräcktema. 

- Började projektet med att starta upp den grundstruktur på de filer (automatiserad arbetsprocess) som projektet ska innehålla, med NodeJs- parcel. 
- Startade ett nytt publikt repo på GitHub (versionshantering) för hantering av källkoden, med samma namn som projektet: projekt_frontend. 
- Därefter kontrollerades så att projektet kunde synkas till webbtjänsten Netlify, för att webbplatsen därifrån ska kunna byggas och publiceras.
- Skapade de HTML-filer, JavaScript-filer och SCSS filer som projektet är tänkt ska innehålla, med tydliga filnamn.
- Startade upp med innehållet som ska presenteras på html-sidorna. Med grundlayouten kring navigering, header det huvudsakliga innehållet och footern.
- Började i den js-filen där huvudfokuset på webbplatsen ska framställas (data på böcker och filmer). Från två olika API:er har data inhämtats för att kunna presenteras på webbplatsen, i form av Stephen Kings bokverk och deras filmatiseringar på böckerna. Några utvalda böcker har valts ut, där kort information läggs fram med boktitel och publiceringsår. Vid klick på en knapp kommer en besökare åt filmatiseringen av resepektive bok. Där framställs filmens titel, år och en filmposter.   
- I programmet AdobePhotoshop skapades en logotyp (utifrån en egentagen bild), där bildbehandling och bildredigering gjordes, design har lagts till på loggan i _base.scss. 
- En header-bild (egentagen) bildhandlades också i AdobePhotoshop. Där lades fokus på bildens presentation utifrån skuggning och färg för att få bilden att framställas skrämmande.    
- Påbörjade därefter arbetet i SCSS-filerna där designen och layouten för webbplatsen kommer utformas. Designen ska ha ett skräcktema, så därför kommer nyanser av svart, vitt, grått, rött att framställas. Grunddesignen på webbplatsen med färger, storlek och effekter är skapade i SCSS-filen _base.scss.
- Två bilder (gif) har infogats i index.html för att skapa sidorna mer effektfulla och förstärka skräcktemat. Effekter på animering har gjorts med keyframes i en separat SCSS-fil (_animation.scss). Med en bild av en spindel som kryper över navigeringsmenyn. En bild på en docka som får ändrade färgnyanser vid hover.  
- Navigeringsmenyn och knappar har blivit utformade med effekter, transition vid hover. Detta för att markera tydligt vad som går att klicka på, när muspekaren hovrar över menyvalen eller en knapp. 
- För elementes placeringar på webbplatsen har en egen SCSS-fil gjorts för detta med filnamnet _grid.scss 
- Utformning på sidornas responsiva design, för att innehållet även ska anpassas till mindre skärmenheter, har gjorts med mediaregler. Har ändrat placeringar, storlek och framställande vid olika skärmstorlekar (1024px och 600px). 
- En uppdelning gjordes med kommentarer i SCSS-filerna (_base.scss och _grid.scss) för att strukturerar upp vilken design och mediaregler som gäller till vilken html-sida. För en bättre och tydligare läsbarhet. 
- Har lagt design och stil på listan med bokverk/filmer (api.html) i main.js-filen.
- Lade till fler keyframes, där animation gjorts på bilden (hjärta) och medlemsknappen för att skapa en pulserande effekt. 
- För att skapa en text med "skakig-effekt" har en keyframes gjorts också för detta, på elementet i footern.
- Installerade Apexschart så att ett diagram kan infogas. Ett stapeldiagram är tänkt att visa Stephen Kings antal publicerade bokverk under åren, per decennium. Har lagt på styling med mörka färger så att det matchar temat. 
- Utformade about.html med innehåll och gjorde ett kontaktformulär. Lagt till en del symboler för att förstärka textens tydlighet. 
- Utformade vissa element med mer effekter och animonationer. Skapade en js-fil (functions.js) där funktion på en knapp och en textrutan ska visas. Vid tryck på en knapp ("Bli medlem") ska en textruta med innehållande text komma upp och visas under 2 sekunder. Samma funktion är lagd på "chatknappen", där ett meddelande visas vid tryck på knappen. 
- Tänkte fylla ut api.html sidan med lite extra innehåll, så en kort presentation på böckernas handling gjordes bredvid boklistan från källan bokus.se. 
- Lade till en funktion för att kunna välja färgtema på webbplatsen. Då ursprungstemat är mörkt med mörkar färger och nyanser, ska en besökare via en knapp kunna ändra färg till ett ljust tema, om den så önskar. Därför skapades en js-fil (colorScheme.js) för knappen och dess funktion på växlingen för färgvalen och i SCSS-filen (_colorscheme.scss) vilka färger som ändras. 
- I filen _componens har ett par mixins skapats för text-element på webbplatsen, då de ska ha liknade design.
- Har gått igenom de html och SCSS-filer som hittills skapats och kommenterat en del för att förtydliga vad de innehåller.  
- Infogade en bild på dödskallar på sista sidan med tillagda effeker på färgskiftning vid hover. 
- Lade till ytterligare en gif-bild med animation (fågeln) som placerades i footer, som utformades med keyframes i _animation.scss. 
- Gjorde en extra keyframe i _animation.scss på spindeln som ska passa in bättre vid ett mobilt läge. 
- Har installerat JSDoc för att kunna kommentera js-filerna, som sedan ska kunna gå att nås på en separat html-sida. 
- Kommenterade alla js-filer utifrån JSDoc, gjorde länkar till sidornas (author.html och api.html) dokumentation och placerade länkarna i footern för att kunna komma åt dem vid besök på webbplatsen. 
- En projektrapport är skriven utifrån en mer specifik arbetsbeskrivning på projektets process och framställande, där metod, resultat, slutsats och källförteckning finns inkluderat. 


### Skriven av: thne1900 VT 2025.
#### Kurs: DT211G Frontend-baserad webbutveckling.

#### Källa:
-  https://stephen-king-api.onrender.com/ (2025-04-28).
-  https://www.omdbapi.com/ (2025-04-28).
-  https://stephenking.com/the-author/ (2025-05-02).
-  https://www.bokhavet.se/stephen-king-bocker/ (2025-05-05).
-  https://apexcharts.com/docs/creating-first-javascript-chart/ (2025-05-05).
-  https://apexcharts.com/docs/colors/ (2025-05-05).

#### Källa (bilder):
- https://pixabay.com/sv/gifs/halloween-skr%C3%A4ck-docka-skr%C3%A4mmande-8548/ (2025-04-30)
- https://pixabay.com/sv/gifs/blod-droppande-gif-skr%C3%A4ck-animerad-15492/ (2025-04-30)
- https://pixabay.com/sv/gifs/spindel-insekt-arachnid-kuslig-18883/ (2025-04-30)
- https://pixabay.com/sv/gifs/skelett-skalle-halloween-ben-13967/ (2025-04-30)
- https://pixabay.com/sv/illustrations/hj%C3%A4rta-sjuksk%C3%B6terska-h%C3%A4lsa-5079717/ (2025-05-02)
- https://pixabay.com/sv/gifs/g%C3%A5ende-gala-pixel-f%C3%A5gel-m%C3%B6rk-11968/ (2025-05-15)
- https://pixabay.com/sv/illustrations/skallar-skr%C3%A4ck-halloween-huvud-1665338/ (2025-05-13)
