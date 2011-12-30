Notes.controller = (function ($, dataContext) {

    var notesListSelector = "#notes-list-content";
    var noNotesCachedMsg = "<div>No notes cached</div>";
    var notesListPageId = "notes-list-page";
    var currentNote = null;


    function init() {

        dataContext.init();
        var d = $(document);
        d.bind("pagechange", onPageChange);
       
    }

    function onPageChange(event, data) {

        var toPageId = data.toPage.attr("id");

        switch (toPageId) {
            case notesListPageId:

                renderNotesList();
                break;
        }
    }    

    function renderNotesList() {

        var notesList = dataContext.getNotesList();
        var view = $(notesListSelector);

        view.empty();

        if (notesList.length === 0) {

            $(noNotesCachedMsg).appendTo(view);
        } else {

            var notesCount = notesList.length;
            var note;
            var ul = $("<ul id=\"notes-list\" data-role=\"listview\"></ul>").appendTo(view);
            for (var i = 0; i < notesCount; i++) {
                note = notesList[i];
                $("<li>"
                    + "<a data-url=\"index.html#note-editor-page?noteId=" + note.id + "\" href=\"index.html#note-editor-page?noteId=" + note.id + "\">"
                    + "<div>" + note.title + "</div>"
                    + "<div class=\"list-item-narrative\">" + note.narrative + "</div>"
                    + "</a>"
                + "</li>").appendTo(ul);
            }

            ul.listview();
        }
    }

    return {

        init: init
    }

})(jQuery, Notes.dataContext);