import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NgbCarousel, NgbSlide, NgxMarqueeComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  images = [
    { id: 2, img: 'assets/img/hero/slider-1.png' },
    { id: 3, img: 'assets/img/hero/slider-2.png' },
    { id: 4, img: 'assets/img/hero/slider-3.png' },
  ];

  news = [
    { idx: 1, newsName: 'Latest Campus Updates & Announcements' },
    { idx: 2, newsName: 'Breaking News from BCS Govt. P.G. College' },
    { idx: 3, newsName: 'Upcoming Events & Important Notices' },
    { idx: 4, newsName: 'Student Achievements & Honors' },
    { idx: 5, newsName: 'Research Highlights & Publications' },
    { idx: 6, newsName: 'Admission Alerts & Deadlines' },
    { idx: 7, newsName: 'Workshops, Seminars & Guest Lectures' },
    { idx: 8, newsName: 'Scholarship & Fellowship Announcement' },
    { idx: 9, newsName: 'Sports & Cultural Festival News' },
    { idx: 10, newsName: 'New Courses & Academic Programs' },
  ];
}
