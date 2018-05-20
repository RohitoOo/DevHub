import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FilterableProductTable from './FilterableProductTable'

window.data =  {
	firstName: 'Rohito',
	lastName: 'M',
	image: 'https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.0-9/19895028_10211949426644823_8064490458382315371_n.jpg?_nc_cat=0&oh=66a25efea8a97ff374909960f835362e&oe=5B992E3B',
	details: [
		{
			provider: 'facebook',
			username: 'mak11195',
			engagement: ['personal'],
			link: ''
		},
		{
			provider: 'github',
			username: 'makaravind',
			engagement: ['professional'],
			link: 'https://github.com/makaravind'
		},
		{
			provider: 'gmail',
			username: 'aravindmetku@gmail.com',
			engagement: ['professional', 'personal'],
		},
		{
			provider: 'youtube',
			channel: 'amyourmove',
			url: 'youtube.com/c/amyourmove',
			engagement: ['professional'],
		},
		{
			provider: 'wordpress',
			type: 'blog',
			url: 'https://maravindblog.wordpress.com',
			engagement: ['professional'],
		}
	]
}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];







ReactDOM.render(<App data={window.data} />, document.getElementById('root'));
