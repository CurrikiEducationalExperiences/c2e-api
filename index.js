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
		"img": "https://my.currikistudio.org/api/storage/projects/647851e147e4c.png",
		"text": "Victory Lap",
		"thumbnail": "https://my.currikistudio.org/api/storage/projects/647851e147e4c.png"
	}, {
		"img": "https://my.currikistudio.org/api/storage/projects/647851b88d79a.jpeg",
		"text": "The Science of Golf",
		"thumbnail": "https://my.currikistudio.org/api/storage/projects/647851b88d79a.jpeg"
	}, {
		"img": "https://my.currikistudio.org/api/storage/projects/647857024641d.png",
		"text": "AIG Women's Open",
		"thumbnail": "https://my.currikistudio.org/api/storage/projects/647857024641d.png"
	}, {
		"img": "https://my.currikistudio.org/api/storage/projects/6478540472214.png",
		"text": "US Capitol Historical Society",
		"thumbnail": "https://my.currikistudio.org/api/storage/projects/6478540472214.png"
	}, {
		"img": "https://my.currikistudio.org/api/storage/projects/6478524355749.png",
		"text": "Youth Entrepreneurs",
		"thumbnail": "https://my.currikistudio.org/api/storage/projects/6478524355749.png"
	}];
let sales2 = [{
		"img": "https://my.currikistudio.org/api/storage/projects/647852507f3de.png",
		"text": "Math",
		"thumbnail": "https://my.currikistudio.org/api/storage/projects/647852507f3de.png"
	}, {
		"img": "https://my.currikistudio.org/api/storage/projects/647855931779c.png",
		"text": "Learning Heroes",
		"thumbnail": "https://my.currikistudio.org/api/storage/projects/647855931779c.png"
	}, {
		"img": "https://my.currikistudio.org/api/storage/projects/647851fc18c07.jpg",
		"text": "Science",
		"thumbnail": "https://my.currikistudio.org/api/storage/projects/647851fc18c07.jpg"
	}, {
		"img": "https://my.currikistudio.org/api/storage/projects/647854bbdbf28.png",
		"text": "Civicate Drafts",
		"thumbnail": "https://my.currikistudio.org/api/storage/projects/647854bbdbf28.png"
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads_tmp/JxQltAmvr1YkkYzOFFxqPDk5dozD3Mr9IJ8usKnY.png",
		"text": "The Branch Alliance for Educator Diversity",
		"thumbnail": "https://my.currikistudio.org/api/storage/uploads_tmp/JxQltAmvr1YkkYzOFFxqPDk5dozD3Mr9IJ8usKnY.png"
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
		"img": "https://my.currikistudio.org/api/storage/projects/647851e147e4c.png",
		"title": "Victory Lap",
		"price": "$26",
		"text": "Victory Lap is a Sales Accelerator to help young professionals. We are a sales education company built by salespeople. We know how to ignite the passionate entrepreneurial mindset from within our candidates to ensure they thrive on this path. We foster the skills in each and every candidate we work with to help them reach their full potential."
	}, {
		"img": "https://my.currikistudio.org/api/storage/projects/647851b88d79a.jpeg",
		"title": "The Science of Golf",
		"price": "$62",
		"text": "Uncover the science, technology, engineering, and mathematics behind the game of golf."
	}, {
		"img": "https://my.currikistudio.org/api/storage/projects/647857024641d.png",
		"title": "AIG Women's Open",
		"price": "$32",
		"text": "Explore more about the AIG Women's Open, the most international major in women's golf | To be played in 2021 from August 19-22 at Carnoustie."
	}, {
		"img": "https://my.currikistudio.org/api/storage/projects/6478540472214.png",
		"title": "US Capitol Historical Society",
		"price": "$37",
		"text": "The United States Capitol Historical Society is a nonprofit and nonpartisan educational organization created in 1962 to promote the history of the Capitol and Congress. USCHS serves as an informational and educational resource for its members and the general public."
	}, {
		"img": "https://my.currikistudio.org/api/storage/projects/6478524355749.png",
		"title": "Youth Entrepreneurs",
		"price": "$87",
		"text": "YE Academy is powered by Youth Entrepreneurs. YE exists to inspire a better future, equipping young people with the values and vision they need to pursue their dreams."
	}];
let listing2 = [{
		"img": "https://my.currikistudio.org/api/storage/projects/647852507f3de.png",
		"title": "Math",
		"price": "$46",
		"text": "In this project you will find math activity samples for Grade 3, Grade 4, and Grade 6."
	}, {
		"img": "https://my.currikistudio.org/api/storage/projects/647855931779c.png",
		"title": "Learning Heroes",
		"price": "$47",
		"text": "According to our national research,"
	}, {
		"img": "https://my.currikistudio.org/api/storage/projects/647851fc18c07.jpg",
		"title": "Science",
		"price": "$69",
		"text": "Review the phases of mitosis with this activity variety pack."
	}, {
		"img": "https://my.currikistudio.org/api/storage/projects/647854bbdbf28.png",
		"title": "Civicate Drafts",
		"price": "$26",
		"text": "Civicate.org provides 14 short civic education videos and other resources targeted to middle school students or anyone who learns better through bite-sized (3-5 minute) videos."
	}, {
		"img": "https://my.currikistudio.org/api/storage/uploads_tmp/JxQltAmvr1YkkYzOFFxqPDk5dozD3Mr9IJ8usKnY.png",
		"title": "The Branch Alliance for Educator Diversity",
		"price": "$30",
		"text": "The Branch Alliance for Educator Diversity, BranchED, is the only non-profit organization in the country dedicated to strengthening, growing, and amplifying the impact of educator preparation at Minority Serving Institutions, with the longer-range goals of both diversifying the teaching profession and intentionally addressing critical issues of educational equity for all students. Their vision is for all students to have access to diverse, highly effective educators."
	}];

let activeList1 = [{
                name: "Thinkific",
                title: "Victory Lap",
                price: "$71"
            }, {
                name: "Skillshare",
                title: "The Science of Golf",
                price: "$87"
            }, {
            	name: "Teachable",
                title: "AIG Women's Open",
                price: "$37"
            }, {
           	 name: "Skillshare",
                title: "US Capitol Historical Society",
                price: "$32"
            }, {
                name: "Thinkific",
                title: "Youth Entrepreneurs",
                price: "$62"
            }, {
                name: "Udemy",
                title: "The Science of Golf",
                price: "$26"
            }];
let activeList2 =  [{
                name: "Udemy",
                title: "Math",
                price: "$50"
            }, {
                name: "Skillshare",
                title: "Learning Heroes",
                price: "$30"
            }, {
            	name: "Thinkific",
                title: "Science",
                price: "$46"
            }, {
           	 name: "Skillshare",
                title: "Civicate Drafts",
                price: "$47"
            }, {
                name: "Teachable",
                title: "The Branch Alliance for Educator Diversity",
                price: "$26"
            }, {
                name: "Thinkific",
                title: "Science",
                price: "$69"
            }];


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
	return response.json({ listing: listing1 });
  }
  else{
	return response.json({ listing: listing2 });  
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
