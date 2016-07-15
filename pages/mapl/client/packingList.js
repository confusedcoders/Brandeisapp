Template.packingList.helpers(
   {
     users: function(){
   	return userinfo.find({createdBy:Meteor.userId()});
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
 	},
 	"click #resetlist":function(){ console.log("click")
 		Meteor.call("remove",Meteor.userId())
  	}
  	//"click .js-delete":function(event){
  	//PackingList.remove(this_id);
 	//}
 })