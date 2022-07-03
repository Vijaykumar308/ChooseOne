let leftSide = document.querySelector("#left");
let rightSide = document.querySelector("#right");
let gameStartBtn = document.querySelector("#startBtn");
let cantChooseBtn = document.getElementById('cantChooseBtn');
let players = [
	{
		"id": "0",
		"img_source":"images/Game-players/MSDhoni.jpg",
		"name":"MS Dhoni",
		"description":"MS Dhoni is the only one who has won all 3 format trophics.",
		"category":"cricket"
	},
	{
		"id": "1",
		"img_source":"images/Game-players/RohitSharma.jpg",
		"name":"Rohit Sharma",
		"description":"Rohit Sharma is the only player who hits the double century for the three times.",
		"category":"cricket"
	},
	{
		"id": "2",
		"img_source":"images/Game-players/ViratKholi.jpg",
		"name":"Virat Kholi",
		"description":"43 -> 100s in  the ODI and 25 in Test.",
		"category":"cricket"

	},
	{
		"id": "3",
		"img_source":"images/Game-players/SachinTendulkar.jpg",
		"name":"Sachin Tendulkar",
		"description":"God of Cricket",
		"category":"cricket"
	},
	{
		"id": "4",
		"img_source":"images/Game-players/YuvrajSingh.jpg",
		"name":"Yuvraj Singh",
		"description":"Played world cup and be the man of the tournament.",
		"category":"cricket"
	},
	{
		"id": "5",
		"img_source":"images/Game-players/GautamGambhir.jpg",
		"name":"Gautam Gambhir",
		"description":"He made 97 in the final match of 2011 world cup which is a great contribution.",
		"category":"cricket"
	},
	{
		"id": "6",
		"img_source":"images/Game-players/Sehwag.jpg",
		"name":"Virender Sehwag",
		"description":"Virander Sehwag.",
		"category":"cricket"
	},
	{
		"id": "7",
		"img_source":"images/Game-players/RavindraJadeja.png",
		"name":"Ravindra Jadeja",
		"description":"A spin blower.",
		"category":"cricket"
	},
	{
		"id": "8",
		"img_source":"images/Game-players/SureshRaina.jpg",
		"name":"Suresh Raina",
		"description":"A left handed player with a spin blower and fantastic filder.",
		"category":"cricket"
	},
	{
		"id": "9",
		"img_source":"images/Game-players/JaspritBumrah.jpg",
		"name":"Jasprit Bumrah",
		"description":"A Brilent Fast Blower for India.",
		"category":"cricket"
	},
	{
		"id": "10",
		"img_source":"images/Game-players/kapilDev.jpg",
		"name":"Kapil Dev",
		"description":"Kapil Dev is the captain who won the world cup for India in 1983 for the first Time",
		"category":"cricket"
	},
	{
		"id": "11",
		"img_source":"images/Game-players/KLRahul.jpg",
		"name":"KL Rahul",
		"description":"A Brilent Opener Bastman and wicket keeper.",
		"category":"cricket"
	},
	{
		"id": "12",
		"img_source":"images/Game-players/shaneWarne.jpg",
		"name":"Shane Warne",
		"description":"A Brilent Spin bowler for Australia, he took 708 wickets in test and 293 in ODI.",
		"category":"cricket"
	},
	{
		"id": "13",
		"img_source":"images/Game-players/MuttiahMuralitharan.jpg",
		"name":"Muttiah Muralitaran",
		"description":"He has the record of taking highest wickets, he took 800 wickets in test and 534 in ODI.",
		"category":"cricket"
	},
	{
		"id": "14",
		"img_source":"images/Game-players/BrianLara.jpg",
		"name":"Brian Lara",
		"description":"Brian Lara has the record of making 400 runs in test Cricket.",
		"category":"cricket"
	},
	{
		"id": "15",
		"img_source":"images/Game-players/RahulDravid.jpg",
		"name":"Rahul Dravid",
		"description":"The Wall",
		"category":"cricket"
	},
	{
		"id": "16",
		"img_source":"images/Game-players/ABD.jpg",
		"name":"AB Develires",
		"description":"Mr. 360 player",
		"category":"cricket"
	},
	{
		"id": "17",
		"img_source":"images/Game-players/LasithMalinga.JPG",
		"name":"Lasith Malinga",
		"description":"Malinga is famouse for his bowling action and he took 4 consecutive wicket twice.",
		"category":"cricket"
	},
	{
		"id": "18",
		"img_source":"images/Game-players/MithaliRaj.jpg",
		"name":"Mithali Raj",
		"description":"Mithali is the highest run-scorer in women’s international cricket",
		"category":"cricket"
	},
	{
		"id": "19",
		"img_source":"images/Game-players/JulanGoswami.jpg",
		"name":"Julan Goswami",
		"description":"Most wickets for women’s international cricket",
		"category":"cricket"
	},
	{
		"id": "20",
		"img_source":"images/Game-players/HarmanPreetKaur.jpg",
		"name":"Harmanpreet Kaur",
		"description":"Harmanpreet Kaur is the current indian women’s captain.",
		"category":"cricket"
	},
	{
		"id": "21",
		"img_source":"images/Game-players/ChrisGayle.jpg",
		"name":"Chris Gayle",
		"description":"Chris Gayle the Universe Boss.",
		"category":"cricket"
	},
	{
		"id": "22",
		"img_source":"images/Game-players/ShoaibAkhtar.jpg",
		"name":"Shoaib Akhtar",
		"description":"Shoaib Akhtar is also know as Rawalpindi Express.",
		"category":"cricket"
	},
	// {
	// 	"id": "26",
	// 	"img_source":"images/Game-players/AnjumChopra.jpg",
	// 	"name":"Anjum Chopra",
	// 	"description":"Making her ODI debut at just 17, player of the series in the just her second series.",
	// 	"category":"cricket"
	// },
	// {
	// 	"id": "27",
	// 	"img_source":"images/Game-players/Chahal.jpg",
	// 	"name":"Yuzvendra Chahal",
	// 	"description":"A leg Spin bowler.",
	// 	"category":"cricket"
	// },
	{
		"id": "23",
		"img_source":"images/Game-players/SirVVR.JPG",
		"name":"Sir Viv Richards",
		"description":"Sir Viv Richards was a fantastic batsman who was respected the world over.",
		"category":"cricket"
	},
	// {
	// 	"id": "29",
	// 	"img_source":"images/Game-players/AdamG.jpg",
	// 	"name":"Adam Gilchrist",
	// 	"description":"Adam Gilchrist's 149* in one of the most famous run chases in Australian test history",
	// 	"category":"cricket"
	// },
	{
		"id": "24",
		"img_source":"images/Game-players/EllysePerry.JPG",
		"name":"Ellyse Perry",
		"description":"First player to amass a combined 1,000 runs and 100 wickets in T20Is,",
		"category":"cricket"
	},
	{
		"id": "25",
		"img_source":"images/Game-players/NarayanaMurthy.jpg",
		"name":"Narayana Murthy",
		"description":"Founder of Inforsis",
		"category":"Roal_model"
	},
	{
		"id": "26",
		"img_source":"images/Game-players/RatanTata.jpg",
		"name":"Sir Ratan Tata",
		"description":"Founder of Tata Group",
		"category":"Roal_model"
	},
	{
		"id": "27",
		"img_source":"images/Game-players/AzimPremji.jpg",
		"name":"Azim Premji",
		"description":"Founder of Wipro",
		"category":"Roal_model"
	},
	{
		"id": "28",
		"img_source":"images/Game-players/ShivNadar.jpg",
		"name":"Shiv Nadar",
		"description":"Founder of HCL",
		"category":"Roal_model"
	},
	{
		"id": "29",
		"img_source":"images/Game-players/AnandMahindra.png",
		"name":"Anand Mahindra",
		"description":"Founder of Tech Mahindra",
		"category":"Roal_model"
	},
	{
		"id": "30",
		"img_source":"images/Game-players/RiteshAgarwal.jpg",
		"name":"Ritesh Agarwal",
		"description":"Founder of OYO",
		"category":"Roal_model"
	},
	{
		"id": "31",
		"img_source":"images/Game-players/SundarPichai.jpg",
		"name":"Sundar Pichai",
		"description":"CEO at Google",
		"category":"Roal_model"
	},
	{
		"id": "32",
		"img_source":"images/Game-players/SatyaNandela.jpg",
		"name":"Satya Nandela",
		"description":"CEO at Microsoft",
		"category":"Roal_model"
	},
	{
		"id": "33",
		"img_source":"images/Game-players/BillGates.jpg",
		"name":"Bill Gates",
		"description":"Founder of Microsoft",
		"category":"Roal_model"
	},
	{
		"id": "34",
		"img_source":"images/Game-players/arryEllison.jpg",
		"name":"Larry Ellison",
		"description":"Founder of Oracle",
		"category":"Roal_model"
	},
	{
		"id": "35",
		"img_source":"images/Game-players/LarryPageAndSergyBrin.jpg",
		"name":"Larry Page & SergyBrin",
		"description":"Founder of Google",
		"category":"Roal_model"
	},
	{
		"id": "36",
		"img_source":"images/Game-players/FacebookFounder.jpg",
		"name":"Mark Zuckerberg",
		"description":"Founder of Facebook",
		"category":"Roal_model"
	},
	{
		"id": "37",
		"img_source":"images/Game-players/InstagramFounder.jpg",
		"name":"Kevin Systrom",
		"description":"Instagram Founder",
		"category":"Roal_model"
	},
	{
		"id": "38",
		"img_source":"images/Game-players/ElonMuskSpaceX.jpg",
		"name":"Elon Musk",
		"description":"Founder of Tesla,paypal,SpaceX",
		"category":"Roal_model"
	},
	{
		"id": "39",
		"img_source":"images/Game-players/JackMa.jpg",
		"name":"Jack Ma",
		"description":"Founder of Alibaba",
		"category":"Roal_model"
	},
	{
		"id": "40",
		"img_source":"images/Game-players/MBAchaiWala.jpg",
		"name":"Prafull Billore",
		"description":"Founder of MBA chaiWala",
		"category":"Roal_model"
	},
	{
		"id": "41",
		"img_source":"images/Game-players/mukeshambani.jpg",
		"name":"Mukesh Ambani",
		"description":"Founder of Relaince Group",
		"category":"Roal_model"
	},
	{
		"id": "42",
		"img_source":"images/Game-players/jeffBezoz.jpg",
		"name":"Jeff Bezoz",
		"description":"Founder of Amazon - world Richest person",
		"category":"Roal_model"
	},
	{
		"id": "43",
		"img_source":"images/Game-players/WarrenBuffett.jpg",
		"name":"Warren Buffett",
		"description":"CEO of Berkshire Hathaway, Inverstor",
		"category":"Roal_model"
	},
	{
		"id": "44",
		"img_source":"images/Game-players/rakeshjhunjhunwala.jpg",
		"name":"Rakesh Jhunjhunwala",
		"description":" Indian billionaire business magnate, stock trader and investor",
		"category":"Roal_model"
	},
	{
		"id": "45",
		"img_source":"images/Game-players/AamirKhan.jpg",
		"name":"Aamir Khan",
		"description":"",
		"category":"Bollywood"
	},
	{
		"id": "46",
		"img_source":"images/Game-players/AkshayKumar.JPG",
		"name":"Akshay Kumar",
		"description":"",
		"category":"Bollywood"
	},
	{
		"id": "47",
		"img_source":"images/Game-players/AmitabhBachchan.jpg",
		"name":"Amitabh Bachchan",
		"description":"",
		"category":"Bollywood"
	},
	{
		"id": "48",
		"img_source":"images/Game-players/JohnAbraham.jpg",
		"name":"John Abraham",
		"description":"",
		"category":"Bollywood"
	},
	{
		"id": "49",
		"img_source":"images/Game-players/ShahRukhKhan.jpg",
		"name":"ShahRukh Khan",
		"description":"A king Khan",
		"category":"Bollywood"
	}
];

const randInt = () => { return Math.floor(Math.random() * players.length); }
	
let leftCount = 0;
let rightCount = 0;

//common funcation
const click = (element,leftSideNumber) => {
	//let leftSideNumber = Math.floor(Math.random() * 10);

	if(element.id === "left"){

		rightCount = 0;
		if (leftCount >= 4){
			let val = localStorage.getItem("leftSideNumber");
			// alert(`${players[val].name} is your Faviourat One`);
			swal({
				text:`${players[val].name} is your Faviourat One`,
				buttons:{
					playBtn:{
						text:"Play Again",
						value:"playBtn",
						confirmButtonColor: '#ddd',
					},
				}
			}).then(function(){
				window.location.reload();
			});
			return;
		}else{
			let imgTag = rightSide.children[0];
			let description = rightSide.children[1];

			rightSide.classList.remove("clicked");		
			imgTag.setAttribute("src",players[leftSideNumber].img_source);
			imgTag.setAttribute("title",players[leftSideNumber].description);
			description.innerHTML = players[leftSideNumber].name;		
		}

		leftCount++;
	}

	if (element.id === "right") {
		leftCount = 0;

		if(rightCount >=4 ){
			let val = localStorage.getItem("n");
			// alert(`${players[val].name} is your Faviourat One`);
			swal({
				text:`${players[val].name} is your Faviourat One`,
				buttons:{
					playBtn:{
						text:"Play Again",
						value:"playBtn",
						confirmButtonColor: '#ddd',
					},
				}
			}).then(function(){
				window.location.reload();
			});
			return;

		}else{
			let imgTag = leftSide.children[0];
			let description = leftSide.children[1];

			leftSide.classList.remove("clicked");	

			imgTag.setAttribute("src",players[leftSideNumber].img_source);
			imgTag.setAttribute("title",players[leftSideNumber].description);
			description.innerHTML = players[leftSideNumber].name;
		}

		rightCount++;
	}
	element.classList.add("clicked");	
	// console.log(element.id);
	// console.log(leftSideNumber);
}

var leftSideNumber,n;
//left side clicked
let firstTime = true;

window.onload = window.localStorage.clear();
//left side click
leftSide.addEventListener("click",()=> {
	// console.log("leftSide clicked");
	leftSideNumber = randInt();
	n = randInt();

	if(leftSideNumber == n){
		leftSideNumber = leftSideNumber+1;
		console.log(leftSideNumber);
	}
	
	localStorage.setItem("n", n);

	if(firstTime) {
		click(rightSide,leftSideNumber);
		localStorage.setItem("leftSideNumber",leftSideNumber);
		firstTime = false;
	}

	//console.log("num is: "+num);
	let preVal = localStorage.getItem("leftSideNumber");

	if(preVal == n){
		 n = n+1;
		 localStorage.setItem("n",n);
		 // console.log("leftSide Effect");
	}

	click(leftSide,n);

});

rightSide.addEventListener("click",()=>{
	// console.log("rightSide clicked");
	leftSideNumber = randInt();
	n = randInt();
	// leftSideNumber = n = 1;
	//numCheck(leftSideNumber,n);
	if(leftSideNumber == n){
		leftSideNumber = leftSideNumber+1;
		// console.log(leftSideNumber);
	}
	localStorage.setItem("leftSideNumber", leftSideNumber);

	// console.log("fist time Right side: "+firstTime);
	if(firstTime){
		click(leftSide,n);
		localStorage.setItem("n",n);
		firstTime = false;
	}

	let preVal = localStorage.getItem("n");

	if(preVal == leftSideNumber){ 

		leftSideNumber = leftSideNumber + 1; 
		localStorage.setItem("leftSideNumber",leftSideNumber);
		// console.log("Right Side Effect");
	}

	click(rightSide,leftSideNumber);

});

cantChooseBtn.addEventListener("click",()=>{
	try{
		let leftSideCandidate = localStorage.getItem("leftSideNumber");
		let rightSideCandidate = localStorage.getItem("n");
		// alert(`${players[leftSideCandidate].name} and ${players[rightSideCandidate].name} both are the best candidate You really can't choose between them.`);
		swal(`${players[leftSideCandidate].name} and ${players[rightSideCandidate].name} both are the best candidate`,"You really can't choose between them.").then(function(){
			window.location.reload();
		});

	}
	catch(err){
		// alert("Let First Clicked on any Side, You can't too smart !");
		swal("Let First Click on Any Side",
		     "You can't too smart !",
		);
		// swal({
		// 	text:"Let First Click on Any Side",
		// 	buttons:["Let's play","cancle"],
		// });
	}
});
/*
	if click(leftside,0)  =>  0th number img will applies on right side.
	if click(rightside,1)  =>  1th number img will applies on left side.
*/
