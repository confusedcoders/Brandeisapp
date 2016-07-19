Session.set("packinglistname","");


Template.packingList.helpers(
   {
    items: function(){
	console.log(Session.get("packinglistname")+" is the listname");
   	return packingList.find({list:Session.get("packinglistname"), 
                                 createdBy:Meteor.userId()});},

   	users:function(){
   		return UserInfo.find({}, {sort:{current:1}});},
   	//progressnumber: function(){
bar:function(){
 		return Math.floor(Session.get("bar")*100)
 	},

      listNames: function(){
	  return PackingNames.find();
      },

   	
   })
   
  
 Template.packingList.events({
        "change .js-list": function(){
	    const val = $(".js-list").val();
	    console.log("changing "+val);
	    Session.set("packinglistname",val);
        },

        "click .js-make-new": function(event){
	    const newName = $(".js-new-list").val();
            PackingNames.insert({name:newName});
        },


 	"click .js-submit-packinglist": function(event) {
 			console.log("yes");
 			const item = $(".js-item").val();
	                const list = $(".js-list").val();
 			console.log(list); 
  			const itemobj= {item:item, list:list, createdBy:Meteor.userId(), current:false};
  			console.dir(itemobj);
  			packingList.insert(itemobj);},
  			"click .js-submit-refresh": function(event) {
  		 const numChecked = packingList.find({createdBy:Meteor.userId(), current:true}).count();
		 const numTotal = packingList.find({createdBy:Meteor.userId()}).count();
		 Session.set("bar",numChecked/(1.0* numTotal));
		 console.log("numcheck="+numChecked)
		 console.log("numtotal="+numTotal)

 	},
 		"click #resetlist":function(){ console.log("click")
 		Meteor.call("remove",Meteor.userId())
 	},
 });
 Template.question.helpers({
 	checked: function(){
 		if (this.item.current) return "checked"; else return "";},

 	isChecked:function(){return Meteor.user().profile.isChecked;
 		},
 	

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
