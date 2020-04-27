import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';

test('renders without crashing test2', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    expect(div.innerHTML).toContain('Hi There!');
    ReactDOM.unmountComponentAtNode(div)
});
