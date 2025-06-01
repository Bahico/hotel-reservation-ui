import {Component, inject, input, OnInit, signal} from "@angular/core";
import {ICON_LIST} from "@shared/icon/icon-list";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  standalone: true,
  template: `
    <span style="display: flex; align-items: center;" [innerHTML]="iconHtml()"></span>
  `,
  selector: 'icon-list'
})
export class IconComponent implements OnInit {
  private readonly sanitizer = inject(DomSanitizer);

  icon = input.required<string>();
  iconHtml = signal<SafeHtml>(undefined);

  ngOnInit() {
    this.iconHtml.set(this.sanitizeHtml(this.iconElement));
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  get iconElement() {
    return ICON_LIST.find(item => item.name === this.icon())?.icon;
  }
}
