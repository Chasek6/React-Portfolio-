import React from 'react';
// import contactcss from './contact.css';



export default function Contact() { 
    return (
        <div className="container">
            <div className="columns">
                <div className="column is-6 is-offset-3">
                    <div className="box">
                        <div className="content">
                            <h1 className="title is-1">Contact</h1>
                            <p className="subtitle is-4">If you have any questions, comments, or concerns, please feel free to contact me at <a href="mailto:

"> </a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const displayContact = () => {
    <Contact> </Contact>
}

// Language: javascript
 