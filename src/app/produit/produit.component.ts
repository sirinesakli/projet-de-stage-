import { Component } from '@angular/core';
import { article } from '../module/article';
import { serviceArt } from '../service/articleSer';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  articles: article[] = [];  // Ensure articles is typed as an array of articles
constructor(private serviceart: serviceArt) {}
ngOnInit() {
  this.serviceart.getConfig().subscribe(data => {
    this.articles = data.articles;
  });
}

}
