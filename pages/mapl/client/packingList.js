Template.packingList.helpers(
   {
    users: function(){
   	return UserInfo.find({createdBy:Meteor.userId()});},

   	users:function(){
   		return UserInfo.find({}, {sort:{current:1}});},
   	//progressnumber: function(){


   	
   })
   
  
 Template.packingList.events({
 	"click .js-submit-packinglist": function(event) {
 			console.log("yes");
 			const list = $(".js-list").val();
 			console.log(list); 
  			const item = {item:list, createdBy:Meteor.userId(), current:false};
  			console.dir(item);
  			UserInfo.insert(item);

 	},
 		"click #resetlist":function(){ console.log("click")
 		Meteor.call("remove",Meteor.userId())
 	},
 });
 Template.question.helpers({
 	checked: function(){
 		if (this.user.current) return "checked"; else return "";},

 	isChecked:function(){return Meteor.user().profile.isChecked;
 		},
 	bar:function(){
 		return Math.floor(Session.get("bar")*100)
 	}

 })

Template.question.events({
	"click .js-packed": function(event){
		var theCurrentValue = event.target.checked;
		console.log ("theCurrentValue=" + theCurrentValue);


		var progress = UserInfo.find({userId:Meteor.userId()}).fetch();
		console.log(UserInfo.find({userId:Meteor.userId()}).fetch());
		var counter = 0;
		for(i = 0; i < progress.length;i++){
			if(progress[i].current) {
				counter++;
			}
		}
		Session.set("bar",(counter/progress.length));

		UserInfo.update(this.user._id, {$set:{current:theCurrentValue}});
		var userID = Meteor.user()._id;

		var isChecked = event.target.checked;
		Meteor.users.update({_id: userID}, {$set: {"profile.ischecked": isChecked}});
		 
	},
	"click #deleteitem":function(event){console.log(this)
  	UserInfo.remove(this.user._id);
 	}
});
