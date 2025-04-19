export const getStoredBook = () => {
    const storedBook = localStorage.getItem('readList')
    if (storedBook) {
        const storedBookData = JSON.parse(storedBook);
        return storedBookData
    } else {
        return []
    }
}

export const addToStoredLocal = (id) => {
    const storedBookData = getStoredBook()
    if (storedBookData.includes(id)) {
        alert("bhai ei id to age thekei ase")
    } else
        storedBookData.push(id)
    const data = JSON.stringify(storedBookData)
    localStorage.setItem('readList', data)

}

