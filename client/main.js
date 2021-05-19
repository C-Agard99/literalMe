import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';

import './main.html';

import './main.js';


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
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
            "bDescription":newbDescription
        });
        //Clear input boxes
        document.getElementById("bookImg").src = "book_stack.png";
        $('#bookTitle').val("");
        $('#bookAuthor').val("");
        $('#bookDescription').val("");
        $('#addModal').modal('hide');
    }
})
