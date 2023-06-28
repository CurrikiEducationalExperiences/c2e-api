import express from 'express';
import multer from 'multer';
import cors from 'cors';
import fs from 'fs';
import crypto from 'crypto';
import admzip from 'adm-zip';
import pg from 'pg';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import config from './config.json' assert { type: "json" };

const upload = multer({ dest: 'uploads/' });
const pgClient = new pg.Client({
   user: config.db_user,
   host: config.db_host,
   database: config.db_name,
   password: config.db_password,
   port: config.db_port,
 });
await pgClient.connect();
const s3 = new S3Client({ region: config.aws_region, credentials: config.aws_credentials });
const PORT = 5001
const app = express()
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
  console.log(`C2E API is running on: http://localhost:${PORT}.`)
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
            }];

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
                title: "Our Great Big Backyard",
                price: 71
            }, {
                name: "Skillshare",
                title: "US Capitol Historical Society",
                price: 87
            }, {
            	name: "Teachable",
                title: "Globalization, Robots And You",
                price: 37
            }, {
           	   name: "Skillshare",
                title: "Area and Surface Area",
                price: 32
            }, {
                name: "Thinkific",
                title: "ELA Samples",
                price: 62
            }, {
                name: "Udemy",
                title: "Math Samples",
                price: 26
            }];
let activeList2 =  [{
                name: "Udemy",
                title: "Lessons on the Earth's Core",
                price: 50
            }, {
                name: "Skillshare",
                title: "Globalization, Robots And You",
                price: 30
            }, {
            	name: "Thinkific",
                title: "Our Great Big Backyard",
                price: 46
            }, {
           	 name: "Skillshare",
                title: "US Capitol Historical Society",
                price: 47
            }, {
                name: "Teachable",
                title: "Area and Surface Area",
                price: 26
            }, {
                name: "Thinkific",
                title: "Math Samples",
                price: 69
            }];

let sources1 = [{
  id: "currikistudio",
  title: "CurrikiStudio"
}, {
  id: "wiley",
  title: "Wiley"
}];

let sources2 =  [{
  id: "wiley",
  title: "Wiley"
}, {
  id: "currikistudio",
  title: "CurrikiStudio"
}];

let activities1 = [];

let activities2 =  [];

let projects1 = [
  {
    "id":17852,
    "name":"Victory Lap",
    "description":"Victory Lap is a Sales Accelerator to help young professionals. We are a sales education company built by salespeople. We know how to ignite the passionate entrepreneurial mindset from within our candidates to ensure they thrive on this path. We foster the skills in each and every candidate we work with to help them reach their full potential.",
    "thumb_url":"https://my.currikistudio.org/api/storage/projects/647851e147e4c.png",
    "playlists":[{
      "id":37696,
      "title":"Why Sales",
      "activities":[{
        "id":190445,
        "title":"Sales Myths"
      },
      {
        "id":190447,
        "title":"Top Behaviors"
      },
      {
        "id":190446,
        "title":"To Sell is Human"
      },
      {
        "id":190448,
        "title":"Why Sales?"
      },
      {
        "id":190443,
        "title":"Conclusion"
      },
      {
        "id":190444,
        "title":"Previous Experience"
      }]
    }]
  },
  {
    "id":17851,
    "name":"The Science of Golf",
    "description":"Uncover the science, technology, engineering, and mathematics behind the game of golf.",
    "thumb_url":"https://my.currikistudio.org/api/storage/projects/647851b88d79a.jpeg",
    "playlists":[{
      "id":37694,
      "title":"Enter OnCore",
      "activities":[{
        "id":190436,
        "title":"OnCore Buffalo - This ONE is FORE Buffalo"
      },
      {
        "id":190435,
        "title":"Example"
      }]
    },
    {
      "id":37695,
      "title":"The Engineering & Design of Golf Balls",
      "activities":[{
        "id":190439,
        "title":"Physics and Golf Balls"
      },
      {
        "id":190442,
        "title":"Understanding Gear Effect | Equipment and Tech | 18Birdies"
      },
      {
        "id":190441,
        "title":"The Evolution of the Golf Ball"
      },
      {
        "id":190437,
        "title":"Labeling Golf Ball - Principles of Physics"
      },
      {
        "id":190438,
        "title":"Physics Vocabulary Study Guide"
      },
      {
        "id":190440,
        "title":"Science of Golf: Why Balls Have Dimples"
      }]
    }]
  },
  {
    "id":17859,
    "name":"AIG Women's Open",
    "description":"Explore more about the AIG Women's Open, the most international major in women's golf | To be played in 2021 from August 19-22 at Carnoustie.",
    "thumb_url":"https://my.currikistudio.org/api/storage/projects/647857024641d.png",
    "playlists":[{
      "id":37717,
      "title":"AIG Women's Open",
      "activities":[{
        "id":190543,
        "title":"The AIG Women\u2019s Open | Drive Forward Together"
      },
      {
        "id":190542,
        "title":"Heroes of the AIG Women's Open"
      },
      {
        "id":190544,
        "title":"The AIG Women\u2019s Open | Quotes"
      }]
    },
    {
      "id":37718,
      "title":"Carnoustie Course Guide",
      "activities":[{
        "id":190547,
        "title":"History of Carnoustie Golf Links"
      },
      {
        "id":190546,
        "title":"Carnoustie Course Information"
      },
      {
        "id":190548,
        "title":"What the Pros Say"
      },
      {
        "id":190545,
        "title":"Carnoustie Course Guide"
      }]
    },
    {
      "id":37719,
      "title":"Women's Golf Basics",
      "activities":[{
        "id":190549,
        "title":"5 Women\u2019s Golf Tips For Beginners"
      },
      {
        "id":190550,
        "title":"A History of Women\u2019s Golf Fashion"
      },
      {
        "id":190551,
        "title":"Golf Lingo for Beginners"
      }]
    }]
  },
  {
    "id":17856,
    "name":"US Capitol Historical Society",
    "description":"The United States Capitol Historical Society is a nonprofit and nonpartisan educational organization created in 1962 to promote the history of the Capitol and Congress. USCHS serves as an informational and educational resource for its members and the general public.",
    "thumb_url":"https://my.currikistudio.org/api/storage/projects/6478540472214.png",
    "playlists":[{
      "id":37707,
      "title":"Capitol Stories: Women and the Capitol",
      "activities":[{
        "id":190510,
        "title":"She Raised Her Voice Alone - Story with Guiding Questions"
      },
      {
        "id":190509,
        "title":"She Raised Her Voice Alone - Interactive Video"
      },
      {
        "id":190508,
        "title":"She Raised Her Voice Alone - Flashcards"
      },
      {
        "id":190511,
        "title":"She Raised Her Voice Alone - Word Find"
      }]
    },
    {
      "id":37708,
      "title":"From Freedom's Shadow: African Americans & The United States Capitol",
      "activities":[{
        "id":190517,
        "title":"Primary Source Analysis: Capitol Labor Receipts"
      },
      {
        "id":190514,
        "title":"African Americans & The United States Capitol Timeline"
      },
      {
        "id":190515,
        "title":"African Americans & the Capitol: Historical Figures"
      },
      {
        "id":190512,
        "title":"African Americans & The U.S. Capitol: Historical Figures"
      },
      {
        "id":190513,
        "title":"African Americans & The U.S. Capitol: The Statue of Freedom"
      },
      {
        "id":190518,
        "title":"Primary Source Analysis: Capitol Labor Vouchers"
      },
      {
        "id":190516,
        "title":"Political Cartoon Analysis"
      },
      {
        "id":190519,
        "title":"Primary Source Analysis: Journal Activity"
      }]
    }]
  },
  {
    "id":17854,
    "name":"Youth Entrepreneurs",
    "description":"YE Academy is powered by Youth Entrepreneurs. YE exists to inspire a better future, equipping young people with the values and vision they need to pursue their dreams.",
    "thumb_url":"https://my.currikistudio.org/api/storage/projects/6478524355749.png",
    "playlists":[{
      "id":37698,
      "title":"Value: Be Principaled (Resources)",
      "activities":[{
        "id":190461,
        "title":"Speak Out Cards Guide"
      },
      {
        "id":190458,
        "title":"Speak Out Cards Activity (Easy)"
      },
      {
        "id":190460,
        "title":"Speak Out Cards Activity (Medium)"
      },
      {
        "id":190459,
        "title":"Speak Out Cards Activity (Hard)"
      },
      {
        "id":190462,
        "title":"The Codec"
      },
      {
        "id":190456,
        "title":"Business Model Canvas"
      },
      {
        "id":190457,
        "title":"Business Model Canvas Activity"
      }]
    },
    {
      "id":37699,
      "title":"Value: Be Principled (1 hour or more)",
      "activities":[{
        "id":190465,
        "title":"Greed with John Stossel Part 1"
      },
      {
        "id":190466,
        "title":"I, Pencil: The Movie"
      },
      {
        "id":190463,
        "title":"Activity: Foundational Values Face-Off"
      },
      {
        "id":190464,
        "title":"Activity: Hershey's Market Research"
      },
      {
        "id":190467,
        "title":"Subscription Box Design Project Packet"
      },
      {
        "id":190468,
        "title":"The Footwear Design Project Packet"
      }]
    },
    {
      "id":37700,
      "title":"Value: Be Principled (less than 1 hour)",
      "activities":[{
        "id":190472,
        "title":"Alphabet Soup"
      },
      {
        "id":190469,
        "title":"Activity: Eye Spy"
      },
      {
        "id":190473,
        "title":"FV Interviews"
      },
      {
        "id":190471,
        "title":"Activity: Pitch It Round 1"
      },
      {
        "id":190470,
        "title":"Activity: One Red Paperclip"
      }]
    },
    {
      "id":37701,
      "title":"Value: Be Principled Teacher Instructions",
      "activities":[{
        "id":190474,
        "title":"Alphabet Soup Guide"
      },
      {
        "id":190475,
        "title":"Eye Spy Guide"
      },
      {
        "id":190476,
        "title":"FV Interviews GuideI"
      },
      {
        "id":190482,
        "title":"Pitch It Guide"
      },
      {
        "id":190481,
        "title":"One Red Paperclip Guide"
      },
      {
        "id":190480,
        "title":"John Stossel's \"Greed\" Guide"
      },
      {
        "id":190479,
        "title":"I, Pencil Guide"
      },
      {
        "id":190477,
        "title":"Foundational Values Face-Off Guide"
      },
      {
        "id":190478,
        "title":"Hershey's Market Research Guide"
      },
      {
        "id":190484,
        "title":"The Subscription Box Design Project Guide"
      },
      {
        "id":190483,
        "title":"The Footwear Design Project Guide"
      }]
    }]
  }];
  
  let projects2 = [
  {
    "id":17855,
    "name":"Math",
    "description":"In this project you will find math activity samples for Grade 3, Grade 4, and Grade 6.",
    "thumb_url":"https://my.currikistudio.org/api/storage/projects/647852507f3de.png",
    "playlists":[{
      "id":37702,
      "title":"Grade 1: Math Resources",
      "activities":[{
        "id":190485,
        "title":"Grade 1: Place Value Practice"
      }]
    },
    {
      "id":37703,
      "title":"Grade 3: Math Resources",
      "activities":[{
        "id":190487,
        "title":"Grade 3: Math Polygons"
      },
      {
        "id":190488,
        "title":"Grade 3: Multiplication Fact Practice"
      },
      {
        "id":190486,
        "title":"Grade 3: Justifying Area by using Multiplication"
      }]
    },
    {
      "id":37704,
      "title":"Grade 4: Math Resources",
      "activities":[{
        "id":190491,
        "title":"Angles and Degrees Interactive Video"
      },
      {
        "id":190492,
        "title":"Angles and Degrees: Column Layout & Activity Sampler"
      },
      {
        "id":190495,
        "title":"Place Value and Data Review"
      },
      {
        "id":190494,
        "title":"Graphing Review"
      },
      {
        "id":190493,
        "title":"Decimal Place Value"
      },
      {
        "id":190489,
        "title":"4 digit by 1 digit Multiplication Review"
      },
      {
        "id":190490,
        "title":"Addition and Subtraction Review"
      }]
    },
    {
      "id":37705,
      "title":"Grade 6: Math Resources",
      "activities":[{
        "id":190498,
        "title":"Algebraic Expression: Translating Expressions"
      },
      {
        "id":190500,
        "title":"Geometry: Area of Triangles"
      },
      {
        "id":190497,
        "title":"Algebra: One Step Equations with Fractions"
      },
      {
        "id":190501,
        "title":"Proportional Reasoning: Ratios"
      },
      {
        "id":190496,
        "title":"Algebra: One Step Equations"
      },
      {
        "id":190499,
        "title":"Fractions: Equivalent Fractions & Decimals"
      }]
    },
    {
      "id":37706,
      "title":"Math Lesson Template",
      "activities":[{
        "id":190502,
        "title":"Lesson 1 - Agenda"
      },
      {
        "id":190507,
        "title":"Lesson 1 - Warm Up"
      },
      {
        "id":190505,
        "title":"Lesson 1 - Introduction to Ratios"
      },
      {
        "id":190503,
        "title":"Lesson 1 - Check for Understanding: Ratio Match"
      },
      {
        "id":190504,
        "title":"Lesson 1 - Differentiated Practice"
      },
      {
        "id":190506,
        "title":"Lesson 1 - Introduction to Ratios-COPY"
      }]
    }]
  },
  {
    "id":17858,
    "name":"Learning Heroes",
    "description":"According to our national research,",
    "thumb_url":"https://my.currikistudio.org/api/storage/projects/647855931779c.png",
    "playlists":[{
      "id":37715,
      "title":"Grade 4: Reading Resources",
      "activities":[{
        "id":190531,
        "title":"Ideas & Details: Book Study, Our Great Big Backyard"
      },
      {
        "id":190533,
        "title":"Word Knowledge: Storyline Online, Here Comes the Garbage Barge"
      },
      {
        "id":190532,
        "title":"Word Knowledge: Martha Speaks, Dog Fight"
      }]
    },
    {
      "id":37716,
      "title":"Grade 6: Math Resources",
      "activities":[{
        "id":190536,
        "title":"Algebraic Expression: Translating Expressions"
      },{
        "id":190537,
        "title":"Fractions: Equivalent Fractions & Decimals"
      },{
        "id":190534,
        "title":"Algebra: One Step Equations"
      },{
        "id":190535,
        "title":"Algebra: One Step Equations with Fractions"
      },{
        "id":190539,
        "title":"Geometry: Area of Triangles"
      },{
        "id":190541,
        "title":"Summarizing Data: Mean, Median, Mode, & Range"
      },{
        "id":190540,
        "title":"Proportional Reasoning: Ratios"
      },{
        "id":190538,
        "title":"GEMS Sample"
      }]
    }]
  },
  {
    "id":17853,
    "name":"Science",
    "description":"Review the phases of mitosis with this activity variety pack.",
    "thumb_url":"https://my.currikistudio.org/api/storage/projects/647851fc18c07.jpg",
    "playlists":[{
      "id":37697,
      "title":"Activity Templates: Cells and Mitosis",
      "activities":[{
        "id":190450,
        "title":"Drag and Drop"
      },{
        "id":190449,
        "title":"Drag Text"
      },{
        "id":190451,
        "title":"Fill in the Blanks"
      },{
        "id":190454,
        "title":"Image Sequencing"
      },{
        "id":190452,
        "title":"Flashcards"
      },{
        "id":190453,
        "title":"Guess the Answer"
      },{
        "id":190455,
        "title":"Memory Game"
      }]
    }]
  },
  {
    "id":17857,
    "name":"Civicate Drafts",
    "description":"Civicate.org provides 14 short civic education videos and other resources targeted to middle school students or anyone who learns better through bite-sized (3-5 minute) videos.",
    "thumb_url":"https://my.currikistudio.org/api/storage/projects/647854bbdbf28.png",
    "playlists":[{
      "id":37709,
      "title":"Old Drafts",
      "activities":[{
        "id":190521,
        "title":"Additional Resource: Bill of Rights - Fill in the Blanks"
      },{
        "id":190520,
        "title":"Additional Resource: Bill of Rights - Drag Text"
      },{
        "id":190524,
        "title":"Interactive Video with Custom Activities on Web Page"
      },{
        "id":190523,
        "title":"Additional Resource: Constitution - Word Search"
      },{
        "id":190522,
        "title":"Additional Resource: Constitution - Assessment"
      },{
        "id":190525,
        "title":"The Constitution of the United States - Interactive Video with Additional ?s"
      },{
        "id":190526,
        "title":"The Three Branches Interactive Video"
      }]
    },{
      "id":37710,
      "title":"Separation of Powers & Checks & Balances",
      "activities":[]
    },{
      "id":37711,
      "title":"State & Local Governments",
      "activities":[]
    },{
      "id":37712,
      "title":"The U.S. Constitution",
      "activities":[{
        "id":190529,
        "title":"The Constitution of the United States - Interactive Video"
      },{
        "id":190528,
        "title":"The Constitution of the United States - Basic Activities"
      },{
        "id":190530,
        "title":"The Constitution of the United States - Word Search"
      },{
        "id":190527,
        "title":"Additional Resource - Bill of Rights"
      }]
    },{
      "id":37713,
      "title":"Three Branches",
      "activities":[]
    },{
      "id":37714,
      "title":"Voting and Elections",
      "activities":[]
    }]
  },
  {
    "id":707,
    "name":"The Branch Alliance for Educator Diversity",
    "description":"The Branch Alliance for Educator Diversity, BranchED, is the only non-profit organization in the country dedicated to strengthening, growing, and amplifying the impact of educator preparation at Minority Serving Institutions, with the longer-range goals of both diversifying the teaching profession and intentionally addressing critical issues of educational equity for all students. Their vision is for all students to have access to diverse, highly effective educators.",
    "thumb_url":"https://my.currikistudio.org/api/storage/uploads_tmp/JxQltAmvr1YkkYzOFFxqPDk5dozD3Mr9IJ8usKnY.png",
    "playlists":[{
      "id":1630,
      "title":"BranchED 6 Design Principles",
      "activities":[{
        "id":7360,
        "title":"Framework for the Quality Preparation of Educators"
      }]
    },{
      "id":1631,
      "title":"Principle 5: Inclusive Pedagogy",
      "activities":[{
        "id":7363,
        "title":"What is Inclusive Pedagogy?"
      },{
        "id":7365,
        "title":"Funds of Knowledge and Community Cultural Wealth Article"
      },{
        "id":7364,
        "title":"Inclusive Pedagogy: Community Cultural Wealth"
      },{
        "id":7362,
        "title":"Inclusive Pedagogy: Indicators"
      },{
        "id":7361,
        "title":"Inclusive Pedagogy: Vocabulary"
      },{
        "id":7366,
        "title":"Inclusive Pedagogy: Lesson Activity as Documentation Tool"
      }]
    },{
      "id":1632,
      "title":"Principle 1: Community of Learners",
      "activities":[]
    },{
      "id":1633,
      "title":"Principle 2: Data Empowered",
      "activities":[]
    },{
      "id":1634,
      "title":"Principle 3: Intersectional Content",
      "activities":[]
    },{
      "id":1635,
      "title":"Principle 4: Practice-Based",
      "activities":[]
    },{
      "id":1636,
      "title":"Principle 6: Equitable Experiences",
      "activities":[]
    }]
  }];

let projectsData = [
   {
      "general":{
         "id":706,
         "price": 0,
         "sharedLink":"https://my.currikistudio.org/project/706/shared",
         "thumb_url":"https://my.currikistudio.org/api/storage/uploads_tmp/cXbEDItaRMfCr4pGYXrsbobln2En3gzC6Ht8SJYS.png",
         "title":"Our Great Big Backyard",
         "description":"#1 New York Times bestselling authors former First Lady Laura Bush and her daughter Jenna Bush Hager have created an exuberant picture book tribute to our national parks and the importance and fun of connecting with nature.",
         "keywords":"c2e,geography",
	 "visible": 1, "c2e_url":""
      },
      "author":{
         "name":"Caroline Benoist",
         "email":"info@curriki.org",
         "url":"https://c2e.curriki.org"
      },
      "publisher":{
         "name":"Curriki Reference Implementation",
         "email":"info@curriki.org",
         "url":"https://www.currikistudio.org"
      },
      "lifecycle":{
         "version":"0.1",
         "releaseStatus":"Beta"
      },
      "copyright":{
         "copyrightNotice":"This C2E has all rights to Curriki",
         "CopyrihghtYear":"2023",
         "Price":"$150 per Year per 1000 seats"
      },
      "license":{
         "licenseNumber":"c2e-lsc-cs-706-Our-Great-Big-Backyard",
         "licensedate":"2023-01-01",
         "Usage":"Reuse allowed",
         "format":"offline, online"
      },
      "playlists":[
         {
            "id":1627,
            "title":"Our Great Big Backyard Activities",
            "project_id":706,
            "created_at":null,
            "updated_at":"2023-05-31T16:06:39.000000Z",
            "activities":[
               {
                  "id":7348,
                  "title":"Read Aloud Activity",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/jGobqFV7vdqrQJclliiTufFLGnxAX5iiI4wBgczq.png",
                  "library_name":"H5P.InteractiveVideo 1.21"
               },
               {
                  "id":7349,
                  "title":"Choose Your Adventure",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/3d4SnsXP9w0DKYKQahL9WQHuYM7SyJh3KIQoqvHM.png",
                  "library_name":"H5P.BranchingScenario 1.1"
               },
               {
                  "id":7356,
                  "title":"Exploring National Parks",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/nbQTPPSFnjevAumGKldVRzhPNXEqPldRlelqEIXE.png",
                  "library_name":"H5P.ImageHotspots 1.8",
                  "royalty":{
                     "royaltyNumber":"NationalGeograohic-c2e-000345",
                     "royaltyContentTitle":"Exploring Our Natinal Parks",
                     "agreementDate":"01/01/2022",
                     "status":"Active",
                     "mediaType": "video",
                     "publisherRights":"Personal",
                     "licenseExpirationDate":"01/01/2025",
                     "publisherName":"National Geographic",
                     "publisherURL":"https://www.youtube.com/watch?v=CtbWdpFqLyI",
                     "publisherTerms":"$10/year Unlimited"
                  }
               },
               {
                  "id":7350,
                  "title":"Post Card Activity",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/JEyJqCSRFaxwIRKQeDw3K3mdRJaxlvFKEGks3rCK.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":7357,
                  "title":"Packing List for Camping",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/N7rPgGJjYC6At31Qu77Fx8yFsmelSBOl04Q0OjYb.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               }
            ]
         },
         {
            "id":1628,
            "title":"Vocabulary Practice",
            "project_id":706,
            "created_at":null,
            "updated_at":"2023-05-31T16:06:39.000000Z",
            "activities":[
               {
                  "id":7351,
                  "title":"Our Great Big Backyard - Vocabulary Flashcards",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/wHuCb51mvwVoHCUVK6ka9m5UqycYsiPKuNOJpkR2.png",
                  "library_name":"H5P.Flashcards 1.5"
               },
               {
                  "id":7353,
                  "title":"Our Great Big Backyard - Vocabulary Flashcards",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/tCoSIrCHvGPeGtGPM1LVlvCOYWfTpnCNXhoDOrQ7.png",
                  "library_name":"H5P.ImageSequencing 1.1"
               },
               {
                  "id":7352,
                  "title":"Word Find",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/AHwTCB2g4vRYwMBnkLGtxkGYCrH2EteOn6xXWbxe.png",
                  "library_name":"H5P.FindTheWords 1.4"
               }
            ]
         },
         {
            "id":1629,
            "title":"Additional Activity Ideas",
            "project_id":706,
            "created_at":null,
            "updated_at":"2023-05-31T16:06:39.000000Z",
            "activities":[
               {
                  "id":7354,
                  "title":"National Park Symbols",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/IcHWLrVXXYogoJacgBvWN5qNJBKryadD8ZEROfM6.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":7359,
                  "title":"The Grand Canyon",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/t0Cld9Jr4sjzY7pckJ1Cod1jHYFuvAAFG1mbpNJA.png",
                  "library_name":"H5P.ThreeImage 0.3"
               },
               {
                  "id":7358,
                  "title":"The History of the U.S. National Parks",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/inoo5fYYtc3ZErkSxknHWl52V2VXVuHjyT7wsUTs.png",
                  "library_name":"H5P.Timeline 1.1"
               },
               {
                  "id":7355,
                  "title":"National Park Word Find",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/isApPdJo3L8P4R1jH9pxKHt3jjdtkH0nJiD4W0ps.png",
                  "library_name":"H5P.FindTheWords 1.4"
               }
            ]
         }
      ]
   },
   {
      "general":{
         "id":716,
         "price": 1,
         "sharedLink":"https://my.currikistudio.org/project/716/shared",
         "thumb_url":"https://my.currikistudio.org/api/storage/uploads/7MxoHL2pqmjcpif7cg0dfPFodeXZ64U65qfV0AdE.png",
         "title":"US Capitol Historical Society",
         "description":"The United States Capitol Historical Society is a nonprofit and nonpartisan educational organization created in 1962 to promote the history of the Capitol and Congress. USCHS serves as an informational and educational resource for its members and the general public.",
         "keywords":"c2e,history",
	 "visible": 1, "c2e_url":"https://c2e-bucket.s3.us-east-2.amazonaws.com/c2eid-716-us-captial-mike%40curriki.org.zip"
      },
      "author":{
         "name":"Caroline Benoist",
         "email":"info@curriki.org",
         "url":"https://c2e.curriki.org"
      },
      "publisher":{
         "name":"Curriki Reference Implementation",
         "email":"info@curriki.org",
         "url":"https://www.currikistudio.org"
      },
      "lifecycle":{
         "version":"0.1",
         "releaseStatus":"Beta"
      },
      "copyright":{
         "copyrightNotice":"This C2E has all rights to Curriki",
         "CopyrihghtYear":"2023",
         "Price":"$150 per Year per 1000 seats"
      },
      "license":{
         "licenseNumber":"c2e-lsc-cs-716-US-Capitol-Historical-Society",
         "licensedate":"2023-01-01",
         "Usage":"Reuse allowed",
         "format":"offline, online"
      },
      "playlists":[
         {
            "id":1652,
            "title":"From Freedom's Shadow: African Americans & The United States Capitol",
            "project_id":716,
            "created_at":null,
            "updated_at":"2020-10-07T13:36:45.000000Z",
            "activities":[
               {
                  "id":22578,
                  "title":"Primary Source Analysis: Capitol Labor Receipts",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/TMpDm4IQKf4dqRJeXdRNVHvp8dJyeKaJtUdcBClW.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":7421,
                  "title":"African Americans & The United States Capitol Timeline",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/eJqpEHuiToTUISvYujBrYhWmJTWNbDqKJk9QWG71.png",
                  "library_name":"H5P.Timeline 1.1"
               },
               {
                  "id":22835,
                  "title":"African Americans & the Capitol: Historical Figures",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/UCGqQm4Ywu2tXZu9Sd8ruguiiJ3g0rH5lnqqdSzC.png",
                  "library_name":"H5P.Flashcards 1.5"
               },
               {
                  "id":22834,
                  "title":"African Americans & The U.S. Capitol: Historical Figures",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/kHJvVAwBNlVwrs1N4SnX2WALQYKXrA3Im6uwWmJZ.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":7422,
                  "title":"African Americans & The U.S. Capitol: Historical Figures",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/NkKDaB284WCkMhPKn7yFqTYybCpQrnnbqhYQKDEF.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":7423,
                  "title":"African Americans & The U.S. Capitol: The Statue of Freedom",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/kJtsrJFcS1feCGJ7vJjZrrKik9RHX13yqRRzFlaY.png",
                  "library_name":"H5P.ImageHotspots 1.8"
               },
               {
                  "id":22845,
                  "title":"African Americans & The U.S. Capitol: The Statue of Freedom",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/a0k3yENMEGOFyBCwfqDcGkXPXIlnKwaJ1dolh0h0.png",
                  "library_name":"H5P.InteractiveVideo 1.21"
               },
               {
                  "id":7424,
                  "title":"Primary Source Analysis: Capitol Labor Vouchers",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/LnpVUNRwkTJjRHAIAMtwJUyUUFTmqam8AYaGMNwL.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":22838,
                  "title":"Political Cartoon Analysis",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/2E5KLoF9sylLbxCr9796EXTf57OciLx7q4AqrRLw.png",
                  "library_name":"H5P.Column 1.11",
                  "royalty":{
                     "royaltyNumber":"NationalGeograohic-c2e-000716",
                     "royaltyContentTitle":"Political Cartoons",
                     "agreementDate":"01/01/2022",
                     "status":"Active",
                     "mediaType": "video",
                     "publisherRights":"Personal",
                     "licenseExpirationDate":"01/01/2025",
                     "publisherName":"National Geographic",
                     "publisherURL":"https://www.youtube.com/watch?v=9gryOFpoR_8",
                     "publisherTerms":"$10/year Unlimited"
                  }
               },
               {
                  "id":22585,
                  "title":"Primary Source Analysis: Journal Activity",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/eAgoMAVIsHl188WB179WJIjAuFQZB8AINiHXGtM9.png",
                  "library_name":"H5P.DocumentationTool 1.8"
               }
            ]
         },
         {
            "id":1653,
            "title":"Capitol Stories: Women and the Capitol",
            "project_id":716,
            "created_at":null,
            "updated_at":"2020-10-07T13:36:45.000000Z",
            "activities":[
               {
                  "id":7428,
                  "title":"She Raised Her Voice Alone - Story with Guiding Questions",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/Rv4IZ4Skw0JnRU9kD2sKo8AcEltuzL8cPUkQp5x7.png",
                  "library_name":"H5P.InteractiveBook 1.2"
               },
               {
                  "id":7430,
                  "title":"She Raised Her Voice Alone - Interactive Video",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/hj2C6WMjKfZMqThqUDJqs7UixJWqb8he9EISwb5i.png",
                  "library_name":"H5P.InteractiveVideo 1.21"
               },
               {
                  "id":7427,
                  "title":"She Raised Her Voice Alone - Flashcards",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/XCJax31QjklyrlwxVsMMA9AjTNcfOzlT7fFUnwiv.png",
                  "library_name":"H5P.Flashcards 1.5"
               },
               {
                  "id":7429,
                  "title":"She Raised Her Voice Alone - Word Find",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/uploads/1WjK0xi2SGy3ju6eAhONe3D4KE34fQtlaZnABeSV.png",
                  "library_name":"H5P.FindTheWords 1.4"
               }
            ]
         }
      ]
   },
   {
      "general":{
         "id":6439,
         "price": 2,
         "sharedLink":"https://my.currikistudio.org/project/6439/shared",
         "thumb_url":"https://my.currikistudio.org/api/storage/projects/5f7c98bae0e45.png",
         "title":"Globalization, Robots And You",
         "description":"You have important decisions to make about your educations and career – wouldn’t it be nice if you could better understand the forces of globalization and automation first? What information do you need to gauge salary prospects, the risk of automation, and foreign competition as you compare your options?",
         "keywords":"c2e,science",
	 "visible": 1, "c2e_url":""
      },
      "author":{
         "name":"Caroline Benoist",
         "email":"info@curriki.org",
         "url":"https://c2e.curriki.org"
      },
      "publisher":{
         "name":"Curriki Reference Implementation",
         "email":"info@curriki.org",
         "url":"https://www.currikistudio.org"
      },
      "lifecycle":{
         "version":"0.1",
         "releaseStatus":"Beta"
      },
      "copyright":{
         "copyrightNotice":"This C2E has all rights to Curriki",
         "CopyrihghtYear":"2023",
         "Price":"$150 per Year per 1000 seats"
      },
      "license":{
         "licenseNumber":"c2e-lsc-cs-6439-Globalization-Robots-And-You",
         "licensedate":"2023-01-01",
         "Usage":"Reuse allowed",
         "format":"offline, online"
      },
      "playlists":[
         {
            "id":19665,
            "title":"Avengers and the Story of Globalization",
            "project_id":6439,
            "created_at":"2020-10-06T16:18:02.000000Z",
            "updated_at":"2023-06-01T07:08:30.000000Z",
            "activities":[
               {
                  "id":115477,
                  "title":"Introduction to Avengers: The Story of Globalization",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c98cdbebb2.png",
                  "library_name":"H5P.CoursePresentation 1.21",
                  "royalty":{
                     "royaltyNumber":"NationalGeograohic-c2e-000716",
                     "royaltyContentTitle":"Political Cartoons",
                     "agreementDate":"01/01/2022",
                     "status":"Active",
                     "mediaType": "video",
                     "publisherRights":"Personal",
                     "licenseExpirationDate":"01/01/2025",
                     "publisherName":"National Geographic",
                     "publisherURL":"https://www.youtube.com/watch?v=4Yb0dqu1xnE",
                     "publisherTerms":"$10/year Unlimited"
                  }
               },
               {
                  "id":115478,
                  "title":"Products Around the World",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c98e15e08b.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               },
               {
                  "id":115479,
                  "title":"Ford Global Supply Chain",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c98f3c76f1.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               },
               {
                  "id":115480,
                  "title":"Show What you Know: Nike Manufacturing",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c9907131ac.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               },
               {
                  "id":115481,
                  "title":"Interactive Video - Avengers: The Story of Globalization",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c9913a6e24.png",
                  "library_name":"H5P.InteractiveVideo 1.21"
               },
               {
                  "id":115482,
                  "title":"Show What You Know: Avengers: The Story of Globalization\"",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c99262d958.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               },
               {
                  "id":115483,
                  "title":"Wrap It Up",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c99390ae9c.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               }
            ]
         },
         {
            "id":19666,
            "title":"Creative Destruction",
            "project_id":6439,
            "created_at":"2020-10-06T16:20:09.000000Z",
            "updated_at":"2023-06-01T07:08:30.000000Z",
            "activities":[
               {
                  "id":115484,
                  "title":"Introduction",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c994beae5b.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               },
               {
                  "id":115485,
                  "title":"Click on the picture to learn about these obsolete items.",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c994ce11c7.png",
                  "library_name":"H5P.ImageHotspots 1.8"
               },
               {
                  "id":115486,
                  "title":"Obsolete Object Response",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c995fa3455.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               },
               {
                  "id":115487,
                  "title":"Interactive Video: Creative Destruction",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c996c3e463.png",
                  "library_name":"H5P.InteractiveVideo 1.21"
               },
               {
                  "id":115488,
                  "title":"Trendlines: The Effect of Technology and Trade",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c997f05387.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               },
               {
                  "id":115489,
                  "title":"Wrap It Up",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c9992130ec.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               }
            ]
         },
         {
            "id":19667,
            "title":"The Elephant Graph",
            "project_id":6439,
            "created_at":"2020-10-06T16:21:38.000000Z",
            "updated_at":"2023-06-01T07:08:30.000000Z",
            "activities":[
               {
                  "id":115490,
                  "title":"Introduction",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c99a474cf3.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               },
               {
                  "id":115491,
                  "title":"Interactive Video: Are There Winners and Losers in Globalization?",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c99b0ecfe2.png",
                  "library_name":"H5P.InteractiveVideo 1.21"
               },
               {
                  "id":115492,
                  "title":"Post Video Discussion",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c99c48a450.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               },
               {
                  "id":115493,
                  "title":"Global Profiles: What are the correct groups?",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c99d7d54e4.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               },
               {
                  "id":115494,
                  "title":"Wrap It Up",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c99eb100bd.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               }
            ]
         },
         {
            "id":19668,
            "title":"The Economics of Choosing the Right Career",
            "project_id":6439,
            "created_at":"2020-10-06T16:23:07.000000Z",
            "updated_at":"2023-06-01T07:08:30.000000Z",
            "activities":[
               {
                  "id":115495,
                  "title":"Introduction",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c99fda4fa6.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               },
               {
                  "id":115496,
                  "title":"College Majors and Careers",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c9a106ae3d.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               },
               {
                  "id":115497,
                  "title":"Occupational Outlook",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c9a2380919.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               },
               {
                  "id":115498,
                  "title":"Wrap It Up",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c9a3611f61.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               }
            ]
         },
         {
            "id":19669,
            "title":"How to Navigate a Globalized Economy",
            "project_id":6439,
            "created_at":"2020-10-06T16:24:22.000000Z",
            "updated_at":"2023-06-01T07:08:31.000000Z",
            "activities":[
               {
                  "id":115499,
                  "title":"Introduction",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c9a48838e6.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               },
               {
                  "id":115500,
                  "title":"The Economics of Choosing the Right Career",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c9a5b960d1.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               },
               {
                  "id":115501,
                  "title":"Guidance Counseling Simulation",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c9a72e75c1.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":115503,
                  "title":"Wrap It Up",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f7c9a8567e93.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               }
            ]
         }
      ]
   },
   {
      "general":{
         "id":8910,
         "price": 3,
         "sharedLink":"https://my.currikistudio.org/project/8910/shared",
         "thumb_url":"https://my.currikistudio.org/api/storage/projects/5f9ae28b16a3d.png",
         "title":"Math Samples",
         "description":"In this project you will find math activity samples for Grade 3, Grade 4, and Grade 6.",
         "keywords":"c2e,entrepreneurship",
	 "visible": 1, "c2e_url":""
      },
      "author":{
         "name":"Caroline Benoist",
         "email":"info@curriki.org",
         "url":"https://c2e.curriki.org"
      },
      "publisher":{
         "name":"Curriki Reference Implementation",
         "email":"info@curriki.org",
         "url":"https://www.currikistudio.org"
      },
      "lifecycle":{
         "version":"0.1",
         "releaseStatus":"Beta"
      },
      "copyright":{
         "copyrightNotice":"This C2E has all rights to Curriki",
         "CopyrihghtYear":"2023",
         "Price":"$150 per Year per 1000 seats"
      },
      "license":{
         "licenseNumber":"c2e-lsc-cs-8910-Math-Samples",
         "licensedate":"2023-01-01",
         "Usage":"Reuse allowed",
         "format":"offline, online"
      },
      "playlists":[
         {
            "id":27574,
            "title":"Math Lesson Template",
            "project_id":8910,
            "created_at":"2020-10-29T15:40:59.000000Z",
            "updated_at":"2023-06-12T15:39:10.000000Z",
            "activities":[
               {
                  "id":163647,
                  "title":"Lesson 1 - Agenda",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28b4187c.png",
                  "library_name":"H5P.CoursePresentation 1.21"
               },
               {
                  "id":163651,
                  "title":"Lesson 1 - Warm Up",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28bdf74a.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":163648,
                  "title":"Lesson 1 - Introduction to Ratios",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28b5d12c.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":163649,
                  "title":"Lesson 1 - Check for Understanding: Ratio Match",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28b6ff90.png",
                  "library_name":"H5P.ImagePair 1.4"
               },
               {
                  "id":163650,
                  "title":"Lesson 1 - Differentiated Practice",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28bc2b50.png",
                  "library_name":"H5P.BranchingScenario 1.1"
               },
               {
                  "id":182037,
                  "title":"Lesson 1 - Introduction to Ratios-COPY",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/61ddddae52930.png",
                  "library_name":"H5P.InteractiveVideo 1.21"
               }
            ]
         },
         {
            "id":27577,
            "title":"Grades 1-3",
            "project_id":8910,
            "created_at":"2020-10-29T15:41:00.000000Z",
            "updated_at":"2023-06-12T15:39:10.000000Z",
            "activities":[
               {
                  "id":163658,
                  "title":"Grade 1: Place Value Practice",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28cd3d73.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":163659,
                  "title":"Grade 3: Math Polygons",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28ced72b.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":163660,
                  "title":"Grade 3: Multiplication Fact Practice",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28d057ac.png",
                  "library_name":"H5P.ArithmeticQuiz 1.1"
               },
               {
                  "id":163661,
                  "title":"Grade 3: Justifying Area by using Multiplication",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28d149c3.png",
                  "library_name":"H5P.Column 1.11"
               }
            ]
         },
         {
            "id":27578,
            "title":"Grades 4 - 6",
            "project_id":8910,
            "created_at":"2020-10-29T15:41:01.000000Z",
            "updated_at":"2023-06-12T15:39:10.000000Z",
            "activities":[
               {
                  "id":163662,
                  "title":"Angles and Degrees Interactive Video",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28d36836.png",
                  "library_name":"H5P.InteractiveVideo 1.21"
               },
               {
                  "id":163663,
                  "title":"Angles and Degrees: Column Layout & Activity Sampler",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28d45bd6.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":163664,
                  "title":"Place Value and Data Review",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28d7391a.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":163665,
                  "title":"Graphing Review",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28d90892.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":163666,
                  "title":"Decimal Place Value",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28da066e.png",
                  "library_name":"H5P.InteractiveVideo 1.21"
               },
               {
                  "id":163667,
                  "title":"4 digit by 1 digit Multiplication Review",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28db262e.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":163668,
                  "title":"Addition and Subtraction Review",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28dc5269.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":163652,
                  "title":"Algebraic Expression: Translating Expressions",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28c17d22.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":163653,
                  "title":"Geometry: Area of Triangles",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28c314f2.png",
                  "library_name":"H5P.CurrikiMathColumn 1.0"
               },
               {
                  "id":163654,
                  "title":"Algebra: One Step Equations with Fractions",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28c3df9a.png",
                  "library_name":"H5P.ArithmeticQuiz 1.1"
               },
               {
                  "id":163655,
                  "title":"Proportional Reasoning: Ratios",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28c8ab8e.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":163656,
                  "title":"Algebra: One Step Equations",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28c97e41.png",
                  "library_name":"H5P.ArithmeticQuiz 1.1"
               },
               {
                  "id":163657,
                  "title":"Fractions: Equivalent Fractions & Decimals",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae28cbb8c4.png",
                  "library_name":"H5P.Column 1.11"
               }
            ]
         }
      ]
   },
   {
      "general":{
         "id":8911,
         "price": 4,
         "sharedLink":"https://my.currikistudio.org/project/8911/shared",
         "thumb_url":"https://my.currikistudio.org/api/storage/projects/5f9ae69f205ed.png",
         "title":"ELA Samples",
         "description":"In this project you will find sample activities for Grade 3 and Grade 4.",
         "keywords":"c2e,ela",
	 "visible": 1, "c2e_url":""
      },
      "author":{
         "name":"Caroline Benoist",
         "email":"info@curriki.org",
         "url":"https://c2e.curriki.org"
      },
      "publisher":{
         "name":"Curriki Reference Implementation",
         "email":"info@curriki.org",
         "url":"https://www.currikistudio.org"
      },
      "lifecycle":{
         "version":"0.1",
         "releaseStatus":"Beta"
      },
      "copyright":{
         "copyrightNotice":"This C2E has all rights to Curriki",
         "CopyrihghtYear":"2023",
         "Price":"$150 per Year per 1000 seats"
      },
      "license":{
         "licenseNumber":"c2e-lsc-cs-8911-ELA-Samples",
         "licensedate":"2023-01-01",
         "Usage":"Reuse allowed",
         "format":"offline, online"
      },
      "playlists":[
         {
            "id":27580,
            "title":"Quick Writes",
            "project_id":8911,
            "created_at":"2020-10-29T15:58:25.000000Z",
            "updated_at":"2020-11-11T14:18:08.000000Z",
            "activities":[
               {
                  "id":163680,
                  "title":"Quick Write: Topic #1",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae6a15e471.png",
                  "library_name":"H5P.Essay 1.2"
               },
               {
                  "id":163681,
                  "title":"Quick Write: Topic #2",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae6a16c194.png",
                  "library_name":"H5P.Essay 1.2"
               }
            ]
         },
         {
            "id":27581,
            "title":"Grade 4: Reading Resources",
            "project_id":8911,
            "created_at":"2020-10-29T15:58:25.000000Z",
            "updated_at":"2020-11-11T14:18:08.000000Z",
            "activities":[
               {
                  "id":163682,
                  "title":"Ideas & Details: Book Study, Our Great Big Backyard",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae6a1c1ff7.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":163683,
                  "title":"Word Knowledge: Storyline Online, Here Comes the Garbage Barge",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae6a1d6415.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":163684,
                  "title":"Word Knowledge: Martha Speaks, Dog Fight",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae6a5eb81c.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":163685,
                  "title":"The Tiger Rising: Chapters 9 and 10",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae6a6076a4.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               }
            ]
         },
         {
            "id":27582,
            "title":"Grade 3: Reading Resources",
            "project_id":8911,
            "created_at":"2020-10-29T15:58:30.000000Z",
            "updated_at":"2020-11-11T14:18:08.000000Z",
            "activities":[
               {
                  "id":163686,
                  "title":"Grade 3: Spelling List #1",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae6a62128b.png",
                  "library_name":"H5P.QuestionSet 1.17"
               },
               {
                  "id":163687,
                  "title":"Grade 3: Text Structures",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae6a64acb0.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":163688,
                  "title":"Grade 3: Fry's 100 Word List",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae6a65de2e.png",
                  "library_name":"H5P.FindTheWords 1.4"
               },
               {
                  "id":163689,
                  "title":"Grade 3: Reading Vocabulary",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae6a67ff85.png",
                  "library_name":"H5P.Flashcards 1.5"
               },
               {
                  "id":163690,
                  "title":"Grade 3: Read Aloud Example",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9ae6a6a6a2d.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               }
            ]
         }
      ]
   },
   {
      "general":{
         "id":8915,
         "price": 5,
         "sharedLink":"https://my.currikistudio.org/project/8915/shared",
         "thumb_url":"https://my.currikistudio.org/api/storage/projects/aEcU4DcmlUyp4xYYR3802P8yYcDZZI04viiCoqgq.jpg",
         "title":"Phases of Mitosis",
         "description":"Review the phases of mitosis with this activity variety pack.",
         "keywords":"c2e,biology",
	 "visible": 1, "c2e_url":""
      },
      "author":{
         "name":"Caroline Benoist",
         "email":"info@curriki.org",
         "url":"https://c2e.curriki.org"
      },
      "publisher":{
         "name":"Curriki Reference Implementation",
         "email":"info@curriki.org",
         "url":"https://www.currikistudio.org"
      },
      "lifecycle":{
         "version":"0.1",
         "releaseStatus":"Beta"
      },
      "copyright":{
         "copyrightNotice":"This C2E has all rights to Curriki",
         "CopyrihghtYear":"2023",
         "Price":"$150 per Year per 1000 seats"
      },
      "license":{
         "licenseNumber":"c2e-lsc-cs-8915-Phases-of-Mitosis",
         "licensedate":"2023-01-01",
         "Usage":"Reuse allowed",
         "format":"offline, online"
      },
      "playlists":[
         {
            "id":27588,
            "title":"Activity Templates: Cells and Mitosis",
            "project_id":8915,
            "created_at":"2020-10-29T18:37:35.000000Z",
            "updated_at":"2023-05-31T16:39:24.000000Z",
            "activities":[
               {
                  "id":190219,
                  "title":"Drag and Drop",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/6477772a28fce.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":163715,
                  "title":"Drag Text",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9b0bef5dd07.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":190220,
                  "title":"Fill in the Blanks",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/6477776f0451c.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":163716,
                  "title":"Fill in the Blanks",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9b0bef69faf.png",
                  "library_name":"H5P.Blanks 1.12"
               },
               {
                  "id":163718,
                  "title":"Image Sequencing",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9b0bef9f0fb.png",
                  "library_name":"H5P.ImageSequencing 1.1"
               },
               {
                  "id":163719,
                  "title":"Flashcards",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/5f9b0befaebd1.png",
                  "library_name":"H5P.Flashcards 1.5"
               },
               {
                  "id":190221,
                  "title":"Guess the Answer",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/647777b720979.png",
                  "library_name":"H5P.Column 1.11"
               },
               {
                  "id":190222,
                  "title":"Memory Game",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/64777826bf4b6.png",
                  "library_name":"H5P.Column 1.11"
               }
            ]
         }
      ]
   },
   {
      "general":{
         "id":17175,
         "price": 6,
         "sharedLink":"https://my.currikistudio.org/project/17175/shared",
         "thumb_url":"https://images.pexels.com/photos/7013907/pexels-photo-7013907.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
         "title":"Area and Surface Area",
         "description":"Variety of activities of Area and Surface Area.",
         "keywords":"c2e,physics",
	 "visible": 1, "c2e_url":""
      },
      "author":{
         "name":"Caroline Benoist",
         "email":"info@curriki.org",
         "url":"https://c2e.curriki.org"
      },
      "publisher":{
         "name":"Curriki Reference Implementation",
         "email":"info@curriki.org",
         "url":"https://www.currikistudio.org"
      },
      "lifecycle":{
         "version":"0.1",
         "releaseStatus":"Beta"
      },
      "copyright":{
         "copyrightNotice":"This C2E has all rights to Curriki",
         "CopyrihghtYear":"2023",
         "Price":"$150 per Year per 1000 seats"
      },
      "license":{
         "licenseNumber":"c2e-lsc-cs-17175-Area-and-Surface-Area",
         "licensedate":"2023-01-01",
         "Usage":"Reuse allowed",
         "format":"offline, online"
      },
      "playlists":[
         {
            "id":36504,
            "title":"Reasoning to find Area",
            "project_id":17175,
            "created_at":"2022-09-23T14:34:00.000000Z",
            "updated_at":"2022-09-23T14:34:00.000000Z",
            "activities":[
               {
                  "id":186152,
                  "title":"More Red, Green, or Blue?",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d86cbbc.png",
                  "library_name":"H5P.CurrikiMathColumn 1.0"
               },
               {
                  "id":186153,
                  "title":"What is Area?",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d874f53.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186154,
                  "title":"Principles For Finding Area",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d87c0b2.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186155,
                  "title":"Comparing Regions",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d883424.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186156,
                  "title":"On the Grid",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d88ae01.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186157,
                  "title":"Strategies To Find Area",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d89319f.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186158,
                  "title":"Which One Doesn’t Belong: Tilings",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d89aa42.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186159,
                  "title":"Composing Shapes",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d8a1f2c.png",
                  "library_name":"H5P.CurrikiMathColumn 1.0"
               },
               {
                  "id":186160,
                  "title":"Tangram Triangles",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d8a84ec.png",
                  "library_name":"H5P.CurrikiMathColumn 1.0"
               },
               {
                  "id":186161,
                  "title":"Off the Grid",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d8b0219.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186162,
                  "title":"Sample Khan Video",
                  "type":"h5p",
                  "thumb_url":"https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
                  "library_name":"H5P.InteractiveVideo 1.21"
               }
            ]
         },
         {
            "id":36505,
            "title":"Parallelograms",
            "project_id":17175,
            "created_at":"2022-09-23T14:34:00.000000Z",
            "updated_at":"2022-09-23T14:34:00.000000Z",
            "activities":[
               {
                  "id":186163,
                  "title":"Features of a Parallelogram",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d8c565a.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186164,
                  "title":"Area of a Parallelogram",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d8cd8b2.png",
                  "library_name":"H5P.CurrikiMathColumn 1.0"
               },
               {
                  "id":186165,
                  "title":"Lots of Parallelograms",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d8d50ca.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186166,
                  "title":"Lesson 4 Summary",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d8dd53d.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186167,
                  "title":"The Right Height?",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d8e6272.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186168,
                  "title":"Lesson 5 Summary",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d8ecf8c.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186169,
                  "title":"Missing Dots",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d8f390b.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186170,
                  "title":"More Areas of Parallelograms",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d9053d6.png",
                  "library_name":"H5P.CurrikiMathColumn 1.0"
               },
               {
                  "id":186171,
                  "title":"Lesson 6 Summary",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d90c03a.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               }
            ]
         },
         {
            "id":36506,
            "title":"Triangles",
            "project_id":17175,
            "created_at":"2022-09-23T14:34:01.000000Z",
            "updated_at":"2022-09-23T14:34:01.000000Z",
            "activities":[
               {
                  "id":186172,
                  "title":"Same Parallelograms, Different Bases",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d914fa9.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186173,
                  "title":"A Tale of Two Triangles (Part 1)",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d91b261.png",
                  "library_name":"H5P.CurrikiMathColumn 1.0"
               },
               {
                  "id":186174,
                  "title":"A Tale of Two Triangles (Part 2)",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d923dd5.png",
                  "library_name":"H5P.CurrikiMathColumn 1.0"
               },
               {
                  "id":186175,
                  "title":"Lesson 7 Summary",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d92df5a.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186176,
                  "title":"Composing Parallelograms",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d934596.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186177,
                  "title":"More Triangles",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d93b59e.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186178,
                  "title":"Decomposing a Parallelogram",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d94180d.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186179,
                  "title":"Lesson 8 Summary",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d94a9cd.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186180,
                  "title":"Bases and Heights of a Triangle",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d951898.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186181,
                  "title":"Applying the Formula for Area of Triangles",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d95badc.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186182,
                  "title":"Lesson 9 Summary",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d969d7e.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186183,
                  "title":"An Area of 12",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d96fe71.png",
                  "library_name":"H5P.CurrikiMathColumn 1.0"
               },
               {
                  "id":186184,
                  "title":"Hunting for Heights",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d97948a.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186185,
                  "title":"Some Bases Are Better Than Others",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d981e3b.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186186,
                  "title":"Lesson 10 Summary",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d9896aa.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               }
            ]
         },
         {
            "id":36507,
            "title":"Polygons",
            "project_id":17175,
            "created_at":"2022-09-23T14:34:01.000000Z",
            "updated_at":"2022-09-23T14:34:01.000000Z",
            "activities":[
               {
                  "id":186187,
                  "title":"Which One Doesn’t Belong: Bases and Heights",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d991b70.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186188,
                  "title":"What Are Polygons?",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d998662.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186189,
                  "title":"Quadrilateral Strategies",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d9a0c24.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186190,
                  "title":"Pinwheel",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d9a6d9f.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186191,
                  "title":"Lesson 11 Summary",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d9adb5b.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               }
            ]
         },
         {
            "id":36508,
            "title":"Surface Area",
            "project_id":17175,
            "created_at":"2022-09-23T14:34:01.000000Z",
            "updated_at":"2022-09-23T14:34:01.000000Z",
            "activities":[
               {
                  "id":186192,
                  "title":"Covering the Cabinet (Part 1)",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d9c2b00.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186193,
                  "title":"Covering the Cabinet (Part 2)",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d9c793c.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186194,
                  "title":"Building with Snap Cubes",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d9d15fe.png",
                  "library_name":"H5P.CurrikiMathColumn 1.0"
               },
               {
                  "id":186195,
                  "title":"Lesson 12 Summary",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d9d7cd5.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186196,
                  "title":"What are Polyhedra?",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d9dd86a.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186197,
                  "title":"Prisms and Pyramids",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3d9f1a57.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186198,
                  "title":"Lesson 13 Summary",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da0693e.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186199,
                  "title":"Using Nets to Find Surface Area",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da0cf84.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186200,
                  "title":"Lesson 14 Summary",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da17e25.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186201,
                  "title":"Notice and Wonder: Wrapping Paper",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da1e3a8.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186202,
                  "title":"Comparing Boxes",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da263fc.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186203,
                  "title":"Lesson 15 Summary",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da2d4de.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186204,
                  "title":"Building with 8 Cubes",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da33b45.png",
                  "library_name":"H5P.CurrikiMathColumn 1.0"
               },
               {
                  "id":186205,
                  "title":"Comparing Prisms Without Building Them",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da392e3.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186206,
                  "title":"Lesson 16 Summary",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da4468c.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               }
            ]
         },
         {
            "id":36509,
            "title":"Squares and Cubes",
            "project_id":17175,
            "created_at":"2022-09-23T14:34:02.000000Z",
            "updated_at":"2022-09-23T14:34:02.000000Z",
            "activities":[
               {
                  "id":186207,
                  "title":"Perfect Squares",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da4d5f5.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186208,
                  "title":"Building with 32 Cubes",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da5659c.png",
                  "library_name":"H5P.CurrikiMathColumn 1.0"
               },
               {
                  "id":186209,
                  "title":"Perfect Cubes",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da5d8f6.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186210,
                  "title":"Introducing Exponents",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da626b1.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186211,
                  "title":"Lesson 17 Summary",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da6804a.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186212,
                  "title":"Exponent Review",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da6c855.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186213,
                  "title":"The Net of a Cube",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da72272.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186214,
                  "title":"Every Cube in the Whole World",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da7773e.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               },
               {
                  "id":186215,
                  "title":"Lesson 18 Summary",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/632dc3da7fbdc.png",
                  "library_name":"H5P.CoursePresentation 1.22"
               }
            ]
         }
      ]
   },
   {
      "general":{
         "id":17375,
         "price": 7,
         "sharedLink":"https://my.currikistudio.org/project/17375/shared",
         "thumb_url":"https://my.currikistudio.org/api/storage/projects/6398f51c32df1.png",
         "title":"Deju Institute of Entrepreneurial Leadership",
         "description":"This entrepreneurship course is broken down into eight individual modules each covering an important area of your road to becoming a successful entrepreneur. Each module covers the subject with a lecture by Dr. Deju supplemented with video material including the words of many entrepreneurs that have been successful in their ventures and even turned them into multibillion-dollar enterprises we all know today.",
         "keywords":"c2e,entrepreneurship",
	 "visible": 1, "c2e_url":""
      },
      "author":{
         "name":"Caroline Benoist",
         "email":"info@curriki.org",
         "url":"https://c2e.curriki.org"
      },
      "publisher":{
         "name":"Curriki Reference Implementation",
         "email":"info@curriki.org",
         "url":"https://www.currikistudio.org"
      },
      "lifecycle":{
         "version":"0.1",
         "releaseStatus":"Beta"
      },
      "copyright":{
         "copyrightNotice":"This C2E has all rights to Curriki",
         "CopyrihghtYear":"2023",
         "Price":"$150 per Year per 1000 seats"
      },
      "license":{
         "licenseNumber":"c2e-lsc-cs-17375-Deju-Institute-of-Entrepreneurial-Leadership",
         "licensedate":"2023-01-01",
         "Usage":"Reuse allowed",
         "format":"offline, online"
      },
      "playlists":[
         {
            "id":36837,
            "title":"Entrepreneurship Modules",
            "project_id":17375,
            "created_at":"2022-12-13T21:56:44.000000Z",
            "updated_at":"2022-12-13T21:58:02.000000Z",
            "activities":[
               {
                  "id":187569,
                  "title":"Module 1 - Building Your Company: What Matters Now",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/6398f520cf9f7.png",
                  "library_name":"H5P.InteractiveBook 1.2"
               },
               {
                  "id":187574,
                  "title":"Module 2 - A New Company Needs a Blue Ocean Strategy",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/6398f5424ec9e.png",
                  "library_name":"H5P.InteractiveBook 1.2"
               },
               {
                  "id":187570,
                  "title":"Module 3 - Anatomy of a Business Plan: The Step-by-Step Process",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/6398f5244dc15.png",
                  "library_name":"H5P.InteractiveBook 1.2"
               },
               {
                  "id":187571,
                  "title":"Module 4 - Assembling the Management Team",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/6398f52b3761f.png",
                  "library_name":"H5P.InteractiveBook 1.2"
               },
               {
                  "id":187572,
                  "title":"Module 5 - Creating Product Excellence",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/6398f539e359c.png",
                  "library_name":"H5P.InteractiveBook 1.2"
               },
               {
                  "id":187575,
                  "title":"Module 6 - Developing Service Excellence",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/6398f5484e8da.png",
                  "library_name":"H5P.InteractiveBook 1.2"
               },
               {
                  "id":187573,
                  "title":"Module 7  - Developing a Financial Plan",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/6398f53e96a7c.png",
                  "library_name":"H5P.InteractiveBook 1.2"
               },
               {
                  "id":187576,
                  "title":"Module 8 - Securing Debt or Equity",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/6398f54b3ea47.png",
                  "library_name":"H5P.InteractiveBook 1.2"
               }
            ]
         }
      ]
   },
   {
      "general":{
         "id":17849,
         "price": 8,
         "sharedLink":"https://my.currikistudio.org/project/17849/shared",
         "thumb_url":"https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
         "title":"Lessons on the Earth's Core",
         "description":"Lessons on the Earth's Core",
         "keywords":"c2e,geology",
	 "visible": 1, "c2e_url":""
      },
      "author":{
         "name":"Caroline Benoist",
         "email":"info@curriki.org",
         "url":"https://c2e.curriki.org"
      },
      "publisher":{
         "name":"Curriki Reference Implementation",
         "email":"info@curriki.org",
         "url":"https://www.currikistudio.org"
      },
      "lifecycle":{
         "version":"0.1",
         "releaseStatus":"Beta"
      },
      "copyright":{
         "copyrightNotice":"This C2E has all rights to Curriki",
         "CopyrihghtYear":"2023",
         "Price":"$150 per Year per 1000 seats"
      },
      "license":{
         "licenseNumber":"c2e-lsc-cs-17849-Lessons-on-the-Earths-Core",
         "licensedate":"2023-01-01",
         "Usage":"Reuse allowed",
         "format":"offline, online"
      },
      "playlists":[
         {
            "id":37686,
            "title":"Playlist 1",
            "project_id":17849,
            "created_at":"2023-05-31T17:15:19.000000Z",
            "updated_at":"2023-06-12T15:37:20.000000Z",
            "activities":[
               {
                  "id":190420,
                  "title":"Lesson 1",
                  "type":"h5p",
                  "thumb_url":"https://my.currikistudio.org/api/storage/activities/mGUYoN4VDRVSkBvu6e2CpLnKuQfXbIP5efsOciO5.png",
                  "library_name":"H5P.Column 1.13"
               },
               {
                  "id":190421,
                  "title":"Lesson 2",
                  "type":"h5p",
                  "thumb_url":"https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
                  "library_name":"H5P.Column 1.13"
               },
               {
                  "id":190422,
                  "title":"Lesson 3",
                  "type":"h5p",
                  "thumb_url":"https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
                  "library_name":"H5P.Column 1.13"
               },
               {
                  "id":190423,
                  "title":"Lesson 4",
                  "type":"h5p",
                  "thumb_url":"https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
                  "library_name":"H5P.Column 1.13"
               },
               {
                  "id":190424,
                  "title":"Lesson 5",
                  "type":"h5p",
                  "thumb_url":"https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
                  "library_name":"H5P.Column 1.13"
               },
               {
                  "id":190425,
                  "title":"Lesson 6",
                  "type":"h5p",
                  "thumb_url":"https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
                  "library_name":"H5P.InteractiveBook 1.3"
               }
            ]
         }
      ]
   }
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
	return response.json({ listing: listing1 });
  }
  else{
	return response.json({ listing: listing2 });  
  }
});

app.get('/api/v1/c2e/test', (request, response) => {
  	return response.json({ test: 'test' });
  
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

app.get('/api/v1/c2e/builder/sources', (request, response) => {
  const postId = request.query.userId;
  if(postId==1){
	return response.json({ sources: sources1 });
  }
  else{
	return response.json({ sources: sources2 });  
  }
});

app.get('/api/v1/c2e/builder/search', (request, response) => {
  const postId = request.query.userId;
  if(postId==1){
    if (!request.query.query) {
      return response.json({ projects: projects1, activities: activities1});
    }

    return response.json({
      projects: projects1.filter((project) => project.name.includes(request.query.query)),
      activities: activities1.filter((activity) => activity.title.includes(request.query.query)),
    });
  }
  else{
    if (!request.query.query) {
      return response.json({ projects: projects2, activities: activities2});
    }

    return response.json({
      projects: projects2.filter((project) => project.name.includes(request.query.query)),
      activities: activities2.filter((activity) => activity.title.includes(request.query.query)),
    });
  }
});

app.get('/api/v1/c2e/products', async (request, response) => {
  if (!request.query.query) {
    return response.json({ projects: projectsData });
  }

	return response.json({
    projects: projectsData.filter((project) => project.general.title.includes(request.query.query))
  });
});

app.get('/api/v1/c2e/addProducts', (request, response) => {
  if (!request.query.query) {
    return response.json({ projects: projectsData });
  }

	return response.json({
    projects: projectsData.filter((project) => project.general.title.includes(request.query.query))
  });
});

app.post('/api/v1/c2e/encrypt', upload.single('c2e'), function (req, res, next) {
   console.log('Received file for encryption');

   // Unzipping
   var zip = new admzip(req.file.destination+req.file.filename);
   zip.extractAllTo('temp/'+req.file.filename, true);
   const subdir = fs.readdirSync('temp/'+req.file.filename)[0];
   // zip the content
   console.log('zipping content');
   var zip2 = new admzip();
   zip2.addLocalFolder('temp/'+req.file.filename+'/'+subdir+'/'+subdir);
   zip2.writeZip('temp/'+req.file.filename+'/'+subdir+'/'+subdir+'.c2e.temp');
   fs.rmdirSync('temp/'+req.file.filename+'/'+subdir+'/'+subdir, {recursive: true});

   // Ecnrypt the content file

   var cipher = crypto.createCipher('aes-256-cbc', config.encryption_key);
   var input = fs.createReadStream('temp/'+req.file.filename+'/'+subdir+'/'+subdir+'.c2e.temp');
   var output = fs.createWriteStream('temp/'+req.file.filename+'/'+subdir+'/'+subdir+'.c2e');

   input.pipe(cipher).pipe(output);

   output.on('finish', () => {
      console.log('Encrypted file written to disk!');
      fs.unlinkSync('temp/'+req.file.filename+'/'+subdir+'/'+subdir+'.c2e.temp');

      console.log('repackaging...');
      var zip3 = new admzip();
      zip3.addLocalFolder('temp/'+req.file.filename+'/'+subdir, subdir);
      zip3.writeZip('temp/'+req.file.filename+'/'+subdir+'.c2e');

      var file = fs.createReadStream('temp/'+req.file.filename+'/'+subdir+'.c2e');
      file.on('end', () => {
         console.log('file sent');
         fs.rmdirSync('temp/'+req.file.filename+'/'+subdir, {recursive: true});
         fs.unlinkSync('temp/'+req.file.filename+'/'+subdir+'.c2e');
         fs.unlinkSync(req.file.destination+req.file.filename);
         console.log('files cleaned');
      });
      file.pipe(res);
   });
});

app.post('/api/v1/c2e/decrypt', upload.single('c2e'), function (req, res, next) {
   console.log('Received file for decryption');

   if (!req.body.user) return res.status(500).json({error: 'No user information provided'});
   if (req.body.user.indexOf('@') === -1) return res.status(500).json({error: 'User identification must be an email'});

   // Unzip the file
   var zip = new admzip(req.file.destination+req.file.filename);
   zip.extractAllTo('temp/'+req.file.filename, true);
   const subdir = fs.readdirSync('temp/'+req.file.filename)[0];

   // Verify licensee
   const manifest = JSON.parse(fs.readFileSync('temp/'+req.file.filename+'/'+subdir+'/manifest.json'));
   const licensee = manifest.c2eMetadata.copyright.license.licensee?.email;

   if (!licensee) return res.status(500).json({error: 'No licensee information for this C2E'});
   if (licensee !== req.body.user) return res.status(500).json({error: `The user (${req.body.user}) is not licensed to view this content`});

   var cipher = crypto.createDecipher('aes-256-cbc', config.encryption_key);
   var input = fs.createReadStream('temp/'+req.file.filename+'/'+subdir+'/'+subdir+'.c2e');
   var output = fs.createWriteStream('temp/'+req.file.filename+'/'+subdir+'/'+subdir+'.c2e.decoded');

   input.pipe(cipher).pipe(output);

   output.on('finish', async function() {
      console.log('Decrypted file written to disk!');
      fs.unlinkSync('temp/'+req.file.filename+'/'+subdir+'/'+subdir+'.c2e');
      fs.renameSync('temp/'+req.file.filename+'/'+subdir+'/'+subdir+'.c2e.decoded', 'temp/'+req.file.filename+'/'+subdir+'/'+subdir+'.c2e');

      console.log('repackaging...');
      var zip2 = new admzip();
      zip2.addLocalFolder('temp/'+req.file.filename+'/'+subdir, subdir);
      zip2.writeZip('temp/'+req.file.filename+'/'+subdir+'.c2e');

      // Send encoded and decoded file to s3
      console.log('Uploading to S3');
      var files = [
         { path: req.file.destination+req.file.filename, name: subdir+'.c2e.encoded'},
         { path: 'temp/'+req.file.filename+'/'+subdir+'.c2e', name: subdir+'.c2e.decoded'}
      ]
      for (let i = 0; i < files.length; i++) {
         const content = fs.createReadStream(files[i].path);
         const putCommand = new PutObjectCommand({
            Bucket: config.aws_s3_bucket,
            Key: files[i].name,
            Body: content
         });
         await s3.send(putCommand);
         console.log('File sent to S3', files[i].name);
      }
      // Prepare thumbnail
      var thumbnail;
      try {
         thumbnail = fs.readFileSync('temp/'+req.file.filename+'/'+subdir+'/thumbnail.png');
      } catch(e) {
         console.log(`Thumbnail not found in ${subdir}. Using default.`)
         thumbnail = fs.readFileSync('assets/default_thumbnail.png');
      }
      await s3.send(new PutObjectCommand({
         Bucket: config.aws_s3_bucket,
         Key: subdir+'_thumbnail.png',
         Body: thumbnail
      }));
      // Store record in database
      console.log('Storing db record');
      const c2es = await pgClient.query('SELECT * from c2e_repo where useremail = $1 and c2e_name = $2', [req.body.user, subdir+'.c2e']);

      if (c2es.rowCount !== 0) {
         const result = await pgClient.query(
            'UPDATE c2e_repo SET c2e_url_encoded = $1, c2e_url_decoded = $2, thumbnail = $3, visible = 1 RETURNING *',
            [
               config.aws_s3_bucket_url+subdir+'.c2e.encoded',
               config.aws_s3_bucket_url+subdir+'.c2e.decoded',
               config.aws_s3_bucket_url+subdir+'_thumbnail.png',
            ]
         );
         console.log('Updated existing record', result);
      } else {
         const result = await pgClient.query(
            'INSERT INTO c2e_repo(useremail, c2e_name, c2e_url_decoded, c2e_url_encoded, c2e_json, thumbnail, visible) VALUES ($1, $2, $3, $4, $5, $6, 1) RETURNING *',
            [
               req.body.user,
               subdir+'.c2e',
               config.aws_s3_bucket_url+subdir+'.c2e.decoded', 
               config.aws_s3_bucket_url+subdir+'.c2e.encoded',
               manifest,
               config.aws_s3_bucket_url+subdir+'_thumbnail.png'
            ]
         );
         console.log('Inserted new record', result);
      }

      // Respond with decoded file
      var file = fs.createReadStream('temp/'+req.file.filename+'/'+subdir+'.c2e');
      file.on('end', function() {
         fs.rmdirSync('temp/'+req.file.filename+'/'+subdir, {recursive: true});
         fs.unlinkSync('temp/'+req.file.filename+'/'+subdir+'.c2e');
         fs.unlinkSync(req.file.destination+req.file.filename);
         console.log('file sent and deleted');
      });
      file.pipe(res);
   });
});

app.get('/api/v1/c2e/reader/listc2e', async (request, response) => {
   if (!request.query.user) return response.status(500).json({error: 'No user information provided'});
   if (request.query.user.indexOf('@') === -1) return response.status(500).json({error: 'User identification must be an email'});

   var result = [];

   if (!request.query.query) {
      result = await pgClient.query(
         'SELECT * FROM c2e_repo WHERE useremail = $1 and visible = 1',
         [request.query.user]
      );
   } else {
      result = await pgClient.query(
         "SELECT * FROM c2e_repo WHERE useremail = $1 AND visible = 1 AND c2e_json->'c2eMetadata'->'general'->>'title' ilike $2",
         [request.query.user, '%'+request.query.query+'%']
      );
   }

   return response.json({projects: result.rows});
 });

 app.post('/api/v1/c2e/reader/deletec2e', express.json(), async (request, response) => {
   if (!request.body?.c2eid) return response.status(500).json({error: 'No C2E ID provided.'});

   pgClient.query('UPDATE c2e_repo SET visible = 0 WHERE id = $1', [request.body.c2eid]);
   return response.json({result: 'ok'});
 });