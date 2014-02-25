describe("PDFJS Wrapper jQuery Plugin", function() {

	var pdfViewerContainer;

	beforeEach(function() {
		pdfViewerContainer = $('<div>').appendTo('body');
	});

	it("plugin exists", function(done) {
		pdfViewerContainer.pdfjsWrapper();
		done();
	});

	it("canvas got created", function(done) {
		pdfViewerContainer.pdfjsWrapper();
		expect(pdfViewerContainer.find('canvas').length).toBe(1);
		done();
	});

	it("next button got created", function(done) {
		pdfViewerContainer.pdfjsWrapper();
		expect(pdfViewerContainer.find('button.next').length).toBe(1);
		expect(pdfViewerContainer.find('button.next').text()).toBe('next');
		done();
	});

	it("previous button got created", function(done) {
		pdfViewerContainer.pdfjsWrapper();
		expect(pdfViewerContainer.find('button.previous').length).toBe(1);
		expect(pdfViewerContainer.find('button.previous').text()).toBe('previous');
		done();
	});

	it("next button with own text got created", function(done) {
		var nextText = '>';
		var options = {
			l10n : {
				next : nextText
			}
		};
		pdfViewerContainer.pdfjsWrapper(options);
		expect(pdfViewerContainer.find('button.next').length).toBe(1);
		expect(pdfViewerContainer.find('button.next').text()).toBe(nextText);
		done();
	});

	it("previous button with own text got created", function(done) {
		var previousText = '<';
		var options = {
			l10n : {
				previous : previousText
			}
		};
		pdfViewerContainer.pdfjsWrapper(options);
		expect(pdfViewerContainer.find('button.previous').length).toBe(1);
		expect(pdfViewerContainer.find('button.previous').text()).toBe(previousText);
		done();
	});

});
