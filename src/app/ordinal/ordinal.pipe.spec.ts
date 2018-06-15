import { OrdinalPipe } from './ordinal.pipe';

describe('OrdinalPipe', () => {
  
  it('should display 1st if number is 1', () => {
    let pipe = new OrdinalPipe();

    expect(pipe.transform(1)).toEqual('1st');
  });

  it('should display 2nd if number is 2', () => {
    let pipe = new OrdinalPipe();

    expect(pipe.transform(2)).toEqual('2nd');
  });

  it('should display 3rd if number is 3', () => {
    let pipe = new OrdinalPipe();

    expect(pipe.transform(3)).toEqual('3rd');
  });

  it('should display 4th if number is 4', () => {
    let pipe = new OrdinalPipe();

    expect(pipe.transform(4)).toEqual('4th');
  });

});