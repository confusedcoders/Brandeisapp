
Template.packingList.helpers(
 {
   users: function(){
   	return userinfo.find();
 }}
 )

Template.packingList.events({
	"click .js-submit-packinglist": 
		function(event) {
			console.log("yes");
			const list = $(".js-list").val();
			console.log(list); 
			const item = {item:list, createdBy:Meteor.userId()};
			console.dir(item);
			userinfo.insert(item);
	}
	//"click .js-delete":function(event){
	//	PackingList.remove(this_id);
	//}
})