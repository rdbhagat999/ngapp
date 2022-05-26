import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appDnd]',
})
export class DndDirective {
  @HostBinding('class.fileover') fileOver: boolean | undefined;
  @Output() fileDropped = new EventEmitter<any>();

  constructor() {}

  // Dragover listener
  @HostListener('dragover', ['$event'])
  onDragOver(evt: { preventDefault: () => void; stopPropagation: () => void }) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
    // console.log('dragover: fileOver');
    // console.log(this.fileOver);
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    // console.log('dragleave: fileOver');
    // console.log(this.fileOver);
  }

  // Drop listener
  @HostListener('drop', ['$event'])
  public ondrop(evt: {
    preventDefault: () => void;
    stopPropagation: () => void;
    dataTransfer: { files: any };
  }) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;

    // console.log('drop: fileOver');
    // console.log(this.fileOver);

    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
