
Template.about.helpers(
 {
   items: function(){
   	return PackingList.find();
 }
 )

Template.packinglist.events({
	"click .js-submit-packinglist": 
		function(event) {
			consol.log("yes");
			const list = $(".js-list").val();
			console.log(list); 
			const item = {item:item}
			console.dir(item);
			PackingList.insert(item);
	}
	//"click .js-delete":function(event){
	//	PackingList.remove(this_id);
	//}
})
