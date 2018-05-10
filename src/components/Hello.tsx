import * as React from 'react';

export default class Hello extends React.Component {
    consoleTest() {
        console.log('test');
    }

    render() {
        this.consoleTest();
        return (
            <div>Test check console</div>
        );
    }
}