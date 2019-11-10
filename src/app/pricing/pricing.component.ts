import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    // this.meta.addTag({
    //   name: 'description',
    //   content: 'je suis dans pricing component'
    // });
    // this.meta.addTags([
    //   {
    //     name: 'description',
    //     content: 'je suis dans pricing component'
    //   },
    //   {
    //     name: 'og:image',
    //     content: 'https://123123.jpeg'
    //   }
    // ]);
    // const metaOgTitle = this.meta.getTag('name="og:title"');
    // console.log(metaOgTitle);
    // const metaOgTitle = this.meta.getTags('name="og:title"');
    // console.log(metaOgTitle);
    // this.meta.updateTag({
    //   name: 'description',
    //   content: 'je suis dans pricing'
    // });
    // this.meta.removeTag('name="description"');
    // const descriptionTag = this.meta.getTag('name="description"');
    // this.meta.removeTagElement(descriptionTag);
    // console.log(this.title.getTitle());
    // this.title.setTitle('Pricing');
  }
}
