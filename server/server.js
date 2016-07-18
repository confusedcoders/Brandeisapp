Meteor.methods({
 "remove": function(user){
 	UserInfo.remove({createdBy:user})
 }
 
 })