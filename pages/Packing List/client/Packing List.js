Template.mapl.helpers({
  travelitems: function(){
    return travelitems.find({},{sort:{ename:1}});
  },


})
