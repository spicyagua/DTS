/*describe("Public interface exists", function() {
  
  it("Desines the app", function() {
    expect(Notes.app).toBeDefined();
  });
  
  it("Should have public interface to return notes list", function () {
    expect(Notes.app.getNotesList).toBeDefined();
  });  
  
  
});

describe("Public interface implementation", function () {
  it("Should return notes list", function () {
    var notesList = Notes.app.getNotesList();
    expect(notesList instanceof Array).toBeTruthy();
  });
});
*/

describe("Data Context tests", function () {
 
  it("Exists in the app", function () {
    expect(Notes.dataContext).toBeDefined();
  });
 
  it("Returns notes Array", function () {
 
    var notesList = Notes.dataContext.getNotesList();
 
    expect(notesList instanceof Array).toBeTruthy();
  });
  
  it("Return a blank note", function() {
    var blankNote = Notes.dataContext.createBlankNote();
    expect(blankNote.title.length == 0).toBeTruthy();
    expect(blankNote.narrative.length == 0).toBeTruthy();
  });
  
  it("Has init function", function() {
    expect(Notes.dataContext.init).toBeDefined();
  });
  
  it("Returns dummy notes saved in local storage", function() {
    Notes.testHelper.createDummyNotes();
    Notes.dataContext.init();
    var notesList = Notes.dataContext.getNotesList();
    expect(notesList.length > 0).toBeTruthy();
  });
 
});



