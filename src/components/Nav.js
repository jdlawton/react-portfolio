import React from 'react';

//props are passed through our functional component.
function NavTabs(props) {
    const tabs = ['About', 'Projects', 'Contact', 'Resume'];

    return (
        <ul className="nav-list">
            {tabs.map(tab => (
                <li className="list-item" key={tab}>
                    <a href={'#' + tab.toLowerCase()}
                        //whenever a tab is clicked on, the current page is set through the handlePageChange props
                        onClick={() => props.handlePageChange(tab)}
                        className={props.currentPage === tab ? 'navActive' : 'nav-link'}>
                        {tab}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default NavTabs;