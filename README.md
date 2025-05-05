# Projektuppgift: Frontend
## Arbetsprocessen under frontendprojektet

### Med detta projektarbete ska en webbplats utformas utifrån att skapa en "mashup", där två olika API:er ska kombinieras. Webbplatsen kommer rikta sig till besökare som har ett intresse för skräckgenren, där författaren Stephen Kings bokverk och dess filmatiseringar kommer vara det centrala. 

- Började projektet med att starta upp den grundstruktur på de filer (automatiserad arbetsprocess) som projektet ska innehålla, med NodeJs- parcel. 
- Startade ett nytt repo på GitHub (versionshantering) för hantering av källkod, med samma namn som projektet: projekt_frontend. 
- Därefter synkades projektet till webbtjänsten Netlify, för att webbplatsen därifrån kunna byggas och publiceras.
- Skapade de HTML-filer, JavaScript-filer och SCSS filer som projektet är tänkt ska innehålla.
- Startade upp med innehållet som ska presenteras på html-sidorna. Med grundlayouten kring navigering, header det huvudsakliga innehållet och footern.
- Började i den js-filen där huvudfokuset på webbplatsen ska framställas (data på böcker och filmer). Från två olika API:er har data inhämtats för att kunna presenteras på webbplatsen, i form av Stephen Kings bokverk och dess filmatiseringar på böckerna. Några utvalda böcker har valts ut, där kort information läggs fram med boktitel och publiceringsår. Vid klick på en knapp kommer en besökare åt filmatiseringen av resepektive bok. Där framställs filmens titel, år och en filmposter.   
- I programmet AdobePhotoshop skapades en logotyp (utifrån en egentagen bild), där bildbehandling och bildredigering gjordes, effekter har lagt till på loggan i _base.scss. 
- En header-bild (egentagen) bildhandlades också i AdobePhotoshop. Där lades fokus på bildens presentation och ett försök till att få bilden att framställas med skräck-temat.  
- Påbörjade därefter arbetet i SCSS-filerna där designen och layouten för webbplatsen kommer utformas. Designen ska ha ett skräcktema, så därför kommer nyanser av svart, vitt, grått, rött att framställas. 
- Bilder (gif) har infogats i html-dokuemnten för att skapa sidorna mer effektfulla och förstärka skräcktemat. Effekter på animering har gjorts på bilder med keyframes i en separat SCSS-fil (_animation.scss). 
- Navigeringsmenyn och knappar blev utformade med effekter vid hover. Detta för att få en kontrast när muspekaren hovrar över menyvalen eller en knapp. 
- Utformade sidorna kring responsiviteten, för att innehållet även ska anpassas till mindre skärmenheter med mediaqueries. Har ändrat placeringar, storlek och framställande vid olika skärmstorlekar (1024 och 600px). Gjorde även en uppdelning med kommentarer för att strukturerar upp vilka mediaregler som gäller för vilken html-sida. För en bättre och tydligare läsbarhet. 
- Har stylat listan med bokverk/filmer i main.js-filen och gjort api.html responsiv i (_grid.scss).
- Lade till fler keyframes, där animation gjort på bilder för att skapa en pulsernade effekt. 
- Installerade Apexschart så att ett diagram kan infogas. Diagrammet är tänkt att visa Stephen Kings antal publicerade bokverk under åren, per decennium. Har lagt på styling med mörka färger så att det matchar sidans tema. 











### Skriven av: thne1900 VT 2025.
#### Kurs: DT211G Frontend-baserad webbutveckling.

#### Källa (bilder):
- https://pixabay.com/sv/gifs/halloween-skr%C3%A4ck-docka-skr%C3%A4mmande-8548/ (2025-04-30)
- https://pixabay.com/sv/gifs/blod-droppande-gif-skr%C3%A4ck-animerad-15492/ (2025-04-30)
- https://pixabay.com/sv/gifs/spindel-insekt-arachnid-kuslig-18883/ (2025-04-30)
- https://pixabay.com/sv/gifs/skelett-skalle-halloween-ben-13967/ (2025-04-30)
- https://pixabay.com/sv/illustrations/hj%C3%A4rta-sjuksk%C3%B6terska-h%C3%A4lsa-5079717/ (2025-05-02)