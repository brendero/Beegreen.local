#Beegreen
-----

###nodige gegevens om de applicatie te deployen
-----
* run bundle install in root van www-beegreen map in cmd 
* run bundle exec jekyll-serve


~~~~
bundle install
bundle exec jekyll serve
~~~~


>projecten onder de solution
-----

|  Projecten                 |  Uitleg                                        |
|  ---------------------     |  :------------------------------------------: |
|  _include                  |  De map waar al de includes inzitten zoals scripts en de head   |
|  _layouts                  |  de map waar alle layouts inzitten van de verschillende pagina's|
|  _sass                     |  Map waar alle .scss bestanden inzitten, 7-1 sass structuur waarbij alles word geïmporteerd in 1 _main.scss bestand |
|  css                       |  in deze map zit allen het bestand main.scss in, hierin word de sass van in de _sass folder gecompileerd naar gewone css    |
|  ecoplan.js                |  Implementatie van de ecoplan database van gent en het plaatsen van de discober items op de discover-page|
|  hammer.min.js             |  Library om de touchscreen sensitivity te verbeteren |
|  helpers.js                |  Handlebars + Helper functies                                  |
|  loadsh.min.js             |  Lodash library voor gemakkelijker werken met javascript                             |
|  login.js                  |  functie voor toevoegen randomuser + loginfunctie voor activeuser in localstorage te zetten                    |
|  models.js                 |  models voor de array die in de localstorge word geplaats voor de users       |
|  profile-page.js           |  javascript bestand om de ranking te laten zien van de activeuser + de activiteiten die hij al gekozen heeft te laten komen op de profile-page                                      |
|  progressbar.js            |  functie om de progressbar de width te geven van het aantal bees dat de activeuser heeft                                    |
|  randomUser.js             |  radomuser.me Implementatie + friends-feed automatisatie|
|  services.js               |  helpfuncties om te werken met localstorage en JSON                                       |
|  utils.js                  |  utilities om bepaalde functies uit te voeren bv: calculateDistance |
|  weather.js                |  Oproepen van de Weather API en het weer in gent tonen in de navbar van elke pagina                                       |
|  discover-page.md          |  De markdown notatie van de opmaak van de discover-page                          |
|  friends-feed.md           |  De markdown notatie van de opmaak van de friends-feed                          |
|  index.md                  |  De markdown notatie van de opmaak van de login-page                          |
|  profile-page.md           |  De markdown notatie van de opmaak van de Profile-page                          |
