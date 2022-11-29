import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news-live',
  templateUrl: './news-live.component.html',
  styleUrls: ['./news-live.component.css']
})
export class NewsLiveComponent {
    
  constructor(private api : ApiService){
    api.fetchNews().subscribe(
      (response)=>{
        this.news=response;
      }
    )
  }



   news:any={}
    
  

}
