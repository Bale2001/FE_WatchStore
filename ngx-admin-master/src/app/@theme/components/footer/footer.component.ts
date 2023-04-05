import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Sản phẩm của Lê Ba ♥ Lớp TT1D19 
    </span>
    <div class="socials">
      <a href="" target="_blank" class="ion ion-social-github"></a>&nbsp;
      <a href="" target="_blank" class="ion ion-social-facebook"></a>&nbsp;
      <a href="" target="_blank" class="ion ion-social-youtube"></a>&nbsp;
    </div>
  `,
})
export class FooterComponent {
}
