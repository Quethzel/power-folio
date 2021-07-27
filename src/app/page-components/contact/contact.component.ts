import { Component, OnInit } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faCopy = faCopy;
  faStackOverflow = faStackOverflow;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;

  ngOnInit(): void { }

}
