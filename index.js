// Import Express.js
import express from 'express'

// This variable defines the port of your computer where the API will be available
const PORT = 5001

// This variable instantiate the Express.js library
const app = express()

// The code below starts the API with these parameters:
// 1 - The PORT where your API will be available
// 2 - The callback function (function to call) when your API is ready
app.listen(PORT, () =>
  console.log(`The Books API is running on: http://localhost:${PORT}.`)
)

let sales1 = [{
		"img": "https://dev.currikistudio.org/api/storage/projects/5f6ef3213b73b.jpeg",
		"text": "The Curriki Vision",
		"thumbnail": "https://dev.currikistudio.org/api/storage/projects/5f6ef3213b73b.jpeg"
	}, {
		"img": "https://dev.currikistudio.org/api/storage/projects/5f6ef320988e8.png",
		"text": "How to Use CurrikiStudio",
		"thumbnail": "https://dev.currikistudio.org/api/storage/projects/5f6ef320988e8.png"
	}, {
		"img": "https://dev.currikistudio.org/api/storage/projects/6296525989512.jpeg",
		"text": "Activity Sampler",
		"thumbnail": "https://dev.currikistudio.org/api/storage/projects/6296525989512.jpeg"
	}];
let sales2 = [{
		"img": "https://my.currikistudio.org/api/storage/uploads/4H3v8CInfgKPuIquC5P0KjID9fpd7ijyHOHXlQSM.jpeg",
		"text": "The Science of Golf",
		"thumbnail": "https://my.currikistudio.org/api/storage/uploads/4H3v8CInfgKPuIquC5P0KjID9fpd7ijyHOHXlQSM.jpeg"
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/4GnQzEIROIQc8D2wgcbk6H51ppXyXEzVt0uC2NDT.png",
		"text": "We the Economy",
		"thumbnail": "https://my.currikistudio.org/api/storage/uploads/4GnQzEIROIQc8D2wgcbk6H51ppXyXEzVt0uC2NDT.png"
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/5ef0e41c57a06.png",
		"text": "Globalization, Robots And You",
		"thumbnail": "https://my.currikistudio.org/api/storage/uploads/5ef0e41c57a06.png"
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/MdCUVzVRXgfpBtK2nGORhiKI0oBGS8pV09Wz36X8.png",
		"text": "George Washington and Self-Governance",
		"thumbnail": "https://my.currikistudio.org/api/storage/uploads/MdCUVzVRXgfpBtK2nGORhiKI0oBGS8pV09Wz36X8.png"
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/LS6NNGJm4XkvrP0Lg48V8AHX0asRf1yZEa7tHGxb.jpeg",
		"text": "The Lake Poets",
		"thumbnail": "https://my.currikistudio.org/api/storage/uploads/LS6NNGJm4XkvrP0Lg48V8AHX0asRf1yZEa7tHGxb.jpeg"
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/dj9rZXLCtmvR1bMwaQDybopRfgjUJnOkUcokhDRq.jpeg",
		"text": "LA Opera",
		"thumbnail": "https://my.currikistudio.org/api/storage/uploads/dj9rZXLCtmvR1bMwaQDybopRfgjUJnOkUcokhDRq.jpeg"
	}];

let marketplace1 = [
  'Data 3',
  'Data 4',
];
let marketplace2 = [
  'Data 3',
  'Data 4',
];

let income1 = [
  'Data 3',
  'Data 4',
];
let income2 = [
  'Data 3',
  'Data 4',
];

let listing1 = [
  'Data 3',
  'Data 4',
];
let lsiting2 = [
  'Data 3',
  'Data 4',
];

let activeList1 = [
  'Data 3',
  'Data 4',
];
let activeList2 = [
  'Data 3',
  'Data 4',
];


app.get('/api/v1/wallet/sales', (request, response) => {
  const postId = request.query.userId;
  if(postId==1){
	return response.json({ sales: sales1 });
  }
  else{
	return response.json({ sales: sales2 });  
  }
});

app.get('/api/v1/wallet/marketplace', (request, response) => {
  const postId = request.query.userId;
  if(postId==1){
	return response.json({ marketplace: marketplace1 });
  }
  else{
	return response.json({ marketplace: marketplace2 });  
  }
});

app.get('/api/v1/wallet/income', (request, response) => {
  const postId = request.query.userId;
  if(postId==1){
	return response.json({ income: income1 });
  }
  else{
	return response.json({ income: income2 });  
  }
});


app.get('/api/v1/projects/c2e/listall', (request, response) => {
  const postId = request.query.userId;
  if(postId==1){
	return response.json({ listing: lsiting1 });
  }
  else{
	return response.json({ listing: lsiting2 });  
  }
});

app.get('/api/v1/projects/c2e/marketplace', (request, response) => {
  const postId = request.query.userId;
  if(postId==1){
	return response.json({ activeList: activeList1 });
  }
  else{
	return response.json({ activeList: activeList2 });  
  }
});