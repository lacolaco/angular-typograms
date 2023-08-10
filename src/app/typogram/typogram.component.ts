import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  effect,
  inject,
  signal,
} from '@angular/core';
import create from 'typograms/src/typograms';

@Component({
  selector: 'app-typogram',
  standalone: true,
  template: '',
  styles: [':host { display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypogramComponent {
  readonly #source = signal('');

  @Input() set source(value: string) {
    this.#source.set(value);
  }

  readonly elementRef =
    inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  readonly renderOnSourceChange = effect(() => {
    const svg = create(this.#source());
    this.elementRef.innerHTML = '';
    this.elementRef.appendChild(svg);
  });
}
