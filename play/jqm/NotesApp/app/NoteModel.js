var Notes = Notes || {}

Notes.NoteModel = function (config) {
    this.id = config.id;
    this.dateCreated = config.dateCreated;
    this.title = config.title;
    this.narrative = config.narrative;    
}