export const removeItem = (arr, item, type) => {
    const newArr = arr.filter(i => i._id !== item);
    if(type === null) return newArr
    return { type , payload: newArr}
}

export const addItem = (arr, item, type) => {
    const check = arr.every( i => i._id !== item._id);
    if(check) {
        const newArr = [...arr, item];
        return {type, payload: newArr}
    } else {
        return { type: 'NOTIFY', payload: {error: 'there is already a note with this id'}}
    } 
}

export const updateItem = (arr, item, type) => {
    const newArr = arr.map( i => {
        if(i._id === item._id) return item;
        return i
    });
    return { type, payload: newArr}
}