import {
    Component,
    ChangeDetectionStrategy,
    ViewChild,
    TemplateRef
  } from '@angular/core';
  import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
  } from 'date-fns';
  import { Subject } from 'rxjs';
  import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
  import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent
  } from 'angular-calendar';
  import {
      MyEvent,
      MyCalendarEventTimesChangedEvent
} from './dashboard.module';
  const colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };
  @Component({
    selector: 'app-layout',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./dashboard.component.scss'],
    templateUrl: './dashboard.component.html'
  })
  export class DashboardComponent {
    @ViewChild('modalContent') modalContent: TemplateRef<any>;
    view: string = 'month';
    viewDate: Date = new Date();
    modalData: {
      action: string;
      event: MyEvent;
    };
    actions: CalendarEventAction[] = [
      {
        label: '<i class="fa fa-fw fa-pencil"></i>',
        onClick: ({ event }: { event: MyEvent }): void => {
          this.handleEvent('Edited', event);
        }
      },
      {
        label: '<i class="fa fa-fw fa-times"></i>',
        onClick: ({ event }: { event: MyEvent }): void => {
          this.events = this.events.filter(iEvent => iEvent !== event);
          this.handleEvent('Deleted', event);
        }
      }
    ];
    refresh: Subject<any> = new Subject();
    events: MyEvent[] = [
      {
        start: subDays(startOfDay(new Date()), 1),
        end: addDays(new Date(), 1),
        title: 'A 3 day event',
        color: colors.red,
        actions: this.actions,
        description: 'N/A',
        location: '4000 Central Florida Blvd, Orlando, FL 32816',
        category: 'none for now',
        phone: '123-456-7890',
        type: 'none',
        email: 'fake@fake.com'
      },
      {
        start: startOfDay(new Date()),
        title: 'An event with no end date',
        color: colors.yellow,
        actions: this.actions,
        description: 'N/A',
        location: '4000 Central Florida Blvd, Orlando, FL 32816',
        category: 'none for now',
        phone: '123-456-7890',
        type: 'none',
        email: 'fake@fake.com'
      },
      {
        start: subDays(endOfMonth(new Date()), 3),
        end: addDays(endOfMonth(new Date()), 3),
        title: 'A long event that spans 2 months',
        color: colors.blue,
        description: 'N/A',
        location: '4000 Central Florida Blvd, Orlando, FL 32816',
        category: 'none for now',
        phone: '123-456-7890',
        type: 'none',
        email: 'fake@fake.com'
      },
      {
        start: addHours(startOfDay(new Date()), 2),
        end: new Date(),
        title: 'A draggable and resizable event',
        color: colors.yellow,
        actions: this.actions,
        resizable: {
          beforeStart: true,
          afterEnd: true
        },
        draggable: true,
        description: 'N/A',
        location: '4000 Central Florida Blvd, Orlando, FL 32816',
        category: 'none for now',
        phone: '123-456-7890',
        type: 'none',
        email: 'fake@fake.com'
      }
    ];
    activeDayIsOpen: boolean = true;
    constructor(private modal: NgbModal) {}
    dayClicked({ date, events }: { date: Date; events: MyEvent[] }): void {
      if (isSameMonth(date, this.viewDate)) {
        if (
          (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0
        ) {
          this.activeDayIsOpen = false;
        } else {
          this.activeDayIsOpen = true;
          this.viewDate = date;
        }
      }
    }
    eventTimesChanged({
      event,
      newStart,
      newEnd
    }: MyCalendarEventTimesChangedEvent): void {
      event.start = newStart;
      event.end = newEnd;
      this.handleEvent('Dropped or resized', event);
      this.refresh.next();
    }
    handleEvent(action: string, event: MyEvent): void {
      this.modalData = { event, action };
      this.modal.open(this.modalContent, { size: 'lg' });
    }
    addEvent(): void {
      this.events.push({
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        },
        description: 'N/A',
        location: '4000 Central Florida Blvd, Orlando, FL 32816',
        category: 'none for now',
        phone: '123-456-7890',
        type: 'none',
        email: 'fake@fake.com'
      });
      this.refresh.next();
    }
  }
