import { Injectable, OnDestroy } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import metaData from '../helpers/meta-data';

@Injectable({
  providedIn: 'root',
})
export class MetaAndTitleService implements OnDestroy {
  private subscription = new Subscription();

  constructor(
    private router: Router,
    private meta: Meta,
    private title: Title
  ) {
    this.subscription.add(
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          const url = event.url;
          this.updateTitle(url);
          this.updateMetas(url);
        }
      })
    );
  }

  private updateTitle(url: string): void {
    this.title.setTitle(metaData[url].title);
  }

  private updateMetas(url: string): void {
    const oldTagDescription = this.meta.getTag('name="description"');
    const newTagDescription = {
      name: 'description',
      content: metaData[url].metas.description,
    };
    const oldTagOgTitle = this.meta.getTag('name="og:title"');
    const newTagOgTitle = {
      name: 'og:title',
      content: metaData[url].metas['og:title'],
    };

    oldTagDescription
      ? this.meta.updateTag(newTagDescription)
      : this.meta.addTag(newTagDescription);
    oldTagOgTitle
      ? this.meta.updateTag(newTagOgTitle)
      : this.meta.addTag(newTagOgTitle);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
