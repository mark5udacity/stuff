import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


for (let i = 1; i <= 10; ++i) {
    console.log('time for: ', i);
    setTimeout(() => {
        console.log('rerendering for i: ', i);
        const progress = 10 * i;
        ReactDOM.render(<App progress={progress}/>, document.getElementById('root'));
        },
        i * 500
    );
}


registerServiceWorker();
