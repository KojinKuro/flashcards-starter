const chai = require("chai");
const expect = chai.expect;

const { startTimer, calculateTime, convertTimerToString } = require("../src/timer");
const { start } = require("../src/game");

describe('Timer', () => {
  describe('Start timer', () => {
    it('Start a timer', () => {
      const startTime = Date.now();
      expect(startTimer(startTime)).to.deep.equal(startTime);
    })

    it('Start a timer with different time', () => {
      const startTime = Date(8.64e15);
      expect(startTimer(startTime)).to.deep.equal(startTime);
    })
  });

  describe('Calculate end time', () => {
    it('Will calculate time', () => {
      const startTime = new Date(8.33e15);
      const endTime = new Date(8.42e15);
      expect(calculateTime(startTime, endTime)).to.equal(endTime - startTime);
    })

    it('Will calculate time #2', () => {
      const startTime = new Date(4.33e15);
      const endTime = new Date(5.42e15);      
      expect(calculateTime(startTime, endTime)).to.equal(endTime - startTime);
    })
  })
  
  describe("Print Timer", () => {
    it("Print 0 seconds", () => {
      expect(convertTimerToString(0)).to.equal("0s");
    });
    it("Print 35 seconds", () => {
      expect(convertTimerToString(35000)).to.equal("35s");
    });
    it("Print 1 minute", () => {
      expect(convertTimerToString(60000)).to.equal("1m");
    });
    it("Print 32 minute 13 seconds", () => {
      expect(convertTimerToString(1933000)).to.equal("32m13s");
    });
    it("Print 1 hour", () => {
      expect(convertTimerToString(3600000)).to.equal("1hr");
    });
    it("Print 1 hour 10min 12 seconds", () => {
      expect(convertTimerToString(4212000)).to.equal("1hr10m12s");
    });
  });  
})

