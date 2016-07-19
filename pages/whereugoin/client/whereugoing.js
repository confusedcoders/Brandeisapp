Template.whereugoin.helpers(
 {

   trips: function(){
   return TripInfo.find();
   }
 }
)


Template.whereugoin.events({
	"click .js-submit-tripinfo": 
		function(event) {
			console.log("yes");
			const tripname = $(".js-tripname").val();
			const destination = $(".js-destination").val();
			const returndate = $(".js-returndate").val();
			const leaving = $(".js-leaving").val();
			const people = $(".js-people").val();
			const triptype = $(".js-triptype").val();
				
			console.log(tripname);
			console.log(destination); 
			console.log(leaving); 
			console.log(people); 
			console.log(triptype); 
			const item = {tripname:tripname, destination:destination, leaving:leaving, returndate:returndate, people:people, triptype:triptype}
			console.dir(item);
			TripInfo.insert(item);
	},
//"click .js-delete":function(event){
//		UserInfo.remove(this_id); 
//	}


})


