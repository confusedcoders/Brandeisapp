Meteor.methods({
 "remove": function(user){
 	packingList.remove({createdBy:user})
 }
 
 })
