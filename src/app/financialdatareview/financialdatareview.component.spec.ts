import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FinancialDataReviewComponent } from './financialdatareview.component';


describe('FinancialDataReviewComponent', () => {
  let component: FinancialDataReviewComponent;
  let fixture: ComponentFixture<FinancialDataReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialDataReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialDataReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
