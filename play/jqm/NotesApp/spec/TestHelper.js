var Notes = Notes || {}

Notes.testHelper = (function () {

    function createDummyNotes() {

        var notesListStorageKey = "Notes.NotesList";
        var notesCount = 10;
        var notes = [];

        for (var i = 0; i < notesCount; i++) {

            var note = Notes.dataContext.createBlankNote();
            note.title = "Title " + i;
            note.narrative = "Narrative " + i;
            notes.push(note);
        }

        $.jStorage.set(notesListStorageKey, notes);
    };

    return {
        createDummyNotes: createDummyNotes
    }

})();