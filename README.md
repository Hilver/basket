**Opis**

Repozytorium startowe aplikacji - Bold FE Hackathon#1. Aplikacja wykorzystuje vue + vuetify. Docelowo aplikacja ma zostać zrealizowana przy pomocy 
zdalnej "bazy danych" firebase przy wykorzystaniu VueFire.


**Instalacja**

1. Zainstaluj środowisko uruchomieniowe JavaScript **Node.js** + npm
2. Zainstaluj vue command line interface: _npm install --global vue-cli_
3. Zainstaluj zależności które wymagane są przez projekt: _npm install_ 

**Uruchomienie**

Po poprawnej instalacji wszystkich potrzebnych modułów uruchomienie środowiska deweloperskiego (serwer + livereload) powinno być możliwe poprzez 
użycie: _npm run dev_

**VUE - przykładowa aplikacja**

1. stworzenie projektu firebase, konfiguracja z vue cli, pobranie danych i wyświetlenie (~1h)
   -założenie projektu w firebase
   -import danych z json do firebase
   -zaciągnięcie czystego projektu (przygotowanego wcześniej w git)
   -import configu do projektu
   -nawiązanie połączenia z bazą
   -wyświetlanie pobieranych danych

2. Stworzenie komponentu głównego i ewentualnych komponentów dodatkowych, które wyświetlą dane (produkty + atrybuty + przyciski funkcyjne) oraz 
umożliwią funkcjonalności:
- dodawanie do koszyka
- dodawanie do wishlisty
- ukrywanie produktu (x)
Celem zadania nie jest sprawdzenie poprawnego "cięcia", ale należy przygotować strukture html oraz style, które w miare nadadzą wygląd całej 
aplikacji (np dodaj do koszyka to czerwony button, dodaj do wishlisty do niebieski przycisk itd)

Informacje dodatkowe:
- celem zadania nie jest vuetify dlatego w zadaniu głównym nr 2 nie używamy komponentów vuetify (np do przycisków itd),
- dane do firebase znajduja się w folderze static (plik json)
- obrazki produktów znajdują się w folderze static/products
- struktura atrybutów jest nieco skomplikowana w data.json dlatego poniżej objaśnienie:
    - attributes to główna "tabela" z dostepnymi atrybutami produktów (id,nazwa,typ)
        - typ oznacza czy atrybut moze posiadac wartość pojedyńczą czy wielokrotną (tzn np produkt moze mieć jeden kraj pochodzenia, ale jeżeli 
        chodzi o użyty chmiel to może mieć więcej niż jedną wartość)
    - attributesIdValue to "tabela" która zawiera możliwe opcje dla danych atrybutów (gdzie pozycja w tablicy odpowiada id atrybutu z attributes, a
     wartosc czyli string to możliwe wartości dla tego atrybutu oddzielone znakiem |)
    - każdy produkt posiada "attributes" które jest obiektem i sklada sie z par klucz - wartość gdzie klucz to id atrybutu a wartość to 
    string idików wartości danego atrybutu oddzielone znakiem |

