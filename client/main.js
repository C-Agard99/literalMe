import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';

import './main.html';
import './view.html';

import './main.js';
import './view.js';
import '../lib/collection.js';


// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.mainBody.events({
//   'click '(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

Template.mainBody.helpers({
    newBooks(){
        return newBooksdb.find();
    }
});

Template.mainBody.events({
    'click .js-view'(event){
        let myID = this._id;
        
        newBooksdb.update({_id:myID}, {$inc: {bView: 1}});
        let viewBooks = this.bView + 1;
        let bookImg = this.bPic;
        let bookTitle = this.bTitle;
        let bookAuthor = this.bAuthor;
        let bookDescription = this.bDescription;
        
        document.getElementById("viewImg").src = bookImg;
        $('#viewbookTitle').val(bookTitle);
        $('#viewbookAuthor').val(bookAuthor);
        $('#timesViewed').html("<h4>Views:&nbsp;</h4>"+viewBooks);
        $('#viewbookDescription').html("<h4>Description:&nbsp;</h4>"+bookDescription);
        $('#viewModal').modal('show');

        
    },
    
});

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
            "bDescription":newbDescription,
            "bView":0
        });
        //Clear input boxes
        document.getElementById("bookImg").src = "book_stack.png";
        $('#bookTitle').val("");
        $('#bookAuthor').val("");
        $('#bookDescription').val("");
        $('#addModal').modal('hide');
    }
});
