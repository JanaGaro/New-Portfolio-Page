// ======================
// TIMELINE DATEN
// ======================

var careerEvents = [
  {
    date: "August 2017 - Juli 2020",
    content: "Ausbildung zur Kauffrau EFZ, Einwohnergemeinde Erlach",
    details:
      "Berufliche Grundbildung als Kauffrau EFZ in der öffentlichen Verwaltung mit Einblick in administrative Prozesse, Einwohnerdienste und Büroorganisation. Tätigkeiten umfassten unter anderem die Bereiche Einwohnerdienste, Steuer- und Finanzverwaltung, Bau- und Mieterwesen sowie die Organisation von Anlässen und administrative Aufgaben im Gemeindebetrieb.",
  },
  {
    date: "März 2020",
    content: "Ausbildung zur Kauffrau EFZ, Commune Le Landeron",
    details:
      "Sprachaustausch in Le Landeron (Französisch), organisiert im Rahmen meiner Ausbildung zur Kauffrau EFZ bei der Gemeinde Erlach, mit Einblick in die Finanzverwaltung sowie administrative Tätigkeiten wie Datenpflege und Korrespondenz.",
  },
  {
    date: "Dezember 2021 - Januar 2022",
    content: "Verwaltungsangestellte, Einwohnergemeinde Vinelz",
    details:
      "Einsatz als Verwaltungsangestellte bei der Einwohnergemeinde Vinelz zur Unterstützung aufgrund personeller Engpässe, organisiert durch die Gemeinde Erlach. Tätigkeiten umfassten administrative Arbeiten in den Bereichen Einwohner- und Fremdenkontrolle sowie Steuerbüro, inklusive Schalter- und Telefondienst.",
  },
  {
    date: "September 2020 - Juli 2023",
    content: "Verwaltungsangestellte, Einwohnergemeinde Erlach",
    details:
      "Tätigkeit als Verwaltungsangestellte bei der Einwohnergemeinde Erlach mit vielseitigen Einblicken in administrative Abläufe und Gemeindeverwaltung. Schwerpunkte liegen in der Unterstützung der Geschäftsleitung im Tagesgeschäft, der Mitarbeit an IT-Projekten (Einführung neuer Gemeindesoftware und digitaler Geschäftsverwaltung) sowie in administrativen Aufgaben in den Bereichen Einwohner- und Fremdenkontrolle, Steuerbüro und Finanzabteilung. Ergänzend gehören Schalter- und Telefondienst, Bussenadministration sowie organisatorische Aufgaben wie Materialbewirtschaftung und die Einführung neuer Lernender zum Tätigkeitsbereich.",
  },
  {
    date: "August 2023 - Heute",
    content: "Customer Service Mitarbeiterin ERP, BKW Building Solutions AG",
    details:
      "Fokus auf Support, Prozessoptimierung und Digitalisierung von Geschäftsprozessen sowie Verantwortung für interne & externe Kommunikation sowie Mitarbeit in PMO-/Prozessmanagement-Themen.",
  },
];

var educationEvents = [
  {
    date: "2008 - 2014",
    content: "Primarschule, Gampelen",
    details: "Grundschulbildung und Basiswissen.",
  },
  {
    date: "2014 - 2017",
    content: "Oberstufenzentrum, Ins",
    details: "Sekundarstufe mit schulischer Vertiefung.",
  },
  {
    date: "2017 - 2020",
    content: "BWT Berufs- und Weiterbildungszentrum, Lyss",
    details:
      "Berufsschule während der kaufmännischen Ausbildung mit Fokus auf Wirtschaft und Sprachen.",
  },
  {
    date: "2020 - 2022",
    content: "BWD Bildungszentrum für Wirtschaft und Dienstleistung, Bern",
    details: "Weiterbildung mit wirtschaftlichem Schwerpunkt.",
  },
  {
    date: "2022 - Heute",
    content: "Berner Fachhochschule, Bern",
    details:
      "Studium der Wirtschaftsinformatik mit Fokus auf Systeme, Prozesse und IT.",
  },
];

// ======================
// GLOBALER TOOLTIP
// ======================

var $hoverBox = $('<div class="global-hover-box"></div>');
$("body").append($hoverBox);

// ======================
// TOOLTIP POSITION
// ======================

function positionHoverBox(e) {
  var offset = 15;

  var boxWidth = $hoverBox.outerWidth();
  var boxHeight = $hoverBox.outerHeight();

  var x = e.clientX + offset;
  var y = e.clientY - boxHeight - offset;

  if (y < 10) {
    y = e.clientY + offset;
  }

  if (x + boxWidth > $(window).width() - 10) {
    x = e.clientX - boxWidth - offset;
  }

  if (x < 10) {
    x = 10;
  }

  if (y + boxHeight > $(window).height() - 10) {
    y = $(window).height() - boxHeight - 10;
  }

  $hoverBox.css({
    top: y + "px",
    left: x + "px",
  });
}

// ======================
// TIMELINE LADEN
// ======================

function loadTimelines() {
  $("#career-timeline").roadmap(careerEvents, {
    eventsPerSlide: 5,
  });

  $("#education-timeline").roadmap(educationEvents, {
    eventsPerSlide: 5,
  });

  setTimeout(function () {
    // ✅ NUR career bekommt Hover
    addHoverDetails("#career-timeline", careerEvents);

    // ❌ education bekommt KEIN Hover mehr
  }, 100);
}

// ======================
// HOVER LOGIK (nur Career)
// ======================

function addHoverDetails(timelineSelector, eventsArray) {
  var $timeline = $(timelineSelector);

  var $items = $timeline.find(".roadmap-event");

  if ($items.length === 0) $items = $timeline.find(".event");
  if ($items.length === 0) $items = $timeline.find(".roadmap-item");

  $items.each(function (index) {
    if (!eventsArray[index]) return;

    $(this)
      .css("cursor", "pointer")
      .on("mouseenter", function (e) {
        var event = eventsArray[index];

        $hoverBox.html(`
          <strong>${event.date}</strong>
          ${event.details}
        `);

        $hoverBox.addClass("show");
        positionHoverBox(e);
      })
      .on("mousemove", function (e) {
        positionHoverBox(e);
      })
      .on("mouseleave", function () {
        $hoverBox.removeClass("show");
      });
  });
}

// ======================
// INIT
// ======================

$(document).ready(function () {
  loadTimelines();
});
