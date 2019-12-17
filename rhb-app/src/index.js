import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


class Holder extends React.Component {
    render() {
        return (
            <div class="top">
                <h1>Currently Under Construction</h1>
                <p>Please check back soon</p>
            </div>
        )
    }
}

ReactDOM.render(<Holder />, document.getElementById('root'));