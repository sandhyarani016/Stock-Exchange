/*
	**
		Stock Market App
	**
*/

//JSON Data

var json_data = {
	 "company1":{
		 "name":"Apple",
		 "item1":"70",
		 "item2":"60",
		 "item3":"65"
	  },
	 "company2":{
		 "name":"Samsung",
		 "item1":"60",
		 "item2":"50",
		 "item3":"40" 
	  },
	 "company3":{
		 "name":"Acer",
		 "item1":"50",
		 "item2":"30",
		 "item3":"40"	
		 },					 
	   "company4":{
		 "name":"Nokia",
		 "item1":"60",
		 "item2":"55",
		 "item3":"40"						 
	  },
	   "company5":{
		 "name":"Lenova",
		 "item1":"55",
		 "item2":"43",
		 "item3":"56"						 
	  },
	   "company6":{
		 "name":"LG",
		 "item1":"40",
		 "item2":"56",
		 "item3":"68"						 
	  },
	   "company7":{
		 "name":"At&t",
		 "item1":"66",
		 "item2":"56",
		 "item3":"47"						 
	  },
	   "company8":{
		 "name":"Motorola",
		 "item1":"67",
		 "item2":"56",
		 "item3":"45"						 
	  },
	   "company9":{
		 "name":"T-mobile",
		 "item1":"56",
		 "item2":"54",
		 "item3":"34"						 
	  },
	   "company10":{
		 "name":"Micromax",
		 "item1":"66",
		 "item2":"45",
		 "item3":"34"						 
	  }
	  
	  
};

//JSON Data Ends Here

ns_stock_app = {
	init:function(){
		this.get_data_table();
		
		$(".row").live("click",function(e){
			$("#mask,#overlay").show();
			if($("#overlay .row").length == 0){
				$(this).addClass("edited");
				$("#overlay").append($(this).clone());
				$("#overlay img").attr("src","images/"+$("#overlay input[type=text]:first").val()+".jpg");
			}
		})
		$(".upt-btn").click(function(event){
			event.preventDefault();
			var inptTxt = $(this).parent().find("input[type=text]");			
			for(var i = 0; i< inptTxt.length; i++){	
				$(".edited input[type=text]").eq(i).val($(inptTxt[i]).val())
			}
			$("#mask,#overlay").hide();
			$(".row").removeClass("edited");
			$("#overlay .row").remove()
		})

		$(".dec,.inc").live("click",function(event){
			event.stopPropagation();
			var inptval = $(this).parent().find("input").val(),
	 			inptFstVal = $(this).parent().find("input:first");
			if(inptval > 0){
				if($(this).attr("class") == "inc"){
					inptFstVal.val(++inptval)
				}else{
					inptFstVal.val(--inptval)
				}
			}
			
		})
		$(".close").click(function(event){
			event.preventDefault();
			$("#mask,#overlay").hide();	
			$("#overlay .row").remove();
		})
	},
	get_data_table:function(){
		if(typeof json_data != "undefined"){
			for(key in json_data){
				//cls = "row tab"+key;
			
				var elem = document.createElement("div");
					elem.setAttribute("class","row "+key);
					for(items in json_data[key]){
						var ele = document.createElement("div"),
							inp = document.createElement("input");
							btn1 = document.createElement("input");
							btn2 = document.createElement("input");
							
							ele.setAttribute("class","cell");
							
							inp.setAttribute("type","text");
							inp.setAttribute("value",json_data[key][items]);
							
							btn1.setAttribute("value","+");
							btn1.setAttribute("class","inc");
							btn1.setAttribute("type","button");
							
							btn2.setAttribute("value","-");
							btn2.setAttribute("class","dec");
							btn2.setAttribute("type","button");

							ele.appendChild(inp);
							ele.appendChild(btn1);
							ele.appendChild(btn2);
							
							elem.appendChild(ele);
					}
					document.getElementById("wrapper").appendChild(elem);
			}
		}
		else{
			alert("No data found!")
		}
	}
}

ns_stock_app.init();




