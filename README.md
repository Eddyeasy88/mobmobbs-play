# mobmobbs-play

Web-Testversion von MOBMOBBS (GitHub Pages): **https://eddyeasy88.github.io/mobmobbs-play/**

- Nur eine Testveröffentlichung des spielbaren Kampfprototyps, kein offizielles Spiel.
- Alle Zahlen sind Prototyp-Testwerte, keine Balance.
- Enthält nur fertige Build-Dateien (Godot 4.4.1, Webexport ohne Threads); der Quellcode liegt im privaten
  Repository `Mobmobbs`.
- Stand: Quellrepository `Mobmobbs` auf `ae052b3` plus nicht committete Prototyp-Änderungen vom 11.11.2026
  (zweiter Stand: Teamauswahl ohne Scrollen, verständlichere Kampfdarstellung, langsames Starttempo, Hinweise)
  (Webbuild identisch mit dem geprüften Build).

## Schatzsuche – Die Kristallruinen (Prototyp, 11.11.2026)

Ordner `schatzsuche/`: spielbarer Prototyp des Kugellabyrinths mit Neigungssteuerung.
Link: https://eddyeasy88.github.io/mobmobbs-play/schatzsuche/
Gebaut aus dem lokalen Arbeitsstand des Hauptrepositorys (dort noch nicht committet). Die Dateien im Stammverzeichnis
(bisherige Web-Testversion) sind unverändert.

## Mobbmobs – spielbare Vorschau 0.2 (Vertical Slice, 11.11.2026)

Ordner `mobbmobs-preview/`: erste zusammenhängend spielbare Version mit Heimat, Weltbaum (Levelkarte),
Levelvorschau, zwei spielbaren Labyrinth-Leveln (Die Kristallruinen, Die Nebelstege), Ergebnisbildschirm,
Belohnungen und lokalem Spielstand.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs-preview/

- Testveröffentlichung, kein offizielles Spiel. Zahlen sind Startwerte, keine Balance.
- Godot 4.4.1, Webexport ohne Threads (Laufzeit identisch mit den Builds oben).
- Gebaut aus einem lokalen Arbeitsstand (Hauptrepository `ae052b3` + M13-Schreibkorrektur + aus dem Build
  rekonstruierte Schatzsuche + Vorschau-Änderungen); im Hauptrepository noch nicht committet.
- Der Spielstand liegt nur im Browser dieses Geräts (eigene Datei, unabhängig von den Prototypen oben).
- Die Ordner `schatzsuche/` und das Stammverzeichnis sind unverändert.

## Mobbmobs 2 – Weltprototyp 1 (14.11.2026)

Ordner `mobbmobs2-welt-1/`: erster erkundbarer Prototyp der neuen Spielwelt „Der Baum ist die Insel“
(Weltbaum mit Wurzeltor, Wissensknoten und Entwicklungszweig, Lebensquell-Grotte, vier Lebensräume).
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-1/

- Gebaut aus Branch `mobbmobs2/welt-prototyp` (`077c389`) des Hauptrepositorys. V1 und alle anderen Ordner unverändert.
- Fortschrittsstufen sind zum Vergleich umschaltbar (nur Darstellung). Knopf „V1-Insel“ zeigt die bisherige Heimat.
- FPS-Anzeige oben rechts für den iPhone-Leistungstest.

## Mobbmobs 2 – Weltprototyp 2 · Messung (14.11.2026)

Ordner `mobbmobs2-welt-2/`: Festigungsphase Runde 1 – Messrundgang (Knopf „Messen“), leichtere Oberfläche,
verbesserte Kamera-/Touch-Steuerung. Welt gestalterisch unverändert gegenüber `mobbmobs2-welt-1/`.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-2/
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`c6a303d`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 3 · Schatten (14.11.2026)

Ordner `mobbmobs2-welt-3/`: Schattenoptimierung – fünf Schattenvarianten (A Voll … E Gebacken) live umschaltbar
und im Messrundgang „Schatten“ vergleichbar. Startet mit Variante E (eingebackene Schatten).
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-3/
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`b0e3980`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 4 · Rendering (14.11.2026)

Ordner `mobbmobs2-welt-4/`: neues Messverfahren (Analyse/Gesamt, verschachtelt mit Kalibrierpunkt),
Einzeloptimierungen live umschaltbar. Welt unverändert, Schatten B.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-4/
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`4f2deb9`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 5 · Kantenglättung aus (14.11.2026)

Ordner `mobbmobs2-welt-5/`: Runde 1D – Kantenglättung aus als neuer Standard (Schatten B), Render-Einstellungen
live umschaltbar, Messmodi „Abschluss“ und „Requisiten“.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-5/
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`cd7ae9b`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 6 · Weltbaum als Herz (14.11.2026)

Ordner `mobbmobs2-welt-6/`: Runde 2 – Lebensadern über Wurzeln und Stamm, Bodenadern zu Wurzelherzen in den
Lebensräumen, Krone in Schichten, Fortschrittsstufen verändern die Gestalt. Kantenglättung aus, Schatten B.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-6/
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`45a95ce`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 7 · Feinschliff Weltbaum (14.11.2026)

Ordner `mobbmobs2-welt-7/`: Runde 2.1 – Krone unregelmäßiger, Lebensadern schmaler und ruhiger.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-7/
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`a6eeea4`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 8 · Lebensadern natürlicher (14.11.2026)

Ordner `mobbmobs2-welt-8/`: Runde 2.2 – feine, unregelmäßig verzweigte Lebensadern in Rinde und Wurzeln
(Licht nur in der Ader), Bodenadern als feine Stränge, die sich am Wurzelherz sammeln.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-8/
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`fce5f62`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 9 · Gebiete 3.1 (14.11.2026)

Ordner `mobbmobs2-welt-9/`: Gebietsgerüst – sechs Bereiche mit organischen Übergängen, neuer Nordhang
(Moos → Fels) und Süd-Ost-Terrassen, Uferwiese am Wurzelsee. Weltbaum 2.2 unverändert.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-9/
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`e4f6870`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 10 · Kristallgrat (14.11.2026)

Ordner `mobbmobs2-welt-10/`: Gebiete 3.2 – Kristallgrat als eigene Landschaft: Höhenrücken mit Steilwand zum
Meer, Schlucht, Ruinenbogen, Felsnadeln, Kristalle brechen aus dem Fels. Weltbaum 2.2 unverändert.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-10/
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`4556554`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 11 · Nebelwiesen (14.11.2026)

Ordner `mobbmobs2-welt-11/`: Gebiete 3.3 – Hochwiese mit Südklippe, Nebelsenken mit Bodennebel,
Lauschsteine, Nebelstege über dem Meer. Weltbaum 2.2, Kristallgrat 3.2 unverändert.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-11/
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`e693010`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 12 · Wurzelsee und Quellbach (14.11.2026)

Ordner `mobbmobs2-welt-12/`: Gebiete 3.4 – größerer Wurzelsee mit Seeinsel und Trauerweide, Seerosen,
Uferwurzeln, Quelle zwischen den Wurzeln und Quellbach zum See. Weltbaum 2.2 und 3.1–3.3 unverändert.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-12/
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`b84a43e`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 13 · Mooswald (14.11.2026)

Ordner `mobbmobs2-welt-13/`: Gebiete 3.5 – Mooswald-Feinschliff: Waldrand, Hohlweg, Moosgrube, Leuchtpilzring.
Weltbaum 2.2 und 3.1–3.4 unverändert.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-13/
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`62d9ac3`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 14 · Gebiete erwachen, Gebiete 3.0 komplett (14.11.2026)

Ordner `mobbmobs2-welt-14/`: Gebiete 3.6 – Lebensräume schlafen (entsättigt, Nebel, Pflanzen klein) und erwachen
vom Wurzelherz aus; Vorschau-Schalter je Gebiet. Stand aller Gebiete 3.1–3.6.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-14/
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`b7ae56d`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 15 · Prüfversion Gesamtprüfung Gebiete 3.0 (14.11.2026)

Ordner `mobbmobs2-welt-15/`: Stand Gebiete 3.0 mit Kristall-Korrektur (Schlafzustand) und Messmodus „Gesamt 3.0“.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-15/
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`ea2037a`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 16 · Performance-Test-Kit (14.11.2026)

Ordner `mobbmobs2-welt-16/`: Stand Gebiete 3.0 (wie welt-15) mit automatischem Gesamttest.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-16/?gesamttest
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`168862d`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 17 · Diagnoselauf (14.11.2026)

Ordner `mobbmobs2-welt-17/`: Stand Gebiete 3.0 (unverändert) mit Diagnoselauf im Test-Kit.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-17/?diagnose
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`be468d5`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 18 · Leistungsrunde A (15.11.2026)

Ordner `mobbmobs2-welt-18/`: Stand Gebiete 3.0 (Insel unverändert) mit Leistungsrunde A (Oberfläche mit weniger
Zeichenaufrufen, Erwachen-Berechnung nur bei Bedarf) und Dauerlauf 60/30 FPS im Test-Kit.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-18/?dauerlauf
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`ef786bf`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 19 · Messmethode 2 (15.11.2026)

Ordner `mobbmobs2-welt-19/`: Stand wie welt-18 (Insel unverändert), Test-Kit mit Paarlauf A/B und Wärmetest 10 Min. (60/30 FPS).
Links: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-19/?paarlauf · https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-19/?waerme
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`1978d4d`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 20 · Erholungstest (15.11.2026)

Ordner `mobbmobs2-welt-20/`: Stand wie welt-19 (Insel unverändert), Test-Kit zusätzlich mit Erholungstest.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-20/?erholung
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`de3430c`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 21 · Engpasstest (15.11.2026)

Ordner `mobbmobs2-welt-21/`: Stand wie welt-20 (Insel unverändert), Test-Kit mit Engpasstest und Bildzeit nach echter Uhr.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-21/?engpass
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`967cc6d`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 22 · Kachel-Messung (15.11.2026)

Ordner `mobbmobs2-welt-22/`: Stand wie welt-21 (Insel und Standard-Rendering unverändert), Test-Kit mit Kachel-Messung Kleinpflanzen.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-22/?kacheln
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`84cfe94`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 23 · Shader-Messung Stufe A (15.11.2026)

Ordner `mobbmobs2-welt-23/`: Messstand (Insel und Standard-Rendering unverändert) mit Messlogik 2 und Shader-Messung Stufe A.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-23/?shader
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`d2f46c4`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 24 · Diagnose-Build Shader-Messung Stufe B Boden (15.11.2026)

Ordner `mobbmobs2-welt-24/`: **reiner Diagnose-Build** – keine Optimierung, Insel und Standard-Rendering unverändert.
Test-Kit mit Shader-Messung Stufe B (12 Bestandteil-Varianten des Boden-Shaders, nur zur Laufzeit im Speicher).
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-24/?shader → Knopf „Shader-Messung Stufe B Boden“.
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`c16d51d` = gesicherter Stand `950c44c` + Messfeld-Knopf). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 25 · Diagnose „früher Ausstieg“ Boden (15.11.2026)

Ordner `mobbmobs2-welt-25/`: **reiner Diagnose-Build** – keine Optimierung, Insel, Shader, Materialien und Standard-Rendering unverändert.
Test-Kit mit korrigierter Erkennung mehrstufiger Drosselung und Diagnose „früher Ausstieg“ (nur Testkopie im Speicher;
Vergleiche: Null-Test, „licht konstant“).
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-25/?shader → Knopf „Diagnose früher Ausstieg Boden“.
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`ad7bf8a`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 26 · Prüfung Boden-Optimierung „früher Ausstieg“ (15.11.2026)

Ordner `mobbmobs2-welt-26/`: erster Stand mit einer Optimierung im Standard-Rendering – **nur der Boden** nutzt einen eigenen
Shader mit frühem Ausstieg in der Lichtfunktion (bildgleich). Gemeinsames Lichtmodell, alle anderen Materialien, Geometrie,
Pflanzen und Auflösung unverändert. Messmodus vergleicht den bisherigen Boden gegen den optimierten.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-26/?boden → Knopf „Prüfung Boden-Übernahme“.
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`fc2864d`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 27 · Prüfung Boden-Optimierung, Messfeld korrigiert (15.11.2026)

Ordner `mobbmobs2-welt-27/`: wie welt-26 (Boden-Shader mit frühem Ausstieg, sonst unverändert), zusätzlich nur die Korrektur des
Messfelds (scrollbar, Bericht über volle Höhe, Knöpfe immer sichtbar, „Letzten Lauf anzeigen“).
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-27/?boden → „Letzten Lauf anzeigen“ → „Kopieren“.
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`10caf5b` = `fc2864d` + Messfeld-Korrektur). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 28 · Shader-Messung Stufe R1 Rinde (15.11.2026)

Ordner `mobbmobs2-welt-28/`: **reiner Messstand** – Darstellung wie übernommener Stand (Boden mit frühem Ausstieg); Rinden-Shader,
alle Materialien, Insel und Szenen unverändert. Neu nur der Messmodus „Shader-Messung Rinde“ (Varianten nur im Speicher).
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-28/?rinde → Knopf „Shader-Messung Rinde“.
Gebaut aus Branch `mobbmobs2/welt-prototyp` (`1a17daf`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 29 · Prüfung Rinden-Übernahme „früher Ausstieg“ (15.11.2026)

Ordner `mobbmobs2-welt-29/`: **Messstand, nicht endgültig übernommen.** Wie welt-28 (Boden mit frühem Ausstieg), zusätzlich nutzt
nur die Weltbaum-Rinde eine eigene Shader-Kopie mit frühem Ausstieg (bildgleich). Gemeinsames Lichtmodell, alle anderen
Materialien, Insel und Szenen unverändert. Test-Kit erkennt jetzt auch gestörte Variantenabschnitte.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-29/?rinde → Knopf „Prüfung Rinden-Übernahme“.
Gebaut aus Zweig `mobbmobs2/rinde-ausstieg` (`39e6a4e`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 30 · Prüfung Weltobjekte + Gesamtgewinn „früher Ausstieg“ (15.11.2026)

Ordner `mobbmobs2-welt-30/`: **Messstand, nicht endgültig übernommen.** Wie verbindlicher Stand `cf08ffa` (Boden + Rinde
optimiert), zusätzlich nutzen alle bisherigen `w2_world`-Materialien (Felsen, Pflanzen, kleine Bäume, Leuchtobjekte) eine
eigene Shader-Kopie mit frühem Ausstieg (bildgleich). Gemeinsames Lichtmodell, Insel, Szenen unverändert.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-30/?welt → Knopf „Prüfung Weltobjekte + Gesamtgewinn“.
Gebaut aus Zweig `mobbmobs2/welt-ausstieg` (`7986d5b`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 31 · Prüfung Rinden-LOD (Fernstufe) (15.11.2026)

Ordner `mobbmobs2-welt-31/`: **Messstand, nicht endgültig übernommen.** Wie verbindlicher Stand `cf08ffa` (Boden + Rinde
optimiert), zusätzlich eine Fernstufe für die Weltbaum-Rinde (Stamm, Entwicklungsast, Grottenwurzeln; greift ab ≈ 53 m,
Formabweichung ≤ 2 px, Nahansicht unverändert, Schatten unverändert). Weltobjekte-Optimierung nicht enthalten.
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-31/?rinde → Knopf „Prüfung Rinden-LOD“.
Gebaut aus Zweig `mobbmobs2/rinde-lod` (`3a2ed87`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 32 · Prüfung Kleinpflanzen in Kacheln (bildgleich) (15.11.2026)

Ordner `mobbmobs2-welt-32/`: **Messstand, nicht endgültig übernommen.** Wie verbindlicher Stand `cf08ffa` (Boden + Rinde
optimiert), zusätzlich Kleinpflanzen in 20-m-Kacheln mit Sichtweite und Detailstufe wie bisher (bildgleich).
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-32/?pflanzen → Knopf „Prüfung Pflanzen-Kacheln“.
Gebaut aus Zweig `mobbmobs2/pflanzen-kacheln` (`83e76b5`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 33 · Abschlussprüfung Pflanzen-Kacheln mit Gruppenauswahl (15.11.2026)

Ordner `mobbmobs2-welt-33/`: **Messstand, nicht endgültig übernommen.** Wie welt-32, aber Kacheln je Pflanzengruppe nur, wenn sie
Pflanzen außerhalb des Bildes einsparen; sonst bisherige Darstellung (bildgleich).
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-33/?pflanzen → Knopf „Prüfung Pflanzen-Kacheln“.
Gebaut aus Zweig `mobbmobs2/pflanzen-kacheln` (`f83cac4`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 34 · Messung Pflanzendichte (15.11.2026)

Ordner `mobbmobs2-welt-34/`: **Messstand.** Verbindlicher Stand `3de8e83` (Boden, Rinde, Pflanzen-Kacheln) plus Messvarianten
„Kleinpflanzen 2/3“ und „1/2“ (nur Messung, Standard unverändert).
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-34/?dichte → Knopf „Messung Pflanzendichte“.
Gebaut aus Zweig `mobbmobs2/pflanzen-dichte` (`7f2b8df`). Alle anderen Ordner unverändert.

## Mobbmobs 2 – Weltprototyp 35 · Prüfung Pflanzendichte Hälfte (verbindlicher Stand) (15.11.2026)

Ordner `mobbmobs2-welt-35/`: verbindlicher Stand `f1e17ca` (Boden, Rinde, Pflanzen-Kacheln, Hälfte der Kleinpflanzen).
Link: https://eddyeasy88.github.io/mobmobbs-play/mobbmobs2-welt-35/?dichte → Knopf „Prüfung Pflanzendichte Hälfte“.
Alle anderen Ordner unverändert.

## Duell – Testbuild AP-8b „fester Spieltakt“ (25.11.2026)

Ordner `duell-spieltakt-8b/` (Build `31ab5bad80`; ersetzt `a62d737c39`, der beim Start abstürzte): Duell mit bildratenunabhängigem Spieltakt (Architekturpaket AP-8b).
Link: https://eddyeasy88.github.io/mobmobbs-play/duell-spieltakt-8b/

- Gebaut aus Branch `architektur/basis` (`cc01ab1`) des Hauptrepositorys; nur im Build: Art-Register prüft die beim
  Export bewusst weggelassenen Quellmodelle und Silhouetten nicht als Pflicht (`asset_paths.json`, `required: false`).
- Zum Prüfen: Steuerung, Rammwucht, Kollisionen, Trefferpause (jetzt kurzes Anhalten statt Zeitlupe), Fähigkeiten,
  Spielgefühl, Bildrate.
- Der Duell-Prototyp v0.1 (`duell-prototyp-v0.1/`) und alle anderen Ordner sind unverändert.

## Duell – Release-Testbuild AP-8c „Export- und Release-Sicherheit“ (25.11.2026)

Ordner `duell-exportsicher-8c/` (Build `c33188690c`): Duell aus dem dauerhaft korrigierten Architekturstand.
Link: https://eddyeasy88.github.io/mobmobbs-play/duell-exportsicher-8c/

- Gebaut aus Branch `architektur/basis` (`e63cd10`) mit dem regulären Bauskript, ohne jede Nachbearbeitung der
  Exportdaten. Vor der Veröffentlichung automatisch geprüft (Paketinhalt, Start mit Release-Vorlage, Duell gegen den
  Computer, Start im Browser).
- Spielinhalt wie `duell-spieltakt-8b/` (gleicher Spieltakt, gleiche Trefferpause); neu ist nur die Startprüfung.
- `duell-spieltakt-8b/`, `duell-prototyp-v0.1/` und alle anderen Ordner sind unverändert.

## Mobbmobs – Testbuild AP-9 „Duell im gemeinsamen Spiel“ (26.11.2026)

Ordner `spiel-duell-ap9/` (Build `5b00fd4efa`): das Hauptspiel (Virell) mit integriertem Kugelduell.
Link: https://eddyeasy88.github.io/mobmobbs-play/spiel-duell-ap9/

- Gebaut aus Branch `architektur/basis` (`dbd91de`) mit dem regulären Bauskript, ohne Nachbearbeitung der Exportdaten;
  vor der Veröffentlichung automatisch geprüft (Paketinhalt, Start, Insel → Duell → Insel, Start im Browser).
- **Eigener Spielstand** (`user://mobbmobs2/test_ap9.json`): Der Testbuild beginnt neu und berührt den Spielstand von
  Mobbmobs v0.1 (`mobbmobs3/`) nicht.
- Duell: Menü (rechts oben) → Reiter „Duell · vorläufig“ → „Zum Duell“. Vorläufiger Zugang nur für den Test.
- Neue Duellregel: gewonnen hat, wer zuerst fünf Runden gewinnt.
- Alle anderen Ordner sind unverändert.

## Mobbmobs – Testbuild AP-10 „Bosskampf im gemeinsamen Spiel“ (26.11.2026)

Ordner `spiel-boss-ap10/` (Build `0b1cf46545`): das Hauptspiel (Virell) mit integriertem Bosskampf (Kampf aus dem
freigegebenen Bosskampf-Prototyp 9, unverändert).
Link: https://eddyeasy88.github.io/mobmobbs-play/spiel-boss-ap10/

- Gebaut aus Branch `architektur/basis` (`2aa7028`) mit dem regulären Bauskript, ohne Nachbearbeitung der Exportdaten;
  vor der Veröffentlichung geprüft (Start im Browser, Insel → Bosskampf → Insel im Release-Export, Start-Spielstand).
- **Eigener Spielstand** (`user://mobbmobs2/test_ap10.json`), berührt weder Mobbmobs v0.1 noch die AP-9-Testversion.
- **Start-Spielstand „Bosskampf frei“:** Beim ersten Start beginnt die Testversion mit drei voll entwickelten
  Mobbmobs und allen drei schweren Labyrinthen geschafft (Story gesehen, noch kein Bosssieg).
- Bosskampf: Menü (rechts oben) → Reiter „Bosskampf · vorläufig“ → „Zum Bosskampf“. Vorläufiger Zugang nur für den Test.
- Bossprüfung: den Hüter mit jedem der drei Mobbmobs einmal als aktivem Mobbmob besiegen (Reihenfolge frei); danach
  Abschlussszene und nächster Zyklus. Herzen = Leben der Mobbmobs; ohne Leben heilt der Lebensquell auf der Insel.
- Alle anderen Ordner sind unverändert.
