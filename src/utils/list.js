const list = (items)=> {
  return {
    // Agrega un item al array de items
    add: (item)=> [item, ...items],

    // Elimina un item mediante su id
    deleteById: (id)=> items.filter((item)=> !(item.id === id)),

    // Actualiza un item mediante su id
    updateById: (id, newValues)=> items.map((item)=> 
      item.id === id ? ({...item, ...newValues}): item),
  }
}

export default list;