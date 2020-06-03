var slide_one_bar = {
  maintainAspectRatio: false,
  type: "bar",
  data: {
    datasets: [
      {
        data: [0],
        backgroundColor: "#D6E9C6",
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: true,
    },
    scales: {
      yAxes: [
        {
          stacked: false,
          ticks: {
            beginAtZero: true,
            display: false,
            suggestedMin: 0,
            max: 1250,
          },
        },
      ],
      xAxes: [
        {
          stacked: false,
          ticks: {
            display: false,
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

var slide_two_bar = {
  maintainAspectRatio: false,
  type: "bar",
  data: {
    datasets: [
      {
        data: [0],
        backgroundColor: "#D6E9C6",
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: true,
    },
    scales: {
      yAxes: [
        {
          stacked: false,
          ticks: {
            beginAtZero: true,
            display: false,
            suggestedMin: 0,
            max: 1250,
          },
        },
      ],
      xAxes: [
        {
          stacked: false,
          ticks: {
            display: false,
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

var slide_three_bar = {
  maintainAspectRatio: false,
  type: "bar",
  data: {
    datasets: [
      {
        data: [0],
        backgroundColor: "#D6E9C6",
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: true,
    },
    scales: {
      yAxes: [
        {
          stacked: false,
          ticks: {
            beginAtZero: true,
            display: false,
            suggestedMin: 0,
            max: 1250,
          },
        },
      ],
      xAxes: [
        {
          stacked: false,
          ticks: {
            display: false,
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

var slide_one_bar_stacked = {
  maintainAspectRatio: false,
  type: "bar",
  data: {
    datasets: [
      {
        data: [0],
        backgroundColor: "#D6E9C6",
        // borderColor: ["rgba(255,99,132,1)"],
        // borderWidth: 2,
      },
      {
        data: [0],
        backgroundColor: ["rgb(255,104,109)"],
        // borderColor: ["rgba(255, 159, 64, 1)"],
        // borderWidth: 2,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            display: false,
            suggestedMin: 0,
            max: 1250,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            display: false,
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

var slide_two_bar_stacked = {
  maintainAspectRatio: false,
  type: "bar",
  data: {
    datasets: [
      {
        data: [0],
        backgroundColor: "#D6E9C6",
        // borderColor: ["rgba(255,99,132,1)"],
        // borderWidth: 2,
      },
      {
        data: [0],
        backgroundColor: ["rgb(255,104,109)"],
        // borderColor: ["rgba(255, 159, 64, 1)"],
        // borderWidth: 2,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            display: false,
            suggestedMin: 0,
            max: 1250,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            display: false,
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

var slide_three_bar_stacked = {
  maintainAspectRatio: false,
  type: "bar",
  data: {
    datasets: [
      {
        data: [0],
        backgroundColor: "#D6E9C6",
        // borderColor: ["rgba(255,99,132,1)"],
        // borderWidth: 2,
      },
      {
        data: [0],
        backgroundColor: ["rgb(255,104,109)"],
        // borderColor: ["rgba(255, 159, 64, 1)"],
        // borderWidth: 2,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            display: false,
            suggestedMin: 0,
            max: 1250,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            display: false,
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

var delayBetweenPoints = 20;
var started = {};

var slide_one_linear = {
  type: "line",
  data: {
    datasets: [
      {
        backgroundColor: "transparent",
        fontColor: "transparent",
        borderColor: "rgb(255,40,53)",
        borderWidth: 1,
        pointRadius: 0,
        data: data,
        fill: true,
        animation: (context) => {
          var delay = 0;
          var index = context.dataIndex;
          if (!started[index]) {
            delay = index * delayBetweenPoints;
            started[index] = true;

            context.dataset.data[index] &&
            context.dataset.data[index].hasOwnProperty("bcPlayer")
              ? setTimeout(function () {
                  slide_one_bar.config.data.datasets[0].data[0] =
                    context.dataset.data[index].bcPlayer;
                  slide_one_bar.update();
                }, delay / 4)
              : null;

            context.dataset.data[index] &&
            context.dataset.data[index].hasOwnProperty("bcProfit")
              ? setTimeout(function () {
                  slide_one_bar_stacked.config.data.datasets[0].data[0] =
                    context.dataset.data[index].bcProfit;
                  slide_one_bar_stacked.update();
                }, delay / 4)
              : null;

            context.dataset.data[index] &&
            context.dataset.data[index].hasOwnProperty("bcMakeup")
              ? setTimeout(function () {
                  slide_one_bar_stacked.config.data.datasets[1].data[0] =
                    context.dataset.data[index].bcMakeup;
                  slide_one_bar_stacked.update();
                }, delay / 4)
              : null;
          }
          var { x, y } =
            index > 0
              ? context.chart
                  .getDatasetMeta(0)
                  .data[index - 1].getProps(["x", "y"], true)
              : { x: 0, y: 0 };

          return {
            x: {
              easing: "linear",
              duration: delayBetweenPoints * 500,
              from: x,
              delay: delay,
            },
            y: {
              // easing: "linear",
              // duration: delayBetweenPoints * 500,
              // from: y,
              // delay: delay,
            },
            skip: {
              type: "boolean",
              duration: delayBetweenPoints,
              from: true,
              to: false,
              delay: delay / 4,
            },
          };
        },
      },
      {
        data: [0, 1150],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    scales: {
      x: {
        type: "linear",
        gridLines: {
          drawOnChartArea: false,
        },
      },
      y: {
        gridLines: {
          drawOnChartArea: false,
        },
      },
    },
  },
};

var delayBetweenPoints2 = 20;
var started2 = {};

var slide_two_linear = {
  type: "line",
  data: {
    datasets: [
      {
        backgroundColor: "transparent",
        fontColor: "transparent",
        borderColor: "rgb(255,40,53)",
        borderWidth: 1,
        pointRadius: 0,
        data: data_2,
        fill: true,
        animation: (context) => {
          var delay = 0;
          var index = context.dataIndex;
          if (!started2[index]) {
            delay = index * delayBetweenPoints2;
            started2[index] = true;
          }

          context.dataset.data[index] &&
          context.dataset.data[index].hasOwnProperty("bcPlayer")
            ? setTimeout(function () {
                slide_two_bar.config.data.datasets[0].data[0] =
                  context.dataset.data[index].bcPlayer;
                slide_two_bar.update();
              }, delay / 4)
            : null;

          context.dataset.data[index] &&
          context.dataset.data[index].hasOwnProperty("bcProfit")
            ? setTimeout(function () {
                slide_two_bar_stacked.config.data.datasets[0].data[0] =
                  context.dataset.data[index].bcProfit;
                slide_two_bar_stacked.update();
              }, delay / 4)
            : null;

          context.dataset.data[index] &&
          context.dataset.data[index].hasOwnProperty("bcMakeup")
            ? setTimeout(function () {
                slide_two_bar_stacked.config.data.datasets[1].data[0] =
                  context.dataset.data[index].bcMakeup;
                slide_two_bar_stacked.update();
              }, delay / 4)
            : null;

          var { x, y } =
            index > 0
              ? context.chart
                  .getDatasetMeta(0)
                  .data[index - 1].getProps(["x", "y"], true)
              : { x: 0, y: 0 };

          return {
            x: {
              easing: "linear",
              duration: delayBetweenPoints2 * 500,
              from: x,
              delay: delay,
            },
            y: {
              // easing: "linear",
              // duration: delayBetweenPoints2 * 500,
              // from: y,
              // delay: delay,
            },
            skip: {
              type: "boolean",
              duration: delayBetweenPoints2,
              from: true,
              to: false,
              delay: delay / 4,
            },
          };
        },
      },
      {
        data: [0, 1150],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    scales: {
      x: {
        type: "linear",
        gridLines: {
          drawOnChartArea: false,
        },
      },
      y: {
        gridLines: {
          drawOnChartArea: false,
        },
      },
    },
  },
};

var delayBetweenPoints3 = 20;
var started3 = {};

var slide_three_linear = {
  type: "line",
  data: {
    datasets: [
      {
        backgroundColor: "transparent",
        fontColor: "transparent",
        borderColor: "rgb(255,40,53)",
        borderWidth: 1,
        pointRadius: 0,
        data: data_3,
        fill: true,
        animation: (context) => {
          var delay = 0;
          var index = context.dataIndex;
          if (!started3[index]) {
            delay = index * delayBetweenPoints3;
            started3[index] = true;
          }

          context.dataset.data[index] &&
          context.dataset.data[index].hasOwnProperty("bcPlayer")
            ? setTimeout(function () {
                slide_three_bar.config.data.datasets[0].data[0] =
                  context.dataset.data[index].bcPlayer;
                slide_three_bar.update();
              }, delay / 4)
            : null;

          context.dataset.data[index] &&
          context.dataset.data[index].hasOwnProperty("bcProfit")
            ? setTimeout(function () {
                slide_three_bar_stacked.config.data.datasets[0].data[0] =
                  context.dataset.data[index].bcProfit;
                slide_three_bar_stacked.update();
              }, delay / 4)
            : null;

          context.dataset.data[index] &&
          context.dataset.data[index].hasOwnProperty("bcMakeup")
            ? setTimeout(function () {
                slide_three_bar_stacked.config.data.datasets[1].data[0] =
                  context.dataset.data[index].bcMakeup;
                slide_three_bar_stacked.update();
              }, delay / 4)
            : null;

          var { x, y } =
            index > 0
              ? context.chart
                  .getDatasetMeta(0)
                  .data[index - 1].getProps(["x", "y"], true)
              : { x: 0, y: 0 };

          return {
            x: {
              easing: "linear",
              duration: delayBetweenPoints3 * 500,
              from: x,
              delay: delay,
            },
            y: {
              // easing: "linear",
              // duration: delayBetweenPoints3 * 500,
              // from: y,
              // delay: delay,
            },
            skip: {
              type: "boolean",
              duration: delayBetweenPoints3,
              from: true,
              to: false,
              delay: delay / 4,
            },
          };
        },
      },
      {
        data: [0, 1150],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    scales: {
      x: {
        type: "linear",
        gridLines: {
          drawOnChartArea: false,
        },
      },
      y: {
        gridLines: {
          drawOnChartArea: false,
        },
      },
    },
  },
};

//slide-one charts
function getChartConfig() {
  return {
    linear: [slide_one_linear, slide_two_linear, slide_three_linear],
    stacked: [
      slide_two_bar_stacked,
      slide_two_bar_stacked,
      slide_three_bar_stacked,
    ],
    bar: [slide_one_bar, slide_two_bar, slide_three_bar],
  };
}
