import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-worker',
  templateUrl: './web-worker.component.html',
  styleUrls: ['./web-worker.component.scss'],
})
export class WebWorkerComponent implements OnInit {
  n = 999999;
  workerResult = 0;
  mainThreadResult = 0;

  constructor() {}

  ngOnInit(): void {}

  runWorker() {
    if (typeof Worker !== 'undefined') {
      const startTime = new Date().getTime();

      const numListWorker = new Worker(
        new URL('../num-list.worker', import.meta.url),
        {
          type: 'module',
        }
      );
      numListWorker.onmessage = ({ data }) => {
        // console.log(new Date().getTime() - startTime);
        this.workerResult = new Date().getTime() - startTime;
        console.log('From numListWorker');
      };
      numListWorker.postMessage({ n: this.n });
    } else {
      console.log('Web workers are not supported in this environment.');
    }
  }

  runThread() {
    const startTime = new Date().getTime();

    const numList = [];

    for (let i = 1; i < this.n; i++) {
      numList.push(i);
    }

    // console.log(new Date().getTime() - startTime);
    this.mainThreadResult = new Date().getTime() - startTime;
    console.log('From Javascript Thread');
    // console.log('From Javascript Thread', arePrimeList);
  }
}
