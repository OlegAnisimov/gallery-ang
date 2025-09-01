import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gallery } from '../gallery/gallery';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Gallery],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    
  }
})
export class App implements OnInit, AfterViewInit, AfterViewChecked {
  protected readonly title = signal('photo-gallery');
  @ViewChild("header", { static: true })
  header: ElementRef | undefined;

  private readonly initUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=';

  private http = inject(HttpClient);

  items = signal<any[] | never []>([]);

  private isInitRequestDone: boolean = false;
  init$: any;

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
  }

  ngAfterViewChecked(): void {
      if (!this.isInitRequestDone) {
        const freeSpace = document.documentElement.clientWidth - this.header?.nativeElement.offsetHeight;
        let limit = 0;
        // console.log('window free space', freeSpace);
        // пока предположим что max-height  картинок будет 300px по три в строку + 100 px под scroll sign либо просто пустое пространство ???
        limit = Math.floor((freeSpace / 300) ) * 3;
        // console.log('what is limit param for request', limit = Math.floor((freeSpace / 300) ) * 3 );
        // this.http.get(`${this.initUrl}${limit}`).subscribe((res: any) => {
        // });
        
        for (let index = 0; index <= limit; index++) {
          const element = {
            url: `url-${index}`,
            id: `id-${index}`,
            title: `title-${index}`,
          };
          this.items.update((items) => [...items, element]);
        }
        this.isInitRequestDone = true;
      }
  }
}
