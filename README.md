
# Linear Chart JS
<p align="center">
  <img src="https://user-images.githubusercontent.com/21697238/127592629-9a9eedec-bf1a-44e6-9bd5-b79a760c6c5f.gif" alt="preview" />
</p>
<h3 align="center">Linear-Chart-JS</h3>
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
|     **`isGrid`**     | `boolean` | `true`     | Show or Hide the background grid pattern                         |
|     **`lineColor`**  | `string` | `#a0e1e0`   | Line color                                   |
| **`highlightIndex`** | `string` | `undefined`    | Set the index to highlight                                   |
|      **`textColor`** | `string` | `#626666`     | Text color   |
| **`yTopValue`**      | `number` | `MaxY+MinY`     | Maximum y value |
| **`backgroundColor`**| `string` | `#FCFCFC`     | Background color |
| **`canvasWidth`**    | `number` | `792`     |  Canvas width |
| **`canvasHeight`**   | `number` | `312`     |  Canvas height |
| **`gridXSize`**      | `number` | `33`     |  The width of one grid unit |
| **`gridYSize`**      | `number` | `26`     |  The height of one grid unit
| **`gridStrokeColor`**| `string` | `#a0e1e0`     |  The color of the background grid pattern stroke |
| **`gridXValueJump`** | `number` | `2`     |  The offset position of x value |
| **`graphPointerHighlightColor`**      | `string` | `#219A95`     |  The color of highlighed pointer |
| **`graphXValueTextColor`**      | `string` | `#8D9393`     |  The color of highlighed x value |
| **`graphPointerColor`**      | `string` | `#2AC1BC`     |  Pointer color |
| **`wayPointsCount`**      | `number` | `25`     |  The speed of chart animation |
>>>>>>> 69af5047c18dc7a8069e933738644274d835ce25
