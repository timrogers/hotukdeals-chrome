$.noConflict();
function newTab(url) {
	chrome.tabs.create({'url': url}, function() {});
}
var jQT = new jQuery.jQTouch();
jQuery(document).ready(function() {
	
	jQuery.getJSON("http://api.hotukdeals.com/rest_api/v2/?key=8785e55a210ce5cb68acd6bf337c3f18&output=json&results_per_page=4", null, function(data) { 
	jQuery.each(data.deals.items, function(i,item) {
		var dealNumber = Math.floor(Math.random()*101);
		jQuery("#jqt").append("<div id='" + dealNumber + "'><div class='toolbar'><a href='#home' class='button back backButton'>Back</a><h1>View Deal<h1></div><ul><li>" + item.title.substr(0,55).replace("Â", "") + "...</li><li style='font-weight: normal;'>" + item.merchant.name + "<small class='counter'>" + Math.round(item.temperature) + "</small></li></ul><ul class='rounded'><li style='font-weight: normal;'>" + item.description.substr(0,300).replace("Â", "") + "...</li></ul><ul class='rounded'><li class='arrow'><a href='#' onclick='newTab(\"" + item.deal_link + "\");'>View on HotUKDeals</a></li></ul></div>");
		
		jQuery("div#home").append("<ul><li>" + item.title.substr(0,55).replace("Â", "") + "...</li><li style='font-weight: normal;' class='arrow'><a href='#" + dealNumber + "'>" + item.merchant.name + "<small class='counter'>" + Math.round(item.temperature) + "</small></a></li></ul>");
	});
	});
});