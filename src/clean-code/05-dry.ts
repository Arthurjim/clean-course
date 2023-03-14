type Size = "" | "S" | "M" | "L";

class Product {
  constructor(
    public name: String = "",
    public price: Number = 0,
    public size: Size = ""
  ) {}

  isProductReady():boolean{
    for(const key in this){//Imprimie las propiedades de la clase
        // console.log(key,typeof this[key])
        switch (typeof this[key]){
            case "string":
                if((<string><unknown>this[key]).length <= 0) throw Error(`${ key } is empty`)
            break
            case "number":
                if((<number><unknown>this[key]) <= 0) throw Error(`${ key } is zero`)
            break
            default:
                throw Error(`${typeof this[key]} is not supported`)
        }
    }
    return true
  }

  toString() {
    // No Dry
    // if (this.name.length == 0) throw Error("name is empty");
    // if (this.price == 0) throw Error("Price is zero");
    // if (this.size.length == 0) throw Error("size is empty");
    
    if(!this.isProductReady) return;
   
    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product('Blue pants',20,'M');
  console.log(bluePants.toString());
})();
