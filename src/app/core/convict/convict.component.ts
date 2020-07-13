import {Component, OnInit} from '@angular/core';
import {Deal} from '../../model/deal';
import {AnimationStateService} from '../../services/animation-state.service';
import {Subscription} from 'rxjs';
import {CouponUtilityService} from '../../services/coupon-utility.service';

@Component({
  selector: 'app-convict',
  templateUrl: './convict.component.html',
  styleUrls: ['./convict.component.scss']
})
export class ConvictComponent implements OnInit {
  deal: Deal;
  readonly param = '?geometry=520x300F';
  subscription: Subscription;

  constructor(private animationStateService: AnimationStateService,
              private couponUtility: CouponUtilityService) { }

  ngOnInit() {
    this.subscription = this.animationStateService.dealSource.subscribe(data => {
      this.deal = data;
    })
  }
  goToMerchant(){
      window.location.href=this.deal['url'];
  }
  get _couponUtility(): CouponUtilityService {
    return this.couponUtility;
  }
  closeConvict() {
    this.animationStateService.changeState({
      convictState: 'hidden',
      overlayState: 'hidden'
    })
  }
}
