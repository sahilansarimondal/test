interface Circle {
   radius: number;
}
interface Square {
   side: number;
}
interface Rectangle {
   width: number;
   height: number;
}

type Shape = Rectangle | Circle | Square;

function renderShape(shape: Shape) {
   console.log("Rendered");
}

function calculateArea(shape: Shape) {
   console.log("calculated Area");
}

renderShape({
   radius: 10,
   side: 10,
   width: 10,
   height: 10,
});
