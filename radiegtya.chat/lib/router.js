//routing as home page
FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('meteoris_themeAdminMain', {content:"radiegtya_chatIndex"});
    }
});