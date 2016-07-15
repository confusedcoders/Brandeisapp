Template.packingList.helpers(
   {
     users: function(){
   	return userinfo.find({createdBy:Meteor.userId()});
   }}
   )
  
 Template.packingList.events({
 	"click .js-submit-packinglist": function(event) {
 			console.log("yes");
 			const list = $(".js-list").val();
 			console.log(list); 
  			const item = {item:list, createdBy:Meteor.userId(), current:false};
  			console.dir(item);
  			userinfo.insert(item);

 	},
 		"click #resetlist":function(){ console.log("click")
 		Meteor.call("remove",Meteor.userId())
 	},
 });
 Template.question.helpers({
 	checked: function(){
 		if (this.current) return "checked"; else return "";},
 		ischecked:function(){return Meteor.user().profile.ischecked;}


 })
Template.question.events({
	"click .js-packed": function(event){
		var theCurrentValue = event.target.checked;
		console.log ("theCurrentValue=" + theCurrentValue);
		userinfo.update(this.user._id, {$set:{current:theCurrentValue}});
		Meteor.users.update({_id: userinfo._id}, {$set: {"profile.ischecked": ischecked}});
		  
 
	
	},
	"click #deleteitem":function(event){console.log(this)
  	userinfo.remove(this.user._id);
 	}
});
