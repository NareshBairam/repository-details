import React from 'react';

import { TabMenu } from 'primereact/tabmenu';

const Header = () => {

    let items = [
        {
            label: 'Repos', icon: 'pi pi-fw pi-home', command: () => {
                window.location.hash = `/repos`
            },
        },
        {
            label: 'Favorities', icon: 'pi pi-fw pi-calendar', command: () => {
                window.location.hash = `/favorite-repos`
            },
        }
    ]

    return (
        <div>
            <TabMenu model={items} />
        </div>
    );
}

export default Header;
