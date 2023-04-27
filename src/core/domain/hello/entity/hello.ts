export class Hello {
  private _intAttr: number;
  private _stringAttr: string;

  constructor(intAttr: number, stringAttr: string) {
    this._intAttr = intAttr;
    this._stringAttr = stringAttr;
  }

  get intAttr() {
    return this._intAttr;
  }

  get stringAttr() {
    return this._stringAttr;
  }
}
