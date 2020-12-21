import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardListDropdownComponent } from './board-list-dropdown.component';

describe('BoardListDropdownComponent', () => {
  let component: BoardListDropdownComponent;
  let fixture: ComponentFixture<BoardListDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardListDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardListDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
