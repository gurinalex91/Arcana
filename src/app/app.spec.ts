import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the intro CTA', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent?.trim()).toBe('Start card draw');
  });

  it('should show the draw action after starting the flow', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const startButton = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    startButton.click();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent?.trim()).toBe('Draw one card');
  });

  it('should show exactly one selected card after drawing', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const startButton = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    startButton.click();
    fixture.detectChanges();

    const drawButton = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    drawButton.click();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.card-preview').length).toBe(1);
    expect(compiled.querySelector('.card-preview__title')?.textContent?.trim()).toBeTruthy();
  });
});
