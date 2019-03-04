function Outer() {
  var osv = "Some" // Outer Scope Variable
  function Inner() {
    console.log(osv)
  }
  return Inner
}

var vari = Outer.osv

console.log(vari)

