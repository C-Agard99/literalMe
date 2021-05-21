Template.confirmDel.events({
    'click .js-confirmDel'(event){
        let delID = $('#confirmID').val();
        console.log("deleting documents", delID);
      
        // $('#deleteModal').modal('hide');
        // //Delete permanently
        // newBooksdb.remove({_id: delID});
    }
});