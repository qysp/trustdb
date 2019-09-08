const expect = require('expect.js');
const EventEmitter = require('../lib/events');

describe('EventEmitter', function() {
  const emitter = new EventEmitter();
  let listener;

  describe('#on() -> emit()', function() {
    it('should add a listener and emit it', function(done) {
      listener = emitter.on('test', done);
      emitter.emit('test');
    });
  });

  describe('#removeListener()', function() {
    it('should remove the added listener', function() {
      emitter.removeListener('test', listener);
      expect(emitter.events['test']).to.be.empty();
    });
  });
});
