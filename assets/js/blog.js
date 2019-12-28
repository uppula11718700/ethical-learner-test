ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .then( editor => {
        console.log( editor );
    } )
    .catch( error => {
        console.error( error );
    } );
    const data = editor.getData();
    editor.destroy()
    .catch( error => {
        console.log( error );
    } );
