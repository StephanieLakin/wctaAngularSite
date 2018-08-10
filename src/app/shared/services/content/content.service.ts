import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {
    pages: Object= {
        'home': {title: 'Home', subtitle:'Welcome Home!', content: 'Some home content.', image: 'assets/Hot.JPG'},
        'about': {title: 'About', subtitle:'About Us!', content: 'Some content about us.', image: 'assets/kmr_20.JPG'},
        'contact': {title: 'Contact', subtitle:'Contact Us!', content: 'Some content about contacting.', image: 'assets/SelfPortrait2018_19.JPG'}

    };
    constructor() {}
}