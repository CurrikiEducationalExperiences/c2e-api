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

let sources1 = [{
  id: "currikistudio",
  title: "CurrikiStudio"
}, {
  id: "safarimontage",
  title: "SAFARI Montage"
}];

let sources2 =  [{
  id: "safarimontage",
  title: "SAFARI Montage"
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
	return response.json([{ projects: projects1 }, { activities: activities1 }]);
  }
  else{
	return response.json([{ projects: projects2 }, { activities: activities2 }]);  
  }
});
