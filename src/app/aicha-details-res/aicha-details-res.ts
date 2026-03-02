import { Component, OnInit } from '@angular/core';
import { Residence } from '../models/residence';
import { ActivatedRoute } from '@angular/router';
import { AichaResService } from '../services/aicha-res-service';

@Component({
  selector: 'app-aicha-details-res',
  standalone: false,
  templateUrl: './aicha-details-res.html',
  styleUrl: './aicha-details-res.css',
})

export class AichaDetailsRes implements OnInit {
   residence!: Residence;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private resservice: AichaResService
  ) {}

  ngOnInit(): void {
    // Get ID from URL
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch residence by ID
    this.resservice.showres(this.id).subscribe((data: Residence) => {
      this.residence = data;
    });}

}


