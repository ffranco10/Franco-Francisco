const products = [
    {id: 1, name: 'Naruto', description:'string', stock: 'number'},
    {id: 2, name: 'Dragon Ball', description:'string', stock: 'number'},
    {id: 3, name: 'Caballeros del Zodiaco', description:'string', stock: 'number'},
    {id: 4, name: 'Señor de los Anillos', description:'string', stock: 'number'},
]

export const getProducts = () => {
    const promise = new Promise ((resolve) => {
        setTimeout(() => {
        return resolve(products);
        })
    })

    return promise 
}
export const getProduct = (id) => {
    const promise = new Promise ((resolve) => {
        const result = products.find((product) => product,id == id)
        setTimeout(() => {
        return resolve(products);
        })
    })

    return promise 
}