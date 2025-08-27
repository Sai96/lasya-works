import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    { src: 'assets/art1.jpg', alt: 'Artwork 1' },
    { src: 'assets/art2.jpg', alt: 'Artwork 2' },
    { src: 'assets/art3.jpg', alt: 'Artwork 3' },
    { src: 'assets/art4.jpg', alt: 'Artwork 4' },
    { src: 'assets/art5.jpg', alt: 'Artwork 5' },
    { src: 'assets/art6.jpg', alt: 'Artwork 6' },
    { src: 'assets/art7.jpg', alt: 'Artwork 7' },
    { src: 'assets/art8.jpg', alt: 'Artwork 8' },
    { src: 'assets/art9.jpg', alt: 'Artwork 9' },
    { src: 'assets/art10.jpg', alt: 'Artwork 10' },
    { src: 'assets/art11.jpg', alt: 'Artwork 11' }
  ];

  modalOpen = false;
  modalImgSrc = '';
  modalImgAlt = '';

  openModal(src: string, alt: string) {
    this.modalImgSrc = src;
    this.modalImgAlt = alt;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.modalImgSrc = '';
    this.modalImgAlt = '';
  }
}