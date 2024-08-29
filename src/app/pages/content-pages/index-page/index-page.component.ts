import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from 'app/shared/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { window } from 'rxjs/operators';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  isNavbarCollapsed = true;
  loginFormSubmitted = false;
  isLoginFailed = false;
  returnUrl: any;

  images = ['../../../../assets/img/gallery/Davivienda-slider1.png',
  '../../../../assets/img/gallery/Davivienda-slider2.png'];
  responsiveOptions: any[] | undefined;


	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(true)
  });

  constructor(
    private modalService: NgbModal,
    private router: Router, 
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) { 
    console.log(this.images);
  }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '1220px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '1100px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
  toggleNavbarCollapsing() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  get lf() {
    return this.loginForm.controls;
  }

  // On submit button click
  onSubmit() {
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log('Login');
    this.spinner.show(undefined,
      {
        type: 'ball-beat',
        size: 'medium',
        bdColor: 'rgb(46, 106, 169)',
        color: '#fff',
        fullScreen: true
      });
      setTimeout(() => {
        this.modalService.dismissAll();
          this.spinner.hide();
          // this.router.navigate(["../../../page"]);
      }, 1500);
          
  }

  openLogin(content) {
    this.modalService.open(content, {
      size: "sm",
      centered: true,
      scrollable: true,
      backdrop: 'static',
      keyboard: false
    });
  }

  simulaCredito(content) {
    this.modalService.open(content, {
      size: "lg",
      centered: true,
      scrollable: true,
      backdrop: 'static',
      keyboard: false
    });
  }

}
