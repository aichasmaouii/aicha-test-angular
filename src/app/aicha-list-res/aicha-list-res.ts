import { Component, OnInit } from '@angular/core';
import { Residence } from '../models/residence';
import { AichaResService } from '../services/aicha-res-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aicha-list-res',
  standalone: false,
  templateUrl: './aicha-list-res.html',
  styleUrl: './aicha-list-res.css',
})
export class AichaListRes implements OnInit {
listresidencedb: Residence[] = [];

  constructor(
    private resservice: AichaResService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resservice.showallres().subscribe((data: any) => {
      this.listresidencedb = data;
    });
  }

  goToDetails(id: number): void {
    this.router.navigate(['/details', id]);
  }

  delres(id: number): void {
    this.resservice.delres(id).subscribe(() => {
      this.listresidencedb = this.listresidencedb.filter(r => r.id !== id);
      console.log('Residence deleted');
    });
  }}