import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cta',
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './cta.html',
  styleUrl: './cta.scss'
})
export class Cta {
  teamList = [
    {
      id: "1",
      img: 'assets/img/hero/slider-1.png',
      name: 'Aarav Sharma',
      desig: 'Mathematics Instructor',
      tag: "1st"
    },
    {
      id: "2",
      img: 'assets/img/hero/slider-2.png',
      name: 'Priya Singh',
      desig: 'English Literature',
      tag: "2st"
    },
    {
      id: "3",
      img: 'assets/img/hero/slider-3.png',
      name: 'Manish Patel',
      desig: 'Biology Professor',
      tag: "3st"
    },
    {
      id: "4",
      img: 'assets/img/hero/slider-1.png',
      name: 'Kavya Iyer',
      desig: 'Chemistry',
      tag: "1st"
    },
    {
      id: "5",
      img: 'assets/img/hero/slider-1.png',
      name: 'Rohan Joshi',
      desig: 'Mathematics Instructor',
      tag: "1st"
    },
    {
      id: "6",
      img: 'assets/img/hero/slider-1.png',
      name: 'Ananya Das',
      desig: 'English Literature',
      tag: "2st"
    },
    {
      id: "7",
      img: 'assets/img/hero/slider-1.png',
      name: 'Siddharth Verma',
      desig: 'Biology Professor',
      tag: "3st"
    },
    {
      id: "8",
      img: 'assets/img/hero/slider-1.png',
      name: 'Ishita Mehra',
      desig: 'Chemistry',
      tag: "1st"
    },
    {
      id: "9",
      img: 'assets/img/hero/slider-1.png',
      name: 'Vikram Nair',
      desig: 'Mathematics Instructor',
      tag: "1st"
    },
    {
      id: "10",
      img: 'assets/img/hero/slider-1.png',
      name: 'Sneha Gupta',
      desig: 'English Literature',
      tag: "2st"
    },
    {
      id: "11",
      img: 'assets/img/hero/slider-3.png',
      name: 'Manish Patel',
      desig: 'Biology Professor',
      tag: "3st"
    },
    {
      id: "12",
      img: 'assets/img/hero/slider-1.png',
      name: 'Kavya Iyer',
      desig: 'Chemistry',
      tag: "1st"
    },
    {
      id: "13",
      img: 'assets/img/hero/slider-1.png',
      name: 'Rohan Joshi',
      desig: 'Mathematics Instructor',
      tag: "1st"
    },
    {
      id: "14",
      img: 'assets/img/hero/slider-1.png',
      name: 'Ananya Das',
      desig: 'English Literature',
      tag: "2st"
    },
    // ...add more as needed
  ];

  get teamChunks() {
    const chunkSize = 4;
    const chunks = [];
    for (let i = 0; i < this.teamList.length; i += chunkSize) {
      chunks.push(this.teamList.slice(i, i + chunkSize));
    }
    return chunks;
  }
}
