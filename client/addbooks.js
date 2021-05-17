Template.addBooks.events({
    'click .js-save'(event){
        //pulls data from the add books html page
        let newbPic = $('#bookImg').val();
        let newbTitle = $('#bookTitle').val();
        let newbAuthor = $('#bookAuthor').val();
        let newbDescription = $('#bookDescription').val();
        
        //save data into collection
        newBooksdb.insert({
            "bPic":newbPic,
            "bTitle":newbTitle,
            "bAuthor":newbAuthor,
            "bDescription":newbDescription
        });
    }
})