var BookModel = Backbone.Model.extend({
  defaults: {
    title: null,
    author: null
  },
  validate: function(attrs, options){
    if (!attrs.author){
      return "Book must have an author";
    }
  }
});
var myBook = new BookModel({title: "Charlotte's Web"});
myBook.on('invalid', function(model, error){
  alert(model.get('title')+" found to be invalid. Reason: "+error);
});
myBook.save();

console.log(myBook);

// var malware = new BookModel({title: "<script>alert('gotcha!')</script>"});

// var escapedString = malware.escape('title');

// var myBook = new BookModel();

// console.log(escapedString);

// myBook.set("title", "Where The Wild Things Are");

// console.log(myBook);