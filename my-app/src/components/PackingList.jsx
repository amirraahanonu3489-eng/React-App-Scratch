import React, { useState } from "react";

export default function PackingList() {
    const [list, setList] = useState([
        { id: 1, item: "Computer", isPacked: true },
        { id: 2, item: "Shoes", isPacked: false },
    ]);

    const togglePacked = (item) => {
        setList(
            list.map((i) => (i.id === item.id ? { ...i, isPacked: !i.isPacked } : i))
        );
    };

    return (
        <div>
            <h1>Packing List</h1>
            <ul>
                {list.map((i) => (
                    <li key={i.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={i.isPacked}
                                onChange={() => togglePacked(i)}
                            />
                            {i.item}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
