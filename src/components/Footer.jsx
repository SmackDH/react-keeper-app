import React from 'react';

function Footing () {
    const year = new Date().getFullYear();
    return <footer className="footer">
    <p>SmackDH {year}</p>
    </footer>
};

export default Footing