import express from 'express'

const PORT = 5001

const app = express()


import cors from 'cors'

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};
app.use(cors(corsOpts));

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

let listing1 = [{
		"img": "https://my.currikistudio.org/api/storage/uploads/aVDd7qF0bTnUlOFZr0smjmuO50EG5Xm2c7xt0AV8.jpeg",
		"title": "The Muscular System",
		"price": "$26",
		"text": "This course will teach you about the muscular system in the human body. You will learn how the muscles work together with other systems in the body to enable each body part to move."
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/4l5YP3efnBpxMQ14dcD1PUkzfbjcDCqLO0SFg1Z1.png",
		"title": "Algebra for Everyone: Functions",
		"price": "$62",
		"text": "Algebra for Everyone focuses on the essentials of Algebra. This module explores algebra functions using tables, graphs, equations, and the language of functions."
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/vxPyA8RhQuwyx67CGDDL4CpnQdxx1RdyfXaL4Ofo.png",
		"title": "ELA",
		"price": "$32",
		"text": "Mrs. Teacher's English Language Arts lessons for the 2020 - 2021 school year."
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/cPdf5i4uF7h1bLulgem0Dt1YiSCVtmvQVpY8xX7u.png",
		"title": "Science",
		"price": "$37",
		"text": "Mrs. Teacher's Science lessons for the 2020 - 2021 school year."
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/5f19f14163239.jpeg",
		"title": "LA Opera",
		"price": "$87",
		"text": "The LA Opera is committed to providing access to quality opera music for all. Learning is a passion, and so is opera. Opera connects us, through story and music, to our past, our future, and each other. Now, more than ever, we each need and deserve this powerful pathway for connection.  Using online technologies, we are eager to share the wonder and promise of opera with all ages, neighborhoods, and communities, because we know our connections enrich all our lives. Our continuing education programs help fans of all backgrounds expand their familiarity with the art form from home."
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/7MxoHL2pqmjcpif7cg0dfPFodeXZ64U65qfV0AdE.png",
		"title": "US Capitol Historical Society",
		"price": "$71",
		"text": "The United States Capitol Historical Society is a nonprofit and nonpartisan educational organization created in 1962 to promote the history of the Capitol and Congress. USCHS serves as an informational and educational resource for its members and the general public."
	}];
let lsiting2 = [{
		"img": "https://my.currikistudio.org/api/storage/uploads/4H3v8CInfgKPuIquC5P0KjID9fpd7ijyHOHXlQSM.jpeg",
		"title": "The Science of Golf",
		"price": "$46",
		"text": "Uncover the science, technology, engineering, and mathematics behind the game of golf."
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/4GnQzEIROIQc8D2wgcbk6H51ppXyXEzVt0uC2NDT.png",
		"title": "We the Economy",
		"price": "$47",
		"text": "Everyone\u2019s talking about it, but who can explain it? \n\nIn the current economic climate, the need for citizens to be engaged and informed is greater than ever. A panel of top economic experts including academics, analysts, journalists, and historians helped identify 20 key topics about the U.S. economy that every American should understand. These topics were developed into WE THE ECONOMY, 20 Short Films You Can\u2019t Afford To Miss, a series of 5-8 minute films that aims to drive awareness and establish a better understanding of the U.S. economy. Each film is helmed by an acclaimed filmmaker, each with their own creative vision. This includes the creative talent of directors such as Morgan Spurlock, John Chu, and more.  \n\nTold through animation, comedy, musical, non-fiction, and scripted films, WE THE ECONOMY seeks to demystify a complicated topic while empowering the public to take control of their own economic futures."
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/5ef0e41c57a06.png",
		"title": "Globalization, Robots And You",
		"price": "$69",
		"text": "You have important decisions to make about your educations and career \u2013 wouldn\u2019t it be nice if you could better understand the forces of globalization and automation first? What information do you need to gauge salary prospects, the risk of automation, and foreign competition as you compare your options?"
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/MdCUVzVRXgfpBtK2nGORhiKI0oBGS8pV09Wz36X8.png",
		"title": "George Washington and Self-Governance",
		"price": "$26",
		"text": "This course explores the virtue of self-governance through the life of George Washington."
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/LS6NNGJm4XkvrP0Lg48V8AHX0asRf1yZEa7tHGxb.jpeg",
		"title": "The Lake Poets",
		"price": "$30",
		"text": "This course will acquaint you with the three main poets from the Lake District. The written works of William Wordsworth, Samuel Coleridge, and Robert Southey had a great influence on the Romantic period as well as the society in which they lived. You will learn about the background of each Lake Poet as well as their best-known literary accomplishments."
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads/dj9rZXLCtmvR1bMwaQDybopRfgjUJnOkUcokhDRq.jpeg",
		"title": "LA Opera",
		"price": "$50",
		"text": "The LA Opera is committed to providing access to quality opera music for all. Learning is a passion, and so is opera. Opera connects us, through story and music, to our past, our future, and each other. Now, more than ever, we each need and deserve this powerful pathway for connection.  Using online technologies, we are eager to share the wonder and promise of opera with all ages, neighborhoods, and communities, because we know our connections enrich all our lives. Our continuing education programs help fans of all backgrounds expand their familiarity with the art form from home."
	}];

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


app.get('/api/v1/c2e/listall', (request, response) => {
  const postId = request.query.userId;
  if(postId==1){
	return response.json({ listing: lsiting1 });
  }
  else{
	return response.json({ listing: lsiting2 });  
  }
});

app.get('/api/v1/c2e/marketplace', (request, response) => {
  const postId = request.query.userId;
  if(postId==1){
	return response.json({ activeList: activeList1 });
  }
  else{
	return response.json({ activeList: activeList2 });  
  }
});