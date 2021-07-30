# Donut Chart JS
<p align="center">
  <img src="https://user-images.githubusercontent.com/21697238/127592629-9a9eedec-bf1a-44e6-9bd5-b79a760c6c5f.gif" alt="preview" />
</p>
<h3 align="center">Linear-Chart-JS</h3>
<p align="center">
  <a href="./LICENSE">
    <img alt="NPM" src="https://img.shields.io/npm/l/donut-chart-js">
  </a>
<!--   <a href="https://github.com/dongqui/linear-action-chart/releases">
    <img alt="npm" src="https://img.shields.io/npm/v/donut-chart-js">
  </a> -->
</p>
<p align="center">Simple Linear Chart using JavaScript and HTML5 Canvas.</p>

## Installation
```shell
yarn add linear-chart-js
```
or

```shell
npm install linear-chart-js
```

then

```js
import LinearChart from 'linear-chart-js';
```

## Usage
Create canvas element on your HTML
```html
<canvas id="target" width="500px" height="500px"></canvas>
```
then write script
```js
new LinearChart(
 'target, // canvas id
 [1, 2, 3, 4, 5, 6, 7], // x values
 [2345, 3463, 2343, 2352], // y values
 {
    highlightIndex: 6,
    wayPointsCount: 10,
 }
);
```

## options
|               option | type     | default | description                                               |
| -------------------: | :------- | :------ | :-------------------------------------------------------- |
|     **`isGrid`**     | `string` | `0`     | The name or label of the donut.                           |
|     **`lineColor`**  | `number` | `100`   | The value of the donut.                                   |
| **`highlightIndex`** | `string` | `50`    | The color of the donut.                                   |
|      **`textColor`** | `number` | `0`     | (Optional) The hole size of the donut. Use `0-1` value.   |
| **`yTopValue`**      | `number` | `1`     | (Optional) The speed of chart animation. Use `0-1` value. |
| **`highlightIndex`** | `number` | `1`     | (Optional) The speed of chart animation. Use `0-1` value. |
| **`backgroundColor`**| `number` | `1`     | (Optional) The speed of chart animation. Use `0-1` value. |
| **`canvasWidth`**    | `number` | `1`     | (Optional) The speed of chart animation. Use `0-1` value. |
| **`canvasHeight`**   | `number` | `1`     | (Optional) The speed of chart animation. Use `0-1` value. |
| **`gridXSize`**      | `number` | `1`     | (Optional) The speed of chart animation. Use `0-1` value. |
| **`gridYSize`**      | `number` | `1`     | (Optional) The speed of chart animation. Use `0-1` value. |
| **`gridStrokeColor`**| `number` | `1`     | (Optional) The speed of chart animation. Use `0-1` value. |
| **`gridXValueJump`** | `number` | `1`     | (Optional) The speed of chart animation. Use `0-1` value. |
| **`graphPointerHighlightColor`**      | `number` | `1`     | (Optional) The speed of chart animation. Use `0-1` value. |
| **`graphXValueTextColor`**      | `number` | `1`     | (Optional) The speed of chart animation. Use `0-1` value. |
| **`graphPointerColor`**      | `number` | `1`     | (Optional) The speed of chart animation. Use `0-1` value. |
| **`wayPointsCount`**      | `number` | `1`     | (Optional) The speed of chart animation. Use `0-1` value. |
