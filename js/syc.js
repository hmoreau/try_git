function DateDiff(date1, date2) {
	var datediff = date1.getTime() - date2.getTime(); //store the getTime diff - or +
	return (datediff / (24*60*60*1000)); //Convert values to -/+ days and return value      
}

function navigate(tab,url){
	$.ajax({
			type: "GET",
			url: url,
			processData: true,
			dataTypeString: 'html',
			async: true
		}).done(function(data, textStatus, jqXHR) { 
			$('#'+tab).html(data);
			$('#nav-'+tab+ ' a').tab('show');
		});
	return false;
}

$(document).ready(function() {

	/* Tab nav */
	// detect tab change

		$('a[data-toggle="tab"]').on('shown', function (e) {
		  //alert(e.relatedTarget+ ' ->' +e.target);
		   $('#calendar').fullCalendar('render');
		})

	/* End Tab nav */

	/* News nav */	
	// Nav previous

	$('#NewsNavPrev').on('click', function (e) {
		var currentTab = $('#newsTabContent > .active');
		var previousTab = currentTab.prev();
		if(previousTab.length)
		{
			previousTab.addClass('active');
			currentTab.removeClass('active');
			$('#NewsNavNext').removeClass('disabled');
			if(!previousTab.prev().length)
			{
				$('#NewsNavPrev').addClass('disabled');
			}
		}
					return false;
	  
	});
	// Nav next
	$('#NewsNavNext').on('click', function (e) {
		var currentTab = $('#newsTabContent > .active');
		var nextTab = currentTab.next();
		if(nextTab.length)
		{
			nextTab.addClass('active');
			currentTab.removeClass('active');
			$('#NewsNavPrev').removeClass('disabled');
			if(!nextTab.next().length)
			{
				$('#NewsNavNext').addClass('disabled');
			}
		}
					return false;
	});

  /* END News nav */	
  
 

	// page is now ready, initialize the calendar...

	$('#calendar').fullCalendar({
		// put your options and callbacks here
		monthNames : ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
		monthNamesShort :  ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames : ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
		dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
		buttonText: {
			today: 'Aujourd\'hui',
			prev: '&lt;',
			next: '&gt;'
		},
		firstDay:1,
		/*dayClick: function(date, allDay, jsEvent, view) {
			alert(date);
			// change the day's background color just for fun
			//$(this).css('background-color', '#ccf');
		},*/
		selectable : true,
		select: function(startDate, endDate, allDay, jsEvent, view) {
			//alert(startDate + ' to ' + endDate);
		},
		viewDisplay:function(view){
			$('.fc-widget-content').css('font-weight', 'normal');
			$('.fc-widget-content .fc-day-content > div').html('');
			//alert(view.visStart+ ' --- ' + view.visEnd);
			var d1 = new Date(2012,9,7);
			var d2 = new Date(2012,8,11);
			var d3 = new Date(2012,11,1);
			var d4 = new Date(2012,9,3);
			var dates = [d1,d2,d3,d4];
			for(var i = 0; i < 4; i++)
			{
				myDate = dates[i];
				if(myDate >= view.visStart && myDate < view.visEnd)
				{
					var dateId = DateDiff(myDate,view.visStart);
					$('.fc-day'+dateId).css('font-weight', 'bold');
					$('.fc-day'+dateId+'  .fc-day-content > div').html('<i class="icon-star">');
					
				}
			}
		}
	});
	
	// Activate tooltip
	function activateTooltip()
	{
		$("[rel=tooltip]").tooltip();
	}
	activateTooltip();
	
	function getPopoverData()
	{
		var retVal='';
		$.ajax({
			type: "GET",
			url: "/data/recommand.html",
			processData: true,
			dataTypeString: 'html',
			async: false
		}).done(function(data, textStatus, jqXHR) { 
		  retVal= data;
		});
		return retVal;
	}
	
	function getPopoverTitle()
	{
		var retVal='';
		$.ajax({
			type: "GET",
			url: "/data/recommand-title.html",
			processData: true,
			dataTypeString: 'html',
			async: false
		}).done(function(data, textStatus, jqXHR) { 
		  retVal= data;
		});
		return retVal;
	}
	
	function getPopoverPlacement()
	{
		var layout = detectLayout();
		if(layout == 'phone')
			return 'top';
		return 'right';
	}
	
	// Popover
	$('#recommend').click(function(){
		$('#recommend').popover(
			{
				html:true,
				title:getPopoverTitle(),
				placement:getPopoverPlacement(),
				content:getPopoverData()
			}
		).popover('show');
		
		// reactivate tooltips for popover
		activateTooltip();
		return false;
		
	});
	
	function detectLayout()
	{
		var layout = null;
		if($('#visible-desktop').css('display') != 'none')
		{
			layout = 'desktop';
		}
		else if($('#visible-tablet').css('display') != 'none')
		{
			layout = 'tablet';
		}
		else if($('#visible-phone').css('display') != 'none')
		{
			layout = 'phone';
		}
		return layout;
	}
});