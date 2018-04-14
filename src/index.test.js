import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Sanity test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say Users', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, (err, window) => {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Users');
      done();
      window.close();
    });
  });
});

describe('index.html\'s body has a H1 tag', () => {
  it('should have a h1 tag', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, (err, window) => {
      const nrOfH1s = window.document.getElementsByTagName('h1').length;
      expect(nrOfH1s).to.equal(1);
      done();
      window.close();
    });
  });
});
