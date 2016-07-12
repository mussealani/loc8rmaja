module.exports.homelist = function (req, res) 
{
	res.render('locations-list', { 
		title: 'Loc8r - find a place to work with wifi',
		pageHeader: {
			title: 'Loc8r',
			strapline: 'Find place to work with wifi near you!'
		},
		sidebar: "Locking for wifi and a seat? Loc8r helps you dind places to work. when out and about. Perhaps with coffee, cake or a pint?",
		locations: [{
			name: 'Starcups',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot drink', 'Food', 'Premium wifi'],
			distance: '100m'
		},
		{
			name: 'Cafe Hero',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 4,
			facilities: ['Hot drink', 'Food', 'Premium wifi'],
			distance: '200m'
		},
		{
			name: 'Burger Queen',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 2,
			facilities: ['Food', 'Premium wifi'],
			distance: '250m'
		}]
	}); 
}

module.exports.locationInfo = function (req, res) 
{
	res.render('location-info', { 
		title: 'Starcups',
		pageHeader: {title: 'Starcups'},
		sidebar: {
			context: 'is on Loc8r because it has accessible wifi and space to sitdown with you laptop and get some work done.',
			callToAction: 'If you\'ve been and like it - or if you don\'t - please leave a review to help other people just like you.'
		},
		location: {
			name: 'Starcups',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			coords: {lat: 48.875946, lng: 2.29550549999999},
			openingTimes: [{
				days: 'Monday - Friday',
				opening: '7:00am',
				closing: '7:00pm',
				closed: false
			},{
				days: 'Saturday',
				opening: '8:00am',
				closing: '5:00pm',
				closed: false
			},{
				days: 'Sunday',
				closed: true
			}],
			reviews: [{
				author: 'Simon Holmes',
				rating: 5,
				timestamp: '16 July 2013',
				reviewText: 'What a great place. I can\'t say enough good things about it.'
			},{
				author: 'Charlie Chaplin',
				rating: 3,
				timestamp: '16 June 2013',
				reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
			}]
		},
	}); 
}

module.exports.addReview = function (req, res) 
{
	res.render('location-review-form', {
		title: 'Review Starcups on Loc8r',
		pageHeader: {title: 'Review Starcups'}
	}); 
}