import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  template: `
    <p>
      main works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

}
