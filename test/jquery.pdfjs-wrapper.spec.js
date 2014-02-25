describe("PDFJS Wrapper jQuery Plugin", function() {
    
    var pdfViewerContainer;

    beforeEach(function() {
        pdfViewerContainer = $('<div>').appendTo('body');
    });

    it("plugin exists", function(done) {
        pdfViewerContainer.pdfjsWrapper();
        done();
    });

    it("canvas gets created", function(done) {
        pdfViewerContainer.pdfjsWrapper();
        expect(pdfViewerContainer.find('canvas').length).toBe(1);
        done();
    });
    
});
