Template.chat.helpers({
  chatlines: function(){
    // return the last five chats
    // sorted by when they were created (most recent, first)
    return Chats.find({},
                      {limit:500,
                        sort: {createdAt: -1}})},

 	
 		"click #resetlist":function(){ console.log("click")
 		Meteor.call("remove",Meteor.userId())
 	},
 });

Template.packtips.events({
  "click .js-chatsubmit": function(event){
    event.preventDefault();
    console.log("the button was clicked")
    const theText = $(".js-chatinput").val();  // read the user's chat text ...
    const chatline = {text:theText, createdAt:new Date(), createdBy:Meteor.userId()};
    Chats.insert(chatline);
  },

})

 Template.question.helpers({
 	checked: function(){
 		if (this.current) return "checked"; else return "";},
 		ischecked:function(){return Meteor.user().profile.ischecked;}


 })

Template.packtips.helpers({
  chatlines: function(){
    // return the last five chats
    // sorted by when they were created (most recent, first)
    return Chats.find({},
                      {limit:5,
                        sort: {createdAt: -1}})},

})


Template.question.events({
	"click .js-packed": function(event){
		var theCurrentValue = event.target.checked;
		console.log ("theCurrentValue=" + theCurrentValue);
		UserInfo.update(this.user._id, {$set:{current:theCurrentValue}});
		Meteor.users.update({_id: UserInfo._id}, {$set: {"profile.ischecked": ischecked}});
		  
 
	
	},
	"click #deleteitem":function(event){console.log(this)
  	UserInfo.remove(this.user._id);
 	}
});

