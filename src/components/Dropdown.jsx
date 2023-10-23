const Dropdown =({setSortDir}) => {
    return (
        <>
        <select onChange={(e) => setSortDir(e.target.value)}>
            <option value="lowtohigh">Precio: de menor a mayor</option>
            <option value="hightolow">Precio: de mayor a menor</option>

        </select>
        </>
    )
}

export default Dropdown;