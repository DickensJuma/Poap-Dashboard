/* Scripts for css grid dashboard */

$(document).ready(() => {
  addResizeListeners();
  setSidenavListeners();
  setUserDropdownListener();
  renderChart();
  setMenuClickListener();
  setSidenavCloseListener();
});

// Set constants and grab needed elements
const sidenavEl = $(".sidenav");
const gridEl = $(".grid");
const SIDENAV_ACTIVE_CLASS = "sidenav--active";
const GRID_NO_SCROLL_CLASS = "grid--noscroll";

function toggleClass(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

// User avatar dropdown functionality
function setUserDropdownListener() {
  const userAvatar = $(".header-avatar");

  userAvatar.on("click", function (e) {
    const dropdown = $(this).children(".dropdown");
    toggleClass(dropdown, "dropdown--active");
  });
}

// Sidenav list sliding functionality
function setSidenavListeners() {
  const subHeadings = $(".navList-subheading");
  console.log("subHeadings: ", subHeadings);
  const SUBHEADING_OPEN_CLASS = "navList-subheading--open";
  const SUBLIST_HIDDEN_CLASS = "subList--hidden";

  subHeadings.each((i, subHeadingEl) => {
    $(subHeadingEl).on("click", (e) => {
      const subListEl = $(subHeadingEl).siblings();

      // Add/remove selected styles to list category heading
      if (subHeadingEl) {
        toggleClass($(subHeadingEl), SUBHEADING_OPEN_CLASS);
      }

      // Reveal/hide the sublist
      if (subListEl && subListEl.length === 1) {
        toggleClass($(subListEl), SUBLIST_HIDDEN_CLASS);
      }
    });
  });
}

// Draw the chart
function renderChart() {
  const chart = AmCharts.makeChart("chartdiv", {
    type: "serial",
    theme: "light",
    dataProvider: [
      {
        month: "Jan",
        visits: 2025,
      },
      {
        month: "Feb",
        visits: 1882,
      },
      {
        month: "Mar",
        visits: 1809,
      },
      {
        month: "Apr",
        visits: 1322,
      },
      {
        month: "May",
        visits: 1122,
      },
      {
        month: "Jun",
        visits: 1114,
      },
      {
        month: "Jul",
        visits: 984,
      },
      {
        month: "Aug",
        visits: 711,
      },
      {
        month: "Sept",
        visits: 665,
      },
      {
        month: "Oct",
        visits: 580,
      },
    ],
    valueAxes: [
      {
        gridColor: "#FFFFFF",
        gridAlpha: 0.2,
        dashLength: 0,
      },
    ],
    gridAboveGraphs: true,
    startDuration: 1,
    graphs: [
      {
        balloonText: "[[category]]: <b>[[value]]</b>",
        fillAlphas: 0.8,
        lineAlpha: 0.2,
        type: "column",
        valueField: "visits",
      },
    ],
    chartCursor: {
      categoryBalloonEnabled: false,
      cursorAlpha: 0,
      zoomable: false,
    },
    categoryField: "month",
    categoryAxis: {
      gridPosition: "start",
      gridAlpha: 0,
      tickPosition: "start",
      tickLength: 20,
    },
    export: {
      enabled: false,
    },
  });
}

function toggleClass(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

// If user opens the menu and then expands the viewport from mobile size without closing the menu,
// make sure scrolling is enabled again and that sidenav active class is removed
function addResizeListeners() {
  $(window).resize(function (e) {
    const width = window.innerWidth;
    console.log("width: ", width);

    if (width > 750) {
      sidenavEl.removeClass(SIDENAV_ACTIVE_CLASS);
      gridEl.removeClass(GRID_NO_SCROLL_CLASS);
    }
  });
}

// Menu open sidenav icon, shown only on mobile
function setMenuClickListener() {
  $(".header-menu").on("click", function (e) {
    console.log("clicked menu icon");
    toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
    toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
  });
}

// Sidenav close icon
function setSidenavCloseListener() {
  $(".sidenav-brand-close").on("click", function (e) {
    toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
    toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
  });
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Account 1", "2014"],
    ["Acount 2", 1844],
    ["Account 3", 300],
    ["Account 4", 991],
    ["Account 5", 692],
    ["Poap Wallet", 1368],
    ["Other Acc", 802],
  ]);

  var options = {
    pieSliceText: "Account 1",
    slices: {
      0: { color: "#f7b15b", offset: 0.2 },
      1: { color: "#ffca71" },
      2: { color: "#be7f29" },
      3: { color: "#9f6407" },
      4: { color: "#7c4600" },
      5: { color: "#5d2d00" },
    },

    backgroundColor: "#f9f9fb",
    chartArea: { left: 0, top: 20, width: "100%", height: "90%" },
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}
