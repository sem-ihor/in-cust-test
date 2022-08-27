import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  readonly menuId: string = 'mainMenu';

  constructor(private menuCtrl: MenuController) {
  }

  ngOnInit() {
    this.menuCtrl.enable(true, this.menuId);
  }
}
