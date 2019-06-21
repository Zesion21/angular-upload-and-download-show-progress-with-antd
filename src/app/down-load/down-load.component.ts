import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-down-load',
  templateUrl: './down-load.component.html',
  styleUrls: ['./down-load.component.css']
})
export class DownLoadComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  downLoad() {
    // 下载 并显示已经下载的数量 无法显示总量
    const header = new HttpHeaders({
      Authorization: '666'
    });
    const req = new HttpRequest('GET', 'url', {
      headers: header,
      reportProgress: true,
      responseType: 'blob',
    });
    this.http.request(req).subscribe(res => {
      const event = (res as any);
      if (event.type === 3) {
        console.log(event);
      }
    });


    // 下载 没有进度
    this.http.get('url', {
      headers: {
        Authorization: '666'
      },
      reportProgress: true,
      responseType: 'blob',
    }).subscribe(res => {
      const objUrl = URL.createObjectURL(res);
      const tagA = document.createElement('a');
      tagA.download = new Date().getTime() + '.jpg';
      tagA.href = objUrl;
      tagA.click();
    });
  }

}
