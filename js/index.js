$().ready(function () {
for (var i = 0; i < 10; i++) {
	var st =setTimeout(function () {
		creatuserlist ();
	},200*i);
}

})



function ondelClick (event) {
	$("[id='"+event.data.id+"']").css('pointer-events','none');
	
	
					_my_shark.shark($("[id='"+event.data.id+"']"),function () {
					
					$("[id='"+event.data.id+"']").addClass('userlistitemdeleted');
					setTimeout(function () {
						
						$("[id='"+event.data.id+"']").remove();
					},500);
					
				});
}


function creatuserlist () {
	
	var tempid=Math.random();
	
	var tempitem=$(cardstr);
	tempitem.attr("id",tempid);
	tempitem.find("button").on("click",{id:tempid},ondelClick);
	$("#fixed-tab-1 > div").append(tempitem);

	
	
	
	var st =setTimeout(function () {
		tempitem.addClass("userlistitemafter");
	},10);

	
}

cardstr='<div class="userlistitem demo-card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col">  <div class="mdl-card__title"><h2 class="mdl-card__title-text">Welcome</h2>  </div>  <div class="mdl-card__supporting-text">    Lorem ipsum dolor sit amet, consectetur adipiscing elit.    Mauris sagittis pellentesque lacus eleifend lacinia...  </div>  <div class="mdl-card__actions mdl-card--border">    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">      Get Started    </a>  </div>  <div class="mdl-card__menu">    <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">     <i class="material-icons mdl-color-text--red">delete</i>    </button>  </div></div>';



