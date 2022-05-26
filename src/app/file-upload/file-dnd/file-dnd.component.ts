import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-dnd',
  templateUrl: './file-dnd.component.html',
  styleUrls: ['./file-dnd.component.scss'],
})
export class FileDndComponent implements OnInit {
  @Output() fileEvent: any = new EventEmitter();
  files: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  /**
   * on file drop handler
   */
  onFileDropped(event: any) {
    this.prepareFilesList(event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(event: any) {
    const files = event.target.files;
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
    this.emitfiles();
  }

  emitfiles() {
    this.fileEvent.emit({ files: this.files });
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    // this.uploadFilesSimulator(0);
    this.emitfiles();
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: number, decimals: number) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
