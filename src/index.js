import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//console.log('hi');
//const element = React.createElement('div', null, 'React element.');

//const element = <div>React element via JSX.</div>;
//ReactDOM.render(element, document.getElementById('root'));

//ReactDOM.render(<div>React element dude</div>, document.getElementById('root'))
ReactDOM.render(<App/>, document.getElementById('root'));

/*
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log('I am ', this.name, ' and I am ', this.age, ' years old.');
    }
}

const animal1 = new Animal('Dude', 5);
animal1.speak();

class Feline extends Animal {
    constructor(name, age, color, speed){
        super(name, age);
        this.color = color;
        this.speed = speed;
    }
}
*/