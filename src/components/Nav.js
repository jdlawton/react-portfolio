import React from 'react';

//Props are passed over from the Portfolio component
function Nav(props) {
    const pages = ['About', 'Projects', 'Contact', 'Resume'];

    return (
        <ul className="nav-list">
            {/*Use map to render each item in the pages array, which populates the Nav bar */}
            {pages.map(page => (
                <li className="list-item" key={page}>
                    <a href={'#' + page.toLowerCase()}
                        //whenever an item in the nav bar is clicked on, the current page is set through the setCurrentPage which
                        //was passed through the props.
                        onClick={() => props.setCurrentPage(page)}
                        className={props.currentPage === page ? 'navActive' : 'nav-link'}>
                        {page}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Nav;