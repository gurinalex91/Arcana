import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardDrawComponent } from './components/card-draw/card-draw';
import { CardPreviewComponent } from './components/card-preview/card-preview';
import { IntroSectionComponent } from './components/intro-section/intro-section';

interface ArcanaCard {
  id: string;
  name: string;
  keywords: readonly string[];
  shortInterpretation: string;
}

type FlowState = 'intro' | 'ready' | 'drawn';

const ARCANA_CARDS: readonly ArcanaCard[] = [
  {
    id: 'the-fool',
    name: 'The Fool',
    keywords: ['beginning', 'openness', 'curiosity', 'possibility'],
    shortInterpretation:
      'The Fool may invite you to approach the moment with openness and curiosity. As a symbolic prompt, it can suggest noticing where a fresh perspective might help.',
  },
  {
    id: 'the-magician',
    name: 'The Magician',
    keywords: ['focus', 'skill', 'intention', 'resourcefulness'],
    shortInterpretation:
      'The Magician may invite you to notice the tools already available to you. As a reflective prompt, it can suggest bringing more focus to what is within reach.',
  },
  {
    id: 'the-high-priestess',
    name: 'The High Priestess',
    keywords: ['intuition', 'stillness', 'mystery', 'inner knowing'],
    shortInterpretation:
      'The High Priestess may invite a quieter kind of reflection. As a symbolic prompt, it can suggest making space for what is subtle, uncertain, or not yet fully clear.',
  },
  {
    id: 'the-empress',
    name: 'The Empress',
    keywords: ['care', 'growth', 'creativity', 'comfort'],
    shortInterpretation:
      'The Empress may invite you to reflect on what needs care and patience. As a symbol, it can suggest noticing where something is slowly taking shape.',
  },
  {
    id: 'the-hermit',
    name: 'The Hermit',
    keywords: ['pause', 'reflection', 'solitude', 'guidance'],
    shortInterpretation:
      'The Hermit may invite a pause before moving forward. As a reflective prompt, it can suggest looking inward and giving yourself room to think clearly.',
  },
];

@Component({
  selector: 'arc-root',
  standalone: true,
  imports: [RouterOutlet, IntroSectionComponent, CardDrawComponent, CardPreviewComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly flowState = signal<FlowState>('intro');
  protected readonly selectedCard = signal<ArcanaCard | null>(null);

  protected startDraw(): void {
    this.selectedCard.set(null);
    this.flowState.set('ready');
  }

  protected drawCard(): void {
    const card = ARCANA_CARDS[Math.floor(Math.random() * ARCANA_CARDS.length)];

    this.selectedCard.set(card);
    this.flowState.set('drawn');
  }
}
