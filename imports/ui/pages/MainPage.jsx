import * as React from 'react';

export class MainPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to main page</h1>
                <h2>Controllable Tab A</h2>
                <p>
                Tabs are also controllable if you want to programmatically pass them their values.
                This allows for more functionality in Tabs such as not
                having any Tab selected or assigning them different values.
                </p>
            </div>
        );
    }
}