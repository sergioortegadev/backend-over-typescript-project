class Producto {
  prodName: string;
  id: number;
  ean: number;
  description: string;
  price: number;

  constructor(prodName_, id_, ean_, description_, price_) {
    this.prodName = prodName_;
    this.id = id_;
    this.ean = ean_;
    this.description = description_;
    this.price = price_;
  }

  mostrar(): void {
    console.log(`Producto: ${this.prodName}`);
  }
}

export default Producto;
