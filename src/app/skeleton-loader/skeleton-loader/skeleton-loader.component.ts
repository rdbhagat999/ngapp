import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { MockDataService } from 'src/app/services/mock-data-service.service';

const employeeData = [
  {
    id: 1,
    name: 'Jenna Feest',
    jobtype: 'Forward Implementation Officer',
    email: 'Nelda30@yahoo.com',
    address: '359 Bradtke Extension',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/michaelcomiskey/128.jpg',
  },
  {
    id: 2,
    name: 'Edward Rodriguez',
    jobtype: 'Internal Marketing Architect',
    email: 'Arch47@hotmail.com',
    address: '0271 Craig Highway',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/coreyginnivan/128.jpg',
  },
  {
    id: 3,
    name: 'Erica Hansen',
    jobtype: 'Senior Applications Coordinator',
    email: 'Godfrey.Stamm85@yahoo.com',
    address: '230 Maida Mission',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/simobenso/128.jpg',
  },
  {
    id: 4,
    name: 'Francisco Doyle',
    jobtype: 'District Mobility Assistant',
    email: 'Bernard_Keebler@yahoo.com',
    address: '704 Tatum Drive',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/madebyvadim/128.jpg',
  },
  {
    id: 5,
    name: 'Salvatore Nienow',
    jobtype: 'Global Marketing Executive',
    email: 'Fernando68@hotmail.com',
    address: '6816 Chelsey Fields',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/mslarkina/128.jpg',
  },
  {
    id: 6,
    name: 'Juan Nienow',
    jobtype: 'Product Markets Agent',
    email: 'Misael88@hotmail.com',
    address: '88574 Armando Springs',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/carlosm/128.jpg',
  },
  {
    id: 7,
    name: 'Bradley Corkery',
    jobtype: 'Future Intranet Representative',
    email: 'Willie.Cormier@gmail.com',
    address: '3850 Krystal River',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/dansowter/128.jpg',
  },
  {
    id: 8,
    name: 'Stacy Reichert',
    jobtype: 'Customer Web Administrator',
    email: 'Marina_Russel18@hotmail.com',
    address: '012 Schmeler Square',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/hota_v/128.jpg',
  },
  {
    id: 9,
    name: 'Philip Kihn DVM',
    jobtype: 'Product Assurance Liaison',
    email: 'Isaac.Hoppe19@yahoo.com',
    address: '9071 Fadel Turnpike',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/cemshid/128.jpg',
  },
  {
    id: 10,
    name: 'Karen Lindgren',
    jobtype: 'Legacy Usability Associate',
    email: 'Ernestine10@hotmail.com',
    address: '13758 Edgardo Pike',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/dss49/128.jpg',
  },
  {
    id: 11,
    name: 'Pablo Beahan',
    jobtype: 'Dynamic Applications Assistant',
    email: 'Ivy_Jenkins76@gmail.com',
    address: '54443 Crona View',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/angelceballos/128.jpg',
  },
  {
    id: 12,
    name: 'Delia Kertzmann',
    jobtype: 'Global Branding Designer',
    email: 'Muriel_Hayes@gmail.com',
    address: '7691 Stanton Rest',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/mattsapii/128.jpg',
  },
  {
    id: 13,
    name: 'Dr. Dallas Leffler',
    jobtype: 'Investor Quality Agent',
    email: 'Joanny.Beatty@hotmail.com',
    address: '92403 Stehr Key',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/jagan123/128.jpg',
  },
  {
    id: 14,
    name: 'Brian Heathcote',
    jobtype: 'Lead Applications Consultant',
    email: 'Melyna41@yahoo.com',
    address: '9580 Gianni Brooks',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/rtgibbons/128.jpg',
  },
  {
    id: 15,
    name: 'Cesar Mills',
    jobtype: 'Principal Markets Technician',
    email: 'Noble_Beatty54@yahoo.com',
    address: '469 Pagac Shoals',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/amandabuzard/128.jpg',
  },
  {
    id: 16,
    name: 'Naomi Macejkovic',
    jobtype: 'Legacy Metrics Agent',
    email: 'Tiana_Bednar23@hotmail.com',
    address: '1849 Trantow Center',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/sethlouey/128.jpg',
  },
  {
    id: 17,
    name: 'Amanda Huel',
    jobtype: 'Dynamic Markets Agent',
    email: 'Johanna_Stehr57@hotmail.com',
    address: '5676 Ivah Causeway',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/kaspernordkvist/128.jpg',
  },
  {
    id: 18,
    name: 'Elmer Lowe DVM',
    jobtype: 'Human Markets Associate',
    email: 'Vance_Pfeffer4@gmail.com',
    address: '8466 Tromp View',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ryankirkman/128.jpg',
  },
  {
    id: 19,
    name: 'Allan Douglas',
    jobtype: 'District Metrics Orchestrator',
    email: 'Ima_White@yahoo.com',
    address: '6165 Vincent Trafficway',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/moynihan/128.jpg',
  },
  {
    id: 20,
    name: 'Noel Torp',
    jobtype: 'Principal Web Administrator',
    email: 'Sophie.Hauck54@gmail.com',
    address: '6229 Bessie Extension',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/jimmuirhead/128.jpg',
  },
  {
    id: 21,
    name: 'Adrienne Stoltenberg',
    jobtype: 'District Factors Liaison',
    email: 'Dock99@gmail.com',
    address: '829 Cale Spur',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/increase/128.jpg',
  },
  {
    id: 22,
    name: 'Marguerite Grant',
    jobtype: 'Lead Program Officer',
    email: 'Lonzo_Bergnaum38@yahoo.com',
    address: '515 Treva Parkways',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/mutlu82/128.jpg',
  },
  {
    id: 23,
    name: 'Irving Hauck',
    jobtype: 'Lead Web Director',
    email: 'Jeanie_Leffler@yahoo.com',
    address: '67318 Hane Mount',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/joeymurdah/128.jpg',
  },
  {
    id: 24,
    name: 'Bobbie Renner',
    jobtype: 'Senior Integration Officer',
    email: 'Terry.Rosenbaum44@yahoo.com',
    address: '6613 Beier Manor',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/aluisio_azevedo/128.jpg',
  },
  {
    id: 25,
    name: 'Miguel Barton',
    jobtype: 'Legacy Implementation Consultant',
    email: 'Jeromy_Schmeler80@yahoo.com',
    address: '6217 Zelma Skyway',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/digitalmaverick/128.jpg',
  },
  {
    id: 26,
    name: 'Bennie Rutherford',
    jobtype: 'Dynamic Identity Architect',
    email: 'Ashlynn_Wiegand29@hotmail.com',
    address: '326 Koepp Glen',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/donjain/128.jpg',
  },
  {
    id: 27,
    name: 'Anne Lesch',
    jobtype: 'Dynamic Solutions Representative',
    email: 'Muriel59@hotmail.com',
    address: '28485 Lynch Cape',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/tgormtx/128.jpg',
  },
  {
    id: 28,
    name: 'Israel Lind II',
    jobtype: 'Internal Division Strategist',
    email: 'Adrianna.Lehner@yahoo.com',
    address: '746 Jacobson Underpass',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/imsoper/128.jpg',
  },
  {
    id: 29,
    name: 'Al Auer',
    jobtype: 'Regional Security Facilitator',
    email: 'Concepcion.Quigley@gmail.com',
    address: '91749 Palma Tunnel',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/BroumiYoussef/128.jpg',
  },
  {
    id: 30,
    name: 'Jerry Pagac',
    jobtype: 'Investor Creative Liaison',
    email: 'Parker_Reichel37@gmail.com',
    address: '9025 Little Walk',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/kurtinc/128.jpg',
  },
  {
    id: 31,
    name: 'Mandy Pouros',
    jobtype: 'Internal Integration Manager',
    email: 'Janiya54@hotmail.com',
    address: '6554 Crist Dam',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/thinkleft/128.jpg',
  },
  {
    id: 32,
    name: 'Danielle Kertzmann',
    jobtype: 'District Factors Facilitator',
    email: 'Anastasia.Boyer@yahoo.com',
    address: '111 Abby Mills',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ademilter/128.jpg',
  },
  {
    id: 33,
    name: 'Pedro Heidenreich Jr.',
    jobtype: 'Dynamic Functionality Assistant',
    email: 'Kody.Terry@yahoo.com',
    address: '8940 Cary Field',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/embrcecreations/128.jpg',
  },
  {
    id: 34,
    name: 'Estelle Daugherty',
    jobtype: 'Corporate Configuration Manager',
    email: 'Annalise.Kuphal84@hotmail.com',
    address: '609 Tobin Hollow',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/joshuasortino/128.jpg',
  },
  {
    id: 35,
    name: 'Terrance Langosh',
    jobtype: 'Regional Marketing Administrator',
    email: 'Ardella.Thiel@hotmail.com',
    address: '7552 Leannon Estates',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/amywebbb/128.jpg',
  },
  {
    id: 36,
    name: 'Timmy Mohr',
    jobtype: 'Dynamic Quality Technician',
    email: 'Howell_Greenfelder@yahoo.com',
    address: '76045 Ayla Track',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/karlkanall/128.jpg',
  },
  {
    id: 37,
    name: 'Maryann Franecki',
    jobtype: 'Global Integration Planner',
    email: 'Kenton_Romaguera@gmail.com',
    address: '1632 Mckayla Union',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/nvkznemo/128.jpg',
  },
  {
    id: 38,
    name: 'Dr. Gene Strosin',
    jobtype: 'Dynamic Quality Director',
    email: 'Ron20@gmail.com',
    address: '7705 Prudence Valley',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/meln1ks/128.jpg',
  },
  {
    id: 39,
    name: 'Kari Mills',
    jobtype: 'Investor Data Strategist',
    email: 'Madilyn.Towne36@yahoo.com',
    address: '012 Cole Greens',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/felipecsl/128.jpg',
  },
  {
    id: 40,
    name: 'Marion King',
    jobtype: 'Chief Optimization Liaison',
    email: 'Martina.Prohaska@gmail.com',
    address: '455 Merle Light',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/arthurholcombe1/128.jpg',
  },
  {
    id: 41,
    name: 'Caleb Schroeder',
    jobtype: 'International Web Consultant',
    email: 'Domingo_Ziemann66@yahoo.com',
    address: '121 Rafael Fort',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/lingeswaran/128.jpg',
  },
  {
    id: 42,
    name: 'Ervin Ferry',
    jobtype: 'Internal Accountability Executive',
    email: 'Judge_Cruickshank94@yahoo.com',
    address: '24600 Hudson Club',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/xamorep/128.jpg',
  },
  {
    id: 43,
    name: "Ben O'Hara",
    jobtype: 'Central Creative Producer',
    email: 'Eliza_Funk79@yahoo.com',
    address: '1902 Mauricio Square',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ajaxy_ru/128.jpg',
  },
  {
    id: 44,
    name: 'Kenneth Fisher',
    jobtype: 'Forward Response Executive',
    email: 'Joana_Moore27@gmail.com',
    address: '56962 Odessa Bridge',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/arishi_/128.jpg',
  },
  {
    id: 45,
    name: 'Catherine Greenfelder',
    jobtype: 'Legacy Optimization Representative',
    email: 'Cleveland95@hotmail.com',
    address: '1135 Edwin Curve',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/osmanince/128.jpg',
  },
  {
    id: 46,
    name: 'Marlon Green',
    jobtype: 'Internal Infrastructure Developer',
    email: 'Amely_Walter93@yahoo.com',
    address: '8352 Hagenes Harbors',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/buzzusborne/128.jpg',
  },
  {
    id: 47,
    name: 'Thomas Price',
    jobtype: 'Internal Assurance Architect',
    email: 'Justina45@gmail.com',
    address: '31893 Vivien Neck',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/HenryHoffman/128.jpg',
  },
  {
    id: 48,
    name: 'Kristen Harris',
    jobtype: 'Senior Optimization Engineer',
    email: 'Robin14@hotmail.com',
    address: '72379 Lillie Walk',
    imageUrl:
      'https://s3.amazonaws.com/uifaces/faces/twitter/codysanfilippo/128.jpg',
  },
  {
    id: 49,
    name: 'Greg Walter',
    jobtype: 'Central Quality Designer',
    email: 'Elta.Hagenes49@gmail.com',
    address: '5533 Jazmyne Unions',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/Elt_n/128.jpg',
  },
  {
    id: 50,
    name: 'Myra Bins',
    jobtype: 'Customer Mobility Technician',
    email: 'Elena_Kassulke26@yahoo.com',
    address: '88635 Gorczany Landing',
    imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/sangdth/128.jpg',
  },
];

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
})
export class SkeletonLoaderComponent implements OnInit {
  dataList: Employee[] = [];
  isCompDestroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(private mockService: MockDataService) {}

  ngOnInit(): void {}

  loadItems() {
    setTimeout(() => {
      this.dataList = [...employeeData];
    }, 1800);
  }

  getEmployeesList() {
    this.mockService
      .getList()
      .pipe(takeUntil(this.isCompDestroyed$))
      .subscribe((data: Employee[]) => {
        console.log(data);
        this.dataList = data;
      });
  }

  // Generate Fake Object Array
  generateFake(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }

  trackByIndex(index: number): number {
    return index;
  }
  trackById(index: number, item: Employee): number {
    return item?.id;
  }

  ngOnDestroy() {
    this.isCompDestroyed$.next(true);
    this.isCompDestroyed$.complete();
  }
}
