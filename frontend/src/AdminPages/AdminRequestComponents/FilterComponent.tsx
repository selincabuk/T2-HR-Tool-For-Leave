import "./RequestsTable.css";
import { useState } from 'react';

function FilterComponent() {

    const [filter, setFilter] = useState<string>("pending");

    const filterHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
        console.log(filter);
    }
    
    return(
        <div className="filter">
            <select className="filter__select" onChange={filterHandler}>
                <option value="pending" className="filter__option">Onay Bekleyen</option>
                <option value="approved" className="filter__option">Onaylanmış</option>
                <option value="rejected" className="filter__option">Reddedilmiş</option>
                <option value="all" className="filter__option">Tümü</option>
            </select>
        </div>
    );
}

export default FilterComponent;