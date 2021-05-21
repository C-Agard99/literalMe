Template.viewBooks.events({
    'click .js-delete'(event){
        let myID = this._id;
        $('#confirmID').val(myID);
        $('#deleteModal').modal('show');
    }
});