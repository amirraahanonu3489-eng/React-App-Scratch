import { useState } from 'react';

export default function SearchBar({ search: initialSearch = '', onlyInStock: initialOnlyInStock = false, onSearch }) {
    const [search, setSearch] = useState(initialSearch);
    const [onlyInStock, setOnlyInStock] = useState(initialOnlyInStock);

    const handleSearchChange = (ev) => {
        setSearch(ev.target.value);
        if (typeof onSearch === 'function') {
            onSearch({ name: ev.target.value, onlyInStock });
        }
    };

    const handleInStockChecked = (ev) => {
        const checked = ev.target.checked;
        setOnlyInStock(checked);
        if (typeof onSearch === 'function') {
            onSearch({ name: search, onlyInStock: checked });
        }
    };

    return (
        <form>
            <input type="text" placeholder="Search..." value={search} onChange={handleSearchChange} />
            <label htmlFor="in-stock">
                <input id="in-stock" type="checkbox" checked={onlyInStock} onChange={handleInStockChecked} />
                Only show products in stock
            </label>
        </form>
    )
}
    