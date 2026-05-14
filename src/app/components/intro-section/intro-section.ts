import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'arc-intro-section',
  standalone: true,
  templateUrl: './intro-section.html',
  styleUrl: './intro-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroSectionComponent {
  readonly showAction = input(false);
  readonly drawStarted = output<void>();
}
