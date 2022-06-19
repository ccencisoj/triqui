import list from './list';

test("add a product to products array", ()=> {
  const products = [];
  const result = list(products).add({name: "producto 1"});
  const addedItem = result[0];
  const expectedValue = [{_id: addedItem._id, name: "producto 1"}];
  expect(result).toStrictEqual(expectedValue);
});

test("delete a product of products array", ()=> {
  let products = [];
  products = list(products).add({name: "producto 1"});
  const addedItem = products[0];
  const result = list(products).delete(addedItem);
  const expectedValue = [];
  expect(result).toStrictEqual(expectedValue);
});

test("delete a product through your id", ()=> {
  let products = [];

  products = list(products).add({
    id: "customId",
    name: "producto 1"
  });

  const addedItem = products[0];
  const result = list(products).deleteById(addedItem.id);
  const expectedValue = [];
  expect(result).toStrictEqual(expectedValue);
});
