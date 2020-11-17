$(function() {
			$('button#show').click(function(){
				$(".blueBlock").show();
			});
			$('button#hide').click(function(){
				$(".blueBlock").hide();
			});
			$('body').on('click', 'button', function(e){
				$(this).css('color', 'red');
				alert('Вы нажали кнопку '+$(this).text());
			});
			$('aside').append('<button id="sh">Новая кнопка</button>');
			$('button#sh').click(function(){
				$.get('ajax.php', function(data) {
                $(".blueBlock").html(data);
                alert('Данные заружены');
				});
			});
		});