import '../assets/ProductList.css';


const Dropdown =({props}) => {

    const setSortDir = props.setSortDir;

    return (
        <>

        <div className="dropdown">
        <label className="order_label">Ordenar por:<select className="select_drop" defaultValue={'none'} onChange={(e) => setSortDir(e.target.value)}>
            <option value="none" disabled>Por relevancia</option>
            <option value="ascending">Precio: de menor a mayor</option>
            <option value="descending">Precio: de mayor a menor</option>

        </select></label>
        </div>
        </>
    )
}

export default Dropdown