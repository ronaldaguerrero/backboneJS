var StackModel = Backbone.Model.extend({
	defaults: {
		title: null,
		Instructor: null,
		Language: null
	},
	initialize: function(){

	}
});

var ruby = new StackModel();

ruby.set("title", "Ruby on Rails");
ruby.set("Instructor", "Michael Choi");
ruby.set("Language", "Ruby");

// console.log(ruby);

var mean = new StackModel();

mean.set("title", "MEAN");
mean.set("Instructor", this.ruby.attributes.Instructor);
mean.set("Language", "Javascript");

// console.log(mean);

var python = new StackModel();

python.set("title", "Python");
python.set("Instructor", this.ruby.attributes.Instructor);
python.set("Language", "Python");

console.log(python);