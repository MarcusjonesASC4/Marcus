// 549cb11b
// 957e4d4d56a36fbd7d7a94ad927821a4 

var MY_ID = "549cb11b"
var MY_KEY = "957e4d4d56a36fbd7d7a94ad927821a4"
var Bigurl = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId="+MY_ID+"&appKey="+MY_KEY;

$.ajax({


    url:Bigurl,
    success:function(data){
        console.log(Bigurl);
        console.log(data);

        var food = data.hits[0];
        
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;

        $("body").append("<h2>This "+name+" has "+cals+"cals!<h2>" );
    }
        
}
)
    
    

