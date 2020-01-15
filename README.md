# Vue Exercise: SVG Element Plotter

An application that can be used to draw SVG elements on the web page in real time through input in the text box.

## How to Run the Plotter

Simply open index.html in a browser to run the plotter.

### Plotter Area

Elements will be displayed in this area.

### Input Text Box

Write commands into this box to draw elements.

### Error Message Box

If there is an error with the input commands, an error information will be displayed in this box, with detailed information and line number.

## Commands

The syntax of the input text should follow specified rules. The shape type will be indicated by the first character (not case-sensitive). Four different types are supported, including circle, rectangle, polygon, and ellipse (extra type).

### Circle

```
C <CX Coordinate> <CY Coordinate> <Radius>
```

### Rectangle

```
R <X Coordinate> <Y Coordinate> <Width> <Height>
```

### Polygon

```
P <X1, Y1> <X2, Y2> <X3, Y3> ... <Xn, Yn>
```

### Ellipse (extra)

```
E <CX Coordinate> <CY Coordinate> <Radiux X> <Radius Y>
```

