Meteor.methods({
 "remove": function(user){
 	userinfo.remove({createdBy:user})
 }
 
 })