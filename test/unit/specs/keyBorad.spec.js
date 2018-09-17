
import Vue from 'vue';
import keyBoard from '../../../src/renderer/mainBrowserWindow/components/calculator/keyBoard';

describe('keyBoard.vue', () => {
  const Constructor = Vue.extend(keyBoard)
  const vm = new Constructor().$mount()
  it('should right', () => {
    expect(vm.solveString('1+2')).to.be.equal(3);
  });
  it('should right', () => {
    expect(vm.solveString('1+(3+4)-2')).to.be.equal(6);
  });
  it('should right', () => {
    expect(vm.solveString('1+(3+4)+5')).to.be.equal(13);
  });
});