Template.layout2.helpers({
    noProfile: function(){
	const myUserId = Meteor.userId();
	const myProfile = UserInfo.findOne({userId:myUserId});
	console.dir(myProfile);
	const retVal = (myProfile==undefined) && (Meteor.userId()!=null);;
	console.dir(Meteor.userId()!=null);
	console.dir(retVal);
	return retVal;
    },
})
