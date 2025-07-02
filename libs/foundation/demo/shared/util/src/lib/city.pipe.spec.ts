import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { CityPipe } from './city.pipe';

@Component({
  template: `<h1 class="title">{{ cityName | city: pipeMode }}</h1>`,
})
class TestComponent {
  cityName = '';
  pipeMode: 'short' | 'long' = 'short';
}
describe('CityPipe', () => {
  let fixture: ComponentFixture<TestComponent>;
  let divElement: HTMLElement;
  let component: TestComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, CityPipe],
      providers: [],
      declarations: [TestComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    divElement = fixture.nativeElement.querySelector('h1');
  });

  it('should return the short name for city Hamburg', () => {
    component.cityName = 'Hamburg';
    component.pipeMode = 'short';
    fixture.detectChanges();

    expect(divElement.innerHTML).toEqual('HAM');
  });
  it('should return the long name for city Hamburg', () => {
    component.cityName = 'Hamburg';
    component.pipeMode = 'long';

    fixture.detectChanges();
    expect(divElement.innerHTML).toEqual('Airport Hamburg Fulsbüttel Helmut Schmidt');
  });
  it('should return the same name given an unknown city', () => {
    component.cityName = 'Brussels';
    component.pipeMode = 'long';

    fixture.detectChanges();
    expect(divElement.innerHTML).toEqual('Brussels');
  });
});
