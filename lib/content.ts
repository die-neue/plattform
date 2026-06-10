export const claim = "Der Staat muss liefern oder lassen.";

export const kernformel =
  "Wir sind nicht gegen den Staat. Wir sind gegen einen Staat, der zu viel verspricht und zu wenig kann.";

export const praeambel = [
  "Deutschland ist nicht arm. Deutschland ist schlecht organisiert. Wir haben hohe Steuern, hohe Abgaben, hohe Energiepreise, lange Verfahren, marode Infrastruktur und einen Staat, der überall zuständig sein will, aber seine Kernaufgaben nicht mehr zuverlässig erfüllt. Das ist kein Schicksal. Es ist das Ergebnis politischer Feigheit.",
  "Die Neue steht für einen radikalen Neustart: weniger Staat, weniger Umverteilung, weniger Bürokratie, dafür mehr Sicherheit, mehr Eigentum, mehr Leistungsgerechtigkeit und mehr Tempo.",
];

export const staatsverstaendnis =
  "Der Staat soll weniger versprechen und mehr liefern. Sicherheit, Justiz, Infrastruktur, Bildung, Verteidigung und digitale Verwaltung sind Pflichtaufgaben. Alles andere steht unter Rechtfertigungsdruck. Nicht die gute Absicht zählt, sondern die messbare Wirkung. Was Ziele verfehlt, läuft aus.";

export const sofortprogramm: { titel: string; text: string }[] = [
  { titel: "Der Staat fängt bei sich selbst an", text: "Wir halbieren die Zahl der Bundesbeauftragten, reduzieren Ministerien und Stabsstellen und stoppen die Auslagerung von Verantwortung in Kommissionen und Agenturen." },
  { titel: "Bürokratie mit harten Regeln abbauen", text: "Eine neue Pflicht ersetzt zwei alte, jede Regulierung läuft nach fünf Jahren aus, wenn ihr Nutzen nicht belegt ist, und keine Antwort der Behörde innerhalb der Frist gilt als Zustimmung." },
  { titel: "Steuern runter und einfacher", text: "Wir vereinfachen die Einkommensteuer radikal und senken sie, vor allem für kleine und mittlere Einkommen." },
  { titel: "Keine Vermögensteuer, Erbschaftsteuer abschaffen", text: "Was bereits versteuert wurde, wird beim Generationenwechsel nicht ein zweites Mal bestraft." },
  { titel: "Arbeit flexibler, Beschäftigte mit Eigentum", text: "Einfachere Trennung über eine Abfindungsregel, dafür deutlich mehr Netto, ein automatisches Bürgerdepot und steuerfreie Mitarbeiterbeteiligung." },
  { titel: "Bildungsgeld, das dem Kind folgt", text: "Das Geld folgt dem Kind statt der Schule, die Schulbezirke fallen, und jede Familie wählt unabhängig vom Geldbeutel frei." },
  { titel: "Wohnen durch Bauen", text: "Schnellere Genehmigungen, niedrigere Baukosten und ein Grunderwerbsteuerfreibetrag für den ersten selbstgenutzten Erwerb." },
  { titel: "Bezahlbare Energie", text: "Die CO2-Einnahmen gehören nicht dem Staat, sie gehen pro Kopf zurück. Wir beenden die Denkverbote bei der Kernkraft." },
  { titel: "Sozialstaat, der Arbeit belohnt", text: "Wer Hilfe braucht, bekommt sie. Wer arbeiten kann, für den lohnt sich Arbeit mehr als Nichtstun." },
  { titel: "Sicherheit und durchgesetztes Recht", text: "Starke Polizei und Justiz, gezielte Zuwanderung von Fachkräften und durchgesetzte Ausreisepflichten." },
  { titel: "Radikale Transparenz", text: "Nicht nur das fertige Programm ist öffentlich, sondern der komplette Weg dahin, wie Positionen entstehen, diskutiert und beschlossen werden." },
];

export const mechanismen: { titel: string; text: string }[] = [
  { titel: "Staatsaufgabenprüfung", text: "Jede staatliche Leistung wird einer von drei Kategorien zugeordnet: Kernaufgabe, Übergangsaufgabe oder Streichaufgabe." },
  { titel: "Eine neue Pflicht ersetzt zwei alte", text: "Jede neue Melde-, Dokumentations- oder Berichtspflicht ersetzt zwei bestehende. Ohne Gegenfinanzierung an Bürokratiekosten tritt sie nicht in Kraft. Jedes Ministerium bekommt ein jährlich sinkendes Bürokratiekostenbudget." },
  { titel: "Verfallsdaten", text: "Neue Regulierungen laufen nach fünf Jahren automatisch aus, wenn der Bundestag ihren Nutzen nicht anhand messbarer Ziele bestätigt." },
  { titel: "Subventionsmoratorium", text: "Keine neue Subvention ohne Streichung einer alten. Jede Subvention bekommt ein öffentliches Preisschild, ein Enddatum und eine Begründung, warum sie nicht durch niedrigere Steuern ersetzbar ist." },
  { titel: "Genehmigungsfiktion", text: "Keine Antwort der Behörde innerhalb der Frist gilt grundsätzlich als Zustimmung." },
  { titel: "Behörden-Überprüfung", text: "Jede Bundesbehörde wird regelmäßig überprüft: weiterführen, zusammenlegen, digitalisieren oder schließen. Für die Ministerialverwaltung gilt ein Personaldeckel." },
  { titel: "Digitalisierung in dieser Reihenfolge", text: "Wir digitalisieren nicht den Papierprozess, wir streichen ihn. Jeder Prozess wird zuerst abgeschafft, dann vereinfacht, dann automatisiert. Bürger reichen ihre Daten nur einmal ein." },
];

export type Position = {
  nr: number;
  titel: string;
  einfach: string;
  leitlinie: string;
  forderungen: string[];
  machbarkeit: string;
};

export const positionen: Position[] = [
  {
    nr: 1,
    titel: "Der Staat fängt bei sich selbst an",
    einfach:
      "Wer den Staat schlanker machen will, muss zuerst bei der Politik selbst sparen, nicht nur bei anderen. Wir verkleinern den politischen Apparat und beschränken den Staat auf das Wesentliche.",
    leitlinie:
      "Glaubwürdige Verschlankung beginnt beim politischen Apparat selbst. Unser langfristiger Maßstab ist eine Staatsquote von rund 30 Prozent als Disziplin, nicht als Excel-Ziel.",
    forderungen: [
      "Die Zahl der Bundesbeauftragten halbieren.",
      "Bundesministerien und Stabsstellen reduzieren.",
      "Die Auslagerung politischer Verantwortung in Kommissionen, Agenturen und Förderprogramme stoppen.",
      "Jede Aufgabe muss begründen, warum sie zwingend staatlich finanziert oder organisiert sein muss.",
      "Der Weg zu rund 30 Prozent Staatsquote in drei Phasen: erst Bürokratie und Subventionen senken, dann den Sozialstaat auf Basisabsicherung und Eigenvorsorge umbauen, dann die Abgaben auf Arbeit massiv senken.",
    ],
    machbarkeit:
      "Vieles ist im Bereich der Bundespolitik direkt umsetzbar. Eine Staatsquote von rund 30 Prozent ist ein sehr ambitioniertes, langfristiges Ziel, das wir offen als Richtungsvorgabe benennen.",
  },
  {
    nr: 2,
    titel: "Ein einfaches Steuersystem, das Eigentum ermöglicht",
    einfach:
      "Steuern sollen einfach und niedrig sein. Wer arbeitet und spart, soll mehr behalten und Vermögen aufbauen können. Eine Vermögensteuer wird es mit uns nicht geben, und die Erbschaftsteuer schaffen wir ab.",
    leitlinie:
      "Das Steuersystem soll Leistung belohnen, einfach sein und den Aufbau von Eigentum für alle ermöglichen. Substanz und Generationenvermögen besteuern wir nicht.",
    forderungen: [
      "Die Einkommensteuer drastisch vereinfachen: weniger Ausnahmen und Schlupflöcher, dafür spürbar niedrigere Sätze.",
      "Die kalte Progression dauerhaft und automatisch ausgleichen.",
      "Den Mittelstandsbauch abflachen, das Existenzminimum über einen hohen Grundfreibetrag steuerfrei halten.",
      "Keine Vermögensteuer.",
      "Erbschaft- und Schenkungsteuer abschaffen. Was bereits über Einkommen, Konsum und Unternehmensgewinne besteuert wurde, wird beim Generationenwechsel nicht ein zweites Mal politisch bewertet.",
      "Vermögensbildung für alle fördern, über Freibeträge für Sparen und Wertpapiere und über Wohneigentum.",
    ],
    machbarkeit:
      "Die Einkommensteuerreform liegt beim Bund und ist gut umsetzbar. Das Aufkommen der Erbschaftsteuer steht den Ländern zu, daher braucht es deren Zustimmung und eine Gegenfinanzierung. Das benennen wir offen.",
  },
  {
    nr: 3,
    titel: "Ein flexibler Arbeitsmarkt, der Eigentum schafft",
    einfach:
      "Einstellen muss einfacher werden, und Arbeit muss sich lohnen. Wir machen das Arbeitsrecht moderner, und im selben Zug bekommen Beschäftigte mehr Netto, eigenes Vermögen und echte Chancen statt Schein-Sicherheit.",
    leitlinie:
      "Mehr Flexibilität für Unternehmen und zugleich eine sichtbare Gegenleistung für Arbeitnehmer. Sicherheit entsteht durch viele Chancen und durch eigenes Vermögen.",
    forderungen: [
      "Planbarer Kündigungsschutz über eine klare Abfindungsregel statt langwieriger Prozesse.",
      "Längere Probezeiten und einfachere, rechtssichere befristete Beschäftigung.",
      "Die Gegenleistung ist sichtbar: erstens deutlich mehr Netto vom Brutto.",
      "Zweitens ein automatisches, staatlich gefördertes Wertpapierdepot für alle, das Bürgerdepot. So baut auch ein normaler Arbeitnehmer am Kapitalmarkt eigenes Vermögen auf, einfach und ohne Fachwissen.",
      "Drittens eine steuerfreie Beteiligung am eigenen Unternehmen.",
      "Viertens niedrigere Wohnkosten durch eine Bauoffensive.",
      "Die Lohnfortzahlung im Krankheitsfall so reformieren, dass kleine Arbeitgeber entlastet und Missbrauch begrenzt wird, ohne ernsthaft Kranke zu bestrafen.",
      "Radikaler Abbau von Unternehmensbürokratie.",
    ],
    machbarkeit:
      "Probezeit, Befristung, Abfindungsregeln und Bürokratieabbau sind gut umsetzbar. Eine vollständige Abschaffung des Kündigungsschutzes wäre rechtlich kaum haltbar, daher der Weg über die Abfindungsoption.",
  },
  {
    nr: 4,
    titel: "Weniger Bürokratie, schneller Staat, verlässliche Infrastruktur",
    einfach:
      "Der Staat soll schlank, schnell und digital sein. Wir schaffen unnötige Vorschriften ab, statt sie nur zu digitalisieren, und sorgen für eine Infrastruktur, die verlässlich funktioniert.",
    leitlinie:
      "Ein Staat, der seine Kernaufgaben zuverlässig erfüllt. Nicht die teuerste Infrastruktur, sondern eine, die Planungssicherheit schafft.",
    forderungen: [
      "Bürokratie mit harten Mechanismen abbauen: eine neue Pflicht ersetzt zwei alte, Verfallsdaten für Regulierung, Genehmigungsfiktion, Behörden-Überprüfung, Personaldeckel.",
      "Verwaltung vollständig digital. Wir digitalisieren nicht den Papierprozess, wir streichen ihn.",
      "Infrastruktur für Planungssicherheit: intakte Brücken, pünktliche Genehmigungen, schnelle Netze, verlässliche Energie und digitale Verwaltung.",
      "Bahn: Netz und Infrastruktur bleiben staatlich und neutral, der Betrieb der Verbindungen wird über Ausschreibungen vergeben, mit verbindlichen Vorgaben zu Takt und Halten, im Fern- wie im Regionalverkehr.",
    ],
    machbarkeit:
      "Digitalisierung und Bürokratieabbau sind in weiten Teilen sofort umsetzbar. Die Trennung von Netz und Betrieb baut auf dem bestehenden Wettbewerb im Regionalverkehr auf.",
  },
  {
    nr: 5,
    titel: "Bildung als oberste Priorität",
    einfach:
      "Bildung ist das Wichtigste für die Zukunft. Heute hängt die Schulwahl oft am Wohnort und am Geldbeutel. Bei uns folgt ein Bildungsgeld dem Kind, sodass jede Familie frei wählen kann.",
    leitlinie:
      "Das Geld folgt dem Kind, die Schulen entscheiden selbst und stehen im Wettbewerb, der Staat sorgt für vergleichbare Standards.",
    forderungen: [
      "Bildungsgeld: Das Geld folgt dem Kind, nicht der Schule, auch zu Schulen in freier Trägerschaft.",
      "Schulbezirke abschaffen, damit die Wahl wirklich frei wird.",
      "Mehr Verantwortung und Eigenständigkeit für Schulen, weniger Steuerung von oben.",
      "Bundesweit vergleichbare Standards und transparente Leistungsmessung.",
      "Künstliche Intelligenz im Unterricht und in der Schulverwaltung sinnvoll und sicher einsetzen.",
    ],
    machbarkeit:
      "Bildung ist Sache der Länder. Bildungsgeld und freie Schulwahl sind nur gemeinsam mit den Ländern umsetzbar, über einen verbindlichen Pakt und über Länder, die vorangehen.",
  },
  {
    nr: 6,
    titel: "Ein Sozialstaat, der absichert und Aufstieg belohnt",
    einfach:
      "Wer Hilfe braucht, bekommt sie. Wer arbeiten kann, soll arbeiten. Der Sozialstaat soll Not absichern und Aufstieg belohnen, nicht dauerhaftes Nichtstun finanzieren.",
    leitlinie:
      "Der Sozialstaat muss Bedürftigkeit absichern, nicht Lebensentscheidungen dauerhaft subventionieren.",
    forderungen: [
      "Grundsicherung ist Hilfe zur Selbstständigkeit, kein dauerhaftes Ersatzmodell für Erwerbsarbeit.",
      "Wer zumutbare Arbeit wiederholt ablehnt, verliert Leistungen oberhalb des Existenzminimums.",
      "Hinzuverdienst wird stärker belohnt als Nichtarbeit.",
      "Jobcenter werden an erfolgreicher Integration in Arbeit gemessen, nicht an verwalteten Fällen.",
    ],
    machbarkeit:
      "Im Rahmen des Bundesrechts gut umsetzbar. Sanktionen müssen das Existenzminimum wahren, das setzt die Verfassung als Grenze.",
  },
  {
    nr: 7,
    titel: "Die Rente ehrlich zukunftssicher machen",
    einfach:
      "Die Rente muss auch für die Jüngeren noch da sein. Das schaffen wir mit mehr Flexibilität, mit Vorsorge am Kapitalmarkt und mit klaren Regeln, wofür die Rentenkasse da ist.",
    leitlinie:
      "Die Rente wird nicht durch immer höhere Beiträge gerettet, sondern durch flexibles Längerarbeiten, Kapitaldeckung und die Begrenzung versicherungsfremder Leistungen.",
    forderungen: [
      "Kein starr höheres Renteneintrittsalter, sondern ein flexibler Korridor mit starken Anreizen fürs Längerarbeiten.",
      "Neben der Umlage eine echte kapitalgedeckte Säule, breit am Kapitalmarkt investiert, schrittweise aufgebaut.",
      "Versicherungsfremde Leistungen aus der Rentenkasse herauslösen und transparent aus Steuern finanzieren.",
    ],
    machbarkeit:
      "Flexibler Korridor und Kapitaldeckung sind umsetzbar. Der Aufbau der Kapitalsäule verursacht Übergangskosten, daher der schrittweise Weg.",
  },
  {
    nr: 8,
    titel: "Gesundheit, fair und aus einem Guss",
    einfach:
      "Jeder soll gut versorgt sein, egal wie er versichert ist. Wir bringen die Versorgung aus einem Guss zusammen, machen den Versicherungsmarkt fairer und einfacher und belohnen, wer auf seine Gesundheit achtet.",
    leitlinie:
      "Ein fairer Versicherungsmarkt mit Wettbewerb um Qualität, einkommensabhängigem Sozialausgleich und portablen Altersrückstellungen.",
    forderungen: [
      "Ein einheitlicher, fairer Versicherungsmarkt mit Sozialausgleich, portablen Altersrückstellungen und Wettbewerb um Qualität.",
      "Sektorengrenzen auflösen: ambulante, stationäre und Reha-Versorgung aus einem Guss organisieren.",
      "Die Zahl der Krankenkassen drastisch reduzieren und standardisierte Leistungskataloge schaffen.",
      "Prävention zur Pflichtaufgabe machen, mit echten Anreizen für gesundes Verhalten statt bloßer Ermahnung.",
    ],
    machbarkeit:
      "Ein großer Umbau mit nötigem Bestandsschutz. Die Auflösung der Sektorengrenzen und die Straffung der Kassenlandschaft sind seit Langem gefordert und schrittweise umsetzbar.",
  },
  {
    nr: 9,
    titel: "Wohnen durch Bauen",
    einfach:
      "Wohnen ist zu teuer, weil zu wenig und zu teuer gebaut wird. Wir lösen das nicht mit Mietpreisbremsen, sondern indem Bauen schneller, einfacher und günstiger wird.",
    leitlinie:
      "Wir lösen die Wohnungsfrage durch Bauen, nicht durch Regulieren. Mehr Eigentum statt ewiger Mietabhängigkeit.",
    forderungen: [
      "Einen Baukosten-Check: Jede neue Norm muss ihre Wirkung auf die Quadratmeterkosten ausweisen.",
      "Typengenehmigungen und eine digitale Baugenehmigung, mit Genehmigungsfiktion nach Fristablauf.",
      "Einen Grunderwerbsteuerfreibetrag für den ersten selbstgenutzten Erwerb.",
      "Mehr Bauland und schnellere Verfahren.",
    ],
    machbarkeit:
      "Baurecht und Grunderwerbsteuer sind teils Länder- und Kommunalsache, daher braucht es Zusammenarbeit. Vieles ist über Standards, Fristen und Digitalisierung schnell erreichbar.",
  },
  {
    nr: 10,
    titel: "Mittelstand, Handwerk, Selbstständige und Landwirtschaft",
    einfach:
      "Wer ein Geschäft, einen Hof oder einen Handwerksbetrieb führt, soll arbeiten können, statt Formulare auszufüllen. Wir entlasten kleine Betriebe radikal.",
    leitlinie:
      "Wir machen Selbstständigkeit wieder attraktiv statt verdächtig und befreien kleine Betriebe von überflüssiger Bürokratie.",
    forderungen: [
      "Dokumentationspflichten deckeln.",
      "Kleine Betriebe bekommen einfache Pauschalen statt teurer Beraterpflichten.",
      "Das Arbeitszeitrecht auf eine Wochenhöchstarbeitszeit modernisieren.",
      "Schnelle und digitale Verfahren für Gründung, Genehmigung und Meldungen.",
    ],
    machbarkeit:
      "Vieles ist über Bundes- und EU-Recht umsetzbar, die Wochenarbeitszeit ist europarechtlich möglich.",
  },
  {
    nr: 11,
    titel: "Klima und Energie mit Vernunft",
    einfach:
      "Wir schützen das Klima mit Vernunft, nicht mit Verboten. Der Staat setzt die Ziele, der Markt findet den günstigsten Weg. Energie soll sauber und bezahlbar sein.",
    leitlinie:
      "Marktwirtschaftlich, ergebnisorientiert und bezahlbar, ohne den Industriestandort zu gefährden.",
    forderungen: [
      "CO2-Bepreisung über den europäischen Emissionshandel. Die Einnahmen gehören nicht dem Staat, sie werden vollständig pro Kopf zurückgezahlt oder zur Senkung anderer Abgaben verwendet.",
      "Wir verbieten keine Lösung, die messbar Emissionen senkt, die Versorgung sichert und bezahlbar ist.",
      "Wir beenden politische Denkverbote bei Kernenergie, Forschung und neuen Reaktorkonzepten.",
      "Netzausbau und Genehmigungen massiv beschleunigen.",
    ],
    machbarkeit:
      "Der CO2-Preis ist vorhanden und umsetzbar. Die Reform der Strompreiszonen ist eine europäische Entscheidung, bei der der Süden teurer würde, das benennen wir offen.",
  },
  {
    nr: 12,
    titel: "Migration steuern, Integration verlangen",
    einfach:
      "Wir holen gezielt Fachkräfte und erwarten, dass sich integriert, wer bleiben will. Wer beiträgt und Regeln achtet, soll schneller dazugehören. Wer kein Bleiberecht hat, muss gehen.",
    leitlinie:
      "Wer beiträgt, Regeln achtet und Teil dieses Landes werden will, soll schneller ankommen. Rechtsstaat heißt, Entscheidungen werden durchgesetzt.",
    forderungen: [
      "Gezielte Anwerbung von Fachkräften und schnelle, unbürokratische Anerkennung von Qualifikationen.",
      "Intensivere Betreuung und klare Erwartungen bei Sprache, Arbeit und Werten.",
      "Schnellerer Weg zur Staatsbürgerschaft bei klaren Voraussetzungen.",
      "Konsequente Durchsetzung von Ausreisepflichten bei fehlendem Bleiberecht oder bei Straftaten.",
      "Klare und schnelle Asylverfahren.",
    ],
    machbarkeit:
      "Vieles ist über Bundesrecht umsetzbar. Asylverfahren und Rückführungen hängen an europäischen Regeln und an Abkommen mit Herkunftsländern.",
  },
  {
    nr: 13,
    titel: "Innere Sicherheit und ein durchsetzungsfähiger Rechtsstaat",
    einfach:
      "Sicherheit ist die Grundlage von Freiheit. Wir stärken Polizei und Justiz und sorgen dafür, dass Recht auch durchgesetzt wird, ohne alle Bürger unter Verdacht zu stellen.",
    leitlinie:
      "Rechtsstaat heißt, Entscheidungen werden durchgesetzt. Konsequent in der Sache, grundrechtswahrend im Verfahren.",
    forderungen: [
      "Polizei und Justiz personell und digital stärken, schnellere Verfahren, konsequenter Vollzug.",
      "Moderne Ermittlungsbefugnisse mit klaren rechtsstaatlichen Grenzen und richterlicher Kontrolle.",
      "Schwerpunkt auf organisierte Kriminalität, Banden und Kriminalität im Netz.",
      "Keinen anlasslosen Überwachungsstaat.",
    ],
    machbarkeit:
      "Im bestehenden Rechtsrahmen gut umsetzbar. Eingriffsbefugnisse müssen verfassungsfest ausgestaltet werden.",
  },
  {
    nr: 14,
    titel: "Verlässlich nach außen, stark in Europa",
    einfach:
      "Deutschland soll ein verlässlicher und wehrhafter Partner sein und seine Interessen klar vertreten. Sicherheit beginnt nicht erst an der Grenze.",
    leitlinie:
      "Sicherheit beginnt nicht erst an der deutschen Grenze. Deutschland muss Interessen definieren, Abhängigkeiten senken und Bündnisse führen können.",
    forderungen: [
      "Die Bundeswehr voll einsatzfähig machen, Verteidigungsausgaben verlässlich bei mindestens zwei Prozent, Beschaffung entbürokratisieren.",
      "Einen Wehrdienst nach attraktivem Auswahlmodell einführen.",
      "Die EU handlungsfähiger machen, Binnenmarkt und Kapitalmarktunion vertiefen.",
      "Einseitige Abhängigkeiten senken, besonders gegenüber China, und die Ukraine unterstützen.",
    ],
    machbarkeit:
      "Bundeswehr und Wehrdienst sind über Haushalt und Gesetz umsetzbar. Mehr Mehrheitsentscheidungen in der EU erfordern Vertragsänderungen und damit langwierige Abstimmung.",
  },
  {
    nr: 15,
    titel: "Wissenschaft und Innovation entfesseln",
    einfach:
      "Gute Ideen sollen in Deutschland entstehen und hier groß werden, nicht abwandern. Wir machen Forschung, Gründung und neue Technologien einfacher und schneller.",
    leitlinie:
      "Wir holen Forschung und junge Unternehmen aus der Regulierungsstarre und machen Deutschland zum Land der Ausgründungen.",
    forderungen: [
      "Ausgründungen aus Hochschulen deutlich vereinfachen.",
      "Mitarbeiterbeteiligung international wettbewerbsfähig machen, auch steuerlich.",
      "Reallabore und regulatorische Freiräume für Energie, Medizin, Mobilität und Künstliche Intelligenz.",
      "Datenzugang für Forschung und junge Unternehmen unter klaren Regeln.",
    ],
    machbarkeit:
      "Vieles ist über Bundesrecht und Hochschulrecht umsetzbar, Reallabore brauchen klare gesetzliche Grundlagen.",
  },
  {
    nr: 16,
    titel: "Freiheit und eine offene Gesellschaft",
    einfach:
      "Der Staat soll die Menschen in Ruhe leben lassen, solange sie niemandem schaden. Wir stehen für persönliche Freiheit, freie Meinung und moderne Lebensentwürfe, ohne Bevormundung und ohne Kulturkampf.",
    leitlinie:
      "Persönliche Freiheit ohne Bevormundung, liberale Gesellschaftspolitik ohne Kulturkampf.",
    forderungen: [
      "Datenschutz, der schützt und zugleich nutzbar bleibt.",
      "Schutz der Meinungsfreiheit.",
      "Keine paternalistische Gesundheits- und Lebensstilpolitik, weniger Verbote im Alltag.",
      "Anerkennung moderner Familien- und Lebensmodelle.",
    ],
    machbarkeit:
      "Vieles ist über einfache Gesetzgebung umsetzbar und kostet wenig, verlangt aber den Mut, Verbote und Bevormundung zurückzunehmen.",
  },
  {
    nr: 17,
    titel: "Demokratie und radikale Transparenz",
    einfach:
      "Politik soll offen und nachvollziehbar sein. Mitmachen können Mitglieder in jeder Partei. Neu bei uns ist, dass der gesamte Weg offenliegt, wie ein Programm entsteht und wie entschieden wird.",
    leitlinie:
      "Radikale Transparenz und niedrigschwellige Beteiligung. Entscheidungen bleiben bei Menschen und den zuständigen Organen.",
    forderungen: [
      "Der gesamte Entstehungs- und Entscheidungsprozess des Programms ist öffentlich und nachvollziehbar versioniert.",
      "Mitglieder können einfach Vorschläge einbringen, jeder Vorschlag ist transparent einer realen Person zugeordnet.",
      "Offenlegung, wo und wie Künstliche Intelligenz im Parteibetrieb eingesetzt wird.",
      "Strenge Transparenz bei den Finanzen, über die gesetzlichen Pflichten hinaus.",
    ],
    machbarkeit:
      "Organisatorisch sofort umsetzbar. Die gesetzliche Rechenschaft nach dem Parteiengesetz kommt zusätzlich.",
  },
];
