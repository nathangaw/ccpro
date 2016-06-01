var model = {
	cats: [
	{
		id: 0,
		name: 'Dave',
		picture: 'http://placekitten.com/150/150',
		clickCount: 0
	},
	{
		id: 1,
		name: 'John',
		picture: 'http://placekitten.com/300/500',
		clickCount: 0
	},
	{
		id: 2,
		name: 'Steve',
		picture: 'http://placekitten.com/300/200',
		clickCount: 0
	},
	{
		id: 3,
		name: 'Charlie',
		picture: 'http://placekitten.com/300/400',
		clickCount: 0
	},
	{
		id: 4,
		name: 'Ed',
		picture: 'http://placekitten.com/200/300',
		clickCount: 0
	}
	],

	activeCat: null
}

var octopus = {

	init: function() {
		for (var i = 0; i < model.cats.length; i++) {
			var catNameForList = model.cats[i].name;
			var catIdForList = model.cats[i].id;
			viewList.render(catIdForList, catNameForList);
		}

		viewList.listClick();
	},

	setClickedCat: function(id) {
		model.activeCat = id;
		octopus.retrieveClickedCat();
	},

	retrieveClickedCat: function() {
		var focusCat = model.cats[model.activeCat];
		viewActive.render(focusCat);
	},

	updateClickCount: function() {
		var catClickToUpdate = model.cats[model.activeCat];
		catClickToUpdate.clickCount += 1;
		var newCounter = model.cats[model.activeCat].clickCount;
		viewActive.updateCounter(newCounter);
	}

}


var viewList = {
	render: function(id, name) {
		$('.catlist').append('<h3 id="' + id + '">' + name + '</h3>');
	},

	listClick: function() {
		var renderedList = $('h3');
		renderedList.click(function(event) {
			var target = $(event.target);
			var clickedCatId = target.attr('id');
			octopus.setClickedCat(clickedCatId);
		})
	}
}


var viewActive = {
	render: function(focusCat) {
		$('.activecat').html(focusCat.name);
		$('.activecat').append('<img src="' + focusCat.picture + '">');
		$('.activecat').append('<h3 id="counter">' + focusCat.clickCount + '</h3>');
		viewActive.imageClick();
	},

	imageClick: function() {
		$('img').click(function() {
			octopus.updateClickCount();
		})
	},

	updateCounter: function(newCounter) {
		$('#counter').html(newCounter);
	}



}

octopus.init();

