import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'arc-card-preview',
  standalone: true,
  templateUrl: './card-preview.html',
  styleUrl: './card-preview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPreviewComponent {
  readonly name = input.required<string>();
  readonly keywords = input.required<readonly string[]>();
  readonly shortInterpretation = input.required<string>();
}
