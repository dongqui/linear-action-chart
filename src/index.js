const GRID_X_SIZE = 33;
const GRID_X_COUNT = 24;
const GRID_Y_SIZE = 26;
const GRID_Y_COUNT = 12;
const GRID_X_VALUE_JUMP = 2;
const GRID_X_VALUE_OFFSET = 4;
const GRID_Y_VALUE_OFFSET = 27;
const TEXT_X_OFFSET = 22;
const TEXT_Y_OFFSET = 16;
const CANVAS_WIDTH = GRID_X_SIZE * GRID_X_COUNT;
const CANVAS_HEIGHT = GRID_Y_SIZE * GRID_Y_COUNT;
const WAY_POINTS_COUNT = 25;
const BACKGROUND_COLOR = "#FCFCFC";
const GRID_STORKE_COLOR = "#F5F5F5";
const GRAPH_POINTER_COLOR = "#2AC1BC";
const GRAPH_POINTER_HIGHLIGHT_COLOR = "#219A95";
const GRAPH_LINE_COLOR = "#a0e1e0";
const GRAPH_TEXT_COLOR = "#626666";
const GRAPH_TEXT_HIGHLIGHT_COLOR = "#2AC1BC";
const GRAPH_X_VALUE_TEXT_COLOR = "#8D9393";

const getGraphXY = ({ yTopValue, yValue, index, canvasHeight, gridXSize }) => {
  const y = canvasHeight - Math.floor((yValue / yTopValue) * canvasHeight);
  const x = gridXSize * index * 2;

  return [x, y];
};
const canvasDrawBackground = (
  context,
  { backgroundColor, canvasWidth, canvasHeight, gridXSize, gridYSize }
) => {
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvasWidth, canvasHeight);
  context.translate(gridXSize, -gridYSize);
};

const canvasDrawGridPattern = (
  context,
  { canvasWidth, canvasHeight, gridXSize, gridYSize, gridStrokeColor }
) => {
  for (let x = 0; x < canvasWidth - gridXSize; x += gridXSize) {
    context.moveTo(x, 0);
    context.lineTo(x, canvasHeight);
    for (let y = 0; y <= canvasHeight; y += gridYSize) {
      context.moveTo(0, y);
      context.lineTo(canvasWidth - gridXSize * 2, y);
    }
  }
  context.strokeStyle = gridStrokeColor;
  context.lineWidth = 1;
  context.stroke();
};

const canvasDrawXvalue = (
  context,
  {
    canvasHeight,
    gridXSize,
    gridXValueJump,
    highlightIndex,
    graphPointerHighlightColor,
    graphXValueTextColor,
    xValues,
  }
) => {
  xValues.forEach((xValue, index) => {
    context.font = "12px Noto Sans KR";
    context.fillStyle =
      highlightIndex === index
        ? graphPointerHighlightColor
        : graphXValueTextColor;
    context.fillText(
      xValue,
      index * gridXSize * gridXValueJump - GRID_X_VALUE_OFFSET,
      canvasHeight + GRID_Y_VALUE_OFFSET
    );
  });
};

const getVertices = (yTopValue, yValues, canvasHeight, gridXSize) => {
  return yValues.map((yValue, index) =>
    getGraphXY({ yTopValue, yValue, index, canvasHeight, gridXSize })
  );
};

const getWayPoints = (vertices, wayPointsCount) => {
  const waypoints = [];
  for (let i = 1; i < vertices.length; i += 1) {
    const [startX, startY] = vertices[i - 1];
    const [endX, endY] = vertices[i];
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    for (let j = 0; j <= wayPointsCount; j += 1) {
      const x = startX + (distanceX * j) / wayPointsCount;
      const y = startY + (distanceY * j) / wayPointsCount;
      waypoints.push([x, y]);
    }
  }
  return waypoints;
};

const canvasDrawGraphPointer = (
  context,
  { x, y, ishighlight, graphPointerHighlightColor, graphPointerColor }
) => {
  context.fillStyle = ishighlight
    ? graphPointerHighlightColor
    : graphPointerColor;
  context.beginPath();
  context.arc(x, y, ishighlight ? 5 : 4, 0, 2 * Math.PI);
  context.fill();
};

const canvasDrawGraphLine = (
  context,
  { startX, startY, endX, endY, lineColor }
) => {
  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(endX, endY);
  context.strokeStyle = lineColor;
  context.lineWidth = 2;
  context.stroke();
};

const canvasDrawText = (context, { x, y, yValue, ishighlight, isEdge }) => {
  context.font = "12px Noto Sans KR";
  context.fillStyle = ishighlight
    ? GRAPH_TEXT_HIGHLIGHT_COLOR
    : GRAPH_TEXT_COLOR;
  context.fillText(
    yValue.toLocaleString(),
    x - (isEdge ? 0 : TEXT_X_OFFSET),
    y - TEXT_Y_OFFSET
  );
};

const isVertice = (vertice, wayPoint) =>
  (vertice[0] === wayPoint[0] && vertice[1] && wayPoint[1]) ||
  (vertice[0] === wayPoint[2] && vertice[1] && wayPoint[3]);

const canvasDrawData = (
  context,
  {
    yTopValue,
    yValues,
    highlightIndex,
    graphPointerHighlightColor,
    graphPointerColor,
    canvasHeight,
    gridXSize,
    lineColor,
    wayPointsCount,
  }
) => {
  const vertices = getVertices(yTopValue, yValues, canvasHeight, gridXSize);
  const waypoints = getWayPoints(vertices, wayPointsCount);
  let index = 0;
  const animateGraph = () => {
    if (waypoints.length <= 1) {
      return;
    }
    requestAnimationFrame(animateGraph);
    const [startX, startY] = waypoints.shift();
    const [endX, endY] = waypoints[0];
    canvasDrawGraphLine(context, { startX, startY, endX, endY, lineColor });
    if (isVertice(vertices[index], [startX, startY, endX, endY])) {
      const ishighlight = highlightIndex === index;
      const isEdge = index === 0 || index === 11;

      canvasDrawText(context, {
        x: startX,
        y: startY,
        yValue: yValues[index],
        ishighlight,
        isEdge,
      });
      canvasDrawGraphPointer(context, {
        x: startX,
        y: startY,
        ishighlight,
        graphPointerHighlightColor,
        graphPointerColor,
      });
      index += 1;
    }
  };

  animateGraph(context, waypoints);
};

const initCanvas = (target) => {
  const canvas = document.getElementById(target);
  const context = canvas.getContext("2d");

  canvas.width = CANVAS_WIDTH + 33;
  canvas.height = CANVAS_HEIGHT + 26;

  return context;
};

const canvasDrawGraph = (context, option) => {
  canvasDrawBackground(context, option);
  canvasDrawGridPattern(context, option);
  canvasDrawXvalue(context, option);
  canvasDrawData(context, option);
};

const linearChart = (
  target,
  xValues,
  yValues,
  {
    isGrid = true,
    lineColor = GRAPH_LINE_COLOR,
    highlightIndex,
    textColor,
    yTopValue,
    wayPointsCount = WAY_POINTS_COUNT,
    backgroundColor = BACKGROUND_COLOR,
    canvasWidth = CANVAS_WIDTH,
    canvasHeight = CANVAS_HEIGHT,
    gridXSize = GRID_X_SIZE,
    gridYSize = GRID_Y_SIZE,
    gridStrokeColor = GRID_STORKE_COLOR,
    gridXValueJump = GRID_X_VALUE_JUMP,
    graphPointerHighlightColor = GRAPH_POINTER_HIGHLIGHT_COLOR,
    graphXValueTextColor = GRAPH_X_VALUE_TEXT_COLOR,
    graphPointerColor = GRAPH_POINTER_COLOR,
  }
) => {
  const context = initCanvas(target);
  canvasDrawGraph(context, {
    isGrid,
    xValues,
    yValues,
    lineColor,
    highlightIndex,
    textColor,
    yTopValue: yTopValue || Math.min(...yValues) + Math.max(...yValues),
    highlightIndex,
    backgroundColor,
    canvasWidth,
    canvasHeight,
    gridXSize,
    gridYSize,
    gridStrokeColor,
    gridXValueJump,
    graphPointerHighlightColor,
    graphXValueTextColor,
    graphPointerColor,
    wayPointsCount,
  });
};

// linearChart(
//   "target",
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
//   [616929, 509637, 563283, 590106, 643752, 568647, 536460],
//   {
//     highlightIndex: 6,
//     wayPointsCount: 10,
//   }
// );

export default linearChart;
