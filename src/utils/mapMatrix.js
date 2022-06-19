const mapMatrix = (matrix, callback)=> {
  if(!(Array.isArray(matrix) && Array.isArray(matrix[0])))
    return null;

  const newMatrix = [];
  const rowsNum = matrix.length;
  const columnsNum = matrix[0].length;
  let index = 0;

  for(let r = 0; r < rowsNum; r++) {
    const newRow = [];

    for(let c = 0; c < columnsNum; c++) {
      newRow.push(callback(matrix[r][c], index, r, c));
      index += 1;
    }

    newMatrix.push(newRow);
  } 
  return newMatrix;
}

export default mapMatrix;