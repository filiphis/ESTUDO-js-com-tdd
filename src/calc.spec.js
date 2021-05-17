/* eslint-disable no-unused-expressions */

import {
  expect,
} from 'chai';
import {
  describe,
  it,
} from 'mocha';

import {
  sum,
  sub,
  mult,
  div,
} from './calc';

describe('Calc', () => {
  describe('Smoke tests', () => {
    it('should be exist the method sum', () => {
      expect(sum()).to.exist;
    });

    it('should be exist the method sub', () => {
      expect(sub()).to.exist;
    });

    it('should be exist the method mult', () => {
      expect(mult()).to.exist;
    });

    it('should be exist the method div', () => {
      expect(div()).to.exist;
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6, 2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });
  });

  describe('Mult', () => {
    it('should return 4 when `mult(2,2)`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return 4 when `div(8, 2)`', () => {
      expect(div(8, 2)).to.be.equal(4);
    });

    it('should return `Não é possível dividir por zero` when `div(4, 0)`', () => {
      expect(div(4, 0)).to.be.equal('Não é possível dividir por zero');
    });
  });
});
