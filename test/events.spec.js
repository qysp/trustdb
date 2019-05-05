const expect = require('expect.js');
const EventEmitter = require('../lib/events');

describe('EventEmitter', function() {
  const emitter = new EventEmitter();
  let listener;

  it('should add a listener and emit it', function(done) {
    listener = emitter.on('test', done);
    emitter.emit('test');
  });

  it('should remove the added listener', function() {
    emitter.removeListener('test', listener);
    expect(emitter.events['test']).to.be.empty();
  });

  it('should add an async listener and emit it (wait 100ms)', async function() {
    let val = false;

    emitter.addListener('async', async () => {
      await new Promise(resolve => setTimeout(resolve, 100))
        .then(() => val = true);
    });
    await emitter.emit('async');

    expect(val).to.be(true);
  });
});
