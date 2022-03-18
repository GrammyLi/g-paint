class G {
  constructor() {}
  static new(...args) {
    let i = new this(...args);
    return i;
  }
}