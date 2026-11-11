/*
 * MOBMOBBS – Neigungsbrücke für den Webbuild (Schatzsuche).
 * Liest die Lage des Smartphones (deviceorientation) und stellt sie Godot unter window.mobTilt bereit.
 *
 * iOS Safari erlaubt den Zugriff nur nach DeviceOrientationEvent.requestPermission(), und dieser Aufruf muss
 * direkt in einer Benutzeraktion des Browsers erfolgen. Godot verarbeitet Eingaben aber erst im nächsten Bild.
 * Deshalb meldet Godot vorab den Bildschirmbereich des Buttons „Neigung aktivieren“ (arm), und dieses Skript
 * fragt die Freigabe im touchend/click-Ereignis an, wenn der Tipp in diesem Bereich liegt.
 *
 * Felder: beta, gamma (Grad), angle (Bildschirmausrichtung), count (Anzahl empfangener Messungen),
 *         permission: unknown | pending | granted | denied | unsupported, hidden (Seite im Hintergrund).
 */
(function () {
  'use strict';
  var t = window.mobTilt = {
    beta: 0, gamma: 0, angle: 0, count: 0,
    permission: 'unknown', error: '', hidden: false, armed: null,
    supported: typeof window.DeviceOrientationEvent !== 'undefined',
    needsPermission: false
  };
  t.needsPermission = t.supported && typeof window.DeviceOrientationEvent.requestPermission === 'function';

  function screenAngle() {
    if (window.screen && window.screen.orientation && typeof window.screen.orientation.angle === 'number') {
      return window.screen.orientation.angle;
    }
    if (typeof window.orientation === 'number') { return window.orientation; }
    return 0;
  }

  function onOrientation(e) {
    if (e.beta === null || e.gamma === null || e.beta === undefined || e.gamma === undefined) { return; }
    t.beta = e.beta;
    t.gamma = e.gamma;
    t.angle = screenAngle();
    t.count += 1;
  }

  var listening = false;
  function listen() {
    if (listening) { return; }
    listening = true;
    window.addEventListener('deviceorientation', onOrientation, true);
  }

  t.request = function () {
    if (!t.supported) { t.permission = 'unsupported'; return; }
    if (!t.needsPermission) { t.permission = 'granted'; listen(); return; }
    if (t.permission === 'granted') { listen(); return; }
    t.permission = 'pending';
    try {
      window.DeviceOrientationEvent.requestPermission().then(function (result) {
        t.permission = (result === 'granted') ? 'granted' : 'denied';
        if (result === 'granted') { listen(); }
      }).catch(function (err) {
        t.permission = 'denied';
        t.error = String(err);
      });
    } catch (err) {
      t.permission = 'denied';
      t.error = String(err);
    }
  };

  // Bereich als Anteile des Fensters (0..1): x, y, Breite, Höhe.
  t.arm = function (x, y, w, h) { t.armed = [x, y, w, h]; };
  t.disarm = function () { t.armed = null; };

  function inArmedArea(cx, cy) {
    var a = t.armed;
    if (!a || !window.innerWidth || !window.innerHeight) { return false; }
    var fx = cx / window.innerWidth, fy = cy / window.innerHeight, m = 0.01;
    return fx >= a[0] - m && fx <= a[0] + a[2] + m && fy >= a[1] - m && fy <= a[1] + a[3] + m;
  }

  function onUserGesture(e) {
    var p = (e.changedTouches && e.changedTouches[0]) || e;
    if (p && typeof p.clientX === 'number' && inArmedArea(p.clientX, p.clientY)) {
      t.disarm();
      t.request();
    }
  }
  document.addEventListener('touchend', onUserGesture, true);
  document.addEventListener('click', onUserGesture, true);

  document.addEventListener('visibilitychange', function () { t.hidden = document.hidden; });

  // Ohne Freigabepflicht (Android, Desktop) sofort mitlesen, damit erkennbar ist, ob ein Sensor existiert.
  if (t.supported && !t.needsPermission) { listen(); }
})();
