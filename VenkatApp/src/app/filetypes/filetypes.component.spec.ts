import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiletypesComponent } from './filetypes.component';

describe('FiletypesComponent', () => {
  let component: FiletypesComponent;
  let fixture: ComponentFixture<FiletypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiletypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiletypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
