import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCoordinatorComponent } from './board-coordinator.component';

describe('BoardCoordinatorComponent', () => {
  let component: BoardCoordinatorComponent;
  let fixture: ComponentFixture<BoardCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardCoordinatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
