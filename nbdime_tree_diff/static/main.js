define([
    'require',
    'base/js/namespace',
    'base/js/dialog',
    'jquery', 
    'base/js/utils'
],function(
    require,
    IPython, 
    dialog, 
    $, 
    utils, 
    mc
){

    var diffTwoNotebooks = function () {
        var num_selected;
        num_selected = 0;

        var text_selected;
        text_selected = "";

        var text_selected2;
        text_selected2 = "";

        var the_classes;
        the_classes = "";

        var rows = Array.prototype.concat.apply([], document.querySelectorAll('.list_item.row'));
        rows.forEach(function (row) {
            var the_row_checkbox;
            var the_file_name;
            var the_row_icon;

            the_row_checkbox = row.querySelector('input[type=checkbox]');
            the_row_icon = row.querySelector('.item_icon');


            if (the_row_checkbox != null && the_row_checkbox.checked){
                num_selected += 1;

                //alert("Found something selected: " + the_row_icon.className);

                if(the_row_icon.className.search('notebook_icon') !== -1) {
                    the_file_name = row.querySelector('.item_name').textContent;

                    //alert("Found a file: " + the_file_name);
                    if(the_file_name.endsWith(".ipynb")){
                        //alert("Found ipynb");
                        if(num_selected == 1){
                            text_selected = the_file_name;
                        }

                        if(num_selected == 2){
                            text_selected2 = the_file_name;
                        }
                    }
                }
                //alert(the_row_checkbox);
                //the_classes += the_row_checkbox.attr('class');
            }
        });

        if (num_selected != 2){
            alert("Two items must be selected!");
            return;
        }

        if (text_selected == '') {
            alert("Only NOTEBOOK FILES that are NOT RUNNING must be selected!");
            return;
        }

        if (text_selected2 == '') {
            alert("Only NOTEBOOK FILES that are NOT RUNNING must be selected!");
            return;
        }


        /* alert("text_selected: " + text_selected); */

        var dirpath = window.location.pathname;
        var filepath;

        var dirpath_array = dirpath.split("/");
        dirpath_array.shift();
        dirpath_array.shift();


        filepath = dirpath_array.join("/") + "/" + text_selected;
        filepath2 = dirpath_array.join("/") + "/" + text_selected2;

        /* alert("Will update: " + filepath); */

        /* nbdime.nbDiffView('difftool', filepath, filepath2);*/

        if (window.location.port == "") { var the_port = ""; }
        else { var the_port = ":" + window.location.port ; }

        var the_url = window.location.protocol + '//' + window.location.hostname + the_port + "/nbdime/difftool?base=" + filepath + "&remote=" + filepath2;
        window.open(the_url);



    }
 






    function _on_load(){

        // log to console
        console.info('Loaded Jupyter extension: nbdime_tree_diff')


        $('<button/>')
            .attr('type', 'button')
            .attr('id', 'diff_two_notebooks')
            .addClass('btn btn-default btn-xs')
            .css('font-weight', 'bold')
            .attr('title', 'DIFF two selected notebook files')
            .text('DIFF two notebooks')
            .on('click', function (evt) { setTimeout(diffTwoNotebooks); })
            .appendTo('#notebook_toolbar');

    }

    return {load_ipython_extension: _on_load };
})
