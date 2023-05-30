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
		"img": "https://my.currikistudio.org/api/storage/uploads/aVDd7qF0bTnUlOFZr0smjmuO50EG5Xm2c7xt0AV8.jpeg",
		"text": "The Muscular System",
		"thumbnail": "https://my.currikistudio.org/api/storage/uploads/aVDd7qF0bTnUlOFZr0smjmuO50EG5Xm2c7xt0AV8.jpeg"
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/4l5YP3efnBpxMQ14dcD1PUkzfbjcDCqLO0SFg1Z1.png",
		"text": "Algebra for Everyone: Functions",
		"thumbnail": "https://my.currikistudio.org/api/storage/uploads/4l5YP3efnBpxMQ14dcD1PUkzfbjcDCqLO0SFg1Z1.png"
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/vxPyA8RhQuwyx67CGDDL4CpnQdxx1RdyfXaL4Ofo.png",
		"text": "ELA",
		"thumbnail": "https://my.currikistudio.org/api/storage/uploads/vxPyA8RhQuwyx67CGDDL4CpnQdxx1RdyfXaL4Ofo.png"
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/cPdf5i4uF7h1bLulgem0Dt1YiSCVtmvQVpY8xX7u.png",
		"text": "Science",
		"thumbnail": "https://my.currikistudio.org/api/storage/uploads/cPdf5i4uF7h1bLulgem0Dt1YiSCVtmvQVpY8xX7u.png"
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/5f19f14163239.jpeg",
		"text": "LA Opera",
		"thumbnail": "https://my.currikistudio.org/api/storage/uploads/5f19f14163239.jpeg"
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/7MxoHL2pqmjcpif7cg0dfPFodeXZ64U65qfV0AdE.png",
		"text": "US Capitol Historical Society",
		"thumbnail": "https://my.currikistudio.org/api/storage/uploads/7MxoHL2pqmjcpif7cg0dfPFodeXZ64U65qfV0AdE.png"
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

let marketplace1 = [{
                heading: "Udemy",
                title: "12M Item Sold",
                text: "3M Products"
            }, {
                heading: "Skillshare",
                title: "9M Item Sold",
                text: "2.2M Products"
            }, {
                heading: "Teachable",
                title: "7M Item Sold",
                text: "1.4M Products"
            }, {
                heading: "Thinkific",
                title: "5M Item Sold",
                text: "1M Products"
            }];
let marketplace2 =  [{
                heading: "Udemy",
                title: "20M Item Sold",
                text: "6M Products"
            }, {
                heading: "Skillshare",
                title: "16M Item Sold",
                text: "4.3M Products"
            }, {
                heading: "Teachable",
                title: "12M Item Sold",
                text: "2.7M Products"
            }, {
                heading: "Thinkific",
                title: "8M Item Sold",
                text: "1.9M Products"
            }];;

let income1 =  [{
                price: "$500",
                income: "Weekly"
            }, {
                price: "$2.8K",
                income: "Monthly"
            }, {
                price: "$116K",
                income: "YTD"
            }, {
                price: "$1.5M",
                income: "All Time"
            }];
let income2 =  [{
                price: "$2K",
                income: "Weekly"
            }, {
                price: "$6.5K",
                income: "Monthly"
            }, {
                price: "$645K",
                income: "YTD"
            }, {
                price: "$3M",
                income: "All Time"
            }];

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