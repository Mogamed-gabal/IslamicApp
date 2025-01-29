import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AzkarService } from '../../services/Aamaa.service';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-asmaa',
  imports:[CardModule,PaginatorModule,TableModule],
  templateUrl: './asmaa.component.html',
  styleUrls: ['./asmaa.component.scss']
})
export class AzkarComponent implements OnInit {
onPageChange($event: PaginatorState) {
throw new Error('Method not implemented.');
}
  names: any[] = [];
  slicArr:any[]=[]
  constructor(private azkarService: AzkarService) {}

  
  loadNames() {
  this.azkarService.getNames().subscribe({
    next:(res)=>{console.log(res.data),this.names=res.data,this.slicArr=this.names.slice(0,10),console.log(this.slicArr
    )}
  })
  }
  ngOnInit(): void {
    this.loadNames();
  }
}