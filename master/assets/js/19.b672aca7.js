(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{483:function(n,o,t){"use strict";t.r(o);var a=t(20),e=Object(a.a)({},(function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"linear-scales"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linear-scales"}},[n._v("#")]),n._v(" Linear Scales")]),n._v(" "),t("p",[n._v("Zooming is performed by clicking and selecting an area over the chart with the mouse. Pan is activated by keeping "),t("code",[n._v("ctrl")]),n._v(" pressed.")]),n._v(" "),t("chart-editor",{attrs:{code:"// <block:data:1>\nconst NUMBER_CFG = {count: 20, min: -100, max: 100};\nconst data = {\n  datasets: [{\n    label: 'My First dataset',\n    borderColor: Utils.randomColor(0.4),\n    backgroundColor: Utils.randomColor(0.1),\n    pointBorderColor: Utils.randomColor(0.7),\n    pointBackgroundColor: Utils.randomColor(0.5),\n    pointBorderWidth: 1,\n    data: Utils.points(NUMBER_CFG),\n  }, {\n    label: 'My Second dataset',\n    borderColor: Utils.randomColor(0.4),\n    backgroundColor: Utils.randomColor(0.1),\n    pointBorderColor: Utils.randomColor(0.7),\n    pointBackgroundColor: Utils.randomColor(0.5),\n    pointBorderWidth: 1,\n    data: Utils.points(NUMBER_CFG),\n  }]\n};\n// </block:data>\n\n// <block:scales:2>\nconst scaleOpts = {\n  reverse: true,\n  ticks: {\n    callback: (val, index, ticks) => index === 0 || index === ticks.length - 1 ? null : val,\n  },\n  grid: {\n    borderColor: Utils.randomColor(1),\n    color: 'rgba( 0, 0, 0, 0.1)',\n  },\n  title: {\n    display: true,\n    text: (ctx) => ctx.scale.axis + ' axis',\n  }\n};\nconst scales = {\n  x: {\n    position: 'top',\n  },\n  y: {\n    position: 'right',\n  },\n};\nObject.keys(scales).forEach(scale => Object.assign(scales[scale], scaleOpts));\n// </block:scales>\n\n// <block:zoom:0>\nconst dragColor = Utils.randomColor(0.4);\nconst zoomOptions = {\n  pan: {\n    enabled: true,\n    mode: 'xy',\n    modifierKey: 'ctrl',\n  },\n  zoom: {\n    mode: 'xy',\n    drag: {\n      enabled: true,\n      borderColor: 'rgb(54, 162, 235)',\n      borderWidth: 1,\n      backgroundColor: 'rgba(54, 162, 235, 0.3)'\n    }\n  }\n};\n// </block:zoom>\n\nconst zoomStatus = () => zoomOptions.zoom.drag.enabled ? 'enabled' : 'disabled';\n\n// <block:config:1>\nconst config = {\n  type: 'scatter',\n  data: data,\n  options: {\n    scales: scales,\n    plugins: {\n      zoom: zoomOptions,\n      title: {\n        display: true,\n        position: 'bottom',\n        text: (ctx) => 'Zoom: ' + zoomStatus()\n      }\n    },\n  }\n};\n// </block:config>\n\nconst actions = [\n  {\n    name: 'Toggle zoom',\n    handler(chart) {\n      zoomOptions.zoom.drag.enabled = !zoomOptions.zoom.drag.enabled;\n      chart.update();\n    }\n  }, {\n    name: 'Reset zoom',\n    handler(chart) {\n      chart.resetZoom();\n    }\n  }\n];\n\nmodule.exports = {\n  actions,\n  config,\n};\n"}})],1)}),[],!1,null,null,null);o.default=e.exports}}]);