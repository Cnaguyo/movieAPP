import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  title = "Videos";
  SomeItem = "hi there"

  VideoList = [
    {
      name: "Apocalypto",
      slug: "apocalypto",
      embed: `UZD6oWeGcHg`
    },
    {
      name: "Catch 22 (trailer)",
      slug: "catch22",
      embed: `JARn16yojbQ`
    },
    {
      name: "The Grinch",
      slug: "the_grinch",
      embed: `Go1lx6j-kNQ`
    },
    {
      name: "The Lion King",
      slug: "the_lion_king",
      embed: `Zat88Rsxp94`
    }

  ]
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getEmbedUrl(item){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.embed + '?ecver=2')
    // return this.sanitizer.bypassSecurityTrustResourceUrl('https://img.youtube.com/embed/' + item.embed + '/0.jpg')

  }
}
