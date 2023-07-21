import "./Components.css";

function FilterUsers(props: any) {

    const filterStateHandler = (event: any) => {
        props.filterHandler(event.target.value);
    }

    return(
        <div className="filter"  style={{marginLeft:'-220%', marginBottom:'37px'}}>
            <select className="filter__select" onChange={filterStateHandler}>
                <option value="visible" className="">Aktif Kullanıcılar</option>
                <option value="invisible" className="">Pasif Kullanıcılar</option>
                <option value="all" className="">Tümü</option>
            </select>
        </div>
    );
}

export default FilterUsers;