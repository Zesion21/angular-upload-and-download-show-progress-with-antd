import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-up-load',
  templateUrl: './up-load.component.html',
  styleUrls: ['./up-load.component.css']
})
export class UpLoadComponent implements OnInit {

  constructor(private http: HttpClient) { }
  size = 0;

  ngOnInit() {
  }
  toUp() {
    document.getElementById('file').click();
  }

  upLoad() {
    const form = new FormData(document.querySelector('form'));
    const fill = document.getElementById('file');
    form.append('file', (fill as any).files[0]);
    form.append('entryId', '559');
    form.append('datumId', '405176');
    form.append('name', '听证会');
    form.append('imageFormat', 'jpg');
    form.append('tableName', 'S_DATUM_LYGH_ENTRY');

    // 上传 显示 进度
    const req = new HttpRequest('POST', 'url', form, {
      headers: new HttpHeaders({
        Authorization: '6666'
      }),
      reportProgress: true,
    });
    this.http.request(req).subscribe(res => {
      const event = (res as any);
      if (event.type === 1) {
        this.size = Math.round(100 * event.loaded / event.total);
      }
      if (event.type === 4) {
        console.log(event);
      }
    });
  }
}
