import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-header',
  imports: [],
  templateUrl: './breadcrumb-header.html',
  styleUrl: './breadcrumb-header.scss'
})
export class BreadcrumbHeader {
  @Input()
  title!: string;
}
