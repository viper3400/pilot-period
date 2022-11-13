---
slug: confusion-of-test
title: Die Babylonische Testverwirrung
authors: [jang]
tags: []
draft: true
---

## Entschuldige, wovon sprichst du gerade?

In manchen Diskussionen hat man einfach den Eindruck, dass die Menschen nicht auf der selben Seite im Buch sind.

Dies ist auch symptomatisch für Blogeinträge und Artikel zum Thema QA & Software Testing.

Fehlender Kontext, jeder ist fokussiert auf seinen eigenen Blickwinkel und nimmt die anderen nicht mit.

Mangelnde Standardisierung im Softwarebereich. (Man kann davon ausgehen, dass die Anzahl der ToDo apps exponentiell mit der Anzahl der Entwickler steigt.

Test Mangament bezieht sich häufig auf planerische Aspekte, die niedrigeren Levels dann mit der Durchführung.
Die Bereitstellung von Testdaten, der Testbasis etc wird häufig unterschätzt.

## In welchem Kontext darf ich das betrachten?

Was ist also mein Kontext:

- Mein Kontext ist das funktionale Testen einer modularen Software.
- Die Software wird von Unternehmen eingesetzt.
- Die Nutzer der Software sind die Mitarbeiter des Unternehmens.
- Dabei führe ich sowohl Regressions-Tests nach Bereitstellung einer bestimmten Version aus, als auch Test innerhalb der Entwicklungsphase durch.
- Die Tests werden teilweise manuell, teilweise automatisiert durchgeführt.
- In meiner Rolle bin ich Tester, kein Entwickler.

So ist es für meine Arbeit bspw. nicht relevant, dass die Anwendung in sämtlichen Webbrowsern und Versionen läuft, da wir vorgeben können, das