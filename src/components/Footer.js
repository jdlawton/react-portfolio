import React from 'react';

function Footer() {

    //Set up the links I want to have in my footer in an array so I can map them in the return statement.
    const links = [
        {
            name: 'GitHub',
            url: 'https://github.com/jdlawton'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/joseph-lawton-702577ba/'
        },
        {
            name: 'Stack Overflow',
            url: 'https://stackexchange.com/users/18639998/joe-lawton'
        }
    ];

    //Return a list containing the links to all of the sites listed above. NOTE: The rel="noopener noreferrer" in the links was added
    //on the reccomendation of a warning I received when compiling this code. It is to prevent the possability of a new tab being hijacked.
    return (
        <footer>
            <ul className="nav-list">
                {links.map((link) => (
                    <li className="list-item" key={link.name}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                    </li>
                ))}
            </ul>
        </footer>

    );
}

export default Footer;