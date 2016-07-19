Template.profile.helpers(
 {

   users: function(){
       console.dir(UserInfo.find().fetch()); console.dir(Meteor.userId());
   return UserInfo.find({userId:Meteor.userId()});
   }
 }
)

Template.profile.events({
	"click .js-submit-profile": 
		function(event) {
			console.log("yes");
			const firstname = $(".js-firstname").val();
			const lastname = $(".js-lastname").val();
			const gender = $(".js-gender").val();
			const date = $(".js-date").val();
				
			console.log(firstname); 
			console.log(lastname); 
			console.log(gender); 
			console.log(date); 
			const item = 
			{firstname:firstname, 
			 lastname:lastname, 
			 gender:gender, 
			 date:date,
			 createdAt: new Date(),
			 userId: Meteor.userId()};
			console.dir(item);
			UserInfo.insert(item);
	}
//	"click .js-delete":function(event){
//		UserInfo.remove(this_id); 
//	}
})
