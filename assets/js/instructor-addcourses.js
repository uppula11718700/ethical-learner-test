// // sortable lists
// $(function  () {
//     $("ol.example").sortable();
// });

// // onclick dynamic
// $('#edit').click(function(){
//     $('#text').removeAttr('readonly');
// });

$('#sortable-div .sortable-list').sortable({
   connectWith: '#sortable-div .sortable-list',
    placeholder: 'placeholder',
 });