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
