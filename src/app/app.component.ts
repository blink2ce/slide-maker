import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html'
})
export class AppComponent  {
  @Input()
  markdowncontent = '';
}
