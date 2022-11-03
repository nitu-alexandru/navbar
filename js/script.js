
    let ajax_cfg = {
		url: '/data/nav_list.txt',
		error: function() {

			alert('Nu s-a putut genera continut!');

		},
        success: function(resp) {

            all_arr = resp.split('---------------------');

            all_arr1 = all_arr[0].split('|');
            all_arr2 = all_arr[1].split('|');

            second_arr = all_arr1.slice(1,3);   // Titlu si preview la next
            third_arr_row_1 = all_arr1.slice(4,7);   // Icoane rand 1
            third_arr_row_2 = all_arr1.slice(7,10);   // Icoane rand 2
            fourth_arr_row_1 = all_arr1.slice(11,14); // Titluri rand 1
            fourth_arr_row_2 = all_arr1.slice(14,17); // Titluri rand 2
            fifth_arr_row_1 = all_arr1.slice(18,21);  // Texturi pt fiecare rand 1
            fifth_arr_row_2 = all_arr1.slice(21,24);  // Texturi pt fiecare rand 1


            ssecond_arr = all_arr2.slice(1,3);   // Titlu si preview la next
            tthird_arr_row_1 = all_arr2.slice(4,7);   // Icoane rand 1
            tthird_arr_row_2 = all_arr2.slice(7,10);   // Icoane rand 2
            ffourth_arr_row_1 = all_arr2.slice(11,14); // Titluri rand 1
            ffourth_arr_row_2 = all_arr2.slice(14,17); // Titluri rand 2
            ffifth_arr_row_1 = all_arr2.slice(18,21);  // Texturi pt fiecare rand 1
            ffifth_arr_row_2 = all_arr2.slice(21,24);  // Texturi pt fiecare rand 1

		}
	};
    
    jQuery.ajax(ajax_cfg);


    document.addEventListener("click", searchclick);
    
    function searchclick(ev) {
        let x = ev.target;
            if( x.closest(['.animation_2']) || 
                x.closest(['.animation_1']) || 
                x.closest(['.next_content_title'])||
                x.closest(['.content_icon']) ||
                x.closest(['.content_title']) ||
                x.closest(['.content_text']) ||
                x.closest(['.drop_down_content']))
            {
                return
            }
            else
            {
                jQuery('.next_content_title, .content_icon, .content_title, .content_text').remove();
                jQuery('.drop_down_content').css('visibility','hidden');
                jQuery('.animation_1, .animation_2, .arrow_1, .arrow_2').removeAttr('style');
            }
    }

    jQuery('.links > a').click(
        function(ev) {
            ev.preventDefault();
            if(jQuery(this).index()==1){
                jQuery('.next_content_title, .content_icon, .content_title, .content_text').remove();
                jQuery('.drop_down_content').css('visibility','visible');
               
                jQuery('.animation_1').css({'background-color':'#6e67d6','border-radius':'10px','color':'white','height':'40px','box-shadow':'5px 5px rgb(250 187 30)'}); 
                jQuery('.animation_2').removeAttr('style');
               
                jQuery('.arrow_1').css({'transform':'rotate(225deg)','margin-bottom':'4px','border-top':'3px solid white','border-left':'3px solid white'});
                jQuery('.arrow_2').removeAttr('style');

                
                // FIRST LOOP

                jQuery('.drop_down_content').prepend('<div class="next_content_title"></div>');
                jQuery('.next_content_title').prepend('<h2>'+ second_arr[0] + '</h2>');
                jQuery('.next_content_title').append('<h6>'+ second_arr[1] + '</h6>');

            for (i = 0; i < 3; i++){
                jQuery('.drop_down_content').append('<div class="content_icon"><img class="icon" src="'+third_arr_row_1[i].trim()+'"></div>');
                jQuery('.drop_down_content').append('<div class="content_title"><h4>'+fourth_arr_row_1[i].trim()+'</h4></div>');
                
            };

            for (i = 0; i < 3; i++){
                jQuery('.drop_down_content').append('<div class="content_text"><p>'+fifth_arr_row_1[i].trim()+'</p></div>');
            };

            // SECOND ROW
            for (i = 0; i < 3; i++){
                jQuery('.drop_down_content').append('<div class="content_icon"><img class="icon" src="'+third_arr_row_2[i].trim()+'"></div>');
                jQuery('.drop_down_content').append('<div class="content_title"><h4>'+fourth_arr_row_2[i].trim()+'</h4></div>');
            };

            for (i = 0; i < 3; i++){
                let x = fifth_arr_row_2[i].trim();
                let y = x.slice(0,43);
                jQuery('.drop_down_content').append('<div class="content_text"><p>'+y.trim()+'</p></div>');
            };

            // END OF FIRST LOOP
            } else {

                jQuery('.next_content_title, .content_icon, .content_title, .content_text').remove();
                jQuery('.drop_down_content').css('visibility','visible');
              
                jQuery('.animation_2').css({'background-color':'#6e67d6','border-radius':'10px','color':'white','height':'40px','box-shadow':'5px 5px rgb(250 187 30)'});
                jQuery('.animation_1').removeAttr('style');

                jQuery('.arrow_2').css({'transform':'rotate(225deg)','margin-bottom':'4px','border-top':'3px solid white','border-left':'3px solid white'});   
                jQuery('.arrow_1').removeAttr('style');

            
            // SECOND LOOP

            jQuery('.drop_down_content').prepend('<div class="next_content_title"></div>');
            jQuery('.next_content_title').prepend('<h2>'+ ssecond_arr[0] + '</h2>');
            jQuery('.next_content_title').append('<h6>'+ ssecond_arr[1] + '</h6>');


            for (i = 0; i < 3; i++){
                jQuery('.drop_down_content').append('<div class="content_icon"><img class="icon" src="'+tthird_arr_row_1[i].trim()+'"></div>');
                jQuery('.drop_down_content').append('<div class="content_title"><h4>'+ffourth_arr_row_1[i].trim()+'</h4></div>');
                
            };

            for (i = 0; i < 3; i++){
                jQuery('.drop_down_content').append('<div class="content_text"><p>'+ffifth_arr_row_1[i].trim()+'</p></div>');
            };

            // 
            for (i = 0; i < 3; i++){
                jQuery('.drop_down_content').append('<div class="content_icon"><img class="icon" src="'+tthird_arr_row_2[i].trim()+'"></div>');
                jQuery('.drop_down_content').append('<div class="content_title"><h4>'+ffourth_arr_row_2[i].trim()+'</h4></div>');
            };


            for (i = 0; i < 3; i++){
                jQuery('.drop_down_content').append('<div class="content_text"><p>'+ffifth_arr_row_2[i].trim()+'</p></div>');
            };
             }
        });


