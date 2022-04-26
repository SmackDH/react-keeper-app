import React from 'react';

import Heading from './Heading.jsx'
import Footing from './Footer.jsx'
import Note from './Note.jsx'
import notesList from '../notesList.js'

function App() {
    return <div>
    
    <Heading />
    {notesList.map(prop => (
        <Note 
            key={prop.id}
            title={prop.title}
            content={prop.content}
        />
    ))}

    <Footing />
    </div>
};

export default App;