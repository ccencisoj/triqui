import mapMatrix from "./mapMatrix";

test("change matrix values for their current row", ()=> {
  const matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];  
  const result = mapMatrix(matrix, (value, r, c)=> r);
  const expectedMatrix = [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2]
  ];
  expect(result).toStrictEqual(expectedMatrix);
});

test("change matrix values for their current column", ()=> {
  const matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];  
  const result = mapMatrix(matrix, (value, r, c)=> c);
  const expectedMatrix = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2]
  ];
  expect(result).toStrictEqual(expectedMatrix);
});

test("change matrix values for the number 2", ()=> {
  const matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]; 
  const result = mapMatrix(matrix, (value, r, c)=> 2);
  const expectedMatrix = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2]
  ];
  expect(result).toStrictEqual(expectedMatrix);
});