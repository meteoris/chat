/*
 * in meteoris, we can use reywood:publish-composite out of the box
 * it is usefull when we have relation through our collection
 * here we'll publish our chat collection alongside it's user relation
 */
Meteor.publishComposite('radiegtya_chat', function(doc, sort) {
    console.log("subscribing some Chat with it's relation");
    var doc = doc || {};
    var sort = sort || {};
    return{
        find: function() {
            return Radiegtya.Chat.find(doc, sort);
        },
        children: [
            /* return all related Users */
            {
                find: function(collection) {
                    return Meteor.users.find(collection.userId);
                }
            },
        ],
    }
});