const { translate } = require("./script");

describe("Translating", function() {
    // it("printing a word", function() {
    //     let w = translate("hello");
    //     expect(w).toBe("hello");
    // });

    // it("converts to lowercase", function() {
    //     let w = translate("HELLO");
        
    //     expect(w).toBe("hello");
    // });
    it("adds way to end of word", function() {
        let w = translate("APPLE");
        expect(w).toBe("appleway");
    });
    it("adds ay to end of word", function() {
        let w = translate("team");
        expect(w).toBe("eamtay");
    });
});