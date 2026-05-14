import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'arc-card-draw',
  standalone: true,
  templateUrl: './card-draw.html',
  styleUrl: './card-draw.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDrawComponent {
  readonly cardDrawn = output<void>();
}
