import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private haircuts:any = [
    {
      name:"Buzz Cut",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/javi_thebarber_-buzz-cut-fade-line-up-eyebrow-shaved-line--e1540324270515.jpg",
      price:20
    },
    {
      name:"Crew Cut",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/barberodessa-military-haircuts-men-crew-cut-short-fade-e1540331854349.jpg",
      price:20
    },
    {
      name:"Ivy League",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/uncleroccos-high-and-tight-mens-ivy-leaguehaircut-side-part-1024x924.jpg",
      price:20
    },
    {
      name:"Caeser Cut",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/kolt_cutz-Caesar-haircutbangs-for-wavy-curly-hair-1024x1024.jpg",
      price:20
    },
    {
      name:"Textured French Cut",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/kaisbarbershop-new-haircuts-hairstyles-for-men-textured-French-crop.jpg",
      price:20
    },
    {
      name:"Faux Hawk",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/javi_thebarber_-spiky-haircuts-for-men-faux-hawk-quiff-e1540331011787-1024x1024.jpg",
      price:20
    },
    {
      name:"Fringe Cut",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/coreypowellhair-medium-length-haircuts-for-men-fringe-bangs-e1540333148314.jpg",
      price:20
    },
    {
      name:"Medium Length",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/andrewdoeshair-medium-length-haircuts-hairstyles-for-men-2018-messy-platinum-pomp-texture.jpg",
      price:20
    },
    {
      name:"Pompadour",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/mattyconrad-types-of-mens-haircuts-pomp-pompadour-820x1024.jpg",
      price:20
    },
    {
      name:"Quiff",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/jovanrfigueroa-quiff-side-part-types-of-hairstyles-for-men-e1540324947176-1024x1024.jpg",
      price:20
    },
    {
      name:"Side Part",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/tariqcastillo-side-part-haircuts-for-men.jpg",
      price:20
    },
    {
      name:"Taper",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/a.bossbaby-hanzdefuko-Sponge-Wax-taper-haircut-medium-length-hairstyles-for-men-2018-e1540326281900.jpg",
      price:20
    },
    {
      name:"Mohawk",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/a.bossbaby-burst-fade-mohawk-hanz-de-fuko-Quicksand-and-Claymation-e1540489096626.jpg",
      price:20
    },
    {
      name:"Mullet",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/xbigwesx-mullet-haircut-with-temple-fade-flow-hockey-hair-2018.jpg",
      price:20
    },
    {
      name:"Short sides long top",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/ruger-barber-cool-medium-length-hairstyles-for-men-short-sides-long-top-e1540330261371.jpg",
      price:20
    },
    {
      name:"Mohawk",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/a.bossbaby-burst-fade-mohawk-hanz-de-fuko-Quicksand-and-Claymation-e1540489096626.jpg",
      price:20
    },
    {
      name:"Mohawk",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/a.bossbaby-burst-fade-mohawk-hanz-de-fuko-Quicksand-and-Claymation-e1540489096626.jpg",
      price:20
    },
    {
      name:"Mohawk",
      image:"https://www.menshairstyletrends.com/wp-content/uploads/2018/10/a.bossbaby-burst-fade-mohawk-hanz-de-fuko-Quicksand-and-Claymation-e1540489096626.jpg",
      price:20
    },
  ]
  get haircutsMenu(){
    return this.haircuts;
  }
  constructor() { }
}
