var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
    var electionInstance;
    it("initialized with two candidates", function() {
        return Election.deployed().then(function(instance){
            return instance.candidatesCount();
        }).then(function(count){
            assert.equal(count, 2);
        });
    });

    it("Candidates are initialized with correct values", function() {
        return Election.deployed().then(function(instance) {
            electionInstance = instance;
            return electionInstance.candidates(1)
        }).then(function(candidate) {
            assert.equal(candidate[0], 1, "Contains correct candidate id");
            assert.equal(candidate[1], "Candidate 1", "contains correct candidate name");
            assert.equal(candidate[2], 0, "Candidate contains correct votes");
            return electionInstance.candidates(2)
        }).then(function(candidate){
            assert.equal(candidate[0], 2, "Contains correct candidate id");
            assert.equal(candidate[1], "Candidate 2", "contains correct candidate name");
            assert.equal(candidate[2], 0, "Candidate contains correct votes");
        });
    });
});
